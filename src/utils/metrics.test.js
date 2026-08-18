import { describe, expect, it } from 'vitest';
import { calculateAverage, calculateCompletionRate } from './metrics';

describe('healthcare metric helpers', () => {
  it('calculates a percentage safely', () => expect(calculateCompletionRate(82,100)).toBe(82));
  it('returns zero for empty totals', () => expect(calculateCompletionRate(0,0)).toBe(0));
  it('calculates a numeric average', () => expect(calculateAverage([80,90,100])).toBe(90));
  it('returns zero for empty values', () => expect(calculateAverage([])).toBe(0));
  it('ignores invalid entries and clamps over-100 totals', () => {
    expect(calculateCompletionRate('120', '100')).toBe(100);
    expect(calculateAverage([90, '100', null, undefined, 'oops'])).toBe(95);
  });
});
