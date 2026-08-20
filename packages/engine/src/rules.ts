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
  graduate: {
    id: 'graduate',
    label: 'University graduate',
    audience:
      'Someone with a master\'s degree in this field - MSc or MA level. Not general knowledge, and not something an educated non-specialist should reliably get.',
    blurb: 'MSc or MA in the field',
    award: 1,
    penalty: -1,
    timeoutMs: 45_000,
  },
  phd: {
    id: 'phd',
    label: 'PhD',
    audience:
      'A specialist: someone doing a PhD in this area, or with ten years or more working in it.',
    blurb: 'PhD, or 10+ years in the field',
    award: 5,
    penalty: -3,
    timeoutMs: 75_000,
  },
  professor: {
    id: 'professor',
    label: 'Post-doc / professor',
    audience:
      'Twenty years or more in the field, an outright expert who follows current developments - the person for whom reading the literature is a morning habit.',
    blurb: '20+ years, and follows the literature',
    award: 15,
    penalty: -10,
    timeoutMs: 120_000,
  },
};

export const DIFFICULTY_ORDER: readonly Difficulty[] = ['graduate', 'phd', 'professor'];

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
  /** Minimum teams, not players — two players on one team is not a game (R-4). */
  readonly minTeams: number;
}

export const DEFAULT_RULES: RulesConfig = {
  targetScore: 150,
  scoreFloor: null,
  maxCorrectStreakPerTurn: null,
  finishTheRound: true,
  allowLateJoin: false,
  minTeams: 2,
};

/** Peers must agree on rules exactly, so unknown keys are dropped, not merged. */
export function normalizeRules(input: Partial<RulesConfig> | undefined): RulesConfig {
  const r = input ?? {};
  return {
    targetScore: numberOr(r.targetScore, DEFAULT_RULES.targetScore),
    scoreFloor: r.scoreFloor === null || r.scoreFloor === undefined ? DEFAULT_RULES.scoreFloor : Number(r.scoreFloor),
    maxCorrectStreakPerTurn:
      r.maxCorrectStreakPerTurn === null || r.maxCorrectStreakPerTurn === undefined
        ? DEFAULT_RULES.maxCorrectStreakPerTurn
        : Math.max(1, Math.floor(Number(r.maxCorrectStreakPerTurn))),
    finishTheRound: r.finishTheRound ?? DEFAULT_RULES.finishTheRound,
    allowLateJoin: r.allowLateJoin ?? DEFAULT_RULES.allowLateJoin,
    minTeams: Math.max(2, numberOr(r.minTeams, DEFAULT_RULES.minTeams)),
  };
}

function numberOr(value: unknown, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}
