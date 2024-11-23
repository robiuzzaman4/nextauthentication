import { auth } from "@/auth";
import { StackIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

export default async function Navbar() {
  // read session in server component
  const session = await auth();

  return (
    <nav className="w-full fixed top-0 h-16 flex items-center bg-white border-b border-b-gray-200">
      <div className="w-full max-w-screen-lg mx-auto px-4 flex items-center justify-between gap-6">
        <Link href="/">
          <StackIcon height="32" width="32" />
        </Link>
        {session?.user ? (
          <Link href="/dashboard">
            <Button
              color="gray"
              size="3"
              variant="classic"
              radius="large"
              highContrast
              className="hover:cursor-pointer text-sm"
            >
              Dashboard
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button
              color="gray"
              size="3"
              variant="classic"
              radius="large"
              highContrast
              className="hover:cursor-pointer text-sm"
            >
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}
