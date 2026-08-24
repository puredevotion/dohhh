# Deploy

- Target: Cloudflare Pages, project `dohhh`, via Wrangler.
- Script: `scripts/deploy-pages.sh` — verify, build, publish. Single entry point, don't call wrangler by hand.

## Prereqs

- `pnpm` installed.
- Env vars, sourced from `.env.deploy-secrets` (not committed):
  - `CLOUDFLARE_API_TOKEN` — scoped to **Account / Cloudflare Pages / Edit**. A DNS-scoped token 403s here.
  - `CLOUDFLARE_ACCOUNT_ID`

## Run

```bash
set -a && source .env.deploy-secrets && set +a
bash scripts/deploy-pages.sh
```

## What the script does

- `pnpm verify` — lint + typecheck + test + build. Fails closed: a broken build never gets published, since every open device auto-updates to whatever's live.
- `wrangler pages project create dohhh` — idempotent-ish, tolerates "already exists".
- `wrangler pages deploy apps/pwa/dist --project-name dohhh --branch main`.
- Prints the deploy URL + a same-cert / same-pack-version reminder.

## Before sending the link around

- Open it yourself, check the padlock. Join code + QR scanner need a secure context — http:// or an untrusted cert means peers can't find each other.
- **Never redeploy mid-session.** Devices auto-update; a device on the new question pack refuses to play one still on the old (by design — see README R-15).

## Gotchas

- Wrangler warns on uncommitted changes in the working tree (`--commit-dirty=true` silences it) — doesn't block the deploy, but means the live bundle may not match any commit. Commit first if that matters.
- `CLOUDFLARE_*` vars only ever belong in `.env.deploy-secrets`, never `.env` (that one ships to the browser) and never imported into any file that ends up in the client bundle.
