import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schema";
import { getUserByEmail } from "@/utils";

export default {
  providers: [
    Credentials({
      authorize(credentials) {
        // validating input
        const validateSchema = LoginSchema.safeParse(credentials);

        if (validateSchema.success) {
          // get email & password from credentials
          const { email, password } = validateSchema.data;

          // get user from db
          const user = getUserByEmail(email); // [note: no need to use async-await there, because of I'm using local constant data instead of a real database]

          // if user not found or password not provided then return null
          if (!user || !user.password) return null;

          // if password matches then return user object
          if (user.password === password) return user;
        }

        // if validation fails then return null
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
