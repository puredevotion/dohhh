import { canonicalJson, sha256Hex } from './canonical.js';
import type { Identity } from './identity.js';
import { playerIdFromPublicKey, sign, verify } from './identity.js';
import type { RulesConfig } from './rules.js';
import type { CategoryId, Difficulty, GameId, PlayerId, TeamId } from './types.js';

/**
 * Wire format version. Peers refuse to play across a mismatch rather than
 * discovering the incompatibility on turn nine (R-11).
 */
export const PROTOCOL_VERSION = 2;

export type GameEventBody =
  | {
      readonly type: 'game/created';
      readonly name: string;
      readonly joinCode: string;
      readonly rules: RulesConfig;
      /** Content-pack hash. A peer with a different pack is refused at the door. */
      readonly packHash: string;
    }
  | { readonly type: 'player/joined'; readonly username: string }
  | { readonly type: 'team/created'; readonly teamId: TeamId; readonly name: string }
  | { readonly type: 'team/joined'; readonly teamId: TeamId }
  | { readonly type: 'team/left'; readonly teamId: TeamId }
  | { readonly type: 'game/started' }
  /** Published by the drawer, never by the answering team. See R-10. */
  | { readonly type: 'turn/drawn'; readonly turnIndex: number; readonly nonce: string }
  /**
   * The dealing side's pick among the categoryOptions turn/drawn offered.
   * Same "not the acting team" restriction as turn/drawn - it is still the
   * opposing side revealing the category, just from a choice of three now.
   */
  | {
      readonly type: 'turn/category';
      readonly turnIndex: number;
      readonly categoryId: CategoryId;
    }
  | {
      readonly type: 'turn/difficulty';
      readonly turnIndex: number;
      readonly difficulty: Difficulty;
    }
  | {
      readonly type: 'turn/answered';
      readonly turnIndex: number;
      /** Index into the presented (shuffled) option order. */
      readonly chosenIndex: number;
    }
  /** Proposable by any peer, so one locked phone cannot stall the game (R-3). */
  | { readonly type: 'turn/timeout'; readonly turnIndex: number };

export type GameEventType = GameEventBody['type'];

/**
 * An event as it travels between peers.
 *
 * `pub` rides along on every event so verification is stateless: a peer can
 * check a signature from a player whose `player/joined` it has not received
 * yet, which is routine when a backfill arrives out of order.
 */
export interface SignedEvent {
  readonly v: number;
  readonly gameId: GameId;
  readonly author: PlayerId;
  /** Hex Ed25519 public key of the author. */
  readonly pub: string;
  /** Per-author monotonic counter, starting at 1. Gaps mean missing events. */
  readonly seq: number;
  /** Lamport clock, for a total order that respects causality. */
  readonly lamport: number;
  /**
   * Author's wall clock, milliseconds. For display only. The reducer must never
   * branch on this: clocks are not synchronised and a lying peer is free.
   */
  readonly at: number;
  readonly body: GameEventBody;
  readonly id: string;
  readonly sig: string;
}

export type UnsignedEvent = Omit<SignedEvent, 'id' | 'sig'>;

export function signingPayload(event: UnsignedEvent): string {
  return canonicalJson({
    v: event.v,
    gameId: event.gameId,
    author: event.author,
    pub: event.pub,
    seq: event.seq,
    lamport: event.lamport,
    at: event.at,
    body: event.body,
  });
}

export interface CreateEventOptions {
  readonly identity: Identity;
  readonly gameId: GameId;
  readonly seq: number;
  readonly lamport: number;
  readonly body: GameEventBody;
  /** Injectable so tests are not at the mercy of the clock. */
  readonly now?: number;
}

export function createEvent(options: CreateEventOptions): SignedEvent {
  const unsigned: UnsignedEvent = {
    v: PROTOCOL_VERSION,
    gameId: options.gameId,
    author: options.identity.id,
    pub: options.identity.publicKey,
    seq: options.seq,
    lamport: options.lamport,
    at: options.now ?? Date.now(),
    body: options.body,
  };
  const payload = signingPayload(unsigned);
  return {
    ...unsigned,
    id: sha256Hex(payload),
    sig: sign(payload, options.identity.secretKey),
  };
}

export type EventRejection =
  | 'malformed'
  | 'wrong-protocol'
  | 'wrong-game'
  | 'bad-id'
  | 'impersonation'
  | 'bad-signature';

/**
 * Full cryptographic check of an event received from the network. Returns the
 * reason for refusal, or `null` when the event is sound.
 *
 * `impersonation` is the interesting one: because a player id is a hash of the
 * public key, an event claiming to be from someone else fails without anyone
 * having to consult a registry.
 */
export function checkEvent(event: SignedEvent, expectedGameId?: GameId): EventRejection | null {
  if (
    typeof event !== 'object' ||
    event === null ||
    typeof event.id !== 'string' ||
    typeof event.sig !== 'string' ||
    typeof event.pub !== 'string' ||
    typeof event.author !== 'string' ||
    typeof event.gameId !== 'string' ||
    !Number.isInteger(event.seq) ||
    event.seq < 1 ||
    !Number.isInteger(event.lamport) ||
    event.lamport < 0 ||
    typeof event.body !== 'object' ||
    event.body === null ||
    typeof event.body.type !== 'string'
  ) {
    return 'malformed';
  }
  if (event.v !== PROTOCOL_VERSION) return 'wrong-protocol';
  if (expectedGameId !== undefined && event.gameId !== expectedGameId) return 'wrong-game';

  const payload = signingPayload(event);
  if (sha256Hex(payload) !== event.id) return 'bad-id';
  if (playerIdFromPublicKey(event.pub) !== event.author) return 'impersonation';
  if (!verify(event.sig, payload, event.pub)) return 'bad-signature';
  return null;
}

export function isValidEvent(event: SignedEvent, expectedGameId?: GameId): boolean {
  return checkEvent(event, expectedGameId) === null;
}

/**
 * Total order over events: Lamport clock first (so causality is respected),
 * then author id and sequence to break ties deterministically. Every peer
 * sorts identically, which is the whole reason the reducer can be pure.
 */
export function compareEvents(a: SignedEvent, b: SignedEvent): number {
  if (a.lamport !== b.lamport) return a.lamport - b.lamport;
  if (a.author !== b.author) return a.author < b.author ? -1 : 1;
  if (a.seq !== b.seq) return a.seq - b.seq;
  return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
}
