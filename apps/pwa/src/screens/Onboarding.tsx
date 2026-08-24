import type { Locale } from '@dohhh/engine';
import { Button, Card, Input, Typography } from '@heroui/react';
import { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { useApp } from '../lib/store.js';
import { Screen } from '../ui/atoms.jsx';

/**
 * The entire sign-up: one field, one button.
 *
 * The brief said "create an account by choosing a username, which gets assigned
 * a unique id". The id is real and load-bearing - it is a hash of a keypair this
 * device generates and it is what every signature resolves to - but showing it
 * to a player at sign-up would make a party game feel like a bank (R-17), so it
 * appears afterwards, small, as a device fingerprint.
 */
export function Onboarding(): ReactNode {
  const { t } = useTranslation('onboarding');
  const { t: tc } = useTranslation('common');
  const signUp = useApp((s) => s.signUp);
  const locale = useApp((s) => s.locale);
  const setLocale = useApp((s) => s.setLocale);
  const [username, setUsername] = useState('');
  const ready = username.trim().length > 0;

  return (
    <Screen>
      <div className="flex flex-1 flex-col justify-center gap-8 py-10">
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

        <div className="text-center">
          <div className="mx-auto mb-6 h-20 w-20 rounded-full border-4 border-tier-bscba/70 p-1.5">
            <div className="h-full w-full rounded-full border-4 border-tier-msc/70 p-1.5">
              <div className="h-full w-full rounded-full border-4 border-tier-phd/70 p-1.5">
                <div className="h-full w-full rounded-full border-4 border-tier-professor/80" />
              </div>
            </div>
          </div>
          <Typography.Heading level={1} className="text-3xl font-semibold tracking-tight">
            {t('title')}
          </Typography.Heading>
          <Typography.Paragraph className="mx-auto mt-3 max-w-xs text-sm text-muted">
            {t('tagline')}
          </Typography.Paragraph>
        </div>

        <Card>
          <Card.Header>
            <Card.Title>{t('pick_name')}</Card.Title>
            <Card.Description>{t('pick_name_description')}</Card.Description>
          </Card.Header>
          <Card.Content className="flex flex-col gap-3">
            <Input
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder={t('name_placeholder')}
              aria-label={t('name_label')}
              autoComplete="nickname"
              maxLength={24}
              fullWidth
            />
            <Button
              variant="primary"
              size="lg"
              fullWidth
              isDisabled={!ready}
              onPress={() => signUp(username)}
            >
              {t('start_playing')}
            </Button>
          </Card.Content>
        </Card>

        <p className="text-center text-xs text-muted">{t('privacy_note')}</p>
      </div>
    </Screen>
  );
}
