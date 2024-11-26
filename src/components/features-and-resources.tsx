import { CheckIcon, DotFilledIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const FEATURES = [
  "SignIn with Credentials (Email, Password)",
  "Role-based access control",
  "Handling user request with middleware",
  "Extending user session (token, id)",
  "Validate user input in both client and server side",
  "Next.js Server actions with 'useTransition()' hook",
  "Accessing user session in both client and server components",
];

const RESOURCES = [
  {
    label: "Migrate to NextAuth.js v5",
    href: "https://authjs.dev/getting-started/migrating-to-v5",
  },
  {
    label: "Extending the Session",
    href: "https://authjs.dev/guides/extending-the-session",
  },
  {
    label: "Authentication Credentials",
    href: "https://authjs.dev/getting-started/authentication/credentials",
  },
  {
    label: "Handling Signin and Signout",
    href: "https://authjs.dev/getting-started/session-management/login",
  },
];

export default function FeaturesAndResources() {
  return (
    <section className="w-full border-t border-gray-200">
      <div className="w-full max-w-2xl lg:max-w-screen-lg mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold tracking-tighter">Features:</h1>
          <ul className="flex flex-col gap-3">
            {FEATURES.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-base text-gray-500 tracking-tighter"
              >
                <span className="size-5 grid place-items-center bg-[#DDF9F2] border border-[#4CBBA5] rounded-full shrink-0 mt-[2px]">
                  <CheckIcon className="size-4 text-[#4CBBA5]" />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Resources:
          </h1>
          <ul className="flex flex-col gap-3">
            {RESOURCES.map((item, index) => (
              <Link
                href={item.href}
                target="_blank"
                key={index}
                className="flex items-start gap-3 text-base text-gray-500 tracking-tighter underline underline-offset-4 decoration-gray-300 w-fit"
              >
                <span className="size-5 grid place-items-center bg-[#DDF9F2] border border-[#4CBBA5] rounded-full shrink-0 mt-[2px]">
                  <DotFilledIcon className="size-4 text-[#4CBBA5]" />
                </span>
                <p>{item.label}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
