import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  // A fixed UTC build timestamp, baked in at build time - not per-load - so
  // every device running the same deploy shows the exact same string. This
  // is what Home's "pack version" line displays: two phones comparing this
  // number is a sortable, legible stand-in for "same build?" that a hash
  // prefix never was. Falls back to the build's own start time in dev
  // (`vite` re-evaluates config once per server start, not per request).
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  // Relative base so the built app runs from any static host or subpath, which
  // keeps deployment to a plain `cp -r dist/`. Note that the host still has to
  // be a secure context: Trystero hashes the room topic through crypto.subtle,
  // so over plain http:// (or file://) peers never even find each other. See
  // "Getting it onto your friends' phones" in the README.
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      // 'prompt', not 'autoUpdate': UpdatePrompt.tsx polls for a new worker and
      // waits for the player to tap "Update now" rather than swapping and
      // reloading out from under them - a mid-game auto-reload is exactly
      // what R-15 says never to do. 'autoUpdate' would self-activate on its
      // own schedule and make that banner's needRefresh state moot.
      registerType: 'prompt',
      includeAssets: ['apple-touch-icon.png'],
      manifest: {
        name: 'Dohhh',
        short_name: 'Dohhh',
        description: 'Serverless peer-to-peer trivia. Bet on how much you know.',
        theme_color: '#18182b',
        background_color: '#18182b',
        display: 'standalone',
        orientation: 'portrait',
        start_url: './',
        scope: './',
        icons: [
          { src: './icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: './icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: './icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // The whole game is local-first: the bundle and the question pack are
        // all it needs, so precaching them makes the app genuinely offline
        // capable rather than merely installable.
        globPatterns: ['**/*.{js,css,html,png,svg,woff2}'],
        navigateFallback: 'index.html',
        // Both language question packs ship in one bundle (unused-locale code
        // isn't split out yet), which pushed this past the old 4 MiB ceiling.
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024,
      },
    }),
  ],
  build: {
    target: 'es2022',
    sourcemap: true,
  },
});
