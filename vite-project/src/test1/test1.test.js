import { describe, it, expect } from 'vitest';
import { handleInput } from './handleInput';

describe('handleInput', () => {
  it('should double numbers', () => {
    expect(handleInput(3)).toBe(6);
  });

  it('should uppercase strings', () => {
    expect(handleInput('hej')).toBe('HEJ');
  });

  it('should handle null values', () => {
    expect(handleInput(null)).toBe('no value');
  });

  it('should throw on objects', () => {
    expect(() => handleInput({})).toThrow('invalid type');
  });
});
