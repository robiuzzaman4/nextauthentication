import { Button, Code, Tooltip } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import Card from "@/components/card";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const TECH_STACKS = [
  {
    label: "Next.js",
    imgSrc: "/icons/next.svg",
  },
  {
    label: "TypeScript",
    imgSrc: "/icons/ts.svg",
  },
  {
    label: "Next Auth",
    imgSrc: "/icons/nextauth.png",
  },
  {
    label: "Radix UI",
    imgSrc: "/icons/radix.png",
  },
  {
    label: "Tailwind CSS",
    imgSrc: "/icons/tailwindcss.svg",
  },
];

const CREDENTIALS = {
  role: "'user' | 'admin'",
  email: "'demo@${role}.com'",
  password: "'123456'",
};

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center pt-32 pb-16 bg-pattern relative bg-gray-50">
      <div className="w-full h-full max-w-screen-lg mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tighter">
            RBAC authentication system in Next.js application.
          </h1>
          <p className="text-base font-normal text-gray-500 tracking-tighter">
            An example of Role-based access control authentication system in
            Next.js application with NextAuth (credential based) and TypeScript.
          </p>
          <div className="flex items-center gap-3">
            <Button
              color="gray"
              size="3"
              variant="classic"
              radius="large"
              highContrast
              className="hover:cursor-pointer w-full md:w-max text-sm"
              asChild
            >
              <Link href="/login">Try Now</Link>
            </Button>
            <Button
              color="gray"
              size="3"
              variant="soft"
              radius="large"
              highContrast
              className="hover:cursor-pointer w-fit text-sm"
              asChild
            >
              <Link
                href="https://github.com/robiuzzaman4/nextauthentication"
                target="_blank"
              >
                <GitHubLogoIcon className="size-4" /> View on Github
              </Link>
            </Button>
          </div>
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card>
            <h5 className="text-sm font-semibold tracking-tighter">
              Demo Credentials:
            </h5>

            <div className="grid gap-2">
              <Code size="3" color="teal" className="px-4 rounded-md">
                role: {CREDENTIALS.role}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                email: {CREDENTIALS.email}
              </Code>
              <Code size="3" color="teal" className="px-4 rounded-md">
                password: {CREDENTIALS.password}
              </Code>
            </div>
          </Card>
        </div>
        <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
          {TECH_STACKS.map(({ label, imgSrc }) => (
            <Tooltip content={label} key={label}>
              <Image
                src={imgSrc}
                alt={label}
                width={720}
                height={720}
                className="size-8 rounded"
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}
