// src/lib/combined/combined.ts

import { collatzs as peerCollatz } from 'peer-filter-c00287252/src/lib/filters/collatz';

// Prefer importing from the peer package root (they should export from index.ts)

import { persistance as myPersistance } from '$lib/filters/persistance';

export function combinedFilter(xs: number[]): number[] {
    const afterMine = peerCollatz(xs);
    return myPersistance(afterMine);
}