import React from "react";
import { auth } from "@/auth";
import { Code } from "@radix-ui/themes";
import Card from "@/components/card";
import Logout from "@/components/logout";

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
        <Card>
          <h5 className="text-sm font-semibold tracking-tighter">
            Your Session:
          </h5>
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
          <Logout />
        </Card>
      </div>
    </section>
  );
}
