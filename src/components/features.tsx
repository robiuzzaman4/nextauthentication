import Card from "@/components/card";
import { CheckIcon } from "@radix-ui/react-icons";

const FEATURES = [
  "SignIn with Credentials (Email, Password)",
  "Role-based access control",
  "Handling user request with middleware",
  "Extending user session (token, id)",
  "Validate user input in both client and server side",
  "Next.js Server actions with 'useTransition()' hook",
  "Accessing user session in both client and server components",
];

const TECH_STACKS = ["Next.js v15", "TypeScript", "Zod", "Next-Auth v5", "Radix UI"];

export default function Features() {
  return (
    <section className="w-full border-t border-gray-200">
      <div className="w-full max-w-screen-lg mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="w-full lg:col-span-2">
          <Card className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Features:
            </h1>
            <ul className="flex flex-col gap-3">
              {FEATURES.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base text-gray-500 font-medium"
                >
                  <span className="size-5 grid place-items-center bg-[#DDF9F2] border border-[#4CBBA5] rounded-full shrink-0 ">
                    <CheckIcon className="size-4 text-[#4CBBA5]" />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
        <Card className="flex flex-col gap-6">
          <h1 className="text-2xl font-semibold tracking-tighter">TechStacks:</h1>
          <ul className="flex flex-col gap-3">
            {TECH_STACKS.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-base text-gray-500 font-medium"
              >
                <span className="size-5 grid place-items-center bg-[#DDF9F2] border border-[#4CBBA5] rounded-full shrink-0 ">
                  <CheckIcon className="size-4 text-[#4CBBA5]" />
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
