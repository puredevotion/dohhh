import { confusablePlayerPairs, isBanned, startCheck, teamOf } from '@dohhh/engine';
import { ticketUrl } from '@dohhh/net';
import { Button, Card, Chip, Input } from '@heroui/react';
import { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation('lobby');
  const { t: tc } = useTranslation('common');
  const snapshot = useApp((s) => s.snapshot);
  const identity = useApp((s) => s.identity);
  const locale = useApp((s) => s.locale);
  const addTeam = useApp((s) => s.addTeam);
  const sitWith = useApp((s) => s.sitWith);
  const leaveCurrentTeam = useApp((s) => s.leaveCurrentTeam);
  const setRoomLocked = useApp((s) => s.setRoomLocked);
  const kickPlayer = useApp((s) => s.kickPlayer);
  const begin = useApp((s) => s.begin);
  const leave = useApp((s) => s.leave);
  const error = useApp((s) => s.error);
  const dismissError = useApp((s) => s.dismissError);
  const [teamName, setTeamName] = useState('');

  const state = snapshot?.state ?? null;
  if (state === null || identity === null || snapshot === null) {
    return (
      <Screen title="Lobby">
        <Notice>{t('waiting_for_game')}</Notice>
        <ActionBar>
          <Button variant="ghost" fullWidth onPress={leave}>
            {tc('actions.leave')}
          </Button>
        </ActionBar>
      </Screen>
    );
  }

  if (isBanned(state, identity.id)) {
    return (
      <Screen title={state.name}>
        <Notice tone="danger">{t('removed')}</Notice>
        <ActionBar>
          <Button variant="ghost" fullWidth onPress={leave}>
            {tc('actions.leave')}
          </Button>
        </ActionBar>
      </Screen>
    );
  }

  const myTeam = teamOf(state, identity.id);
  const gate = startCheck(state, identity.id);
  const isHost = state.hostId === identity.id;
  const ticket = ticketFor({ gameId: state.gameId, joinCode: state.joinCode }, locale);
  const packMatches = snapshot.state?.packHash === undefined || ticket.packHash.startsWith(snapshot.state.packHash);
  const deviceCount = snapshot.peerCount + 1;

  return (
    <Screen
      title={state.name}
      subtitle={
        isHost
          ? t('hosting_you')
          : t('hosting_other', { name: state.players[state.hostId]?.username ?? t('someone') })
      }
      aside={
        <ConnectionPill
          status={snapshot.status}
          peerCount={snapshot.peerCount}
          everConnected={snapshot.everConnected}
        />
      }
    >
      {!packMatches && <Notice tone="danger">{t('pack_mismatch')}</Notice>}

      <StalledWarning
        status={snapshot.status}
        peerCount={snapshot.peerCount}
        everConnected={snapshot.everConnected}
      />

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

      {snapshot.diverged && <Notice tone="warn">{t('diverged')}</Notice>}

      {snapshot.peerVersionMismatch && <Notice tone="warn">{t('peer_version_mismatch')}</Notice>}

      {confusablePlayerPairs(state).map(({ a, b }) => (
        <Notice key={`${a}-${b}`} tone="warn">
          {t('confusable_names', {
            a: state.players[a]?.username ?? t('someone'),
            b: state.players[b]?.username ?? t('someone'),
          })}
        </Notice>
      ))}

      {deviceCount > MESH_COMFORT_LIMIT && (
        <Notice tone="warn">{t('mesh_warning', { count: deviceCount })}</Notice>
      )}

      <Card>
        <Card.Header>
          <Card.Title>{t('invite.title')}</Card.Title>
          <Card.Description>{t('invite.description')}</Card.Description>
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
          <Card.Title>{t('teams.title')}</Card.Title>
          <Card.Description>{t('teams.description')}</Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col gap-3">
          {state.teams.length === 0 && (
            <p className="text-sm text-muted">{t('teams.none_yet')}</p>
          )}
          {state.teams.map((team) => {
            const mine = team.id === myTeam?.id;
            return (
              <div
                key={team.id}
                className={`rounded-xl border px-4 py-3 ${
                  mine ? 'border-accent/70 bg-accent/10' : 'border-border/40'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{team.name}</span>
                  <div className="flex items-center gap-2">
                    {mine && (
                      <Chip color="success" variant="soft" size="sm">
                        {t('teams.you')}
                      </Chip>
                    )}
                    <Button
                      variant={mine ? 'ghost' : 'secondary'}
                      size="sm"
                      onPress={() => (mine ? leaveCurrentTeam(team.id) : sitWith(team.id))}
                    >
                      {mine ? t('teams.leave') : t('teams.join')}
                    </Button>
                  </div>
                </div>
                <div className="mt-1.5 flex flex-col gap-1 text-sm text-muted">
                  {team.memberIds.length === 0 ? (
                    <span className="text-xs italic">{t('teams.empty')}</span>
                  ) : (
                    team.memberIds.map((id) => (
                      <div key={id} className="flex items-center justify-between gap-2">
                        <PlayerTag id={id} username={state.players[id]?.username ?? t('someone')} />
                        {isHost && id !== identity.id && (
                          <KickButton onPress={() => kickPlayer(id)} t={t} />
                        )}
                      </div>
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
              placeholder={t('teams.name_placeholder')}
              aria-label={t('teams.name_label')}
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
              {t('teams.add')}
            </Button>
          </div>
        </Card.Content>
      </Card>

      {state.spectatorIds.length > 0 && (
        <Card variant="secondary">
          <Card.Header>
            <Card.Title className="text-base">{t('spectators.title')}</Card.Title>
          </Card.Header>
          <Card.Content className="flex flex-col gap-1 text-sm text-muted">
            {state.spectatorIds.map((id) => (
              <div key={id} className="flex items-center justify-between gap-2">
                <PlayerTag id={id} username={state.players[id]?.username ?? t('someone')} />
                {isHost && id !== identity.id && (
                  <KickButton onPress={() => kickPlayer(id)} t={t} />
                )}
              </div>
            ))}
          </Card.Content>
        </Card>
      )}

      <Card variant="secondary">
        <Card.Header>
          <Card.Title className="text-base">{t('game_info.title')}</Card.Title>
        </Card.Header>
        <Card.Content className="flex flex-col gap-1 text-sm text-muted">
          <Line
            label={t('game_info.first_to_label')}
            value={t('game_info.first_to_value', { count: state.rules.targetScore })}
          />
          <Line
            label={t('game_info.correct_answer_label')}
            value={
              state.rules.maxCorrectStreakPerTurn === null
                ? t('game_info.correct_answer_no_limit')
                : t('game_info.correct_answer_max', { count: state.rules.maxCorrectStreakPerTurn })
            }
          />
          <Line
            label={t('game_info.scores_label')}
            value={
              state.rules.scoreFloor === null
                ? t('game_info.scores_negative')
                : t('game_info.scores_floored')
            }
          />
        </Card.Content>
      </Card>

      <Card variant="secondary">
        <Card.Header>
          <Card.Title className="text-base">{t('room.title')}</Card.Title>
          <Card.Description>{t('room.description')}</Card.Description>
        </Card.Header>
        <Card.Content className="flex items-center justify-between gap-3">
          <span className="text-sm text-default-foreground">
            {state.locked ? t('room.locked') : t('room.open')}
          </span>
          {isHost ? (
            <Button
              variant={state.locked ? 'secondary' : 'ghost'}
              size="sm"
              onPress={() => setRoomLocked(!state.locked)}
            >
              {state.locked ? t('room.unlock') : t('room.lock')}
            </Button>
          ) : (
            <Chip color={state.locked ? 'warning' : 'default'} variant="soft" size="sm">
              {state.locked ? t('room.locked_chip') : t('room.open_chip')}
            </Chip>
          )}
        </Card.Content>
      </Card>

      <ActionBar>
        {isHost ? (
          <>
            {!gate.ready && gate.reason !== null && (
              <p className="text-center text-xs text-muted">{gate.reason}</p>
            )}
            <Button variant="primary" size="lg" fullWidth isDisabled={!gate.ready} onPress={begin}>
              {t('start.start_game')}
            </Button>
          </>
        ) : (
          <div className="rounded-xl border border-border/40 px-4 py-3 text-center text-sm text-muted">
            {myTeam === undefined ? t('start.pick_team') : t('start.ready_waiting')}
          </div>
        )}
        <Button variant="ghost" fullWidth onPress={leave}>
          {t('start.leave_game')}
        </Button>
      </ActionBar>
    </Screen>
  );
}

/** Host-only, confirm-on-second-press rather than a modal - a kick is rare enough not to need one. */
function KickButton({
  onPress,
  t,
}: {
  onPress: () => void;
  t: (key: string) => string;
}): ReactNode {
  const [confirming, setConfirming] = useState(false);
  if (!confirming) {
    return (
      <Button variant="ghost" size="sm" onPress={() => setConfirming(true)}>
        {t('kick.kick')}
      </Button>
    );
  }
  return (
    <Button
      variant="secondary"
      size="sm"
      onPress={() => {
        setConfirming(false);
        onPress();
      }}
    >
      {t('kick.confirm')}
    </Button>
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
