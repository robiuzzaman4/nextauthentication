"use client";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import React, { FormEvent } from "react";

export default function Login() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* email field */}
            <TextField.Root
              placeholder="Enter your email"
              type="email"
              color="gray"
              size="3"
              variant="soft"
              radius="large"
              required
            >
              <TextField.Slot>
                <EnvelopeClosedIcon height="16" width="16" />
              </TextField.Slot>
            </TextField.Root>
            {/* password field */}
            <TextField.Root
              placeholder="Enter your password"
              type="password"
              color="gray"
              size="3"
              variant="soft"
              radius="large"
              required
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
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
