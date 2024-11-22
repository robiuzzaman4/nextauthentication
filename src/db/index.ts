import { Db } from "@/types";

export const db: Db = {
  users: [
    {
      id: "1",
      name: "Olivia Ethan",
      email: "demo@user.com",
      password: "123456",
      role: "user",
    },
    {
      id: "2",
      name: "Mason Liam",
      email: "demo@admin.com",
      password: "123456",
      role: "admin",
    },
  ],
};
