# Dohhh

Serverless peer-to-peer trivia. Every install is a node; a game exists only as a
signed event log on the phones playing it.

Named for the noise you make when a fifteen-point bet goes wrong, which is the
only moment in this game that really matters. Spelled without an accent and
without a `u`: the OED-listed interjection is *d'oh*, phone keyboards do not
offer `ô` without a fight, and an accented character in a domain, a package name
or an app-store search field costs more than it conveys. If a circumflex is
wanted later it is a display-string change in one constant per surface.

You are not asked "do you know this". You are dealt a random category and asked
**how much you think you know it**: a university-graduate question is worth 1 and
costs 1, a PhD one is worth 5 and costs 3, and a post-doc one is worth 15 and
costs 10. You bet before you see the question. Get it right and you keep the
turn; get it wrong and it costs you and moves on. First to 150.

> **Status: working prototype.** The rules engine, the sync protocol and the web
> app are built, tested and verified end to end. The bundled bank is 810
> questions across 18 categories. The
> React Native shell is a scaffold. Read
> [`docs/ADVERSARIAL-REVIEW.md`](docs/ADVERSARIAL-REVIEW.md) before forming an
> opinion about any of it; the known weaknesses are written down there, including
> the two that no amount of engineering settles.

## Layout

| Path | What it is |
| --- | --- |
| `packages/engine` | The game. Pure TypeScript: identity, join codes, seeded RNG, event log, deterministic reducer, scoring, question packs. No DOM, no React Native, no I/O. |
| `packages/net` | Peer discovery, anti-entropy sync, QR join tickets, local storage. |
| `apps/pwa` | **The app you play.** Vite + React 19 + HeroUI v3, installable and offline-capable. |
| `apps/native` | Expo / React Native shell over the same engine. Tier 2 scaffold. |
| `docs/` | Plan, adversarial review, architecture, protocol. |

## Running it

```bash
pnpm install:web     # engine + net + pwa (skips the heavy Expo tree)
pnpm dev             # http://localhost:5173
pnpm verify          # typecheck + tests + production build
```

Two devices, one game:

1. On the first phone: **Host a game**, name it, open the lobby.
2. On the second: **Join a game** and either point the camera at the first
   phone's QR code, or type the four words.
3. Make two teams, put a player on each, and the host presses start.

Camera access needs HTTPS or `localhost` - a browser rule, not ours. The
four-word code works everywhere and is the fallback the UI offers when scanning
cannot work.

`pnpm install` (no filter) additionally installs the Expo app; `pnpm --filter
@dohhh/native start` runs it.

## Getting it onto your friends' phones

`pnpm build` writes a static `apps/pwa/dist/` with no backend of any kind, so
"deploying" is copying a directory. The one hard constraint is that it must be
served over **HTTPS** (or `localhost`). That is not only the camera rule above:
Trystero derives its relay topic through `crypto.subtle`, which browsers expose
in secure contexts only, so over plain `http://192.168.x.x` or a `file://` URL
peers never discover each other at all and the game looks broken rather than
merely camera-less.

Three routes that satisfy that, cheapest first:

- **Any static HTTPS host** - Cloudflare Pages, Netlify, GitHub Pages. Upload
  `dist/`, send the URL. Nothing to configure, because there is nothing to
  configure: no accounts, no database, no environment variables.
- **This homelab** - a Deployment serving `dist/` behind an Ingress on
  `*.sevenwoods.nl`, which already terminates TLS through Traefik. Fits the
  repo's conventions; more moving parts than the test needs.
- **`tailscale serve`** - private, but every friend has to install Tailscale and
  be added to the tailnet, which is a lot to ask of a games night.

Whichever you pick, the deployed origin propagates by itself: the QR ticket
encodes `location.origin + location.pathname`, so a scan lands on the same build
the host is running.

Two things to know before the first session:

- **Deploy before, not during.** The service worker is `autoUpdate`, so a
  redeploy mid-game leaves devices on different question packs, and the protocol
  refuses mismatched packs at the door by design.
- **One Wi-Fi is much more reliable.** There is no TURN server, so anything
  behind carrier NAT may never connect; the lobby says so after fifteen seconds.

## How a game works

- **The tiers.** Named after who should get them right, and authored to it:
  `graduate` is a master's degree in the field, `phd` is a specialist or ten
  years in it, `professor` is twenty years and following the literature. None of
  the three is general knowledge - the brief asked for hard, very hard and
  incredibly hard, and the first pass at the bank drifted well below that.
- **Categories.** Eighteen: history, Central Asian history, East Asian
  development, geography, literature, art and architecture, music, film and
  television, physics, chemistry, biology, mathematics, general computing,
  semiconductors and lithography, software engineering and algorithms, finance
  and structured products, economics and financial history, and sport.
- **Identity.** Pick a name at first launch. The device generates an Ed25519
  keypair locally; the public key hashes to a permanent player id
  (`tp_` + 12 chars). Names need not be unique - the id is the identity, and it
  is what every signature resolves to. Nothing is sent anywhere.
- **Invitations.** A QR code, or four lowercase words (`amber-otter-glass-tide`)
  - 40 bits of entropy, speakable across a table.
- **Teams.** Any number of players per team, any number of teams. A game needs
  **two teams with a player each**: two people on one team is not a game.
- **A turn.** An *opposing* peer deals the category and publishes a random nonce;
  the acting team picks a tier; the question is derived from the nonce, so the
  answering device cannot precompute it. Right, and the same team goes again.
  Wrong or out of time, and the turn passes.
- **Winning.** Crossing 150 arms the endgame; the round then completes so every
  team has had the same number of turns. Highest score wins; a dead heat goes to
  sudden death.

Scores can go negative, and a correct answer returns the turn with no limit -
both spec-faithful, both dangerous, both switchable in the host's lobby. The
reasoning for each is in the review.

## What "no central server" means here

No server we run, no accounts, no matchmaking, no telemetry, and no copy of a
game anywhere but on the players' devices. All game traffic is direct WebRTC.

WebRTC still cannot introduce two devices unaided, so peer discovery rides public
Nostr relays carrying ICE candidates only, on a topic that is a hash of the join
code rather than the code itself. Without TURN, some networks - carrier NAT
especially - will not connect at all; the app says so after fifteen seconds
instead of spinning. Details and the rest of the trade in
[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

## Tests

```bash
pnpm test    # 105 tests: engine rules and net sync
```

Worth knowing what they cover, because the interesting ones are not unit tests:

- A full game is played out in-process, including the 10-professor-answer run to
  150, the endgame completing its round, and a dead heat resolving in sudden
  death.
- A real log is shuffled twenty times and re-reduced; the state must be identical
  every time. This is the property the whole no-server design rests on.
- Two sessions sync over an in-process mesh with deliberately dropped messages,
  and must converge without a leader.
- The question bank is audited for the one bias that survives option shuffling:
  if the correct answer were reliably the longest, a player who knows nothing
  could profit and the betting mechanic would be pointless. Measured, gated, and
  the gate only ratchets down. It has now caught the same authoring habit twice.

## Taking this out of the monorepo

It lives under `experiments/` and depends on nothing outside its own directory,
so it splits cleanly:

```bash
git subtree split -P experiments/dohhh -b dohhh
```

## Licence

MIT.
