import { Button, Code } from "@radix-ui/themes";
import Card from "@/components/card";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type AnatomyCardProps = {
  page: "csr" | "ssr";
};

export default function AnatomyCard({ page }: AnatomyCardProps) {
  return (
    <Card>
      <h5 className="text-sm font-semibold tracking-tighter">Anatomy:</h5>
      <Code color="tomato" className="p-4 rounded-md">
        {page === "csr"
          ? "This Session Accessed via Client Component with Client-Side Rendering."
          : "This Session Accessed via Server Component with Server-Side Rendering."}
      </Code>
      <Button
        color="gray"
        size="3"
        variant="classic"
        radius="large"
        highContrast
        className="hover:cursor-pointer w-full md:w-max text-sm"
        asChild
      >
        <Link
          href="https://github.com/robiuzzaman4/nextauthentication"
          target="_blank"
        >
          <GitHubLogoIcon className="size-4" /> View on Github
        </Link>
      </Button>
    </Card>
  );
}
