import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { getUserById } from "@/utils";
import { Role } from "@/types";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    jwt({ token }) {
      if (!token.sub) return token;

      // add 'role' to the token
      const existingUser = getUserById(token.sub as string);
      if (!existingUser) return token;

      if ("role" in existingUser) {
        token.role = existingUser?.role;
      }

      return token;
    },
    session({ session, token }) {
      // add user role to the session
      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }
      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
