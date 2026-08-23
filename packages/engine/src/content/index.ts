import { CATEGORIES } from '../categories.js';
import { packHash } from '../pack.js';
import type { ContentPack } from '../types.js';

import { MATHS, SPORT, TECHNOLOGY } from './applied.js';
import { ARCH_HISTORIC, ARCH_MODERN, CASTLES } from './architecture.js';
import { ART, MUSIC, SCREEN } from './arts.js';
import { CENTRAL_ASIA, EAST_ASIA } from './asia.js';
import { CENTRAL_ASIA_DEV, EAST_ASIA_HISTORY } from './asia2.js';
import { SILICON, SOFTWARE } from './computing.js';
import { AFRICA } from './africa.js';
import { FASHION_HISTORIC, FASHION_MODERN } from './fashion.js';
import { GEOGRAPHY, HISTORY, LITERATURE } from './humanities.js';
import { FINANCE } from './markets.js';
import { MACROECON, MICROECON } from './markets2.js';
import { MORE_MATHS, MORE_SPORT, MORE_TECHNOLOGY } from './more/applied.js';
import { MORE_ART, MORE_MUSIC, MORE_SCREEN } from './more/arts.js';
import { MORE_CENTRAL_ASIA } from './more/centralasia.js';
import { MORE_SILICON, MORE_SOFTWARE } from './more/computing.js';
import { MORE_EAST_ASIA } from './more/eastasia.js';
import { MORE_GEOGRAPHY } from './more/geography.js';
import { MORE_HISTORY } from './more/history.js';
import { MORE_LITERATURE } from './more/literature.js';
import { MORE_FINANCE } from './more/markets.js';
import { MORE_BIOLOGY, MORE_CHEMISTRY, MORE_PHYSICS } from './more/sciences.js';
import { ASSYRIAN, CELTIC_MYTH, GREEK_MYTH, NORSE_MYTH } from './mythology.js';
import { LAWIP } from './lawcat.js';
import { AUTOIMMUNE, DUTCH, MAKER, OBGYN } from './newcats.js';
import { ROYALS_MEDIEVAL, ROYALS_MODERN } from './royalty.js';
import { expand } from './row.js';
import { BIOLOGY, CHEMISTRY, PHYSICS } from './sciences.js';
import { SCREEN_TECH } from './screentech.js';
import { VIDEOGAMES } from './videogames.js';

import {
  MATHS as MATHS_NL,
  SPORT as SPORT_NL,
  TECHNOLOGY as TECHNOLOGY_NL,
} from './nl/applied.js';
import {
  ARCH_HISTORIC as ARCH_HISTORIC_NL,
  ARCH_MODERN as ARCH_MODERN_NL,
  CASTLES as CASTLES_NL,
} from './nl/architecture.js';
import { ART as ART_NL, MUSIC as MUSIC_NL, SCREEN as SCREEN_NL } from './nl/arts.js';
import { CENTRAL_ASIA as CENTRAL_ASIA_NL, EAST_ASIA as EAST_ASIA_NL } from './nl/asia.js';
import {
  CENTRAL_ASIA_DEV as CENTRAL_ASIA_DEV_NL,
  EAST_ASIA_HISTORY as EAST_ASIA_HISTORY_NL,
} from './nl/asia2.js';
import { SILICON as SILICON_NL, SOFTWARE as SOFTWARE_NL } from './nl/computing.js';
import { AFRICA as AFRICA_NL } from './nl/africa.js';
import {
  FASHION_HISTORIC as FASHION_HISTORIC_NL,
  FASHION_MODERN as FASHION_MODERN_NL,
} from './nl/fashion.js';
import {
  GEOGRAPHY as GEOGRAPHY_NL,
  HISTORY as HISTORY_NL,
  LITERATURE as LITERATURE_NL,
} from './nl/humanities.js';
import { FINANCE as FINANCE_NL } from './nl/markets.js';
import { MACROECON as MACROECON_NL, MICROECON as MICROECON_NL } from './nl/markets2.js';
import {
  MORE_MATHS as MORE_MATHS_NL,
  MORE_SPORT as MORE_SPORT_NL,
  MORE_TECHNOLOGY as MORE_TECHNOLOGY_NL,
} from './nl/more/applied.js';
import {
  MORE_ART as MORE_ART_NL,
  MORE_MUSIC as MORE_MUSIC_NL,
  MORE_SCREEN as MORE_SCREEN_NL,
} from './nl/more/arts.js';
import { MORE_CENTRAL_ASIA as MORE_CENTRAL_ASIA_NL } from './nl/more/centralasia.js';
import {
  MORE_SILICON as MORE_SILICON_NL,
  MORE_SOFTWARE as MORE_SOFTWARE_NL,
} from './nl/more/computing.js';
import { MORE_EAST_ASIA as MORE_EAST_ASIA_NL } from './nl/more/eastasia.js';
import { MORE_GEOGRAPHY as MORE_GEOGRAPHY_NL } from './nl/more/geography.js';
import { MORE_HISTORY as MORE_HISTORY_NL } from './nl/more/history.js';
import { MORE_LITERATURE as MORE_LITERATURE_NL } from './nl/more/literature.js';
import { MORE_FINANCE as MORE_FINANCE_NL } from './nl/more/markets.js';
import {
  MORE_BIOLOGY as MORE_BIOLOGY_NL,
  MORE_CHEMISTRY as MORE_CHEMISTRY_NL,
  MORE_PHYSICS as MORE_PHYSICS_NL,
} from './nl/more/sciences.js';
import {
  ASSYRIAN as ASSYRIAN_NL,
  CELTIC_MYTH as CELTIC_MYTH_NL,
  GREEK_MYTH as GREEK_MYTH_NL,
  NORSE_MYTH as NORSE_MYTH_NL,
} from './nl/mythology.js';
import { LAWIP as LAWIP_NL } from './nl/lawcat.js';
import {
  AUTOIMMUNE as AUTOIMMUNE_NL,
  DUTCH as DUTCH_NL,
  MAKER as MAKER_NL,
  OBGYN as OBGYN_NL,
} from './nl/newcats.js';
import { ROYALS_MEDIEVAL as ROYALS_MEDIEVAL_NL, ROYALS_MODERN as ROYALS_MODERN_NL } from './nl/royalty.js';
import { BIOLOGY as BIOLOGY_NL, CHEMISTRY as CHEMISTRY_NL, PHYSICS as PHYSICS_NL } from './nl/sciences.js';
import { SCREEN_TECH as SCREEN_TECH_NL } from './nl/screentech.js';
import { VIDEOGAMES as VIDEOGAMES_NL } from './nl/videogames.js';

/**
 * The bundled bank: forty categories, three tiers, fifteen questions
 * each.
 *
 * 1800 questions. Each category's content lives in a base chunk and a `more/`
 * chunk, concatenated by `expand`, which is why adding to a category never
 * renumbers what is already there. The review is blunt about this being the long pole (R-12), and the pack
 * format exists so growing it never touches the engine.
 *
 * Order here is the order categories were added, not the order they are dealt:
 * dealing is a shuffled bag seeded by the game id.
 */
export const SEED_PACK: ContentPack = {
  id: 'dohhh.seed',
  version: '0.4.0',
  name: 'Dohhh Seed Bank',
  categories: CATEGORIES,
  questions: [
    ...expand('history', HISTORY, MORE_HISTORY),
    ...expand('centralasia', CENTRAL_ASIA, MORE_CENTRAL_ASIA),
    ...expand('eastasia', EAST_ASIA, MORE_EAST_ASIA),
    ...expand('geography', GEOGRAPHY, MORE_GEOGRAPHY),
    ...expand('literature', LITERATURE, MORE_LITERATURE),
    ...expand('art', ART, MORE_ART),
    ...expand('music', MUSIC, MORE_MUSIC),
    ...expand('screen', SCREEN, MORE_SCREEN),
    ...expand('physics', PHYSICS, MORE_PHYSICS),
    ...expand('chemistry', CHEMISTRY, MORE_CHEMISTRY),
    ...expand('biology', BIOLOGY, MORE_BIOLOGY),
    ...expand('maths', MATHS, MORE_MATHS),
    ...expand('technology', TECHNOLOGY, MORE_TECHNOLOGY),
    ...expand('silicon', SILICON, MORE_SILICON),
    ...expand('swe', SOFTWARE, MORE_SOFTWARE),
    ...expand('finance', FINANCE, MORE_FINANCE),
    ...expand('sport', SPORT, MORE_SPORT),
    ...expand('autoimmune', AUTOIMMUNE),
    ...expand('obgyn', OBGYN),
    ...expand('dutch', DUTCH),
    ...expand('maker', MAKER),
    ...expand('lawip', LAWIP),
    ...expand('fashionmodern', FASHION_MODERN),
    ...expand('fashionhistoric', FASHION_HISTORIC),
    ...expand('africa', AFRICA),
    ...expand('royalsmedieval', ROYALS_MEDIEVAL),
    ...expand('royalsmodern', ROYALS_MODERN),
    ...expand('archmodern', ARCH_MODERN),
    ...expand('archhistoric', ARCH_HISTORIC),
    ...expand('castles', CASTLES),
    ...expand('videogames', VIDEOGAMES),
    ...expand('greekmyth', GREEK_MYTH),
    ...expand('norsemyth', NORSE_MYTH),
    ...expand('celticmyth', CELTIC_MYTH),
    ...expand('assyrian', ASSYRIAN),
    ...expand('screentech', SCREEN_TECH),
    ...expand('eastasiahistory', EAST_ASIA_HISTORY),
    ...expand('centralasiadev', CENTRAL_ASIA_DEV),
    ...expand('microecon', MICROECON),
    ...expand('macroecon', MACROECON),
  ],
};

/**
 * Computed once. Peers compare this at join time and refuse a mismatch at the
 * door rather than desyncing mid-game (R-11).
 */
export const SEED_PACK_HASH: string = packHash(SEED_PACK);

/**
 * The same forty categories, three tiers, fifteen questions each - translated
 * to Dutch. Question ids, categories and difficulties mirror {@link SEED_PACK}
 * row for row (see packages/engine/src/content/nl/*), so a game only ever
 * needs one pack for its own locale; peers on different locales are refused
 * at the door by the hash check the same way a stale English build would be.
 */
export const SEED_PACK_NL: ContentPack = {
  id: 'dohhh.seed.nl',
  version: '0.4.0',
  name: 'Dohhh Seed Bank (NL)',
  categories: CATEGORIES,
  questions: [
    ...expand('history', HISTORY_NL, MORE_HISTORY_NL),
    ...expand('centralasia', CENTRAL_ASIA_NL, MORE_CENTRAL_ASIA_NL),
    ...expand('eastasia', EAST_ASIA_NL, MORE_EAST_ASIA_NL),
    ...expand('geography', GEOGRAPHY_NL, MORE_GEOGRAPHY_NL),
    ...expand('literature', LITERATURE_NL, MORE_LITERATURE_NL),
    ...expand('art', ART_NL, MORE_ART_NL),
    ...expand('music', MUSIC_NL, MORE_MUSIC_NL),
    ...expand('screen', SCREEN_NL, MORE_SCREEN_NL),
    ...expand('physics', PHYSICS_NL, MORE_PHYSICS_NL),
    ...expand('chemistry', CHEMISTRY_NL, MORE_CHEMISTRY_NL),
    ...expand('biology', BIOLOGY_NL, MORE_BIOLOGY_NL),
    ...expand('maths', MATHS_NL, MORE_MATHS_NL),
    ...expand('technology', TECHNOLOGY_NL, MORE_TECHNOLOGY_NL),
    ...expand('silicon', SILICON_NL, MORE_SILICON_NL),
    ...expand('swe', SOFTWARE_NL, MORE_SOFTWARE_NL),
    ...expand('finance', FINANCE_NL, MORE_FINANCE_NL),
    ...expand('sport', SPORT_NL, MORE_SPORT_NL),
    ...expand('autoimmune', AUTOIMMUNE_NL),
    ...expand('obgyn', OBGYN_NL),
    ...expand('dutch', DUTCH_NL),
    ...expand('maker', MAKER_NL),
    ...expand('lawip', LAWIP_NL),
    ...expand('fashionmodern', FASHION_MODERN_NL),
    ...expand('fashionhistoric', FASHION_HISTORIC_NL),
    ...expand('africa', AFRICA_NL),
    ...expand('royalsmedieval', ROYALS_MEDIEVAL_NL),
    ...expand('royalsmodern', ROYALS_MODERN_NL),
    ...expand('archmodern', ARCH_MODERN_NL),
    ...expand('archhistoric', ARCH_HISTORIC_NL),
    ...expand('castles', CASTLES_NL),
    ...expand('videogames', VIDEOGAMES_NL),
    ...expand('greekmyth', GREEK_MYTH_NL),
    ...expand('norsemyth', NORSE_MYTH_NL),
    ...expand('celticmyth', CELTIC_MYTH_NL),
    ...expand('assyrian', ASSYRIAN_NL),
    ...expand('screentech', SCREEN_TECH_NL),
    ...expand('eastasiahistory', EAST_ASIA_HISTORY_NL),
    ...expand('centralasiadev', CENTRAL_ASIA_DEV_NL),
    ...expand('microecon', MICROECON_NL),
    ...expand('macroecon', MACROECON_NL),
  ],
};

/** Computed once, same reason as {@link SEED_PACK_HASH}. */
export const SEED_PACK_NL_HASH: string = packHash(SEED_PACK_NL);

export type { CategoryContent, Row } from './row.js';
