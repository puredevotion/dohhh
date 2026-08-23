import { defineConfig, devices } from '@playwright/test';

/**
 * Runs the real vite dev server (not a mocked one) - the game logic lives in
 * `@dohhh/engine`/`@dohhh/net`, not in test doubles, so anything short of the
 * actual app under test would just be re-testing our own stubs.
 */
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4173',
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: {
    // Preview (not dev) so the PWA service worker registration and build
    // output match what actually ships, and so startup is fast and quiet.
    command: 'pnpm build && pnpm preview --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
});
