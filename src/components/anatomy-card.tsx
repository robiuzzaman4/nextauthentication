import { Badge, Button, Code } from "@radix-ui/themes";
import Card from "@/components/card";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type AnatomyCardProps = {
  page: "csr" | "ssr";
};

export default function AnatomyCard({ page }: AnatomyCardProps) {
  return (
    <Card>
      <span className="w-full flex  items-center gap-2">
        <h5 className="text-sm font-semibold tracking-tighter">Anatomy</h5>
        <Badge
          color={page === "csr" ? "tomato" : "crimson"}
          className="rounded-md"
        >
          {page === "csr" ? "CSR - Client-Side Rendering" : "SSR - Server-Side Rendering"}
        </Badge>
      </span>
      <Code
        size="3"
        color={page === "csr" ? "tomato" : "crimson"}
        className="px-4 rounded-md w-fit"
      >
        {page === "csr" ? "Path: '/dashboard/csr'" : "Path: '/dashboard/ssr'"}
      </Code>

      <Code
        size="3"
        color={page === "csr" ? "tomato" : "crimson"}
        className="px-4 rounded-md"
      >
        {page === "csr"
          ? "This Session Accessed via Client Component with Client-Side Rendering."
          : "This Session Accessed via Server Component with Server-Side Rendering."}
      </Code>
      <div className="w-full grid sm:grid-cols-2 gap-3 sm:gap-6">
        <Button
          color="gray"
          size="3"
          variant="soft"
          radius="large"
          highContrast
          className="hover:cursor-pointer w-full text-sm"
          asChild
        >
          {page === "csr" ? (
            <Link
              href="https://github.com/robiuzzaman4/nextauthentication/blob/main/src/components/pages/dashboard/csr.tsx"
              target="_blank"
            >
              <GitHubLogoIcon className="size-4" /> View on Github
            </Link>
          ) : (
            <Link
              href="https://github.com/robiuzzaman4/nextauthentication/blob/main/src/components/pages/dashboard/ssr.tsx"
              target="_blank"
            >
              <GitHubLogoIcon className="size-4" /> View on Github
            </Link>
          )}
        </Button>
        <Button
          color="gray"
          size="3"
          variant="classic"
          radius="large"
          highContrast
          className="hover:cursor-pointer w-full text-sm"
          asChild
        >
          {page === "csr" ? (
            <Link href="/dashboard/ssr">Try SSR</Link>
          ) : (
            <Link href="/dashboard/csr">Try CSR</Link>
          )}
        </Button>
      </div>
    </Card>
  );
}
