import { expect, test } from '@playwright/test';
import type { Page } from '@playwright/test';

/**
 * Solo mode has no opponent, so it is the one path where the app itself has
 * to be the thing that calls time - see the `solo` branch added to
 * `useAutoTimeout`'s `enabled` check in Play.tsx. These tests exercise the
 * two symptoms that bug produced: the manual "Continue" advance, and the
 * unattended timer expiry that never used to fire at all in single player.
 *
 * Solo never shows a category-pick screen with buttons on it: "you cannot
 * deal your own" applies to the lone player too, so the local bot in
 * `attachSoloBot` (store.ts) auto-picks a category the instant one is dealt.
 * The first screen a solo player actually acts on is the tier pick.
 */

async function startSoloGame(page: Page): Promise<void> {
  await page.goto('/');
  await page.getByLabel('Your name').fill('E2E Player');
  await page.getByRole('button', { name: 'Start playing' }).click();
  await page.getByRole('button', { name: 'Play solo' }).click();
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.getByText('Your category is')).toBeVisible();
}

test('single player: answering a question and pressing Continue deals the next one', async ({
  page,
}) => {
  await startSoloGame(page);

  // "Call time" is the only other button on the tier-pick screen.
  await page.getByRole('button').filter({ hasNotText: /call time/i }).first().click();
  await expect(page.getByRole('button', { name: /^A/ })).toBeVisible();

  // Which option is correct is irrelevant here - either outcome resolves the
  // turn and reaches the between-turns screen this test is actually about.
  await page.getByRole('button', { name: /^A/ }).click();

  const continueButton = page.getByRole('button', { name: 'Continue' });
  await expect(continueButton).toBeVisible();
  await continueButton.click();

  await expect(page.getByText('Your category is')).toBeVisible();
});

test('single player: an unanswered question times out on its own', async ({ page }) => {
  await page.clock.install();

  await startSoloGame(page);

  // "Easy Peasy" is the graduate tier - 45s to answer. Advance the clock past
  // that without ever answering; before the fix, nothing in solo mode ever
  // called time, so this question would sit open forever.
  await page.getByText('Easy Peasy', { exact: true }).click();
  await expect(page.getByRole('button', { name: /^A/ })).toBeVisible();

  await page.clock.fastForward(46_000);

  const continueButton = page.getByRole('button', { name: 'Continue' });
  await expect(continueButton).toBeVisible();
  await continueButton.click();

  await expect(page.getByText('Your category is')).toBeVisible();
});
