import { joinRoom, selfId } from 'trystero/nostr';
import type { Room } from 'trystero/nostr';

/**
 * The honest version of "no central server".
 *
 * WebRTC cannot introduce two strangers without something in the middle. What
 * this design actually promises is: no server *we* run, no account, and no game
 * state anywhere except on the players' devices. Peer discovery rides public
 * Nostr relays, used only to swap ICE candidates; once the mesh is up, every
 * byte of game traffic is a direct peer connection.
 *
 * The limits of that, stated rather than buried (R-15, R-19):
 *  - STUN-only means symmetric NAT and some carrier networks will fail. The
 *    in-the-room, shared-Wi-Fi case is the target and works.
 *  - The mesh is O(n^2). Tested to 8 devices. Above ~10 the lobby warns.
 */

export const APP_ID = 'dohhh-mesh-v1';

export type ConnectionStatus = 'connecting' | 'connected' | 'alone' | 'failed';

export interface TransportEvents {
  readonly onMessage: (payload: string, fromPeerId: string) => void;
  readonly onPeerJoin: (peerId: string) => void;
  readonly onPeerLeave: (peerId: string) => void;
  readonly onStatus: (status: ConnectionStatus, detail?: string) => void;
}

export interface Transport {
  readonly selfPeerId: string;
  peerIds(): string[];
  /** Broadcast, or send to one peer when `target` is given. */
  send(payload: string, target?: string): void;
  leave(): void;
}

export interface TransportOptions {
  /** Derived from the join code, never the code itself (R-8). */
  readonly roomId: string;
  /**
   * Encrypts the datachannel payloads. The join code is the shared secret the
   * players already exchanged, so it costs nothing to use it.
   */
  readonly password?: string;
  readonly handlers: TransportEvents;
}

/**
 * Join the mesh for one game. Synchronous by design: trystero connects in the
 * background and the caller renders "connecting" until a peer shows up.
 */
export function createTransport(options: TransportOptions): Transport {
  const { handlers } = options;
  let room: Room;
  try {
    room = joinRoom(
      {
        appId: APP_ID,
        ...(options.password === undefined ? {} : { password: options.password }),
      },
      options.roomId,
      {
        onJoinError: (details) => handlers.onStatus('failed', details.error),
      },
    );
  } catch (error) {
    handlers.onStatus('failed', error instanceof Error ? error.message : String(error));
    return offlineTransport(handlers);
  }

  // Payloads are JSON strings rather than structured objects: one encoding
  // decision, in one place, and message size stays something we can reason
  // about when a datachannel starts complaining.
  const action = room.makeAction<string>('dh', {
    onMessage: (data, context) => handlers.onMessage(data, context.peerId),
  });

  room.onPeerJoin = (peerId) => {
    handlers.onPeerJoin(peerId);
    handlers.onStatus('connected');
  };
  room.onPeerLeave = (peerId) => {
    handlers.onPeerLeave(peerId);
    handlers.onStatus(Object.keys(room.getPeers()).length > 0 ? 'connected' : 'alone');
  };

  handlers.onStatus('connecting');

  return {
    selfPeerId: selfId,
    peerIds: () => Object.keys(room.getPeers()),
    send: (payload, target) => {
      // Fire and forget: a failed send is recovered by the next vector
      // exchange, so there is nothing useful to do with the rejection here.
      void action.send(payload, target === undefined ? undefined : { target }).catch(() => {
        /* the sync loop retries */
      });
    },
    leave: () => {
      void room.leave();
    },
  };
}

/** Stand-in used when the relay cannot be reached, so callers need no null checks. */
function offlineTransport(handlers: TransportEvents): Transport {
  return {
    selfPeerId: selfId,
    peerIds: () => [],
    send: () => {
      handlers.onStatus('failed', 'not connected');
    },
    leave: () => undefined,
  };
}
