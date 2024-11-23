import { Db } from "@/types";

export const db: Db = {
  users: [
    {
      id: "1",
      name: "Demo User",
      email: "demo@user.com",
      password: "123456",
      role: "user",
    },
    {
      id: "2",
      name: "Demo Admin",
      email: "demo@admin.com",
      password: "123456",
      role: "admin",
    },
  ],
};
