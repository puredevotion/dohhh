# Card design canvas

Source for the Mandarin reading game's card design, published as a Claude Design
canvas.

| File | What it is |
| --- | --- |
| `Continuity.dc.html` | Direction A — today's dohhh skin, new card anatomy. |
| `Signage.dc.html` | Direction B — the card as a sign plate. The leading candidate. |
| `Editorial.dc.html` | Direction C — near-black, serif, flashcard-quiet. |
| `Main.dc.html` | Direction B as a clickable turn loop: bet, sign, answer, reveal. |
| `canvas.json` | Layout: page 1 the three directions, page 2 the prototype. |

The three direction artboards render the *same* item (出口) at the *same* bet, so
the comparison is between visual languages and nothing else.

Colour values are lifted from the running app, not approximated: the ground
gradient and tier accents come from `apps/pwa/src/styles.css`, everything else
from HeroUI v3.2.4's resolved dark tokens (`--surface` `oklch(0.2103 0.0059
285.89)`, `--border` `oklch(28% 0.006 286.033)`, `--muted` `oklch(70.5% 0.015
286.067)`, `--accent` `oklch(0.6204 0.195 253.83)`, and so on).

## Regenerating the canvas

The seeded `.html` is a build output and is gitignored; it is ~2 MB because the
canvas editor is baked into it. To rebuild and republish, re-run the `design`
skill's seeder over these files and publish to the same artifact URL.

## The idea the design is arguing for

The bet is **how much scaffolding you give up**, not an abstract difficulty
label:

| Bet | What you lose |
| --- | --- |
| +1 / −1 | Nothing — pinyin under the sign, answers in English. |
| +5 / −3 | No pinyin. |
| +15 / −10 | No pinyin, and the four answers are Chinese signs too. |

That keeps dohhh's pre-commitment wager intact while making it do pedagogical
work (desirable difficulty, plus a forced self-calibration judgement before
every item) rather than merely being fun.

Tone colour sits on the **pinyin**, never on the character. A learner who has
learned to recognise a colour has not learned to read a station wall.
