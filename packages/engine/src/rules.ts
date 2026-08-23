import type { Difficulty } from './types.js';

export interface DifficultyTier {
  readonly id: Difficulty;
  /** How the bet is described to a human. */
  readonly label: string;
  /**
   * Who is expected to get this right. This is the authoring contract, and it
   * is normative: a question a general graduate would get is NOT a `graduate`
   * question, it is a mis-filed one.
   */
  readonly audience: string;
  /** The same thing, short enough to sit under a button. */
  readonly blurb: string;
  readonly award: number;
  readonly penalty: number;
  readonly timeoutMs: number;
  /**
   * A cap on correct-answer streaks that belongs to the tier itself rather
   * than to a host's house rules - `null`/absent means the tier imposes none
   * of its own (the house rule in {@link RulesConfig.maxCorrectStreakPerTurn}
   * still applies if a host sets one). Where both are set, {@link resolve}
   * takes whichever is stricter; a tier cap is a floor a host cannot loosen.
   */
  readonly maxStreak?: number | null;
}

/**
 * The scoring table from the brief, verbatim, plus the calibration the tiers
 * are authored against.
 *
 * The calibration matters more than it looks. The brief asked for "hard, very
 * hard, and incredibly hard"; the first pass at this bank drifted toward
 * general knowledge - "how many symphonies did Beethoven write" sitting in the
 * same tier as a question about swap conventions - which flattens three
 * distinct bets into one easy one and quietly removes the reason to ever pick
 * `graduate`. All three floors are now specialist floors.
 */
export const DIFFICULTY_TIERS: Readonly<Record<Difficulty, DifficultyTier>> = {
  bscba: {
    id: 'bscba',
    label: 'BSc/BA',
    audience:
      'Someone with a bachelor\'s degree in this field - BSc or BA level. An engaged amateur might get lucky, but this is still a specialist floor, not general knowledge.',
    blurb: 'BSc or BA in the field',
    award: 1,
    penalty: -1,
    timeoutMs: 45_000,
    // Fixed to the tier, not a house rule: this floor is meant to move fast
    // rather than let one team camp on it indefinitely.
    maxStreak: 3,
  },
  msc: {
    id: 'msc',
    label: 'MSc',
    audience:
      'Someone with a master\'s degree in this field - MSc or MA level. Not general knowledge, and not something an educated non-specialist should reliably get.',
    blurb: 'MSc or MA in the field',
    award: 2,
    penalty: -1,
    timeoutMs: 45_000,
  },
  phd: {
    id: 'phd',
    label: 'Common Knowledge',
    audience:
      'A specialist: someone doing a PhD in this area, or with ten years or more working in it.',
    blurb: 'PhD, or 10+ years in the field',
    award: 5,
    penalty: -3,
    timeoutMs: 75_000,
  },
  professor: {
    id: 'professor',
    label: 'Dohhh',
    audience:
      'Twenty years or more in the field, an outright expert who follows current developments - the person for whom reading the literature is a morning habit.',
    blurb: '20+ years, and follows the literature',
    award: 15,
    penalty: -10,
    timeoutMs: 120_000,
  },
};

export const DIFFICULTY_ORDER: readonly Difficulty[] = ['bscba', 'msc', 'phd', 'professor'];

export interface RulesConfig {
  readonly targetScore: number;
  /**
   * `null` keeps the brief's unbounded negatives. Set to 0 to stop a team
   * being mathematically alive but psychologically finished (R-2) — rejected
   * as a default on purpose: capping it makes `professor` a free bet.
   */
  readonly scoreFloor: number | null;
  /**
   * `null` is spec-faithful: a correct answer always returns the turn to the
   * same team, forever. See R-1 for why this is the most dangerous line in the
   * brief, and set it to 3 if a playtest confirms it.
   */
  readonly maxCorrectStreakPerTurn: number | null;
  /** Crossing the target arms the endgame; the round then completes (R-5). */
  readonly finishTheRound: boolean;
  /** Arrivals after `game/started` spectate rather than mutate turn order (R-9). */
  readonly allowLateJoin: boolean;
  /**
   * Minimum teams, not players — two players on one team is not a game
   * (R-4). Floored at 1, not 2: the one legitimate reason to go below 2 is
   * solo mode, where the "opponent" is a local, unteamed auto-dealer that
   * deals and reveals categories but never joins a team or answers. The
   * PWA is the only caller that ever passes 1 - every host-facing form asks
   * for real teams, so the floor being 1 rather than 2 costs nothing there.
   */
  readonly minTeams: number;
}

export const DEFAULT_RULES: RulesConfig = {
  targetScore: 46,
  scoreFloor: null,
  maxCorrectStreakPerTurn: null,
  finishTheRound: false,
  allowLateJoin: false,
  minTeams: 2,
};

/**
 * Sane bounds on a host-authored target score. This is a wire-boundary value
 * (it rides in `game/created`), not just a UI form field, so a hand-crafted
 * event with `targetScore: 0` or a negative number must not be able to arm
 * the endgame on turn one, and `targetScore: Infinity` must not be able to
 * produce a divide-by-zero in the progress bar.
 */
const MIN_TARGET_SCORE = 1;
const MAX_TARGET_SCORE = 100_000;

/** Peers must agree on rules exactly, so unknown keys are dropped, not merged. */
export function normalizeRules(input: Partial<RulesConfig> | undefined): RulesConfig {
  const r = input ?? {};
  return {
    targetScore: clamp(
      numberOr(r.targetScore, DEFAULT_RULES.targetScore),
      MIN_TARGET_SCORE,
      MAX_TARGET_SCORE,
    ),
    scoreFloor:
      r.scoreFloor === null || r.scoreFloor === undefined
        ? DEFAULT_RULES.scoreFloor
        : clamp(numberOr(r.scoreFloor, 0), -MAX_TARGET_SCORE, MAX_TARGET_SCORE),
    maxCorrectStreakPerTurn:
      r.maxCorrectStreakPerTurn === null || r.maxCorrectStreakPerTurn === undefined
        ? DEFAULT_RULES.maxCorrectStreakPerTurn
        : Math.max(1, Math.floor(Number(r.maxCorrectStreakPerTurn))),
    finishTheRound: r.finishTheRound ?? DEFAULT_RULES.finishTheRound,
    allowLateJoin: r.allowLateJoin ?? DEFAULT_RULES.allowLateJoin,
    minTeams: Math.max(1, numberOr(r.minTeams, DEFAULT_RULES.minTeams)),
  };
}

function numberOr(value: unknown, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
