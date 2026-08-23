import { createRng } from '../rng.js';
import type { CategoryId, Difficulty, Question } from '../types.js';

/**
 * Compact authoring format: `[prompt, options, answerIndex, explanation]`.
 *
 * Questions are content, and content gets edited by people who are not editing
 * the engine, so the shape they type is deliberately smaller than the shape the
 * engine consumes. Ids are derived, never typed - a hand-written id is a
 * duplicate waiting to happen.
 *
 * By convention the correct option is written **first**, which makes review
 * cheap: a reader checks one line per question rather than hunting for which of
 * four it is. {@link expand} then rotates each question deterministically, so
 * the authoring convention never reaches the pack.
 */
export type Row = readonly [
  prompt: string,
  options: readonly [string, string, string, string],
  answer: 0 | 1 | 2 | 3,
  explanation: string,
];

/**
 * Partial rather than a full `Record`: content is authored incrementally
 * (a chunk can cover one tier and leave the rest for a later chunk in the
 * same category, per {@link expand}'s variadic concatenation), and the bank
 * grows one tier at a time across the whole category list rather than one
 * category at a time - a category mid-rollout for a new tier legitimately
 * has no rows for it yet.
 */
export type CategoryContent = Readonly<Partial<Record<Difficulty, readonly Row[]>>>;

/**
 * Flatten one or more content chunks for a category into engine questions.
 *
 * Variadic so a category's bank can be split across files - a base set and
 * later additions - without renumbering anything: ids are assigned over the
 * concatenation, so appending a chunk only ever adds ids and never changes an
 * existing one. That matters because a question id is what a finished game's
 * history refers back to.
 */
export function expand(category: CategoryId, ...chunks: readonly CategoryContent[]): Question[] {
  const out: Question[] = [];
  for (const difficulty of ['bscba', 'msc', 'phd', 'professor'] as const) {
    const rows = chunks.flatMap((chunk) => chunk[difficulty] ?? []);
    rows.forEach((row, index) => {
      const [prompt, options, answer, explanation] = row;
      const id = `${category}-${difficulty}-${index + 1}`;
      out.push({ ...rotate(options, answer, id), id, category, difficulty, prompt, explanation });
    });
  }
  return out;
}

/**
 * Spread the authored answer position evenly across the four slots.
 *
 * Authoring the answer first is convenient and produces a pack in which the
 * answer is almost always index 0 - which is fine in theory, because
 * `presentQuestion` shuffles per turn from the drawer's nonce, and wrong in
 * practice: any consumer that renders the authored order, or any inspection of
 * the pack, sees a bank that looks rigged. Rotating here means the stored pack
 * is already balanced, so the shuffle is defence in depth rather than the only
 * defence.
 *
 * A rotation is used rather than a shuffle because it is trivially
 * meaning-preserving: the same four options in a different cyclic order, with
 * the answer index moved by the same amount.
 */
function rotate(
  options: readonly [string, string, string, string],
  answer: 0 | 1 | 2 | 3,
  id: string,
): { options: [string, string, string, string]; answer: 0 | 1 | 2 | 3 } {
  const by = createRng('rotate', id).int(4);
  const rotated = options.map((_, i) => options[(i + by) % 4] as string) as [
    string,
    string,
    string,
    string,
  ];
  return { options: rotated, answer: (((answer - by + 4) % 4) as 0 | 1 | 2 | 3) };
}
