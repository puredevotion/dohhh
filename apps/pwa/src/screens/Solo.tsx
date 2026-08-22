import { DEFAULT_RULES, type RulesConfig } from '@dohhh/engine';
import { Button, Card, Input, Switch } from '@heroui/react';
import { useState, type ReactNode } from 'react';

import { navigate } from '../lib/router.js';
import { useApp } from '../lib/store.js';
import { ActionBar, Screen } from '../ui/atoms.jsx';

/**
 * Solo skips the lobby entirely - there is nobody to wait for, so the only
 * decision left is the same house rules a host would set. `hostSolo` does
 * the rest (team, bot, start) the instant this screen hands it the rules.
 */
export function Solo(): ReactNode {
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
    <Screen
      title="Play solo"
      subtitle="A local dealer deals you a choice of three categories the instant you're ready - no opponent, no waiting."
    >
      <Card>
        <Card.Header>
          <Card.Title>Target score</Card.Title>
          <Card.Description>
            {DEFAULT_RULES.targetScore} is the standard. Reach it and the game ends - there's
            nobody else to catch up.
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <Input
            value={target}
            onChange={(event) => setTarget(event.target.value)}
            inputMode="numeric"
            aria-label="Target score"
            fullWidth
          />
          {!targetOk && (
            <p className="mt-2 text-xs text-danger-text">Pick a number between 5 and 1000.</p>
          )}
        </Card.Content>
      </Card>

      <Card>
        <Card.Header>
          <Card.Title>House rules</Card.Title>
          <Card.Description>Both off is the game exactly as specified.</Card.Description>
        </Card.Header>
        <Card.Content className="flex flex-col gap-4">
          <Switch isSelected={capStreak} onChange={setCapStreak}>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Cap correct streaks at 3</span>
              <span className="text-xs text-muted">
                Purely a display reset here - solo, nobody's waiting for the turn back regardless.
              </span>
            </div>
          </Switch>
          <Switch isSelected={floorScore} onChange={setFloorScore}>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Never go below zero</span>
              <span className="text-xs text-muted">
                Kinder, but it makes the Dohhh-tier question a free bet, which is the whole tension
                gone.
              </span>
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
          Start
        </Button>
        <Button variant="ghost" fullWidth onPress={() => navigate('/')}>
          Back
        </Button>
      </ActionBar>
    </Screen>
  );
}
