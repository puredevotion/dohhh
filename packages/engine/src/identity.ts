import { ed25519 } from '@noble/curves/ed25519.js';
import { bytesToHex, hexToBytes, utf8ToBytes } from '@noble/hashes/utils.js';

import { sha256Bytes, toBase32 } from './canonical.js';
import type { Player, PlayerId } from './types.js';

/**
 * There is no account server, so identity is a keypair the device generates and
 * never sends anywhere. The player id is a hash of the public key, which makes
 * it self-certifying: any peer can check that a signature, a public key and an
 * id belong together without ever having been told so by an authority.
 */
export interface Identity {
  readonly id: PlayerId;
  readonly username: string;
  readonly publicKey: string;
  /** Hex Ed25519 secret key. Never leaves the device; never enters an event. */
  readonly secretKey: string;
}

/** Serialisable identity minus the secret - safe to log, ship or display. */
export type PublicIdentity = Player;

export const PLAYER_ID_PREFIX = 'dh_';
const PLAYER_ID_BODY_LENGTH = 12;

export function playerIdFromPublicKey(publicKey: string | Uint8Array): PlayerId {
  const bytes = typeof publicKey === 'string' ? hexToBytes(publicKey) : publicKey;
  return PLAYER_ID_PREFIX + toBase32(sha256Bytes(bytes)).slice(0, PLAYER_ID_BODY_LENGTH);
}

export function createIdentity(username: string, secretKeyHex?: string): Identity {
  const secretKey = secretKeyHex ? hexToBytes(secretKeyHex) : ed25519.utils.randomSecretKey();
  const publicKey = ed25519.getPublicKey(secretKey);
  return {
    id: playerIdFromPublicKey(publicKey),
    username: normalizeUsername(username),
    publicKey: bytesToHex(publicKey),
    secretKey: bytesToHex(secretKey),
  };
}

export function withUsername(identity: Identity, username: string): Identity {
  return { ...identity, username: normalizeUsername(username) };
}

export function toPublicIdentity(identity: Identity): PublicIdentity {
  return { id: identity.id, username: identity.username, publicKey: identity.publicKey };
}

export function sign(message: string, secretKeyHex: string): string {
  return bytesToHex(ed25519.sign(utf8ToBytes(message), hexToBytes(secretKeyHex)));
}

export function verify(signatureHex: string, message: string, publicKeyHex: string): boolean {
  try {
    return ed25519.verify(hexToBytes(signatureHex), utf8ToBytes(message), hexToBytes(publicKeyHex));
  } catch {
    // Malformed hex, wrong length, non-canonical point: all of these mean "not
    // a valid signature", and none of them is worth crashing a game loop over.
    return false;
  }
}

/**
 * Usernames are decoration - the id is the identity (R-17) - so this only has
 * to stop layout-breaking input, not enforce uniqueness.
 */
export function normalizeUsername(raw: string): string {
  const trimmed = raw.replace(/\s+/g, ' ').trim();
  if (trimmed.length === 0) return 'Anonymous';
  return trimmed.slice(0, 24);
}
