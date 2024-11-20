import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import React from "react";

export default function LoginForm() {
  return (
    <section className="h-screen w-full flex flex-col justify-center gap-6 max-w-md mx-auto px-4">
      <span className="flex flex-col items-start gap-2">
        <StackIcon height="32" width="32" />
        <h1 className="text-2xl font-semibold tracking-tighter">
          Welcome Back!
        </h1>
      </span>

      {/* email field */}
      <TextField.Root
        placeholder="Enter your email"
        type="email"
        color="gray"
        size="3"
        variant="soft"
        radius="large"
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
      >
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
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
    </section>
  );
}
