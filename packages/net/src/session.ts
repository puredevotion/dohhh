import {
  EventLog,
  packHash,
  PROTOCOL_VERSION,
  reduce,
  roomIdFromJoinCode,
  type ContentPack,
  type GameId,
  type GameState,
  type Identity,
  type SignedEvent,
  type VersionVector,
} from '@dohhh/engine';

import type { ConnectionStatus, Transport } from './transport.js';
import { createTransport } from './transport.js';

/**
 * The sync protocol, in four messages.
 *
 * There is no authority, so the protocol is anti-entropy rather than
 * replication: peers tell each other what they have, ask for what they lack,
 * and gossip what is new. A message that arrives late, twice or out of order
 * costs nothing, because the log sorts and the reducer is pure.
 */
export type SyncMessage =
  /**
   * "Here is everything I have." Sent on join and on a timer. Also doubles as
   * the version handshake: protocol and packHash ride along so a stale peer
   * is a readable refusal at the door (R-11) rather than a desync mid-game -
   * this is the only message a newcomer sees before deciding whether to stay.
   */
  | {
      readonly t: 'have';
      readonly gameId: GameId;
      readonly vector: VersionVector;
      readonly digest: string;
      readonly protocol: number;
      readonly packHash: string;
    }
  /** "Send me what I am missing." */
  | { readonly t: 'want'; readonly gameId: GameId; readonly vector: VersionVector }
  /** New or backfilled events. */
  | { readonly t: 'events'; readonly gameId: GameId; readonly events: readonly SignedEvent[] };

export interface SessionSnapshot {
  readonly state: GameState | null;
  readonly status: ConnectionStatus;
  readonly peerCount: number;
  /** True when a peer reported a log digest we cannot reconcile. */
  readonly diverged: boolean;
  readonly logSize: number;
}

export type SessionListener = (snapshot: SessionSnapshot) => void;

export interface SessionOptions {
  readonly identity: Identity;
  readonly pack: ContentPack;
  readonly gameId: GameId;
  readonly joinCode: string;
  /** Existing events, e.g. restored from local storage or created by the host. */
  readonly seed?: readonly SignedEvent[];
  /** Milliseconds between unsolicited "have" broadcasts. */
  readonly gossipIntervalMs?: number;
  /** Swappable so tests can run without a network. */
  readonly makeTransport?: typeof createTransport;
}

/** Batch size for backfill, so one peer joining late cannot blow a datachannel. */
const BACKFILL_CHUNK = 40;

/**
 * One game, one mesh, one log.
 *
 * The session owns nothing about presentation and makes no rule decisions: it
 * moves events between peers and hands the reduced state to a listener. Every
 * rule lives in the engine, which is why the same class serves the PWA and the
 * React Native shell.
 */
export class GameSession {
  readonly log: EventLog;
  /**
   * Null only for the instant during construction before the factory returns.
   * The transport reports its status synchronously as it connects, so a handler
   * can fire before this field is assigned - which it does, on every start.
   */
  private transport: Transport | null = null;
  private readonly listeners = new Set<SessionListener>();
  private readonly pack: ContentPack;
  private readonly packHash: string;
  private readonly identity: Identity;
  private status: ConnectionStatus = 'connecting';
  private diverged = false;
  private timer: ReturnType<typeof setInterval> | null = null;
  private cachedState: GameState | null = null;
  private cachedAt = -1;

  constructor(options: SessionOptions) {
    this.identity = options.identity;
    this.pack = options.pack;
    this.packHash = packHash(options.pack);
    this.log = new EventLog(options.gameId, options.seed ?? []);

    const make = options.makeTransport ?? createTransport;
    this.transport = make({
      roomId: roomIdFromJoinCode(options.joinCode),
      // The join code is already a shared secret between the players, so using
      // it as the channel password is free confidentiality.
      password: options.joinCode,
      handlers: {
        onMessage: (payload) => this.receive(decodeMessage(payload)),
        onPeerJoin: (peerId) => {
          // Introduce ourselves immediately: the newcomer needs the backlog and
          // we may need theirs.
          this.post(this.have(), peerId);
          this.emit();
        },
        onPeerLeave: () => this.emit(),
        onStatus: (status) => {
          this.status = status;
          this.emit();
        },
      },
    });

    const interval = options.gossipIntervalMs ?? 5_000;
    if (interval > 0) {
      this.timer = setInterval(() => this.post(this.have()), interval);
    }
  }

  subscribe(listener: SessionListener): () => void {
    this.listeners.add(listener);
    listener(this.snapshot());
    return () => this.listeners.delete(listener);
  }

  get state(): GameState | null {
    if (this.cachedAt !== this.log.size) {
      this.cachedState = reduce(this.log.events, { pack: this.pack });
      this.cachedAt = this.log.size;
    }
    return this.cachedState;
  }

  snapshot(): SessionSnapshot {
    return {
      state: this.state,
      status: this.status,
      peerCount: this.transport?.peerIds().length ?? 0,
      diverged: this.diverged,
      logSize: this.log.size,
    };
  }

  /**
   * Apply a locally produced event and tell everyone. Returns false when the
   * log itself refuses it, which means a bug on this device rather than a
   * hostile peer.
   */
  commit(event: SignedEvent): boolean {
    if (!this.log.insert(event).accepted) return false;
    this.post({ t: 'events', gameId: this.log.gameId, events: [event] });
    this.emit();
    return true;
  }

  /** Everything this peer holds, for anti-entropy. */
  private have(): SyncMessage {
    return {
      t: 'have',
      gameId: this.log.gameId,
      vector: this.log.vector,
      digest: this.log.digest(),
      protocol: PROTOCOL_VERSION,
      packHash: this.packHash,
    };
  }

  private post(message: SyncMessage, target?: string): void {
    this.transport?.send(JSON.stringify(message), target);
  }

  private receive(message: SyncMessage | null): void {
    // A peer in the same relay room but a different game is not an error worth
    // surfacing; it just is not ours. Neither is unparseable traffic: the room
    // id is public, so anything at all can turn up on the channel.
    if (message === null || message.gameId !== this.log.gameId) return;

    switch (message.t) {
      case 'have': {
        const missingForThem = this.log.eventsMissingFrom(message.vector);
        if (missingForThem.length > 0) this.sendEvents(missingForThem);
        const weMayBeBehind = this.isBehind(message.vector);
        if (weMayBeBehind) {
          this.post({ t: 'want', gameId: this.log.gameId, vector: this.log.vector });
        }
        // Same vector but a different digest means genuine divergence, which no
        // amount of backfill fixes. Surface it rather than playing on.
        this.diverged = !weMayBeBehind && missingForThem.length === 0 && message.digest !== this.log.digest();
        this.emit();
        return;
      }
      case 'want': {
        const missing = this.log.eventsMissingFrom(message.vector);
        if (missing.length > 0) this.sendEvents(missing);
        return;
      }
      case 'events': {
        if (!Array.isArray(message.events)) return;
        const { accepted } = this.log.insertMany(message.events);
        if (accepted > 0) {
          this.diverged = false;
          this.emit();
        }
        // Receiving seq 5 while seq 3 is still missing means an earlier
        // broadcast was lost. Ask now rather than waiting for the next gossip
        // tick: the reducer is working from an incomplete story until it lands.
        if (this.log.hasGaps) {
          this.post({ t: 'want', gameId: this.log.gameId, vector: this.log.vector });
        }
        return;
      }
      default:
        return;
    }
  }

  private sendEvents(events: readonly SignedEvent[]): void {
    for (let i = 0; i < events.length; i += BACKFILL_CHUNK) {
      this.post({
        t: 'events',
        gameId: this.log.gameId,
        events: events.slice(i, i + BACKFILL_CHUNK),
      });
    }
  }

  private isBehind(theirs: VersionVector): boolean {
    const mine = this.log.vector;
    for (const [author, seq] of Object.entries(theirs)) {
      if ((mine[author] ?? 0) < seq) return true;
    }
    return false;
  }

  private emit(): void {
    const snapshot = this.snapshot();
    for (const listener of this.listeners) listener(snapshot);
  }

  get selfId(): string {
    return this.identity.id;
  }

  leave(): void {
    if (this.timer !== null) clearInterval(this.timer);
    this.timer = null;
    this.transport?.leave();
    this.listeners.clear();
  }
}

function decodeMessage(payload: string): SyncMessage | null {
  try {
    const parsed = JSON.parse(payload) as Partial<SyncMessage>;
    if (typeof parsed !== 'object' || parsed === null) return null;
    if (parsed.t !== 'have' && parsed.t !== 'want' && parsed.t !== 'events') return null;
    if (typeof parsed.gameId !== 'string') return null;
    return parsed as SyncMessage;
  } catch {
    return null;
  }
}
