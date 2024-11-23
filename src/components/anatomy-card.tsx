import { Code } from "@radix-ui/themes";
import Card from "@/components/card";

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
    </Card>
  );
}
