import { getUserFromDB } from './db.js';

export function getUserGreeting(id) {
  const user = getUserFromDB(id);
  return `Hello, ${user.name}!`;
}
