import {
  activeQuestion,
  activeTimeoutMs,
  canAnswer,
  canChooseDifficulty,
  canDraw,
  categoryById,
  DIFFICULTY_ORDER,
  DIFFICULTY_TIERS,
  isActingPlayer,
  questionById,
  SEED_PACK,
  scoreboard,
  teamOf,
  type Difficulty,
  type GameState,
  type TurnRecord,
} from '@dohhh/engine';
import { Button, Card, Chip, ProgressBar } from '@heroui/react';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

import { useApp } from '../lib/store.js';
import { ConnectionPill, Notice, Screen, TierBadge } from '../ui/atoms.jsx';

export function Play(): ReactNode {
  const snapshot = useApp((s) => s.snapshot);
  const identity = useApp((s) => s.identity);
  const deal = useApp((s) => s.deal);
  const bet = useApp((s) => s.bet);
  const answer = useApp((s) => s.answer);
  const callTime = useApp((s) => s.callTime);

  const state = snapshot?.state ?? null;
  if (state === null || identity === null || snapshot === null) return null;

  const me = identity.id;
  const rows = scoreboard(state);
  const acting = rows.find((row) => row.isActing);
  const myTeam = teamOf(state, me);
  const iAmActing = isActingPlayer(state, me);
  const question = activeQuestion(state, SEED_PACK);
  const category = state.active === null ? undefined : categoryById(state.active.categoryId);
  const lastTurn = state.history.at(-1) ?? null;

  return (
    <Screen
      title={acting === undefined ? state.name : `${acting.team.name} to play`}
      subtitle={
        state.suddenDeath
          ? 'Sudden death: the leaders are level and playing it out.'
          : state.endgameArmedRound !== null
            ? 'Final round: someone has crossed the line, so everyone gets an equal number of turns.'
            : `Round ${state.roundIndex + 1}, first to ${state.rules.targetScore}`
      }
      aside={<ConnectionPill status={snapshot.status} peerCount={snapshot.peerCount} />}
    >
      <Scores state={state} me={me} />

      {state.active === null ? (
        <BetweenTurns
          state={state}
          me={me}
          lastTurn={lastTurn}
          onDeal={deal}
          canDealNow={canDraw(state, me)}
        />
      ) : question === null ? (
        <ChooseTier
          state={state}
          canChoose={canChooseDifficulty(state, me)}
          categoryName={category?.name ?? state.active.categoryId}
          onPick={bet}
        />
      ) : (
        <LiveQuestion
          state={state}
          canAnswerNow={canAnswer(state, me)}
          iAmActing={iAmActing}
          prompt={question.question.prompt}
          options={question.options}
          repeat={state.active.repeat}
          categoryName={category?.name ?? state.active.categoryId}
          difficulty={state.active.difficulty ?? 'graduate'}
          onAnswer={answer}
          onTimeout={callTime}
          amOpponent={!iAmActing}
        />
      )}

      {myTeam === undefined && (
        <Notice>
          You are watching this one. You will be able to join a team for the next game.
        </Notice>
      )}
    </Screen>
  );
}

function Scores({ state, me }: { state: GameState; me: string }): ReactNode {
  const rows = scoreboard(state);
  const myTeamId = teamOf(state, me)?.id;
  return (
    <div className="flex flex-col gap-2">
      {rows.map((row) => (
        <div
          key={row.team.id}
          className={`rounded-xl border px-3 py-2 ${
            row.isActing ? 'border-primary/60 bg-primary/5' : 'border-default-200/30'
          }`}
        >
          <div className="flex items-baseline justify-between gap-3">
            <span className="flex min-w-0 items-center gap-2">
              <span className="truncate text-sm font-medium">{row.team.name}</span>
              {row.team.id === myTeamId && (
                <Chip color="success" variant="soft" size="sm">
                  you
                </Chip>
              )}
              {row.isActing && (
                <Chip color="accent" variant="soft" size="sm">
                  playing
                </Chip>
              )}
            </span>
            <span className="font-mono text-sm tabular-nums">{row.score}</span>
          </div>
          <ProgressBar
            value={Math.round(row.progress * 100)}
            aria-label={`${row.team.name} progress toward ${state.rules.targetScore}`}
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
        <p className="text-center text-xs text-default-600">
          {state.streak} correct in a row - the turn has not moved.
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
}: {
  state: GameState;
  me: string;
  lastTurn: TurnRecord | null;
  onDeal: () => void;
  canDealNow: boolean;
}): ReactNode {
  const actingTeam = scoreboard(state).find((row) => row.isActing)?.team;

  return (
    <div className="flex flex-col gap-4">
      {lastTurn !== null && <Outcome record={lastTurn} state={state} />}

      <Card>
        <Card.Header>
          <Card.Title>{actingTeam?.name ?? 'Next team'} are up</Card.Title>
          <Card.Description>
            {canDealNow
              ? 'You deal their category. They cannot deal their own - that is what stops them knowing the question in advance.'
              : 'An opposing team deals the category.'}
          </Card.Description>
        </Card.Header>
        {canDealNow && (
          <Card.Footer>
            <Button variant="primary" size="lg" fullWidth onPress={onDeal}>
              Deal a category
            </Button>
          </Card.Footer>
        )}
      </Card>

      {!canDealNow && isActingPlayer(state, me) && (
        <p className="text-center text-sm text-default-600">Waiting for your opponents to deal.</p>
      )}
    </div>
  );
}

function Outcome({ record, state }: { record: TurnRecord; state: GameState }): ReactNode {
  const question = questionById(SEED_PACK, record.questionId);
  const team = state.teams.find((t) => t.id === record.teamId);
  const correctText =
    question === undefined ? null : question.options[question.answer];

  return (
    <Card variant={record.correct ? 'secondary' : 'tertiary'}>
      <Card.Header>
        <Card.Title className="flex items-center justify-between gap-3 text-base">
          <span>
            {team?.name ?? 'They'}{' '}
            {record.timedOut ? 'ran out of time' : record.correct ? 'were right' : 'were wrong'}
          </span>
          <span
            className={`font-mono tabular-nums ${record.delta > 0 ? 'text-success-600' : 'text-danger-600'}`}
          >
            {record.delta > 0 ? `+${record.delta}` : record.delta}
          </span>
        </Card.Title>
      </Card.Header>
      {question !== undefined && (
        <Card.Content className="flex flex-col gap-2 text-sm">
          <p className="text-default-700">{question.prompt}</p>
          {!record.correct && correctText !== undefined && (
            <p>
              <span className="text-default-600">Answer: </span>
              <span className="font-medium text-success-700">{correctText}</span>
            </p>
          )}
          <p className="text-default-600">{question.explanation}</p>
        </Card.Content>
      )}
    </Card>
  );
}

function ChooseTier({
  state,
  canChoose,
  categoryName,
  onPick,
}: {
  state: GameState;
  canChoose: boolean;
  categoryName: string;
  onPick: (difficulty: Difficulty) => void;
}): ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <Card.Header>
          <Card.Description>Your category is</Card.Description>
          <Card.Title className="text-2xl">{categoryName}</Card.Title>
        </Card.Header>
        <Card.Content>
          <p className="text-sm text-default-600">
            {canChoose
              ? 'How hard do you want it? You are betting before you see the question.'
              : `Waiting for ${
                  scoreboard(state).find((row) => row.isActing)?.team.name ?? 'them'
                } to choose a level.`}
          </p>
        </Card.Content>
      </Card>

      {canChoose && (
        <div className="flex flex-col gap-3">
          {DIFFICULTY_ORDER.map((difficulty) => {
            const tier = DIFFICULTY_TIERS[difficulty];
            return (
              <button
                key={difficulty}
                type="button"
                onClick={() => onPick(difficulty)}
                className={`rounded-2xl border px-4 py-4 text-left transition hover:brightness-110 ${
                  {
                    graduate: 'border-tier-graduate/50 bg-tier-graduate/10',
                    phd: 'border-tier-phd/50 bg-tier-phd/10',
                    professor: 'border-tier-professor/50 bg-tier-professor/10',
                  }[difficulty]
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-medium">{tier.label}</span>
                  <span className="font-mono text-sm tabular-nums">
                    <span className="text-success-600">+{tier.award}</span>
                    <span className="text-default-500"> / </span>
                    <span className="text-danger-600">{tier.penalty}</span>
                  </span>
                </div>
                <p className="mt-1 text-xs text-default-600">{tier.blurb}</p>
                <p className="mt-0.5 text-xs text-default-500">
                  {tier.timeoutMs / 1000} seconds to answer
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
  const turnKey = `${state.active?.turnIndex ?? -1}:${difficulty}`;
  const remaining = useCountdown(turnKey, activeTimeoutMs(state));
  const nominated = state.active?.nominatedId;
  const nominatedName =
    nominated === undefined || nominated === null ? null : state.players[nominated]?.username ?? null;

  // Opponents call time, not the team on the clock, and they stagger by a
  // deterministic offset so five devices do not all fire the same event at once.
  useAutoTimeout({ enabled: amOpponent, remaining, state, onTimeout });

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <TierBadge difficulty={difficulty} />
        <span
          className={`font-mono text-sm tabular-nums ${remaining <= 10_000 ? 'text-danger-600' : 'text-default-600'}`}
        >
          {Math.max(0, Math.ceil(remaining / 1000))}s
        </span>
      </div>

      <Card>
        <Card.Header>
          <Card.Description>
            {categoryName}
            {repeat && ' - seen before, the pack ran dry'}
          </Card.Description>
          <Card.Title className="text-xl leading-snug">{prompt}</Card.Title>
        </Card.Header>
        <Card.Content className="flex flex-col gap-2.5">
          {options.map((option, index) => (
            <button
              key={option}
              type="button"
              disabled={!canAnswerNow}
              onClick={() => onAnswer(index)}
              className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                canAnswerNow
                  ? 'border-default-200/50 hover:border-primary/70 hover:bg-primary/10'
                  : 'cursor-default border-default-200/20 text-default-600'
              }`}
            >
              <span className="mr-2 font-mono text-xs text-default-500">
                {String.fromCharCode(65 + index)}
              </span>
              {option}
            </button>
          ))}
        </Card.Content>
      </Card>

      {iAmActing && nominatedName !== null && (
        <p className="text-center text-xs text-default-600">
          {nominatedName}&apos;s turn to answer for the team - though anyone on it can tap.
        </p>
      )}
      {!iAmActing && (
        <p className="text-center text-sm text-default-600">
          Their question. You can see it, so no helping.
        </p>
      )}
    </div>
  );
}

/**
 * Countdown from the moment this device first saw the question.
 *
 * Not from a timestamp in the event: clocks are not synchronised and a peer
 * that lies about its clock should not be able to shorten anyone's turn. The
 * cost is that timers differ slightly between devices, which is why the
 * timeout is an event any peer proposes rather than a deadline everyone
 * computes.
 */
function useCountdown(key: string, durationMs: number): number {
  const started = useRef<{ key: string; at: number }>({ key, at: Date.now() });
  const [now, setNow] = useState(() => Date.now());

  if (started.current.key !== key) started.current = { key, at: Date.now() };

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, []);

  return Math.max(0, started.current.at + durationMs - now);
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
