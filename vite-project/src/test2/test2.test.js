import { describe, it, beforeEach, afterEach, expect } from 'vitest';
import { addUser, getUsers, clearUsers } from './users';

describe('User management', () => {
  beforeEach(() => {
    clearUsers();
    addUser('Alice');
  });

  afterEach(() => {
    clearUsers();
  });

  it('should add users', () => {
    addUser('Bob');
    expect(getUsers()).toEqual(['Alice', 'Bob']);
  });

  it('should reset between tests', () => {
    expect(getUsers()).toEqual(['Alice']);
  });
});
