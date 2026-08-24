import {
  announce,
  answerTurn,
  callTimeout,
  chooseCategory,
  chooseDifficulty,
  createGame,
  createIdentity,
  drawTurn,
  EventLog,
  explainRejection,
  joinTeam as joinTeamEvent,
  kickPlayer as kickPlayerEvent,
  leaveTeam as leaveTeamEvent,
  newTeamId,
  openTeam,
  SEED_PACK,
  SEED_PACK_HASH,
  SEED_PACK_NL,
  SEED_PACK_NL_HASH,
  setRoomLocked as setRoomLockedEvent,
  startGame,
  withUsername,
  type CategoryId,
  type ContentPack,
  type Difficulty,
  type GameId,
  type Identity,
  type Locale,
  type PlayerId,
  type RulesConfig,
  type SignedEvent,
  type TeamId,
} from '@dohhh/engine';
import {
  buildTicket,
  checkTicket,
  createLocalTransport,
  discoverGame,
  explainRefusal,
  GameSession,
  loadEvents,
  loadIdentity,
  PACK_HASH_PREFIX_LENGTH,
  saveEvents,
  saveIdentity,
  webStore,
  type JoinTicket,
  type SessionSnapshot,
} from '@dohhh/net';
import { create } from 'zustand';

import { i18n } from './i18n.js';
import { navigate } from './router.js';

const LAST_GAME_KEY = 'dohhh.lastGame.v1';
const LOCALE_KEY = 'dohhh.locale.v1';

/** The content pack for a given locale - question text differs, everything else about the game does not. */
export function packFor(locale: Locale): ContentPack {
  return locale === 'nl' ? SEED_PACK_NL : SEED_PACK;
}

/** The hash peers compare at join time, matching whichever pack {@link packFor} would pick. */
function packHashFor(locale: Locale): string {
  return locale === 'nl' ? SEED_PACK_NL_HASH : SEED_PACK_HASH;
}

/**
 * A short, eyeballable stand-in for "do these two phones have the same
 * build" - the actual thing that matters here, since the join protocol
 * refuses a peer on a different question pack anyway. Same length as the
 * ticket's own truncated hash (see PACK_HASH_PREFIX_LENGTH in @dohhh/net) so
 * what a host reads off their own screen is exactly what a joiner's ticket
 * carries, not some other truncation of the same hash.
 */
export function shortPackVersion(locale: Locale): string {
  return packHashFor(locale).slice(0, PACK_HASH_PREFIX_LENGTH);
}
/** How long the solo dealer waits before dealing the next question - exported so Play.tsx's countdown matches it exactly. */
export const SOLO_DEAL_DELAY_MS = 20_000;
/**
 * Purely local, purely cosmetic: a label for *this device*, distinct from
 * the player's username. The hash (identity.id) is what every signature and
 * team membership actually resolves to and never changes - this just gives
 * a human something friendlier to look at than a hash when they own more
 * than one device. Never touches the engine, never leaves this device,
 * never rides in an event.
 */
const DEVICE_LABEL_KEY = 'dohhh.deviceLabel.v1';

interface LastGame {
  readonly gameId: GameId;
  readonly joinCode: string;
  /** True for a solo game, so a resume knows to skip the network entirely. */
  readonly solo?: boolean;
}

export interface AppState {
  readonly identity: Identity | null;
  readonly session: GameSession | null;
  readonly snapshot: SessionSnapshot | null;
  /** Non-null while a network operation is in flight, with a message to show. */
  readonly busy: string | null;
  readonly error: string | null;
  /** A friendly stand-in for the device hash, set locally, shown nowhere else. */
  readonly deviceLabel: string | null;
  /** True once persistent storage has failed and silently degraded to memory-only. */
  readonly storageDegraded: boolean;
  /** UI language and, via {@link packFor}, which content pack a hosted/solo game deals from. */
  readonly locale: Locale;

  signUp: (username: string) => void;
  rename: (username: string) => void;
  renameDevice: (label: string) => void;
  setLocale: (locale: Locale) => void;
  host: (name: string, rules: Partial<RulesConfig>) => void;
  /**
   * A solo game against a local auto-dealer: no network, no lobby, no
   * second human. The "opponent" is an unteamed, ephemeral identity that
   * deals and reveals categories the instant it's asked to - it never joins
   * a team and never answers, so the human always bets and answers alone.
   */
  hostSolo: (rules: Partial<RulesConfig>) => void;
  /** Skips the dealer's between-turns wait and deals the next question immediately. A no-op outside a solo game's dealing pause. */
  continueSolo: () => void;
  joinByCode: (code: string) => Promise<void>;
  joinByTicket: (ticket: JoinTicket) => Promise<void>;
  resume: () => Promise<boolean>;
  leave: () => void;
  dismissError: () => void;

  addTeam: (name: string) => void;
  sitWith: (teamId: TeamId) => void;
  leaveCurrentTeam: (teamId: TeamId) => void;
  setRoomLocked: (locked: boolean) => void;
  kickPlayer: (targetId: PlayerId) => void;
  begin: () => void;
  deal: () => void;
  pickCategory: (categoryId: CategoryId) => void;
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
  const store = webStore(
    globalThis.localStorage ?? {
      getItem: () => null,
      setItem: () => undefined,
      removeItem: () => undefined,
    },
    () => set({ storageDegraded: true }),
  );

  /**
   * Announcing yourself the instant a session is constructed stamps that
   * event with a Lamport clock starting at 0 - lower than everything the
   * host has already committed, since backfill hasn't landed yet. Once
   * merged, that early stamp can sort the announcement (and anything
   * committed right after it, like sitting on a team) before `game/created`
   * itself, and the reducer rejects any event that arrives before creation
   * permanently: it folds the log once, top to bottom, and never revisits a
   * rejected event once the game/created lands further down. Waiting for the
   * first real state (i.e. game/created has actually been backfilled and
   * folded) means our own next Lamport stamp is guaranteed to be higher than
   * the host's history, so our own events sort after it. A timeout still
   * commits so a genuinely offline test isn't stuck forever.
   */
  const announceWhenReady = (session: GameSession, identity: Identity): void => {
    if (session.state !== null) {
      session.commit(announce(session.log, identity));
      return;
    }
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) return;
      settled = true;
      unsubscribe();
      session.commit(announce(session.log, identity));
    }, 8_000);
    const unsubscribe = session.subscribe((snapshot) => {
      if (settled || snapshot.state === null) return;
      settled = true;
      clearTimeout(timer);
      unsubscribe();
      session.commit(announce(session.log, identity));
    });
  };

  const attach = (session: GameSession, last: LastGame): void => {
    // The reducer already records *why* it dropped an event (`state.rejected`)
    // - nothing ever read it, which is exactly how a silently-dropped
    // team/created event went unnoticed until someone hit it live. Logging
    // each newly-seen rejection is cheap and turns "the team never showed up"
    // into a console line naming the event and the reason.
    const loggedRejections = new Set<string>();
    session.subscribe((snapshot) => {
      set({ snapshot });
      for (const { id, reason } of snapshot.state?.rejected ?? []) {
        if (loggedRejections.has(id)) continue;
        loggedRejections.add(id);
        console.warn(`[dohhh] event ${id} rejected: ${reason}`);
      }
      // A game is its log, so persisting the log is persisting the game:
      // reloading the tab mid-round rejoins and the peers backfill the rest.
      if (snapshot.state !== null) saveEvents(store, last.gameId, session.log.events);
    });
    store.set(LAST_GAME_KEY, JSON.stringify(last));
    set({ session, snapshot: session.snapshot(), busy: null, error: null });
  };

  /**
   * The solo "opponent": an unteamed identity that deals and reveals a
   * category, so a solo player is never left waiting on a peer who doesn't
   * exist. It never joins a team and never answers - the reducer's existing
   * "the acting team cannot draw or choose its own question" check (R-10)
   * already keeps it that way; nothing here has to re-implement that rule,
   * only decide when to act.
   *
   * Dealing the *next* question is deliberately delayed rather than
   * committed the instant it's possible. Without the delay, the very first
   * version of this dealt immediately: a commit's `session.emit()` calls
   * every subscriber again synchronously, including this one, so resolving
   * a turn and dealing the next one both happened inside one synchronous
   * call stack - React never got a render in between, so the "you were
   * right/wrong" outcome card (only shown while `active === null`, between
   * turns) was skipped entirely. `SOLO_DEAL_DELAY_MS` is long enough to
   * actually read that card (Play.tsx shows a matching countdown), and
   * `soloDealNow` - set here, called by the `continueSolo` action - lets a
   * player skip the wait instead of being stuck reading at the game's
   * pace. Revealing a category, by contrast, stays instant: there's no
   * card to skip past on that step, only a fast "which of three" moment
   * that dwelling on adds nothing to.
   */
  let soloDealNow: (() => void) | null = null;
  const attachSoloBot = (session: GameSession, bot: Identity): void => {
    let dealTimer: ReturnType<typeof setTimeout> | null = null;
    let scheduledForTurn: number | null = null;
    session.subscribe((snapshot) => {
      const s = snapshot.state;
      if (s === null || s.phase !== 'playing') {
        if (dealTimer !== null) clearTimeout(dealTimer);
        dealTimer = null;
        soloDealNow = null;
        return;
      }
      if (s.active === null) {
        if (scheduledForTurn === s.turnIndex) return;
        scheduledForTurn = s.turnIndex;
        // Nothing to catch up on before the very first question - that
        // delay exists purely to let a *resolved* turn's outcome be seen.
        if (s.history.length === 0) {
          session.commit(drawTurn(session.log, bot, s.turnIndex));
          return;
        }
        const dealNow = (): void => {
          if (dealTimer !== null) clearTimeout(dealTimer);
          dealTimer = null;
          soloDealNow = null;
          if (session.state?.phase === 'playing' && session.state.active === null) {
            session.commit(drawTurn(session.log, bot, s.turnIndex));
          }
        };
        soloDealNow = dealNow;
        dealTimer = setTimeout(dealNow, SOLO_DEAL_DELAY_MS);
        return;
      }
      if (s.active.categoryId === null) {
        const options = s.active.categoryOptions;
        const pick = options[Math.floor(Math.random() * options.length)];
        if (pick !== undefined) {
          session.commit(chooseCategory(session.log, bot, s.active.turnIndex, pick));
        }
      }
    });
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
    deviceLabel: store.get(DEVICE_LABEL_KEY),
    storageDegraded: false,
    locale: (store.get(LOCALE_KEY) as Locale | null) ?? 'en',

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

    renameDevice: (label) => {
      const trimmed = label.trim().slice(0, 24);
      if (trimmed.length === 0) {
        store.remove(DEVICE_LABEL_KEY);
        set({ deviceLabel: null });
        return;
      }
      store.set(DEVICE_LABEL_KEY, trimmed);
      set({ deviceLabel: trimmed });
    },

    setLocale: (locale) => {
      store.set(LOCALE_KEY, locale);
      set({ locale });
      void i18n.changeLanguage(locale);
    },

    host: (name, rules) => {
      const identity = get().identity;
      if (identity === null) return;
      const locale = get().locale;
      teardown();
      let log: EventLog | undefined;
      const game = createGame({
        identity,
        name,
        rules,
        packHash: packHashFor(locale),
        makeLog: (gameId) => {
          log = new EventLog(gameId);
          return log;
        },
      });
      const session = new GameSession({
        identity,
        pack: packFor(locale),
        gameId: game.gameId,
        joinCode: game.joinCode,
        seed: log?.events ?? [],
      });
      attach(session, { gameId: game.gameId, joinCode: game.joinCode });
      navigate('/lobby');
    },

    hostSolo: (rules) => {
      const identity = get().identity;
      if (identity === null) return;
      const locale = get().locale;
      teardown();
      const bot = createIdentity('The House');
      let log: EventLog | undefined;
      const game = createGame({
        identity,
        name: `${identity.username}'s solo game`,
        // minTeams: 1 is the one thing that makes this a solo game to the
        // engine - everything else about the rules is whatever the player
        // picked, same as a hosted one.
        rules: { ...rules, minTeams: 1 },
        packHash: packHashFor(locale),
        makeLog: (gameId) => {
          log = new EventLog(gameId);
          return log;
        },
      });
      const session = new GameSession({
        identity,
        pack: packFor(locale),
        gameId: game.gameId,
        joinCode: game.joinCode,
        seed: log?.events ?? [],
        makeTransport: createLocalTransport,
      });
      attach(session, { gameId: game.gameId, joinCode: game.joinCode, solo: true });
      attachSoloBot(session, bot);

      // There is nobody to wait for, so there is no lobby: create a team,
      // join it, announce the bot, start - all local and synchronous, and
      // by the time this returns the first category is already dealt (see
      // attachSoloBot's cascade through the same synchronous commit chain).
      const teamEvent = openTeam(session.log, identity, identity.username);
      session.commit(teamEvent);
      if (teamEvent.body.type === 'team/created') {
        session.commit(joinTeamEvent(session.log, identity, teamEvent.body.teamId));
      }
      session.commit(announce(session.log, bot));
      session.commit(startGame(session.log, identity));
      navigate('/play');
    },

    continueSolo: () => soloDealNow?.(),

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
      const refusal = checkTicket(found, { packHash: packHashFor(get().locale) });
      if (refusal !== null) {
        set({ busy: null, error: explainRefusal(refusal) });
        return;
      }
      teardown();
      const session = new GameSession({
        identity,
        pack: packFor(get().locale),
        gameId: found.gameId,
        joinCode: code,
        seed: loadEvents(store, found.gameId),
      });
      attach(session, { gameId: found.gameId, joinCode: code });
      announceWhenReady(session, identity);
      navigate('/lobby');
    },

    joinByTicket: async (ticket) => {
      const identity = get().identity;
      if (identity === null) return;
      // Refuse at the door, with a readable reason, rather than desyncing on
      // turn nine (R-11).
      const refusal = checkTicket(ticket, { packHash: packHashFor(get().locale) });
      if (refusal !== null) {
        set({ error: explainRefusal(refusal), busy: null });
        return;
      }
      teardown();
      const session = new GameSession({
        identity,
        pack: packFor(get().locale),
        gameId: ticket.gameId,
        joinCode: ticket.joinCode,
        seed: loadEvents(store, ticket.gameId),
      });
      attach(session, { gameId: ticket.gameId, joinCode: ticket.joinCode });
      announceWhenReady(session, identity);
      navigate('/lobby');
    },

    resume: async () => {
      const identity = get().identity;
      const raw = store.get(LAST_GAME_KEY);
      if (identity === null || raw === null) return false;
      try {
        const last = JSON.parse(raw) as LastGame;
        // No local cache yet is fine - a joiner whose connection dropped
        // before backfill landed has nothing saved locally, but the session
        // reconnects over the mesh and backfills fresh, same as a first-time
        // join. Bailing out here only because the cache is empty is exactly
        // the bug: it left joiners with no way back in after any hiccup,
        // while hosts (whose own log is populated locally from creation,
        // network or not) never hit it.
        const events = loadEvents(store, last.gameId);
        teardown();
        const session = new GameSession({
          identity,
          pack: packFor(get().locale),
          gameId: last.gameId,
          joinCode: last.joinCode,
          seed: events,
          ...(last.solo === true ? { makeTransport: createLocalTransport } : {}),
        });
        attach(session, last);
        // The bot's identity is never persisted - nothing needs it to be
        // the *same* keypair turn to turn, only to be someone other than
        // the human's team, so a reload just mints a fresh one and carries
        // on exactly where the log left off.
        if (last.solo === true) attachSoloBot(session, createIdentity('The House'));
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

    addTeam: (name) => commit((session, identity) => openTeam(session.log, identity, name)),
    sitWith: (teamId) => commit((session, identity) => joinTeamEvent(session.log, identity, teamId)),
    leaveCurrentTeam: (teamId) =>
      commit((session, identity) => leaveTeamEvent(session.log, identity, teamId)),
    setRoomLocked: (locked) =>
      commit((session, identity) => setRoomLockedEvent(session.log, identity, locked)),
    kickPlayer: (targetId) =>
      commit((session, identity) => kickPlayerEvent(session.log, identity, targetId)),

    begin: () => commit((session, identity) => startGame(session.log, identity)),
    // Dealing is the one turn-scoped action that happens *between* turns -
    // there is no active turn yet, so it reads the game-level counter
    // instead of an active turn's.
    deal: () =>
      commitTurnIndex(
        (session) => session.state?.turnIndex,
        (session, identity, turnIndex) => drawTurn(session.log, identity, turnIndex),
      ),
    pickCategory: (categoryId) =>
      commitActiveTurn((session, identity, turnIndex) =>
        chooseCategory(session.log, identity, turnIndex, categoryId),
      ),
    bet: (difficulty) =>
      commitActiveTurn((session, identity, turnIndex) =>
        chooseDifficulty(session.log, identity, turnIndex, difficulty),
      ),
    answer: (chosenIndex) =>
      commitActiveTurn((session, identity, turnIndex) =>
        answerTurn(session.log, identity, turnIndex, chosenIndex),
      ),
    callTime: () =>
      commitActiveTurn((session, identity, turnIndex) => callTimeout(session.log, identity, turnIndex)),
  };

  /**
   * Every write goes through here: builds the event, commits it, and turns a
   * rejection into something the player actually sees instead of a tap that
   * silently did nothing. `session.commit` rejecting a *locally built* event
   * means a bug on this device (a stale turnIndex, a duplicate), not a
   * hostile peer - worth surfacing, not worth pretending didn't happen.
   */
  function commit(build: (session: GameSession, identity: Identity) => SignedEvent): void {
    const { session, identity } = get();
    if (session === null || identity === null) return;
    const result = session.commit(build(session, identity));
    if (!result.accepted) {
      set({ error: explainRejection(result.reason ?? 'unknown') });
    }
  }

  /**
   * Every turn-scoped action needs "the turn this action is about," read
   * from whichever field is actually valid for that phase - `pick` names
   * which one. If it comes back undefined (state hasn't arrived yet, or
   * there's no active turn when one is required), refuse outright rather
   * than falling back to `turnIndex: 0` and shipping a signed event that
   * either mutates the wrong turn or gets silently rejected downstream.
   */
  function commitTurnIndex(
    pick: (session: GameSession) => number | undefined,
    build: (session: GameSession, identity: Identity, turnIndex: number) => SignedEvent,
  ): void {
    const { session, identity } = get();
    if (session === null || identity === null) return;
    const turnIndex = pick(session);
    if (turnIndex === undefined) {
      set({ error: "That didn't go through - the game hasn't caught up yet." });
      return;
    }
    const result = session.commit(build(session, identity, turnIndex));
    if (!result.accepted) {
      set({ error: explainRejection(result.reason ?? 'unknown') });
    }
  }

  /** The turn-scoped actions that require an already-active turn (everything past dealing). */
  function commitActiveTurn(
    build: (session: GameSession, identity: Identity, turnIndex: number) => SignedEvent,
  ): void {
    commitTurnIndex((session) => session.state?.active?.turnIndex, build);
  }
});

/** The ticket a host shows on screen. Derived, never stored. */
export function ticketFor(
  state: {
    readonly gameId: GameId;
    readonly joinCode: string;
  },
  locale: Locale,
): JoinTicket {
  return buildTicket({
    gameId: state.gameId,
    joinCode: state.joinCode,
    packHash: packHashFor(locale),
  });
}

export { newTeamId };
