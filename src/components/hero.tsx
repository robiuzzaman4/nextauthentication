import { Button, Code } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

// const TECH_STACKS = [
//   {
//     label: "Next.js",
//     imgSrc: "/icons/next.svg",
//   },
//   {
//     label: "TypeScript",
//     imgSrc: "/icons/ts.svg",
//   },
//   {
//     label: "Next Auth",
//     imgSrc: "/icons/nextauth.png",
//   },
//   {
//     label: "Radix UI",
//     imgSrc: "/icons/radix.png",
//   },
//   {
//     label: "Tailwind CSS",
//     imgSrc: "/icons/tailwindcss.svg",
//   },
// ];

const CREDENTIALS = {
  role: "'user' | 'admin' | 'client'",
  email: "'demo@${role}.com'",
  password: "'123456'",
};

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-64px)] pt-32 pb-16 w-full max-w-screen-lg mx-auto px-4 grid md:grid-cols-2 gap-12 place-items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter">
          RBAC authentication system in Next.js application.
        </h1>
        <p className="text-base font-normal text-gray-500 tracking-tighter">
          An example of Role-based access control authentication system in
          Next.js application with NextAuth (credential based) and TypeScript.
        </p>
        <Button
          color="gray"
          size="3"
          variant="classic"
          radius="large"
          highContrast
          className="hover:cursor-pointer w-full md:w-max"
          asChild
        >
          <Link href="/login">Try Now</Link>
        </Button>
      </div>
      <div className="bg-gray-100 border border-gray-200 p-2 w-full max-w-sm mx-auto rounded-3xl">
        <div className="w-full flex flex-col gap-6 bg-white p-6 shadow-md rounded-2xl border border-gray-200">
          <h4 className="text-sm font-semibold tracking-tighter">
            Demo Credentials:
          </h4>

          <div className="grid gap-2">
            <Code size="3" className="px-4 rounded-md">
              role: {CREDENTIALS.role}
            </Code>
            <Code size="3" className="px-4 rounded-md">
              email: {CREDENTIALS.email}
            </Code>
            <Code size="3" className="px-4 rounded-md">
              password: {CREDENTIALS.password}
            </Code>
          </div>
        </div>
      </div>
    </div>
  );
}
