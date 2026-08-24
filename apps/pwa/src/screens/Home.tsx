import {
  DEFAULT_RULES,
  DIFFICULTY_ORDER,
  DIFFICULTY_TIERS,
  shortenId,
  type Difficulty,
  type Locale,
} from '@dohhh/engine';
import { Button, Card, Input, Typography } from '@heroui/react';
import { useEffect, useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { navigate } from '../lib/router.js';
import { shortPackVersion, useApp } from '../lib/store.js';
import { Screen } from '../ui/atoms.jsx';

export function Home(): ReactNode {
  const { t } = useTranslation('home');
  const { t: tc } = useTranslation('common');
  const identity = useApp((s) => s.identity);
  const rename = useApp((s) => s.rename);
  const deviceLabel = useApp((s) => s.deviceLabel);
  const renameDevice = useApp((s) => s.renameDevice);
  const resume = useApp((s) => s.resume);
  const locale = useApp((s) => s.locale);
  const setLocale = useApp((s) => s.setLocale);
  const [resumable, setResumable] = useState(false);
  const [editingName, setEditingName] = useState(false);
  const [draftName, setDraftName] = useState('');
  const [editingDevice, setEditingDevice] = useState(false);
  const [draftDevice, setDraftDevice] = useState('');

  useEffect(() => {
    // Probe once, without joining: a stale "continue" button that does nothing
    // is worse than no button.
    let live = true;
    void (async () => {
      const ok = await resumeProbe();
      if (live) setResumable(ok);
    })();
    return () => {
      live = false;
    };
  }, []);

  if (identity === null) return null;

  return (
    <Screen>
      <div className="flex flex-1 flex-col justify-center gap-6 py-8">
        <div className="flex justify-center gap-2" role="group" aria-label={tc('language.label')}>
          {(['en', 'nl'] as const satisfies readonly Locale[]).map((option) => (
            <Button
              key={option}
              variant={locale === option ? 'primary' : 'ghost'}
              size="sm"
              onPress={() => setLocale(option)}
            >
              {tc(`language.${option}`)}
            </Button>
          ))}
        </div>

        <div>
          <Typography.Paragraph className="text-sm text-muted">
            {t('signed_in_as')}
          </Typography.Paragraph>
          {editingName ? (
            <div className="flex items-center gap-2">
              <Input
                value={draftName}
                onChange={(event) => setDraftName(event.target.value)}
                aria-label={t('signed_in_as')}
                autoComplete="nickname"
                maxLength={24}
                autoFocus
                fullWidth
              />
              <Button
                variant="primary"
                size="sm"
                isDisabled={draftName.trim().length === 0}
                onPress={() => {
                  rename(draftName);
                  setEditingName(false);
                }}
              >
                {t('save')}
              </Button>
            </div>
          ) : (
            <button
              type="button"
              className="flex items-center gap-2 text-left"
              onClick={() => {
                setDraftName(identity.username);
                setEditingName(true);
              }}
            >
              <Typography.Heading level={1} className="text-3xl font-semibold tracking-tight">
                {identity.username}
              </Typography.Heading>
              <span className="text-xs text-muted underline">{t('edit')}</span>
            </button>
          )}
          {editingDevice ? (
            <div className="mt-1 flex items-center gap-2">
              <Input
                value={draftDevice}
                onChange={(event) => setDraftDevice(event.target.value)}
                placeholder={t('device_placeholder')}
                aria-label={t('device_aria_label')}
                maxLength={24}
                autoFocus
                fullWidth
              />
              <Button
                variant="primary"
                size="sm"
                onPress={() => {
                  renameDevice(draftDevice);
                  setEditingDevice(false);
                }}
              >
                {t('save')}
              </Button>
            </div>
          ) : (
            <button
              type="button"
              className="mt-1 flex items-center gap-2 text-left"
              onClick={() => {
                setDraftDevice(deviceLabel ?? '');
                setEditingDevice(true);
              }}
            >
              <p className="font-mono text-xs text-muted">
                {t('device_label', { id: deviceLabel ?? shortenId(identity.id, 8) })}
              </p>
              <span className="text-xs text-muted underline">{t('rename')}</span>
            </button>
          )}
          <p className="mt-1 font-mono text-xs text-muted">
            {t('pack_version', { hash: shortPackVersion(locale) })}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="primary" size="lg" fullWidth onPress={() => navigate('/create')}>
            {t('host_game')}
          </Button>
          <Button variant="secondary" size="lg" fullWidth onPress={() => navigate('/join')}>
            {t('join_game')}
          </Button>
          <Button variant="ghost" size="lg" fullWidth onPress={() => navigate('/solo')}>
            {t('play_solo')}
          </Button>
          {resumable && (
            <Button
              variant="ghost"
              fullWidth
              onPress={() => {
                void resume().then((ok) => {
                  if (ok) navigate('/lobby');
                });
              }}
            >
              {t('rejoin_last_game')}
            </Button>
          )}
        </div>

        <Card variant="secondary">
          <Card.Header>
            <Card.Title className="text-base">{t('betting_title')}</Card.Title>
            <Card.Description>{t('betting_description')}</Card.Description>
          </Card.Header>
          <Card.Content className="flex flex-col gap-3 text-sm text-default-foreground">
            {DIFFICULTY_ORDER.map((difficulty) => (
              <Row key={difficulty} tier={difficulty} tierInfo={DIFFICULTY_TIERS[difficulty]} />
            ))}
            <p className="mt-1 text-xs text-muted">
              {t('betting_rules', { target: DEFAULT_RULES.targetScore })}
            </p>
          </Card.Content>
        </Card>
      </div>
    </Screen>
  );
}

function Row({
  tier,
  tierInfo,
}: {
  tier: Difficulty;
  tierInfo: { label: string; award: number; penalty: number; maxStreak?: number | null };
}): ReactNode {
  const { t: tc } = useTranslation('common');
  const colour = {
    bscba: 'text-tier-bscba',
    msc: 'text-tier-msc',
    phd: 'text-tier-phd',
    professor: 'text-tier-professor',
  }[tier];
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className={colour}>{tc(`tiers.${tier}`)}</span>
        <span className="font-mono text-sm tabular-nums">
          <span className="text-success">+{tierInfo.award}</span>
          <span className="text-muted"> / </span>
          <span className="text-danger-text">{tierInfo.penalty}</span>
        </span>
      </div>
      {tierInfo.maxStreak != null && (
        <p className="text-xs text-muted">{tc('tiers.max_streak_note', { count: tierInfo.maxStreak })}</p>
      )}
    </div>
  );
}

/**
 * Reads the saved-game marker without connecting. `resume()` itself joins a
 * mesh, which is not something a screen should do just to decide whether to
 * render a button.
 *
 * Deliberately does not also require a cached per-game event log: that cache
 * only gets written once a connection has actually backfilled real state,
 * which a joiner (unlike a host, whose own log is populated locally from the
 * moment they create the game) may never have reached if the connection
 * dropped early. `resume()` reconnects over the mesh regardless, so the
 * marker alone is enough to justify offering the button.
 */
async function resumeProbe(): Promise<boolean> {
  try {
    const raw = globalThis.localStorage?.getItem('dohhh.lastGame.v1');
    if (raw == null) return false;
    const parsed = JSON.parse(raw) as { gameId?: string };
    return typeof parsed.gameId === 'string';
  } catch {
    return false;
  }
}
