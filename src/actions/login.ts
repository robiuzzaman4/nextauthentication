"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import { z } from "zod";

export async function login(credentials: z.infer<typeof LoginSchema>) {
  // validating input
  const validateSchema = LoginSchema.safeParse(credentials);

  if (validateSchema.success) {
    // get email & password from credentials
    const { email, password } = validateSchema.data;

    // sign in user using credentials
    try {
      await signIn("credentials", {
        email,
        password,
        redirectTo: DEFAULT_LOGIN_REDIRECT,
      });
    } catch (error) {
      // return error messages
      if (error instanceof AuthError) {
        switch (error?.type) {
          case "CredentialsSignin":
            return {
              success: false,
              message: "Invalid credentials",
            };
          default:
            return {
              success: false,
              message: error?.message ?? "Something went wrong",
            };
        }
      }

      // you must throw this error
      throw error;
    }
  } else {
    return {
      success: false,
      message: "Invalid fields",
    };
  }
}
