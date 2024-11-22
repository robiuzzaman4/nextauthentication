export type Role = "user" | "admin";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export type Db = {
  users: User[];
};
