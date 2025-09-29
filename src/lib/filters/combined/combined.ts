// src/lib/combined/combined.ts

import { persistances} from '$lib/filters/persistence';

// Prefer importing from the peer package root (they should export from index.ts)

import { collatzs } from 'peer-filter-c00287252/src/lib/filters/collatz';

export type CombinedResult = {
  collatz: number[];
  persistence: number[];
};

export function combinedFilter(xs: number[]): CombinedResult {
  const collatz = collatzs(xs);
  const persistence = persistances(collatz); // array of counts
  return { collatz, persistence };
}