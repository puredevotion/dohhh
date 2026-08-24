import { create } from 'zustand';

/**
 * Bridges the service-worker registration (owned by UpdatePrompt's
 * `useRegisterSW`, which must only be called once) to any other component -
 * Home's "check for updates" button in particular. Without this, the only
 * way to learn about a new deploy was the 60s background poll: fine while a
 * tab sits open, useless if you land on Home wanting to know *right now*
 * whether you're on the latest build.
 */
interface SWUpdateState {
  readonly registration: ServiceWorkerRegistration | null;
  readonly checking: boolean;
  setRegistration: (registration: ServiceWorkerRegistration | null) => void;
  checkNow: () => Promise<void>;
}

export const useSWUpdate = create<SWUpdateState>((set, get) => ({
  registration: null,
  checking: false,
  setRegistration: (registration) => set({ registration }),
  checkNow: async () => {
    const { registration, checking } = get();
    if (registration === null || checking) return;
    set({ checking: true });
    try {
      await registration.update();
    } finally {
      set({ checking: false });
    }
  },
}));
