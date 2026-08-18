import { describe, expect, it } from 'vitest';
import { formatCurrency, formatNumber } from './formatters';

describe('healthcare formatters', () => {
  it('formats patient counts with thousands separators', () => expect(formatNumber(12842)).toBe('12,842'));
  it('formats revenue as whole USD', () => expect(formatCurrency(2840000)).toBe('$2,840,000'));
  it('handles zero values', () => expect(formatNumber(0)).toBe('0'));
  it('defaults invalid values to zero', () => {
    expect(formatNumber('bad')).toBe('0');
    expect(formatCurrency(null)).toBe('$0');
  });
});
