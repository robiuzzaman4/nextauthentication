import React from "react";
import { auth, signOut } from "@/auth";
import { Button, Code } from "@radix-ui/themes";

export default async function Dashboard() {
  const session = await auth();
  
  if (!session?.user) return;

  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 pt-32 pb-16">
      <div className="w-full grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 border border-gray-200 p-2 w-full max-w-sm mx-auto rounded-3xl">
          <div className="w-full flex flex-col gap-6 bg-white p-6 shadow-md rounded-2xl border border-gray-200">
            <h4 className="text-sm font-semibold tracking-tighter">
              Your Session:
            </h4>

            <Code size="3" color="teal" className="px-4 rounded-md">
              {JSON.stringify(session)}
            </Code>

            <div className="grid gap-2">
              <Code size="3" color="teal" className="px-4 rounded-md">
                id: {session?.user?.id}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                role: {session?.user?.role}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                email: {session?.user?.email}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                password:
              </Code>
            </div>
          </div>
        </div>
      </div>
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
