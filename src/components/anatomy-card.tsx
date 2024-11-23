import { Button, Code } from "@radix-ui/themes";
import Card from "@/components/card";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

type AnatomyCardProps = {
  title: string;
};

export default function AnatomyCard({ title }: AnatomyCardProps) {
  return (
    <Card>
      <h5 className="text-sm font-semibold tracking-tighter">Anatomy:</h5>
      <Code color="tomato" className="p-4 rounded-md">
        {title}
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
