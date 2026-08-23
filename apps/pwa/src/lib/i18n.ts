import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEn from '../locales/en/common.json';
import homeEn from '../locales/en/home.json';
import onboardingEn from '../locales/en/onboarding.json';
import createEn from '../locales/en/create.json';
import joinEn from '../locales/en/join.json';
import soloEn from '../locales/en/solo.json';
import lobbyEn from '../locales/en/lobby.json';
import playEn from '../locales/en/play.json';
import resultsEn from '../locales/en/results.json';

import commonNl from '../locales/nl/common.json';
import homeNl from '../locales/nl/home.json';
import onboardingNl from '../locales/nl/onboarding.json';
import createNl from '../locales/nl/create.json';
import joinNl from '../locales/nl/join.json';
import soloNl from '../locales/nl/solo.json';
import lobbyNl from '../locales/nl/lobby.json';
import playNl from '../locales/nl/play.json';
import resultsNl from '../locales/nl/results.json';

const LOCALE_KEY = 'dohhh.locale.v1';

/**
 * The stored locale is read directly here (not via the zustand store) because
 * this module has to exist and be configured before the store does - the
 * store imports it to call `changeLanguage` from `setLocale`, so the reverse
 * import would cycle.
 */
const storedLocale = (() => {
  try {
    return globalThis.localStorage?.getItem(LOCALE_KEY);
  } catch {
    return null;
  }
})();

void i18next.use(initReactI18next).init({
  lng: storedLocale === 'nl' ? 'nl' : 'en',
  fallbackLng: 'en',
  defaultNS: 'common',
  ns: ['common', 'home', 'onboarding', 'create', 'join', 'solo', 'lobby', 'play', 'results'],
  resources: {
    en: {
      common: commonEn,
      home: homeEn,
      onboarding: onboardingEn,
      create: createEn,
      join: joinEn,
      solo: soloEn,
      lobby: lobbyEn,
      play: playEn,
      results: resultsEn,
    },
    nl: {
      common: commonNl,
      home: homeNl,
      onboarding: onboardingNl,
      create: createNl,
      join: joinNl,
      solo: soloNl,
      lobby: lobbyNl,
      play: playNl,
      results: resultsNl,
    },
  },
  interpolation: { escapeValue: false },
  returnNull: false,
});

export { i18next as i18n };
