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

export type { CategoryContent, Row } from './row.js';
