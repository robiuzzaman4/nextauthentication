import { type DefaultSession } from "next-auth";

export type ExtendUser = DefaultSession["user"] & {
  role: "user" | "admin";
};

declare module "next-auth" {
  interface Session {
    user: ExtendUser;
  }
}
