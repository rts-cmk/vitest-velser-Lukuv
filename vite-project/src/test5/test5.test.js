import { describe, it, expect, vi } from 'vitest';
import { getUserGreeting } from './greeting';
import * as db from './db.js';

vi.mock('./db.js', () => ({
  getUserFromDB: vi.fn(),
}));

describe('getUserGreeting', () => {
  it('should use mocked dependency', () => {
    db.getUserFromDB.mockReturnValue({ name: 'Alice' });
    expect(getUserGreeting(1)).toBe('Hello, Alice!');
  });
});
