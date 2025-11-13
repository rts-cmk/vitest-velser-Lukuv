import { describe, it, expect } from 'vitest';
import { divide } from './divide';

describe('divide', () => {
  it('should divide correctly', () => {
    expect(divide(6, 2)).toBe(3);
  });

  it('should throw on division by zero', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });
});
