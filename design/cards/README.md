# Card design canvas

Source for the Mandarin reading game's card design, published as a Claude Design
canvas.

| File | What it is |
| --- | --- |
| `Main.dc.html` | The turn loop, clickable: bet, sign, answer, breakdown. Switches between all five sign types. |
| `Breakdown.dc.html` | The component-breakdown surface at full height, using 牛肉. |
| `Signs.dc.html` | The five sign treatments side by side, with what makes each one hard. |
| `canvas.json` | Layout: turn loop, breakdown, sign sheet. |

Direction settled: **signage-led**. Two earlier alternatives (a continuity
direction that kept dohhh's card skin, and an editorial/flashcard-quiet one) were
built, compared and dropped; they are in the history of this directory if the
decision ever needs revisiting.

## The card is an object, not a plate

Each category renders as the kind of physical thing you actually meet the
characters on, rather than one plate that changes colour by topic:

| Category | Object | Item |
| --- | --- | --- |
| `transit` | Station wayfinding plate — enamel, blue band, exit letter, arrow | 出口 |
| `menu` | Printed menu section — serif, price column, dotted leaders | 辣 |
| `street` | Shopfront fascia — gold on red, display weight, inset rule | 药店 |
| `market` | Shelf-edge price label — the price shouts over the character | 斤 |
| `safety` | Hazard board — yellow warns, red forbids | 小心地滑 |

Recognising the object is half of reading the sign: you know a price label is a
price label before you can read a character of it, and that knowledge is what
makes the characters guessable. Two of the treatments are deliberately *hard* —
the fascia is loud and tightly tracked, the price label buries 斤 under a large
number — because those are the real reading conditions.

The cost is honest: five templates to build and maintain instead of one, and
every new category needs a treatment designed for it rather than a colour picked
for it.

**The invariant.** However the card is dressed, the characters are set the way
the real object sets them — never white-on-violet, never glowing, never rounded
to match the app. The dark chrome is a frame around the sign, not a skin applied
to it. A learner who can only recognise 出口 in the app's house style has learned
the app, not the language.

## The breakdown is the screen that teaches

It is not a footnote on the outcome card. It is the body of the reveal, and nothing
advances it but a tap — no timer, no auto-dismiss.

The evidence forced this. A path analysis of 252 international students learning
Chinese found **morphological awareness** — knowing that words come apart into
meaning-bearing pieces — is the largest single contributor to L2 Chinese reading,
ahead of vocabulary size and well ahead of working-memory capacity, which
contributes only indirectly. The breakdown is the only place in the product where
that gets built, so it gets the room.

Four beats, in order:

1. **The word**, on the same light ground the sign used, so the thing you just read
   is the thing you now study.
2. **It comes apart.** 牛 ox + 肉 meat. Chinese has no separate word for beef the
   way English does — it names the animal and the substance and lets you do the
   arithmetic.
3. **The same move again.** Swap the head: 猪肉 pork, 羊肉 lamb, 鸡肉 chicken,
   鸭肉 duck. One character learned, four dishes readable.
4. **The unlock.** Squeezed to the left of another character, 肉 flattens into 月 —
   and the organ section of a menu stops being a lottery: 肝 liver, 肠 intestine,
   肚 tripe, 腰 kidney, 脑 brain.

That fourth beat is the argument for the whole screen. It is not a fact about one
word, it is a key that opens a section of every menu in the country, and there is no
way to hand it over except by taking a word apart in front of someone.

It is stated as a hint, not a rule — the same 月 is also the moon, as in 月票
monthly pass — because overclaiming a pattern is how you teach someone to misread
confidently.

Every item carries its own pattern; only some carry an unlock. 出口 opens onto 口 as
*opening* (入口, 门口, 路口, 售票口); 药店 onto 店 as *shop* (书店, 花店, 网店);
斤 onto the weight ladder (克, 两, 斤, 公斤); 小心地滑 onto 小心 as the head of
every warning sign (小心台阶, 小心碰头, 小心车辆).

## The bet is scaffolding, not difficulty

| Bet | What you lose |
| --- | --- |
| +1 / −1 | Nothing — pinyin under the sign, answers in English. |
| +5 / −3 | No pinyin. |
| +15 / −10 | No pinyin, and the four answers are Chinese signs too. |

That keeps dohhh's pre-commitment wager intact while making it do pedagogical
work — desirable difficulty, plus a forced self-calibration judgement before
every item — rather than only being fun. At the top tier the four options are
real signs you would plausibly confuse the answer with, which is where most of
the teaching happens.

Tone colour sits on the **pinyin**, never on the character. A learner who has
learned to recognise a colour has not learned to read a station wall. There is a
tweak to turn it off entirely, pending evidence that it earns its place.

## Colour values

Lifted from the running app, not approximated: the ground gradient and tier
accents from `apps/pwa/src/styles.css`, everything else from HeroUI v3.2.4's
resolved dark tokens (`--surface` `oklch(0.2103 0.0059 285.89)`, `--border`
`oklch(28% 0.006 286.033)`, `--muted` `oklch(70.5% 0.015 286.067)`, `--accent`
`oklch(0.6204 0.195 253.83)`).

Sign colours are their own system, chosen to read as the real object rather than
to match the app: metro blue `oklch(0.42 0.13 250)`, menu red
`oklch(0.42 0.16 28)`, fascia gold `oklch(0.84 0.14 88)`, price red
`oklch(0.50 0.20 28)`, hazard yellow `oklch(0.86 0.17 96)`.

Tone hues are matched in lightness and chroma so no tone shouts louder than
another: T1 `oklch(0.72 0.16 25)`, T2 `oklch(0.72 0.16 70)`, T3
`oklch(0.72 0.16 150)`, T4 `oklch(0.72 0.16 260)`, neutral
`oklch(0.72 0.02 285)`.

## Regenerating the canvas

The seeded `.html` is a build output and is gitignored; it is ~2 MB because the
canvas editor is baked into it. To rebuild and republish, re-run the `design`
skill's seeder over these files and publish to the same artifact URL.

## Still open

- Whether tone colour survives the evidence.
- Whether the gloss should be Dutch or English. Both are shown for now.
