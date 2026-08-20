import type { GameId, Identity, SignedEvent } from '@dohhh/engine';

/**
 * Persistence, abstracted to one interface with three methods.
 *
 * The PWA backs this with localStorage and the React Native shell with
 * AsyncStorage; neither difference is allowed to reach the session or the
 * engine. Everything stored is local to the device - there is nowhere else for
 * it to go.
 */
export interface KeyValueStore {
  get(key: string): string | null;
  set(key: string, value: string): void;
  remove(key: string): void;
}

const IDENTITY_KEY = 'dohhh.identity.v1';
const gameKey = (gameId: GameId): string => `dohhh.game.${gameId}.v1`;

export function loadIdentity(store: KeyValueStore): Identity | null {
  const raw = store.get(IDENTITY_KEY);
  if (raw === null) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<Identity>;
    if (
      typeof parsed.id !== 'string' ||
      typeof parsed.username !== 'string' ||
      typeof parsed.publicKey !== 'string' ||
      typeof parsed.secretKey !== 'string'
    ) {
      return null;
    }
    return parsed as Identity;
  } catch {
    return null;
  }
}

export function saveIdentity(store: KeyValueStore, identity: Identity): void {
  store.set(IDENTITY_KEY, JSON.stringify(identity));
}

export function clearIdentity(store: KeyValueStore): void {
  store.remove(IDENTITY_KEY);
}

/**
 * A game is its log, so saving the log is saving the game. Reloading the tab
 * mid-round rejoins where it left off, and the peers backfill anything missed.
 */
export function loadEvents(store: KeyValueStore, gameId: GameId): SignedEvent[] {
  const raw = store.get(gameKey(gameId));
  if (raw === null) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as SignedEvent[]) : [];
  } catch {
    return [];
  }
}

export function saveEvents(store: KeyValueStore, gameId: GameId, events: readonly SignedEvent[]): void {
  store.set(gameKey(gameId), JSON.stringify(events));
}

/** In-memory store, for tests and for a browser with storage blocked. */
export function memoryStore(): KeyValueStore {
  const map = new Map<string, string>();
  return {
    get: (key) => map.get(key) ?? null,
    set: (key, value) => {
      map.set(key, value);
    },
    remove: (key) => {
      map.delete(key);
    },
  };
}

/**
 * Wraps a Storage-like object so a browser in private mode - where every write
 * throws - degrades to memory instead of crashing on startup.
 */
export function webStore(storage: {
  getItem(k: string): string | null;
  setItem(k: string, v: string): void;
  removeItem(k: string): void;
}): KeyValueStore {
  const fallback = memoryStore();
  return {
    get: (key) => {
      try {
        return storage.getItem(key);
      } catch {
        return fallback.get(key);
      }
    },
    set: (key, value) => {
      try {
        storage.setItem(key, value);
      } catch {
        fallback.set(key, value);
      }
    },
    remove: (key) => {
      try {
        storage.removeItem(key);
      } catch {
        fallback.remove(key);
      }
    },
  };
}
