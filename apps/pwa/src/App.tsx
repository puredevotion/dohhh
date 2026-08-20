import type { ReactNode } from 'react';

import { useRoute } from './lib/router.js';
import { useApp } from './lib/store.js';
import { Create } from './screens/Create.jsx';
import { Home } from './screens/Home.jsx';
import { Join } from './screens/Join.jsx';
import { Lobby } from './screens/Lobby.jsx';
import { Onboarding } from './screens/Onboarding.jsx';
import { Play } from './screens/Play.jsx';
import { Results } from './screens/Results.jsx';

/**
 * Routing, such as it is.
 *
 * The in-game screen is chosen from the game's phase rather than the URL, so a
 * peer pressing "start" moves every device forward without anyone navigating
 * anywhere. That also means no screen ever has to call navigate() while
 * rendering, which is the usual way this kind of app tears itself.
 */
export function App(): ReactNode {
  const route = useRoute();
  const identity = useApp((s) => s.identity);
  const state = useApp((s) => s.snapshot?.state ?? null);

  if (identity === null) return <Onboarding />;

  switch (route.path) {
    case '/create':
      return <Create />;
    case '/join':
      return <Join />;
    case '/lobby':
    case '/play':
    case '/results':
      if (state === null || state.phase === 'lobby') return <Lobby />;
      return state.phase === 'playing' ? <Play /> : <Results />;
    default:
      return <Home />;
  }
}
