import {
  announce,
  answerTurn,
  callTimeout,
  chooseDifficulty,
  createGame,
  createIdentity,
  drawTurn,
  EventLog,
  joinTeam as joinTeamEvent,
  newTeamId,
  openTeam,
  SEED_PACK,
  SEED_PACK_HASH,
  startGame,
  withUsername,
  type Difficulty,
  type GameId,
  type Identity,
  type RulesConfig,
  type SignedEvent,
  type TeamId,
} from '@dohhh/engine';
import {
  buildTicket,
  checkTicket,
  discoverGame,
  explainRefusal,
  GameSession,
  loadEvents,
  loadIdentity,
  saveEvents,
  saveIdentity,
  webStore,
  type JoinTicket,
  type SessionSnapshot,
} from '@dohhh/net';
import { create } from 'zustand';

import { navigate } from './router.js';

const store = webStore(globalThis.localStorage ?? { getItem: () => null, setItem: () => undefined, removeItem: () => undefined });
const LAST_GAME_KEY = 'dohhh.lastGame.v1';

interface LastGame {
  readonly gameId: GameId;
  readonly joinCode: string;
}

export interface AppState {
  readonly identity: Identity | null;
  readonly session: GameSession | null;
  readonly snapshot: SessionSnapshot | null;
  /** Non-null while a network operation is in flight, with a message to show. */
  readonly busy: string | null;
  readonly error: string | null;

  signUp: (username: string) => void;
  rename: (username: string) => void;
  host: (name: string, rules: Partial<RulesConfig>) => void;
  joinByCode: (code: string) => Promise<void>;
  joinByTicket: (ticket: JoinTicket) => Promise<void>;
  resume: () => Promise<boolean>;
  leave: () => void;
  dismissError: () => void;

  addTeam: (name: string) => void;
  sitWith: (teamId: TeamId) => void;
  begin: () => void;
  deal: () => void;
  bet: (difficulty: Difficulty) => void;
  answer: (chosenIndex: number) => void;
  callTime: () => void;
}

/**
 * One store, and it is deliberately thin: it owns the identity, the session and
 * nothing else. Every rule question ("may I answer?", "who deals?") is answered
 * by an engine selector against the reduced state, never by a flag kept here -
 * two sources of truth in a system with no server is how peers start
 * disagreeing.
 */
export const useApp = create<AppState>((set, get) => {
  const attach = (session: GameSession, last: LastGame): void => {
    session.subscribe((snapshot) => {
      set({ snapshot });
      // A game is its log, so persisting the log is persisting the game:
      // reloading the tab mid-round rejoins and the peers backfill the rest.
      if (snapshot.state !== null) saveEvents(store, last.gameId, session.log.events);
    });
    store.set(LAST_GAME_KEY, JSON.stringify(last));
    set({ session, snapshot: session.snapshot(), busy: null, error: null });
  };

  const teardown = (): void => {
    get().session?.leave();
    set({ session: null, snapshot: null });
  };

  return {
    identity: loadIdentity(store),
    session: null,
    snapshot: null,
    busy: null,
    error: null,

    signUp: (username) => {
      const identity = createIdentity(username);
      saveIdentity(store, identity);
      set({ identity });
      navigate('/');
    },

    rename: (username) => {
      const current = get().identity;
      if (current === null) return;
      const identity = withUsername(current, username);
      saveIdentity(store, identity);
      set({ identity });
    },

    host: (name, rules) => {
      const identity = get().identity;
      if (identity === null) return;
      teardown();
      let log: EventLog | undefined;
      const game = createGame({
        identity,
        name,
        rules,
        packHash: SEED_PACK_HASH,
        makeLog: (gameId) => {
          log = new EventLog(gameId);
          return log;
        },
      });
      const session = new GameSession({
        identity,
        pack: SEED_PACK,
        gameId: game.gameId,
        joinCode: game.joinCode,
        seed: log?.events ?? [],
      });
      attach(session, { gameId: game.gameId, joinCode: game.joinCode });
      navigate('/lobby');
    },

    joinByCode: async (code) => {
      const identity = get().identity;
      if (identity === null) return;
      set({ busy: 'Looking for that game...', error: null });
      const found = await discoverGame({ joinCode: code });
      // discoverGame just left the room it was probing; rejoining immediately
      // races that teardown on some relays and the real connection never
      // completes its handshake. A short settle window avoids it.
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (found === null) {
        set({
          busy: null,
          error:
            'No game answered on that code. Check the words, and check you are on the same network as the others.',
        });
        return;
      }
      const refusal = checkTicket(found, { packHash: SEED_PACK_HASH });
      if (refusal !== null) {
        set({ busy: null, error: explainRefusal(refusal) });
        return;
      }
      teardown();
      const session = new GameSession({
        identity,
        pack: SEED_PACK,
        gameId: found.gameId,
        joinCode: code,
        seed: loadEvents(store, found.gameId),
      });
      attach(session, { gameId: found.gameId, joinCode: code });
      session.commit(announce(session.log, identity));
      navigate('/lobby');
    },

    joinByTicket: async (ticket) => {
      const identity = get().identity;
      if (identity === null) return;
      // Refuse at the door, with a readable reason, rather than desyncing on
      // turn nine (R-11).
      const refusal = checkTicket(ticket, { packHash: SEED_PACK_HASH });
      if (refusal !== null) {
        set({ error: explainRefusal(refusal), busy: null });
        return;
      }
      teardown();
      const session = new GameSession({
        identity,
        pack: SEED_PACK,
        gameId: ticket.gameId,
        joinCode: ticket.joinCode,
        seed: loadEvents(store, ticket.gameId),
      });
      attach(session, { gameId: ticket.gameId, joinCode: ticket.joinCode });
      session.commit(announce(session.log, identity));
      navigate('/lobby');
    },

    resume: async () => {
      const identity = get().identity;
      const raw = store.get(LAST_GAME_KEY);
      if (identity === null || raw === null) return false;
      try {
        const last = JSON.parse(raw) as LastGame;
        const events = loadEvents(store, last.gameId);
        if (events.length === 0) return false;
        teardown();
        const session = new GameSession({
          identity,
          pack: SEED_PACK,
          gameId: last.gameId,
          joinCode: last.joinCode,
          seed: events,
        });
        attach(session, last);
        return true;
      } catch {
        return false;
      }
    },

    leave: () => {
      teardown();
      store.remove(LAST_GAME_KEY);
      navigate('/');
    },

    dismissError: () => set({ error: null }),

    addTeam: (name) => {
      const { session, identity } = get();
      if (session === null || identity === null) return;
      session.commit(openTeam(session.log, identity, name));
    },

    sitWith: (teamId) => {
      const { session, identity } = get();
      if (session === null || identity === null) return;
      session.commit(joinTeamEvent(session.log, identity, teamId));
    },

    begin: () => commit((session, identity) => startGame(session.log, identity)),
    deal: () =>
      commit((session, identity) =>
        drawTurn(session.log, identity, session.state?.turnIndex ?? 0),
      ),
    bet: (difficulty) =>
      commit((session, identity) =>
        chooseDifficulty(session.log, identity, session.state?.active?.turnIndex ?? 0, difficulty),
      ),
    answer: (chosenIndex) =>
      commit((session, identity) =>
        answerTurn(session.log, identity, session.state?.active?.turnIndex ?? 0, chosenIndex),
      ),
    callTime: () =>
      commit((session, identity) =>
        callTimeout(session.log, identity, session.state?.active?.turnIndex ?? 0),
      ),
  };

  function commit(build: (session: GameSession, identity: Identity) => SignedEvent): void {
    const { session, identity } = get();
    if (session === null || identity === null) return;
    session.commit(build(session, identity));
  }
});

/** The ticket a host shows on screen. Derived, never stored. */
export function ticketFor(state: {
  readonly gameId: GameId;
  readonly joinCode: string;
}): JoinTicket {
  return buildTicket({
    gameId: state.gameId,
    joinCode: state.joinCode,
    packHash: SEED_PACK_HASH,
  });
}

export { newTeamId };
