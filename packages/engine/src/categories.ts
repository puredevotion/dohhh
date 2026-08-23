import type { Category, CategoryId } from './types.js';

/**
 * The category deck.
 *
 * The count is not fixed at twelve any more - the bag (R-6) is simply a deck of
 * however many of these there are, reshuffled when it empties, so adding a
 * category is a one-line change here plus its content file. Ids are protocol-
 * adjacent: a question id embeds its category, so renaming one invalidates
 * every question under it and changes the pack hash.
 */
export const CATEGORIES: readonly Category[] = [
  { id: 'history', name: 'History & Civilisations', glyph: 'HI' },
  { id: 'centralasia', name: 'Central Asian History', glyph: 'CA' },
  { id: 'eastasia', name: 'East Asian Development', glyph: 'EA' },
  { id: 'geography', name: 'Geography & Earth Systems', glyph: 'GE' },
  { id: 'literature', name: 'Literature & Poetry', glyph: 'LI' },
  { id: 'art', name: 'Visual Arts', glyph: 'AR' },
  { id: 'music', name: 'Music & Performing Arts', glyph: 'MU' },
  { id: 'screen', name: 'Film & Television', glyph: 'TV' },
  { id: 'physics', name: 'Physics & Astronomy', glyph: 'PH' },
  { id: 'chemistry', name: 'Chemistry & Materials', glyph: 'CH' },
  { id: 'biology', name: 'Biology & Medicine', glyph: 'BI' },
  { id: 'maths', name: 'Mathematics & Logic', glyph: 'MA' },
  { id: 'technology', name: 'Technology & Computing', glyph: 'TE' },
  { id: 'silicon', name: 'Semiconductors & Lithography', glyph: 'SI' },
  { id: 'swe', name: 'Software Engineering & Algorithms', glyph: 'SW' },
  { id: 'finance', name: 'Finance & Structured Products', glyph: 'FI' },
  { id: 'sport', name: 'European Sport', glyph: 'SP' },
  { id: 'autoimmune', name: 'Autoimmune Diseases', glyph: 'AI' },
  { id: 'obgyn', name: 'Obstetrics & Gynaecology', glyph: 'OB' },
  { id: 'dutch', name: 'Dutch History & Politics, 1400-1900', glyph: 'NL' },
  { id: 'maker', name: '3D Printing & Lasers', glyph: '3D' },
  { id: 'lawip', name: 'Dutch & International IP Law', glyph: 'IP' },
  { id: 'fashionmodern', name: 'Fashion History, 1940-Now', glyph: 'FA' },
  { id: 'fashionhistoric', name: 'Historic Fashion', glyph: 'FH' },
  { id: 'africa', name: 'African History', glyph: 'AF' },
  { id: 'royalsmedieval', name: 'Medieval & Renaissance Royals', glyph: 'RM' },
  { id: 'royalsmodern', name: 'Modern European Royals', glyph: 'RE' },
  { id: 'archmodern', name: 'Modern Architecture', glyph: 'AM' },
  { id: 'archhistoric', name: 'Historic Architecture', glyph: 'AH' },
  { id: 'castles', name: 'Castles & Palaces', glyph: 'CP' },
  { id: 'videogames', name: 'Video Games', glyph: 'VG' },
  { id: 'greekmyth', name: 'Greek Mythology', glyph: 'GM' },
  { id: 'norsemyth', name: 'Norse Mythology', glyph: 'NM' },
  { id: 'celticmyth', name: 'West European Mythology', glyph: 'CM' },
  { id: 'assyrian', name: 'Assyrian & Phoenician History & Mythology', glyph: 'AP' },
  { id: 'screentech', name: 'Screen Technology, 1980-Now', glyph: 'FT' },
  { id: 'eastasiahistory', name: 'East Asian History', glyph: 'EH' },
  { id: 'centralasiadev', name: 'Central Asian Development', glyph: 'CD' },
  { id: 'microecon', name: 'Microeconomics', glyph: 'MI' },
  { id: 'macroecon', name: 'Macroeconomics', glyph: 'MC' },
];

export const CATEGORY_IDS: readonly CategoryId[] = CATEGORIES.map((c) => c.id);

const BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]));

export function categoryById(id: CategoryId): Category | undefined {
  return BY_ID.get(id);
}

export function categoryName(id: CategoryId): string {
  return BY_ID.get(id)?.name ?? id;
}
