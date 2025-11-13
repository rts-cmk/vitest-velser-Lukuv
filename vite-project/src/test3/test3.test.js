import { describe, it, expect } from 'vitest';
import { fetchData } from './fetchData';

describe('fetchData', () => {
  it('should resolve with data', async () => {
    const result = await fetchData(true);
    expect(result).toBe('data loaded');
  });

  it('should reject on failure', async () => {
    await expect(fetchData(false)).rejects.toThrow('fetch failed');
  });
});
