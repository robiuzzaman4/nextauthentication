"use client";

import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import React, { FormEvent } from "react";

export default function LoginForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="h-screen w-full grid place-items-center px-4">
      <div className="w-full max-w-md mx-auto flex flex-col justify-center gap-12">
        <span className="flex flex-col items-start gap-2">
          <StackIcon height="32" width="32" />
          <h1 className="text-2xl font-semibold tracking-tighter">
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
    </section>
  );
}
