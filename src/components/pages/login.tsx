"use client";

import { login } from "@/actions/login";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import React, { FormEvent, useTransition } from "react";
import { toast } from "sonner";

export default function Login() {
  // use transition hook for get pending and set transition function
  const [pending, startTransition] = useTransition();

  // handle login form submission
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = form.email.value;
    const password = form.password.value;

    startTransition(() => {
      login({ email, password }).then((data) => {
        if (!data?.success) {
          toast.error(data?.message);
        }
      });
    });
  };
  return (
    <section className="h-screen w-full grid place-items-center px-4">
      <div className="bg-gray-100 border border-gray-200 p-2 w-full max-w-sm mx-auto rounded-3xl">
        <div className="w-full flex flex-col justify-center gap-12 bg-white p-6 shadow-md rounded-2xl border border-gray-200">
          <span className="flex flex-col items-start gap-2">
            <StackIcon height="32" width="32" />
            <h1 className="text-2xl font-semibold tracking-tighter underline underline-offset-8 decoration-wavy decoration-gray-200">
              Welcome Back!
            </h1>
          </span>
          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            {/* email field */}
            <TextField.Root
              name="email"
              placeholder="Enter your email"
              type="email"
              color="gray"
              size="3"
              variant="soft"
              radius="large"
              required
              disabled={pending}
            >
              <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
            {/* password field */}
            <TextField.Root
              name="password"
              placeholder="Enter your password"
              type="password"
              color="gray"
              size="3"
              variant="soft"
              radius="large"
              required
              disabled={pending}
              defaultValue={"123456"}
            >
              <TextField.Slot>
                <LockClosedIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
            {/* submit button */}
            <Button
              color="gray"
              size="3"
              variant="classic"
              radius="large"
              highContrast
              className="hover:cursor-pointer"
              type="submit"
              disabled={pending}
              loading={pending}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
