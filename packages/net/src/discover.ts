import { roomIdFromJoinCode, type GameId } from '@dohhh/engine';

import { createTransport } from './transport.js';

/**
 * Find the game living behind a join code.
 *
 * The QR path carries the game id in the ticket, but somebody typing four words
 * across a table does not have it - and cannot, because a game id is derived
 * from the host's key. So we join the room and listen: any peer already there
 * greets a newcomer with its version vector, which names the game.
 *
 * This is the only place in the codebase that waits on the network with a
 * timeout, and it is the reason the join screen can say "no game with that
 * code" instead of spinning forever (R-15).
 */
export interface Discovery {
  readonly gameId: GameId;
}

export interface DiscoverOptions {
  readonly joinCode: string;
  readonly timeoutMs?: number;
  readonly makeTransport?: typeof createTransport;
}

export function discoverGame(options: DiscoverOptions): Promise<Discovery | null> {
  const timeoutMs = options.timeoutMs ?? 8_000;
  const make = options.makeTransport ?? createTransport;

  return new Promise<Discovery | null>((resolve) => {
    let settled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const finish = (result: Discovery | null): void => {
      if (settled) return;
      settled = true;
      if (timer !== null) clearTimeout(timer);
      transport.leave();
      resolve(result);
    };

    const transport = make({
      roomId: roomIdFromJoinCode(options.joinCode),
      password: options.joinCode,
      handlers: {
        onMessage: (payload) => {
          const gameId = gameIdFrom(payload);
          if (gameId !== null) finish({ gameId });
        },
        onPeerJoin: () => undefined,
        onPeerLeave: () => undefined,
        onStatus: (status) => {
          // A relay we cannot reach at all is worth failing fast on, rather
          // than making the player wait out the whole timeout.
          if (status === 'failed') finish(null);
        },
      },
    });

    timer = setTimeout(() => finish(null), timeoutMs);
  });
}

function gameIdFrom(payload: string): GameId | null {
  try {
    const parsed = JSON.parse(payload) as { gameId?: unknown };
    return typeof parsed?.gameId === 'string' && parsed.gameId.startsWith('game_')
      ? parsed.gameId
      : null;
  } catch {
    return null;
  }
}
