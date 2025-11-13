export function handleInput(value) {
  if (value === null || value === undefined) return 'no value';
  if (typeof value === 'number') return value * 2;
  if (typeof value === 'string') return value.toUpperCase();
  throw new Error('invalid type');
}
