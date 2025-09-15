import { describe, it, expect } from 'vitest';
import { persistances } from './persistance';

describe('Persistance filter', () => {
  it('the number of steps it takes to reduce it to a single digit by repeatedly multplying its digits', () => {
    const input = [39,999,4,25];
    const expected = [3,4,0,2];
    expect(persistances(input)).toEqual(expected);
  });



});
