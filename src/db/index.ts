export type Role = "user" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  role: Role;
};

export type Db = {
  users: User[];
};

export const db: Db = {
  users: [
    {
      id: "1",
      name: "Olivia Ethan",
      email: "demo@user.com",
      role: "user",
    },
    {
      id: "2",
      name: "Mason Liam",
      email: "demo@admin.com",
      role: "admin",
    },
  ],
};
