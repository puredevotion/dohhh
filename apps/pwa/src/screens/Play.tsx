import {
  activeQuestion,
  canAnswer,
  canChooseCategory,
  canChooseDifficulty,
  canDraw,
  categoryName,
  DIFFICULTY_ORDER,
  DIFFICULTY_TIERS,
  isActingPlayer,
  isBanned,
  questionById,
  scoreboard,
  teamOf,
  type CategoryId,
  type ContentPack,
  type Difficulty,
  type GameState,
  type Locale,
  type TurnRecord,
} from '@dohhh/engine';
import { Button, Card, Chip, ProgressBar } from '@heroui/react';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { packFor, SOLO_DEAL_DELAY_MS, useApp } from '../lib/store.js';
import { ConnectionPill, Notice, Screen, StalledWarning, TierBadge, useElapsed } from '../ui/atoms.jsx';

export function Play(): ReactNode {
  const { t } = useTranslation('play');
  const { t: tc } = useTranslation('common');
  const snapshot = useApp((s) => s.snapshot);
  const identity = useApp((s) => s.identity);
  const deal = useApp((s) => s.deal);
  const pickCategory = useApp((s) => s.pickCategory);
  const bet = useApp((s) => s.bet);
  const answer = useApp((s) => s.answer);
  const callTime = useApp((s) => s.callTime);
  const error = useApp((s) => s.error);
  const dismissError = useApp((s) => s.dismissError);
  const leave = useApp((s) => s.leave);
  const locale = useApp((s) => s.locale);
  const pack = packFor(locale);

  const state = snapshot?.state ?? null;
  if (state === null || identity === null || snapshot === null) return null;

  if (isBanned(state, identity.id)) {
    return (
      <Screen title={state.name}>
        <Notice tone="danger">{t('banned.notice')}</Notice>
        <Button variant="ghost" fullWidth onPress={leave}>
          {tc('actions.leave')}
        </Button>
      </Screen>
    );
  }

  const me = identity.id;
  const rows = scoreboard(state);
  const acting = rows.find((row) => row.isActing);
  const myTeam = teamOf(state, me);
  const iAmActing = isActingPlayer(state, me);
  const question = activeQuestion(state, pack);
  const active = state.active;
  const activeCategoryName = active?.categoryId == null ? undefined : categoryName(active.categoryId, locale);
  const lastTurn = state.history.at(-1) ?? null;
  // minTeams: 1 is only ever set by hostSolo - see rules.ts. A solo game has
  // no network at all (createLocalTransport), so a connection pill or a
  // "nobody's here" warning would just be misleading chrome, not signal.
  const solo = state.rules.minTeams === 1;

  return (
    <Screen
      title={acting === undefined ? state.name : t('title.team_to_play', { team: acting.team.name })}
      subtitle={
        state.suddenDeath
          ? t('subtitle.sudden_death')
          : state.endgameArmedRound !== null
            ? t('subtitle.final_round')
            : t('subtitle.round', { round: state.roundIndex + 1, target: state.rules.targetScore })
      }
      aside={
        solo ? undefined : (
          <ConnectionPill
            status={snapshot.status}
            peerCount={snapshot.peerCount}
            everConnected={snapshot.everConnected}
          />
        )
      }
    >
      {error !== null && (
        <Notice tone="danger">
          <div className="flex items-center justify-between gap-3">
            <span>{error}</span>
            <Button variant="ghost" size="sm" onPress={dismissError}>
              {t('dismiss')}
            </Button>
          </div>
        </Notice>
      )}

      {!solo && (
        <StalledWarning
          status={snapshot.status}
          peerCount={snapshot.peerCount}
          everConnected={snapshot.everConnected}
          // Mid-game, a drop is urgent - no reason to wait out the same 2
          // minutes a pre-game "nobody's here yet" lobby gets.
          afterMs={15_000}
        />
      )}

      {!solo && <UnexpectedPeerWarning state={state} peerCount={snapshot.peerCount} />}

      <TurnAnnouncer state={state} lastTurn={lastTurn} actingTeamName={acting?.team.name ?? null} />

      <Scores state={state} me={me} />

      {active === null ? (
        <BetweenTurns
          state={state}
          me={me}
          lastTurn={lastTurn}
          onDeal={deal}
          canDealNow={canDraw(state, me)}
          pack={pack}
        />
      ) : active.categoryId === null ? (
        <ChooseCategory
          state={state}
          options={active.categoryOptions}
          canChoose={canChooseCategory(state, me)}
          onPick={pickCategory}
          onTimeout={callTime}
          locale={locale}
        />
      ) : question === null ? (
        <ChooseTier
          state={state}
          canChoose={canChooseDifficulty(state, me)}
          categoryName={activeCategoryName ?? active.categoryId}
          onPick={bet}
          onTimeout={callTime}
        />
      ) : (
        <LiveQuestion
          state={state}
          canAnswerNow={canAnswer(state, me)}
          iAmActing={iAmActing}
          prompt={question.question.prompt}
          options={question.options}
          repeat={active.repeat}
          categoryName={activeCategoryName ?? active.categoryId}
          difficulty={active.difficulty ?? 'bscba'}
          onAnswer={answer}
          onTimeout={callTime}
          amOpponent={!iAmActing}
        />
      )}

      {myTeam === undefined && <Notice>{t('watching_notice')}</Notice>}
    </Screen>
  );
}

/**
 * Anyone in the WebRTC room gets full backfill (that is what "no server, no
 * gatekeeper" means) - a stranger who merely learned the join code can sit
 * in as a silent observer with no signal ever telling the real players
 * they're there, short of counting connections by hand. This counts for
 * them: known players vs. actual peers, with a grace window before
 * flagging anything, since a genuine joiner's own `player/joined` takes a
 * moment to land after their connection does.
 */
function UnexpectedPeerWarning({
  state,
  peerCount,
}: {
  state: GameState;
  peerCount: number;
}): ReactNode {
  const { t } = useTranslation('play');
  const settled = useElapsed(5_000);
  const knownPlayers = Object.keys(state.players).length;
  const deviceCount = peerCount + 1;
  if (!settled || deviceCount <= knownPlayers) return null;
  return (
    <Notice tone="warn">
      {t('unexpected_peer', { count: knownPlayers, deviceCount, knownPlayers })}
    </Notice>
  );
}

/**
 * Sighted players get instant visual feedback the moment a score changes or
 * the turn passes - a screen-reader user got nothing proactive at all until
 * this, only whatever they happened to already be focused on. One
 * `aria-live` region, updated on the two events that actually matter here:
 * a turn resolving (right/wrong/timed out, and by how much) and the turn
 * passing to a new team.
 */
function TurnAnnouncer({
  state,
  lastTurn,
  actingTeamName,
}: {
  state: GameState;
  lastTurn: TurnRecord | null;
  actingTeamName: string | null;
}): ReactNode {
  const { t } = useTranslation('play');
  const [message, setMessage] = useState('');
  const lastAnnouncedTurn = useRef<number | null>(null);
  const lastAnnouncedActor = useRef<string | null>(null);

  // One effect, not two: a wrong or timed-out answer passing the turn changes
  // both `lastTurn` and `actingTeamName` in the same state transition, and
  // two independent effects both calling setMessage in that case would race
  // - whichever runs second wins, silently dropping the outcome half of the
  // announcement in exactly the case (turn passing) where it matters most.
  useEffect(() => {
    const turnChanged = lastTurn !== null && lastAnnouncedTurn.current !== lastTurn.turnIndex;
    const actorChanged = actingTeamName !== null && lastAnnouncedActor.current !== actingTeamName;
    if (!turnChanged && !actorChanged) return;

    const parts: string[] = [];
    if (turnChanged && lastTurn !== null) {
      lastAnnouncedTurn.current = lastTurn.turnIndex;
      const team = state.teams.find((team) => team.id === lastTurn.teamId)?.name ?? t('announcer.they');
      const outcome = lastTurn.timedOut
        ? t('announcer.ran_out_of_time')
        : lastTurn.correct
          ? t('announcer.were_right')
          : t('announcer.were_wrong');
      const delta = lastTurn.delta > 0 ? `+${lastTurn.delta}` : `${lastTurn.delta}`;
      parts.push(t('announcer.outcome', { team, outcome, delta }));
    }
    if (actorChanged && actingTeamName !== null) {
      lastAnnouncedActor.current = actingTeamName;
      parts.push(t('announcer.turn', { team: actingTeamName }));
    }
    setMessage(parts.join(' '));
  }, [lastTurn, actingTeamName, state.teams]);

  return (
    <div aria-live="polite" role="status" className="sr-only">
      {message}
    </div>
  );
}

function Scores({ state, me }: { state: GameState; me: string }): ReactNode {
  const { t } = useTranslation('play');
  const rows = scoreboard(state);
  const myTeamId = teamOf(state, me)?.id;
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row) => (
        <div
          key={row.team.id}
          className={`rounded-xl border px-3 py-2 ${
            row.isActing ? 'border-accent/60 bg-accent/5' : 'border-border/30'
          }`}
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="flex min-w-0 items-center gap-2">
              <span className="truncate text-sm font-medium">{row.team.name}</span>
              {row.team.id === myTeamId && (
                <Chip color="success" variant="soft" size="sm">
                  {t('scores.you')}
                </Chip>
              )}
              {row.isActing && (
                <Chip color="accent" variant="soft" size="sm">
                  {t('scores.playing')}
                </Chip>
              )}
            </span>
            <span className="font-mono text-sm tabular-nums">{row.score}</span>
          </div>
          <ProgressBar
            value={Math.round(row.progress * 100)}
            aria-label={t('scores.progress_label', { team: row.team.name, target: state.rules.targetScore })}
            size="sm"
            color={row.isLeader ? 'success' : 'default'}
            className="mt-2"
          >
            <ProgressBar.Track>
              <ProgressBar.Fill style={{ width: `${Math.round(row.progress * 100)}%` }} />
            </ProgressBar.Track>
          </ProgressBar>
        </div>
      ))}
      {state.streak > 1 && (
        <p className="text-center text-xs text-muted">
          {t('scores.streak', { count: state.streak })}
        </p>
      )}
    </div>
  );
}

/**
 * The gap between turns, which is also where the last answer is explained.
 *
 * The engine has no "reveal" phase: a resolved turn simply has no active
 * question. So this panel does double duty, and the explanation is here rather
 * than in a modal because the point is for the whole table to read it (R-18).
 */
function BetweenTurns({
  state,
  me,
  lastTurn,
  onDeal,
  canDealNow,
  pack,
}: {
  state: GameState;
  me: string;
  lastTurn: TurnRecord | null;
  onDeal: () => void;
  canDealNow: boolean;
  pack: ContentPack;
}): ReactNode {
  const { t } = useTranslation('play');
  const actingTeam = scoreboard(state).find((row) => row.isActing)?.team;

  return (
    <div className="flex flex-col gap-4">
      {lastTurn !== null && <Outcome record={lastTurn} state={state} pack={pack} />}

      <Card>
        <Card.Header>
          <Card.Title>
            {t('between_turns.title', { team: actingTeam?.name ?? t('between_turns.next_team') })}
          </Card.Title>
          <Card.Description>
            {canDealNow
              ? t('between_turns.description_can_deal')
              : state.rules.minTeams === 1
                ? t('between_turns.description_solo_dealing')
                : t('between_turns.description_opponent_dealing')}
          </Card.Description>
        </Card.Header>
        {canDealNow && (
          <Card.Footer>
            <Button variant="primary" size="lg" fullWidth onPress={onDeal}>
              {t('between_turns.deal_button')}
            </Button>
          </Card.Footer>
        )}
      </Card>

      {!canDealNow && isActingPlayer(state, me) && (
        state.rules.minTeams === 1 ? (
          <SoloDealCountdown state={state} />
        ) : (
          <p className="text-center text-sm text-muted">{t('between_turns.waiting_for_opponents')}</p>
        )
      )}
    </div>
  );
}

/**
 * The solo dealer's between-turns pause, visible rather than silent: a
 * countdown so it's clear something is about to happen (not stuck), and a
 * "Continue" button because the outcome card above is worth reading once,
 * not necessarily for the full pause on every turn - see the delay's own
 * rationale on `attachSoloBot` in store.ts.
 */
function SoloDealCountdown({ state }: { state: GameState }): ReactNode {
  const { t } = useTranslation('play');
  const { t: tc } = useTranslation('common');
  const continueSolo = useApp((s) => s.continueSolo);
  const remaining = useCountdown(`${state.gameId}:${state.turnIndex}:solo-deal`, SOLO_DEAL_DELAY_MS);
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border/40 px-4 py-3">
      <span className="font-mono text-sm tabular-nums text-muted">
        {t('solo_deal_countdown.next_question_in', { seconds: Math.max(0, Math.ceil(remaining / 1000)) })}
      </span>
      <Button variant="secondary" size="sm" onPress={continueSolo}>
        {tc('actions.continue')}
      </Button>
    </div>
  );
}

function Outcome({
  record,
  state,
  pack,
}: {
  record: TurnRecord;
  state: GameState;
  pack: ContentPack;
}): ReactNode {
  const { t } = useTranslation('play');
  const question = questionById(pack, record.questionId);
  const team = state.teams.find((team) => team.id === record.teamId);
  const correctText = question?.options[question.answer];
  const outcome = record.timedOut
    ? t('outcome.ran_out_of_time')
    : record.correct
      ? t('outcome.were_right')
      : t('outcome.were_wrong');

  return (
    <Card variant={record.correct ? 'secondary' : 'tertiary'}>
      <Card.Header>
        <Card.Title className="flex items-center justify-between gap-3 text-base">
          <span>
            {team?.name ?? t('outcome.they')} {outcome}
          </span>
          <span
            className={`font-mono tabular-nums ${record.delta > 0 ? 'text-success' : 'text-danger-text'}`}
          >
            {record.delta > 0 ? `+${record.delta}` : record.delta}
          </span>
        </Card.Title>
      </Card.Header>
      {question !== undefined && (
        <Card.Content className="flex flex-col gap-2 text-sm">
          <p className="text-default-foreground">{question.prompt}</p>
          {record.chosenText !== null && (
            <p>
              <span className="text-muted">
                {record.correct ? t('outcome.answered') : t('outcome.they_said')}
              </span>
              <span
                className={`font-medium ${record.correct ? 'text-success' : 'text-danger-text'}`}
              >
                {record.chosenText}
              </span>
            </p>
          )}
          {!record.correct && correctText !== undefined && (
            <p>
              <span className="text-muted">{t('outcome.answer')}</span>
              <span className="font-medium text-success">{correctText}</span>
            </p>
          )}
          <p className="text-muted">{question.explanation}</p>
        </Card.Content>
      )}
    </Card>
  );
}

/**
 * Three categories, picked from the bag, offered to whoever is dealing.
 * Nothing here is a bet - the acting team learns which one only once someone
 * off their own team commits to it (R-10).
 */
function ChooseCategory({
  state,
  options,
  canChoose,
  onPick,
  onTimeout,
  locale,
}: {
  state: GameState;
  options: readonly CategoryId[];
  canChoose: boolean;
  locale: Locale;
  onPick: (categoryId: CategoryId) => void;
  onTimeout: () => void;
}): ReactNode {
  const { t } = useTranslation('play');
  const turnIndex = state.active?.turnIndex ?? -1;
  const picked = useRef<number | null>(null);
  const [pending, setPending] = useState(false);
  if (picked.current !== turnIndex) {
    picked.current = null;
    if (pending) setPending(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <Card.Header>
          <Card.Title>{t('choose_category.title')}</Card.Title>
          <Card.Description>
            {canChoose
              ? t('choose_category.description_can_choose')
              : state.rules.minTeams === 1
                ? t('choose_category.description_solo_revealing')
                : t('choose_category.description_opponent_choosing')}
          </Card.Description>
        </Card.Header>
      </Card>

      <PhaseTimer
        turnPhaseKey={`${state.gameId}:${turnIndex}:category`}
        durationMs={DIFFICULTY_TIERS.bscba.timeoutMs}
        state={state}
        onTimeout={onTimeout}
      />

      {canChoose && (
        <div className="flex flex-col gap-3">
          {options.map((categoryId) => {
            const label = categoryName(categoryId, locale);
            return (
              <button
                key={categoryId}
                type="button"
                disabled={pending}
                onClick={() => {
                  if (picked.current === turnIndex) return;
                  picked.current = turnIndex;
                  setPending(true);
                  onPick(categoryId);
                }}
                className="no-select rounded-2xl border border-border/40 px-4 py-4 text-left transition hover:border-accent/60 hover:bg-accent/5 disabled:cursor-default disabled:opacity-60"
              >
                <span className="font-medium">{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function ChooseTier({
  state,
  canChoose,
  categoryName,
  onPick,
  onTimeout,
}: {
  state: GameState;
  canChoose: boolean;
  categoryName: string;
  onPick: (difficulty: Difficulty) => void;
  onTimeout: () => void;
}): ReactNode {
  const { t } = useTranslation('play');
  const turnIndex = state.active?.turnIndex ?? -1;
  const picked = useRef<number | null>(null);
  const [pending, setPending] = useState(false);
  if (picked.current !== turnIndex) {
    picked.current = null;
    if (pending) setPending(false);
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <Card.Header>
          <Card.Description>{t('choose_tier.your_category_is')}</Card.Description>
          <Card.Title className="text-2xl">{categoryName}</Card.Title>
        </Card.Header>
        <Card.Content>
          <p className="text-sm text-muted">
            {canChoose
              ? t('choose_tier.betting_question')
              : t('choose_tier.waiting_for_team', {
                  team: scoreboard(state).find((row) => row.isActing)?.team.name ?? t('choose_tier.waiting_for_them'),
                })}
          </p>
        </Card.Content>
      </Card>

      <PhaseTimer
        turnPhaseKey={`${state.gameId}:${turnIndex}:tier`}
        durationMs={DIFFICULTY_TIERS.bscba.timeoutMs}
        state={state}
        onTimeout={onTimeout}
      />

      {canChoose && (
        <div className="flex flex-col gap-3">
          {DIFFICULTY_ORDER.map((difficulty) => {
            const tier = DIFFICULTY_TIERS[difficulty];
            return (
              <button
                key={difficulty}
                type="button"
                disabled={pending}
                onClick={() => {
                  if (picked.current === turnIndex) return;
                  picked.current = turnIndex;
                  setPending(true);
                  onPick(difficulty);
                }}
                className={`no-select rounded-2xl border px-4 py-4 text-left transition hover:brightness-110 disabled:cursor-default disabled:opacity-60 ${
                  {
                    bscba: 'border-tier-bscba/50 bg-tier-bscba/10',
                    msc: 'border-tier-msc/50 bg-tier-msc/10',
                    phd: 'border-tier-phd/50 bg-tier-phd/10',
                    professor: 'border-tier-professor/50 bg-tier-professor/10',
                  }[difficulty]
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium">{tier.label}</span>
                  <span className="font-mono text-sm tabular-nums">
                    <span className="text-success">+{tier.award}</span>
                    <span className="text-muted"> / </span>
                    <span className="text-danger-text">{tier.penalty}</span>
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted">
                  {t('choose_tier.seconds_to_answer', { seconds: tier.timeoutMs / 1000 })}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function LiveQuestion({
  state,
  canAnswerNow,
  iAmActing,
  prompt,
  options,
  repeat,
  categoryName,
  difficulty,
  onAnswer,
  onTimeout,
  amOpponent,
}: {
  state: GameState;
  canAnswerNow: boolean;
  iAmActing: boolean;
  prompt: string;
  options: readonly string[];
  repeat: boolean;
  categoryName: string;
  difficulty: Difficulty;
  onAnswer: (index: number) => void;
  onTimeout: () => void;
  amOpponent: boolean;
}): ReactNode {
  const { t } = useTranslation('play');
  const turnKey = `${state.gameId}:${state.active?.turnIndex ?? -1}:answer:${difficulty}`;
  // activeTimeoutMs(state) would also work here, but LiveQuestion only ever
  // renders once a difficulty is chosen (that's what makes `difficulty` a
  // required prop rather than optional) - reading the tier table directly
  // from it says so in the type, rather than routing through a selector
  // whose whole point is handling the "not chosen yet" case this call site
  // structurally can't be in.
  const remaining = useCountdown(turnKey, DIFFICULTY_TIERS[difficulty].timeoutMs);
  const lowTimeMessage = useLowTimeAnnouncement(remaining, turnKey);
  const nominated = state.active?.nominatedId;
  const nominatedName = nominated == null ? null : state.players[nominated]?.username ?? null;

  // Opponents call time, not the team on the clock, and they stagger by a
  // deterministic offset so five devices do not all fire the same event at
  // once. Solo has no opponents at all - the acting player is the only
  // human in the game - so it must be able to time itself out too, or a
  // missed answer just hangs forever with nobody else there to call it.
  const solo = state.rules.minTeams === 1;
  useAutoTimeout({ enabled: solo || amOpponent, remaining, state, onTimeout });

  // canAnswerNow only flips false once the store's own re-render lands, which
  // is a real gap on mobile browsers that can fire duplicate touch+click
  // events within one synchronous tick - disabling immediately on the first
  // tap, independent of that round trip, is what actually closes it.
  const turnIndex = state.active?.turnIndex ?? -1;
  const answered = useRef<number | null>(null);
  const [pending, setPending] = useState(false);
  if (answered.current !== turnIndex) {
    answered.current = null;
    if (pending) setPending(false);
  }
  const locked = pending || !canAnswerNow;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <TierBadge difficulty={difficulty} />
        <span
          className={`font-mono text-sm tabular-nums ${remaining <= 10_000 ? 'text-danger-text' : 'text-muted'}`}
        >
          {Math.max(0, Math.ceil(remaining / 1000))}s
        </span>
        <span aria-live="assertive" role="status" className="sr-only">
          {lowTimeMessage}
        </span>
      </div>

      <Card>
        <Card.Header>
          <Card.Description>
            {categoryName}
            {repeat && t('live_question.repeat_suffix')}
          </Card.Description>
          <Card.Title className="text-xl leading-snug">{prompt}</Card.Title>
        </Card.Header>
        <Card.Content className="flex flex-col gap-2.5">
          {options.map((option, index) => (
            <button
              key={option}
              type="button"
              disabled={locked}
              onClick={() => {
                if (answered.current === turnIndex) return;
                answered.current = turnIndex;
                setPending(true);
                onAnswer(index);
              }}
              className={`no-select rounded-xl border px-4 py-3 text-left text-sm transition ${
                !locked
                  ? 'border-border/50 hover:border-accent/70 hover:bg-accent/10'
                  : 'cursor-default border-border/20 text-muted'
              }`}
            >
              <span className="mr-2 font-mono text-xs text-muted">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          ))}
        </Card.Content>
      </Card>

      {iAmActing && nominatedName !== null && (
        <p className="text-center text-xs text-muted">
          {t('live_question.nominated_note', { name: nominatedName })}
        </p>
      )}
      {!iAmActing && (
        <p className="text-center text-sm text-muted">{t('live_question.opponent_note')}</p>
      )}

      <CallTimeButton onPress={onTimeout} />
    </div>
  );
}

/** Any peer may call time (R-3) - a stuck turn should never need to wait out a stagger nobody's device is running. */
function CallTimeButton({ onPress }: { onPress: () => void }): ReactNode {
  const { t } = useTranslation('play');
  return (
    <Button variant="ghost" size="sm" fullWidth onPress={onPress}>
      {t('call_time_button')}
    </Button>
  );
}

/**
 * The category-pick and difficulty-pick phases used to have no timer or
 * timeout path at all: an opponent who walks away mid-pick left the whole
 * table stuck with no countdown and no way out. This gives them the same
 * "doing nothing still costs the cheapest tier" treatment the reducer
 * already applies to a timeout with no difficulty chosen yet (turn/timeout
 * defaults to bscba - see reducer.ts), rather than leaving these two
 * phases exempt from having a clock at all.
 */
function PhaseTimer({
  turnPhaseKey,
  durationMs,
  state,
  onTimeout,
}: {
  turnPhaseKey: string;
  durationMs: number;
  state: GameState;
  onTimeout: () => void;
}): ReactNode {
  const { t } = useTranslation('play');
  const remaining = useCountdown(turnPhaseKey, durationMs);
  const lowTimeMessage = useLowTimeAnnouncement(remaining, turnPhaseKey);
  const me = useApp((s) => s.identity?.id ?? '');
  const amOpponent = !isActingPlayer(state, me);
  // Same reasoning as LiveQuestion: solo has no opponent to call time, so
  // the acting (and only) player has to be able to time itself out.
  const solo = state.rules.minTeams === 1;
  useAutoTimeout({ enabled: solo || amOpponent, remaining, state, onTimeout });

  return (
    <div className="flex items-center justify-between gap-3">
      <span
        className={`font-mono text-sm tabular-nums ${remaining <= 10_000 ? 'text-danger-text' : 'text-muted'}`}
      >
        {t('phase_timer.seconds_to_decide', { seconds: Math.max(0, Math.ceil(remaining / 1000)) })}
      </span>
      <span aria-live="assertive" role="status" className="sr-only">
        {lowTimeMessage}
      </span>
      <Button variant="ghost" size="sm" onPress={onTimeout}>
        {t('phase_timer.call_time')}
      </Button>
    </div>
  );
}

/**
 * Countdown from the moment this device first saw this exact turn phase,
 * persisted to localStorage so a reload mid-turn (this app supports
 * resuming one, per App.tsx) restores the real elapsed time instead of
 * silently resetting the clock back to the full duration while the actual,
 * opponent-enforced timeout keeps running on schedule regardless.
 *
 * Not from a timestamp in the event, still: clocks are not synchronised and
 * a peer that lies about its clock should not be able to shorten anyone's
 * turn. The cost is that timers differ slightly between devices, which is
 * why the timeout is an event any peer proposes rather than a deadline
 * everyone computes.
 */
function useCountdown(key: string, durationMs: number): number {
  const started = useRef<{ key: string; at: number }>({ key, at: readOrStampTurnStart(key) });
  const [now, setNow] = useState(() => Date.now());

  if (started.current.key !== key) started.current = { key, at: readOrStampTurnStart(key) };

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, []);

  return Math.max(0, started.current.at + durationMs - now);
}

const TURN_START_KEY = 'dohhh.turnStart.v1';

/** One slot, overwritten every phase change - only the current turn's phase ever needs restoring. */
function readOrStampTurnStart(key: string): number {
  try {
    const raw = globalThis.localStorage?.getItem(TURN_START_KEY);
    const parsed = raw === null || raw === undefined ? null : (JSON.parse(raw) as { key?: string; at?: number });
    if (parsed?.key === key && typeof parsed.at === 'number') return parsed.at;
  } catch {
    /* corrupted or unavailable - fall through to a fresh stamp */
  }
  const at = Date.now();
  try {
    globalThis.localStorage?.setItem(TURN_START_KEY, JSON.stringify({ key, at }));
  } catch {
    /* private mode or quota - the countdown just won't survive a reload this time */
  }
  return at;
}

/**
 * The only signal that time is short was a colour change on the visible
 * countdown - nothing a screen-reader user would ever notice. Announces
 * once, the moment remaining time first crosses ten seconds, per turn phase.
 */
function useLowTimeAnnouncement(remaining: number, key: string): string {
  const { t } = useTranslation('play');
  const announcedFor = useRef<string | null>(null);
  if (remaining > 10_000 || remaining <= 0) {
    if (remaining > 10_000) announcedFor.current = null;
    return '';
  }
  if (announcedFor.current === key) return '';
  announcedFor.current = key;
  return t('low_time_announcement');
}

function useAutoTimeout({
  enabled,
  remaining,
  state,
  onTimeout,
}: {
  enabled: boolean;
  remaining: number;
  state: GameState;
  onTimeout: () => void;
}): void {
  const fired = useRef<number | null>(null);
  const turnIndex = state.active?.turnIndex ?? -1;
  const stagger = useMemo(() => {
    const me = useApp.getState().identity?.id ?? '';
    const opponents = Object.keys(state.players)
      .filter((id) => !isActingPlayer(state, id))
      .sort();
    return Math.max(0, opponents.indexOf(me)) * 600;
  }, [state]);

  useEffect(() => {
    if (!enabled || remaining > 0 || turnIndex < 0) return;
    if (fired.current === turnIndex) return;
    fired.current = turnIndex;
    const id = setTimeout(onTimeout, stagger);
    return () => clearTimeout(id);
  }, [enabled, remaining, turnIndex, stagger, onTimeout]);
}
