import { createHmac } from 'node:crypto';

export function convertToSha256Hex(text: string) {
  return createHmac('sha256', text).digest('hex');
}

export function compareSha256(entry: string, valueToCompare: string) {
  return entry === valueToCompare;
}
