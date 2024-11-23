import { db } from "@/db";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function getUserByEmail(email: string) {
  const user = db.users.find((user) => user.email === email);
  return user;
}

export function getUserById(id: string) {
  const user = db.users.find((user) => user.id === id);
  return user;
}



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}