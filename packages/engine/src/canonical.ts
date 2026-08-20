import { sha256 } from '@noble/hashes/sha2.js';
import { bytesToHex, utf8ToBytes } from '@noble/hashes/utils.js';
import { base32nopad } from '@scure/base';

/**
 * Deterministic JSON: object keys sorted, no whitespace, `undefined` dropped.
 *
 * Signatures and content hashes are taken over this, so two peers that
 * serialise the same value in different key orders still agree. Every hash in
 * the protocol funnels through here — changing it is a protocol break.
 */
export function canonicalJson(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value) ?? 'null';
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(',')}]`;
  const entries = Object.entries(value as Record<string, unknown>)
    .filter(([, v]) => v !== undefined)
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0));
  return `{${entries.map(([k, v]) => `${JSON.stringify(k)}:${canonicalJson(v)}`).join(',')}}`;
}

export function sha256Hex(input: string | Uint8Array): string {
  return bytesToHex(sha256(typeof input === 'string' ? utf8ToBytes(input) : input));
}

export function sha256Bytes(input: string | Uint8Array): Uint8Array {
  return sha256(typeof input === 'string' ? utf8ToBytes(input) : input);
}

/** Lowercase, unpadded base32 — safe in URLs, QR codes and relay topics. */
export function toBase32(bytes: Uint8Array): string {
  return base32nopad.encode(bytes).toLowerCase();
}

/** Short, stable, human-quotable id with a type prefix. */
export function shortId(prefix: string, seedMaterial: string, length: number): string {
  return `${prefix}_${toBase32(sha256Bytes(seedMaterial)).slice(0, length)}`;
}
