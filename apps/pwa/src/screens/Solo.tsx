import { DEFAULT_RULES, type RulesConfig } from '@dohhh/engine';
import { Button, Card, Input, Switch } from '@heroui/react';
import { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { navigate } from '../lib/router.js';
import { useApp } from '../lib/store.js';
import { ActionBar, Screen } from '../ui/atoms.jsx';

/**
 * Solo skips the lobby entirely - there is nobody to wait for, so the only
 * decision left is the same house rules a host would set. `hostSolo` does
 * the rest (team, bot, start) the instant this screen hands it the rules.
 */
export function Solo(): ReactNode {
  const { t } = useTranslation('solo');
  const { t: tc } = useTranslation('common');
  const hostSolo = useApp((s) => s.hostSolo);
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
    <Screen title={t('title')} subtitle={t('subtitle')}>
      <Card>
        <Card.Header>
          <Card.Title>{t('target_score.title')}</Card.Title>
          <Card.Description>
            {t('target_score.description', { target: DEFAULT_RULES.targetScore })}
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <Input
            value={target}
            onChange={(event) => setTarget(event.target.value)}
            inputMode="numeric"
            aria-label={t('target_score_label')}
            fullWidth
          />
          {!targetOk && (
            <p className="mt-2 text-xs text-danger-text">{t('target_score_error')}</p>
          )}
        </Card.Content>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>{t('house_rules.title')}</Card.Title>
          <Card.Description>{t('house_rules.description')}</Card.Description>
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

      <ActionBar>
        <Button
          variant="primary"
          size="lg"
          fullWidth
          isDisabled={!targetOk}
          onPress={() => hostSolo(rules)}
        >
          {tc('actions.start')}
        </Button>
        <Button variant="ghost" fullWidth onPress={() => navigate('/')}>
          {tc('actions.back')}
        </Button>
      </ActionBar>
    </Screen>
  );
}
