#!/usr/bin/env bash
# Builds the Dohhh PWA and publishes it to Cloudflare Pages.
# Run from anywhere; requires sops, an age key at ~/.config/sops/age/keys.txt,
# pnpm, and network access to api.cloudflare.com.
#
# The app needs a real certificate to work at all - Trystero derives its relay
# topic through crypto.subtle, which browsers only expose in a secure context -
# and Pages is the cheapest way to get one. See the README.
#
# Token scope: this needs "Account / Cloudflare Pages / Edit". The token in
# secrets/common.yaml was created for DNS edits, so it may well lack that; if
# the deploy 403s, either add the permission to that token or export
# CLOUDFLARE_API_TOKEN with a new one before running this.

set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(git -C "$HERE" rev-parse --show-toplevel)"
SECRETS="$REPO/secrets/common.yaml"
PROJECT="${PAGES_PROJECT:-dohhh}"

# This app is self-contained enough to be split out of the homelab repo, at
# which point there is no sops store to read - so fall back to asking rather
# than failing on a missing file.
if [[ ! -f "$SECRETS" && -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "no $SECRETS; export CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID instead" >&2
  exit 1
fi

if [[ -z "${CLOUDFLARE_API_TOKEN:-}" ]]; then
  echo "==> reading Cloudflare credentials from sops"
  CLOUDFLARE_API_TOKEN=$(sops --decrypt --extract '["cloudflare"]["api_token"]' "$SECRETS")
fi
if [[ -z "${CLOUDFLARE_ACCOUNT_ID:-}" ]]; then
  CLOUDFLARE_ACCOUNT_ID=$(sops --decrypt --extract '["cloudflare"]["account_id"]' "$SECRETS")
fi
export CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID

echo "==> verifying before publishing"
# A broken build is worse than no build here: friends' phones auto-update to
# whatever is live, so publishing is not a step to take on an unverified tree.
(cd "$HERE/.." && pnpm verify)

echo "==> creating the Pages project if it does not exist"
# `project create` is not idempotent, so tolerate the "already exists" failure
# rather than making the caller special-case the first run.
(cd "$HERE/../apps/pwa" && pnpm dlx wrangler@4 pages project create "$PROJECT" \
  --production-branch main 2>/dev/null) || true

echo "==> publishing"
cd "$HERE/../apps/pwa"
pnpm dlx wrangler@4 pages deploy dist --project-name "$PROJECT" --branch main

cat <<'DONE'

Published. Two things before you send the link round:

  * Open it once yourself and check the padlock. The four-word join code and
    the QR scanner both need the secure context; if the URL is http:// or the
    cert is untrusted, peers will not find each other at all.
  * Do not re-run this mid-session. Devices auto-update, and a device on the
    new question pack will refuse to play one still on the old.
DONE
