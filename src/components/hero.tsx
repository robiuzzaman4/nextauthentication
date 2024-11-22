import { Button } from "@radix-ui/themes";
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

export default function Hero() {
  return (
    <div className="h-[calc(100vh-64px)] w-full max-w-screen-lg mx-auto px-4 pt-40 pb-20 grid md:grid-cols-2 gap-6 place-items-center">
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
    </div>
  );
}
