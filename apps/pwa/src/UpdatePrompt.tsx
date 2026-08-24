import { useEffect, useRef, useState, type ReactNode } from 'react';
import { useRegisterSW } from 'virtual:pwa-register/react';

import { useSWUpdate } from './lib/swUpdate.js';

/** How often to poll for a new deploy while a tab sits open. */
const UPDATE_CHECK_INTERVAL_MS = 60_000;
/** How long "Later" hides the banner before it comes back to nag again. */
const SNOOZE_MS = 10 * 60_000;

/**
 * The default registration only checks for a new service worker on a fresh
 * navigation, which a lobby that sits open for a while never gets. Poll on an
 * interval and surface a banner instead of reloading out from under anyone -
 * a redeploy mid-game is exactly what the README says never to do (R-15), so
 * the player decides when, not the app.
 *
 * `useRegisterSW` must only be called from one place, so the registration it
 * produces is handed to `useSWUpdate` - that's what lets Home's "check for
 * updates" button trigger a check without a second registration.
 */
export function UpdatePrompt(): ReactNode {
  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegisteredSW(_url, registration) {
      useSWUpdate.getState().setRegistration(registration ?? null);
      if (registration === undefined) return;
      setInterval(() => {
        void registration.update();
      }, UPDATE_CHECK_INTERVAL_MS);
    },
  });

  const [snoozed, setSnoozed] = useState(false);
  const snoozeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // A fresh needRefresh (e.g. the next redeploy) should nag again immediately,
  // not stay hidden under a snooze set for a now-superseded update.
  useEffect(() => {
    setSnoozed(false);
  }, [needRefresh]);

  useEffect(() => {
    return () => clearTimeout(snoozeTimer.current);
  }, []);

  if (!needRefresh || snoozed) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-between gap-3 border-t border-border/40 bg-surface px-4 py-3 text-sm shadow-lg">
      <span className="text-default-foreground">
        A newer version is ready. Everyone should update before you start.
      </span>
      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          className="rounded-lg px-2 py-1.5 font-medium text-muted"
          onClick={() => {
            setSnoozed(true);
            clearTimeout(snoozeTimer.current);
            snoozeTimer.current = setTimeout(() => setSnoozed(false), SNOOZE_MS);
          }}
        >
          Later
        </button>
        <button
          type="button"
          className="rounded-lg bg-accent px-3 py-1.5 font-medium text-white"
          onClick={() => void updateServiceWorker(true)}
        >
          Update now
        </button>
      </div>
    </div>
  );
}
