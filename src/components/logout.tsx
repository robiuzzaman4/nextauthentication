"use client";

import { signOut } from "next-auth/react";
import { Button } from "@radix-ui/themes";

export default function Logout() {
  return (
    <Button
      color="red"
      size="3"
      variant="classic"
      radius="large"
      highContrast
      className="hover:cursor-pointer text-sm"
      onClick={() => signOut()}
    >
      Logout
    </Button>
  );
}
