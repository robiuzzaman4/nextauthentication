import { db } from "@/db";

export function getUserByEmail(email: string) {
  const user = db.users.find((user) => user.email === email);
  return user;
}

export function getUserById(id: string) {
  const user = db.users.find((user) => user.id === id);
  return user;
}
