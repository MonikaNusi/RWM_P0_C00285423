<script lang="ts">
  import { combinedFilter } from '$lib/filters/combined/combined';

  let raw = '1 3 5 7 9 10';
  let input: number[] = [];

  type CombinedResult = { collatz: number[]; persistence: number[] };
  let mixed: CombinedResult = { collatz: [], persistence: [] };

  $: input = raw
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map(Number)
    .filter((n) => Number.isFinite(n));

  $: mixed = combinedFilter(input);
</script>

<h1>Sequence Filter Demo</h1>

<label>
  Input (space-separated integers)
  <input bind:value={raw} placeholder="e.g., 4 3 2 1 0" />
</label>

<h2>Output</h2>
<ul>
  <li><strong>Collatz (one step):</strong> {mixed.collatz.join(' ')}</li>
  <li><strong>Persistence:</strong> {mixed.persistence.join(' ')}</li>
</ul>

<style>
  label { display: block; margin: 1rem 0; }
  input { width: 100%; max-width: 30rem; }
</style>