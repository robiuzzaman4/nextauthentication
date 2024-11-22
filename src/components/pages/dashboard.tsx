import { signOut } from "@/auth";
import { Button } from "@radix-ui/themes";
import React from "react";

export default async function Dashboard() {
  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 pt-32 pb-16">
      Dashboard
      <form
        action={async () => {
          "use server";
          await signOut({
            redirectTo: "/",
          });
        }}
      >
        <Button
          color="red"
          size="3"
          variant="classic"
          radius="large"
          highContrast
          className="hover:cursor-pointer"
          type="submit"
        >
          Logout
        </Button>
      </form>
    </section>
  );
}
