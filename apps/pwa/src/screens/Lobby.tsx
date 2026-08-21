import { SEED_PACK_HASH, startCheck, teamOf } from '@dohhh/engine';
import { ticketUrl } from '@dohhh/net';
import { Button, Card, Chip, Input } from '@heroui/react';
import { useState, type ReactNode } from 'react';

import { ticketFor, useApp } from '../lib/store.js';
import {
  ActionBar,
  ConnectionPill,
  Notice,
  PlayerTag,
  Screen,
  StalledWarning,
} from '../ui/atoms.jsx';
import { QrImage } from '../ui/qr.jsx';

/** Above this many devices in one mesh, warn: it is O(n^2) and untested (R-19). */
const MESH_COMFORT_LIMIT = 10;

export function Lobby(): ReactNode {
  const snapshot = useApp((s) => s.snapshot);
  const identity = useApp((s) => s.identity);
  const addTeam = useApp((s) => s.addTeam);
  const sitWith = useApp((s) => s.sitWith);
  const leaveCurrentTeam = useApp((s) => s.leaveCurrentTeam);
  const begin = useApp((s) => s.begin);
  const leave = useApp((s) => s.leave);
  const [teamName, setTeamName] = useState('');

  const state = snapshot?.state ?? null;
  if (state === null || identity === null || snapshot === null) {
    return (
      <Screen title="Lobby">
        <Notice>
          Waiting for the game to arrive from the other devices. If nothing happens, the code may be
          wrong or you may be on a different network.
        </Notice>
        <ActionBar>
          <Button variant="ghost" fullWidth onPress={leave}>
            Leave
          </Button>
        </ActionBar>
      </Screen>
    );
  }

  const myTeam = teamOf(state, identity.id);
  const gate = startCheck(state, identity.id);
  const isHost = state.hostId === identity.id;
  const ticket = ticketFor({ gameId: state.gameId, joinCode: state.joinCode });
  const packMatches = SEED_PACK_HASH.startsWith(ticket.packHash);
  const deviceCount = snapshot.peerCount + 1;

  return (
    <Screen
      title={state.name}
      subtitle={isHost ? 'You are hosting' : `Hosted by ${state.players[state.hostId]?.username ?? 'someone'}`}
      aside={<ConnectionPill status={snapshot.status} peerCount={snapshot.peerCount} />}
    >
      {!packMatches && (
        <Notice tone="danger">
          Your question pack does not match this game. You would be asked different questions from
          everyone else. Update both devices before playing.
        </Notice>
      )}

      <StalledWarning status={snapshot.status} peerCount={snapshot.peerCount} />

      {snapshot.diverged && (
        <Notice tone="warn">
          This device disagrees with another about what has happened in this game. That should not
          be possible; restart the game rather than playing on.
        </Notice>
      )}

      {deviceCount > MESH_COMFORT_LIMIT && (
        <Notice tone="warn">
          {deviceCount} devices connected. Every device connects to every other, so this has been
          tested to about eight. Expect it to get slow.
        </Notice>
      )}

      <Card>
        <Card.Header>
          <Card.Title>Invite</Card.Title>
          <Card.Description>Have them point a camera at this, or read the words out.</Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col gap-4">
          <QrImage value={ticketUrl(globalThis.location.origin + globalThis.location.pathname, ticket)} />
          <div className="flex flex-wrap justify-center gap-1.5">
            {state.joinCode.split('-').map((word, index) => (
              <Chip key={`${word}-${index}`} variant="soft" size="md" className="font-mono">
                {word}
              </Chip>
            ))}
          </div>
        </Card.Content>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>Teams</Card.Title>
          <Card.Description>
            Any number per team. Join one, or switch - joining another moves you off the last one.
          </Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3">
          {state.teams.length === 0 && (
            <p className="text-sm text-muted">No teams yet. Make the first one.</p>
          )}
          {state.teams.map((team) => {
            const mine = team.id === myTeam?.id;
            return (
              <div
                key={team.id}
                className={`rounded-xl border px-4 py-3 ${
                  mine ? 'border-primary/70 bg-primary/10' : 'border-default-200/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{team.name}</span>
                  <div className="flex items-center gap-2">
                    {mine && (
                      <Chip color="success" variant="soft" size="sm">
                        You
                      </Chip>
                    )}
                    <Button
                      variant={mine ? 'ghost' : 'secondary'}
                      size="sm"
                      onPress={() => (mine ? leaveCurrentTeam(team.id) : sitWith(team.id))}
                    >
                      {mine ? 'Leave' : 'Join'}
                    </Button>
                  </div>
                </div>
                <div className="mt-1.5 flex flex-col gap-0.5 text-sm text-muted">
                  {team.memberIds.length === 0 ? (
                    <span className="text-xs italic">empty</span>
                  ) : (
                    team.memberIds.map((id) => (
                      <PlayerTag
                        key={id}
                        id={id}
                        username={state.players[id]?.username ?? 'someone'}
                      />
                    ))
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex gap-2">
            <Input
              value={teamName}
              onChange={(event) => setTeamName(event.target.value)}
              placeholder="Team name"
              aria-label="New team name"
              maxLength={24}
              fullWidth
            />
            <Button
              variant="secondary"
              isDisabled={teamName.trim().length === 0}
              onPress={() => {
                addTeam(teamName.trim());
                setTeamName('');
              }}
            >
              Add
            </Button>
          </div>
        </Card.Content>
      </Card>

      {state.spectatorIds.length > 0 && (
        <Card variant="secondary">
          <Card.Header>
            <Card.Title className="text-base">Not on a team yet</Card.Title>
          </Card.Header>
          <Card.Content className="flex flex-col gap-1 text-sm text-muted">
            {state.spectatorIds.map((id) => (
              <PlayerTag key={id} id={id} username={state.players[id]?.username ?? 'someone'} />
            ))}
          </Card.Content>
        </Card>
      )}

      <Card variant="secondary">
        <Card.Header>
          <Card.Title className="text-base">This game</Card.Title>
        </Card.Header>
        <Card.Content className="flex flex-col gap-1 text-sm text-muted">
          <Line label="First to" value={`${state.rules.targetScore} points`} />
          <Line
            label="Correct answer"
            value={
              state.rules.maxCorrectStreakPerTurn === null
                ? 'keeps the turn, no limit'
                : `keeps the turn, max ${state.rules.maxCorrectStreakPerTurn}`
            }
          />
          <Line
            label="Scores"
            value={state.rules.scoreFloor === null ? 'can go negative' : 'floored at zero'}
          />
        </Card.Content>
      </Card>

      <ActionBar>
        {isHost ? (
          <>
            {!gate.ready && gate.reason !== null && (
              <p className="text-center text-xs text-muted">{gate.reason}</p>
            )}
            <Button variant="primary" size="lg" fullWidth isDisabled={!gate.ready} onPress={begin}>
              Start the game
            </Button>
          </>
        ) : (
          <div className="rounded-xl border border-default-200/40 px-4 py-3 text-center text-sm text-muted">
            {myTeam === undefined
              ? 'Pick a team, then wait for the host.'
              : 'Ready. Waiting for the host to start.'}
          </div>
        )}
        <Button variant="ghost" fullWidth onPress={leave}>
          Leave game
        </Button>
      </ActionBar>
    </Screen>
  );
}

function Line({ label, value }: { label: string; value: string }): ReactNode {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span>{label}</span>
      <span className="text-default-foreground">{value}</span>
    </div>
  );
}
