import { DEFAULT_RULES, type RulesConfig } from '@dohhh/engine';
import { Button, Card, Input, Switch } from '@heroui/react';
import { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { navigate } from '../lib/router.js';
import { useApp } from '../lib/store.js';
import { ActionBar, Notice, Screen } from '../ui/atoms.jsx';

/**
 * House rules, exposed rather than hidden.
 *
 * Every switch here is an argument the adversarial review had and recorded: the
 * defaults are spec-faithful, and the levers exist because a group that hits the
 * failure mode should be able to fix its own game without waiting for a release.
 */
export function Create(): ReactNode {
  const { t } = useTranslation('create');
  const { t: tc } = useTranslation('common');
  const host = useApp((s) => s.host);
  const identity = useApp((s) => s.identity);
  const [name, setName] = useState('');
  const [capStreak, setCapStreak] = useState(false);
  const [floorScore, setFloorScore] = useState(false);
  const [target, setTarget] = useState(String(DEFAULT_RULES.targetScore));

  const parsedTarget = Number.parseInt(target, 10);
  const targetOk = Number.isFinite(parsedTarget) && parsedTarget >= 5 && parsedTarget <= 1000;

  const rules: Partial<RulesConfig> = {
    targetScore: targetOk ? parsedTarget : DEFAULT_RULES.targetScore,
    maxCorrectStreakPerTurn: capStreak ? 3 : null,
    scoreFloor: floorScore ? 0 : null,
  };

  return (
    <Screen
      title={t('title')}
      subtitle={t('subtitle', { username: identity?.username ?? t('default_username') })}
    >
      <Card>
        <Card.Header>
          <Card.Title>{t('name_card.title')}</Card.Title>
          <Card.Description>{t('name_card.description')}</Card.Description>
        </Card.Header>
        <Card.Content>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t('name_placeholder')}
            aria-label={t('name_label')}
            maxLength={40}
            fullWidth
          />
        </Card.Content>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>{t('target_card.title')}</Card.Title>
          <Card.Description>{t('target_card.description')}</Card.Description>
        </Card.Header>
        <Card.Content>
          <Input
            value={target}
            onChange={(event) => setTarget(event.target.value)}
            inputMode="numeric"
            aria-label={t('target_label')}
            fullWidth
          />
          {!targetOk && <p className="mt-2 text-xs text-danger-text">{t('target_error')}</p>}
        </Card.Content>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>{t('rules_card.title')}</Card.Title>
          <Card.Description>{t('rules_card.description')}</Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col gap-4">
          <Switch isSelected={capStreak} onChange={setCapStreak}>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{t('cap_streak.label')}</span>
              <span className="text-xs text-muted">{t('cap_streak.description')}</span>
            </div>
          </Switch>
          <Switch isSelected={floorScore} onChange={setFloorScore}>
            <div className="flex flex-col">
              <span className="text-sm font-medium">{t('floor_score.label')}</span>
              <span className="text-xs text-muted">{t('floor_score.description')}</span>
            </div>
          </Switch>
        </Card.Content>
      </Card>

      <Notice>{t('notice')}</Notice>

      <ActionBar>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          isDisabled={!targetOk}
          onPress={() => host(name.trim().length === 0 ? t('default_game_name') : name.trim(), rules)}
        >
          {t('open_lobby')}
        </Button>
        <Button variant="ghost" fullWidth onPress={() => navigate('/')}>
          {tc('actions.back')}
        </Button>
      </ActionBar>
    </Screen>
  );
}
