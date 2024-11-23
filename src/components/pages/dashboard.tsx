import React from "react";
import { auth, signOut } from "@/auth";
import { Button, Code } from "@radix-ui/themes";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) return;

  const expireDate = new Date(session?.expires as string);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const formattedExpireDate = formatter.format(expireDate);

  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 pt-32 pb-16">
      <div className="w-full grid md:grid-cols-2 gap-12">
        <div className="bg-gray-100 border border-gray-200 p-2 w-full rounded-3xl">
          <div className="w-full flex flex-col gap-6 bg-white p-6 shadow-md rounded-2xl border border-gray-200">
            <h4 className="text-sm font-semibold tracking-tighter">
              Your Session:
            </h4>

            <div className="grid gap-2">
              <Code size="3" color="teal" className="px-4 rounded-md">
                Id: {session?.user?.id}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                Name: {session?.user?.name}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                Role: {session?.user?.role}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                Email: {session?.user?.email}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                Expired At: {formattedExpireDate}
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
