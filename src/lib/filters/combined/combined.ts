// src/lib/combined/combined.ts

import { persistence as myPersistence } from '$lib/filters/persistence';

// Prefer importing from the peer package root (they should export from index.ts)

import { collatzs as peerCollatz } from 'peer-filter-c00287252/src/lib/filters';

export function combinedFilter(xs: number[]): number {
    const afterMine = peerCollatz(xs);
    return myPersistence(afterMine);
}