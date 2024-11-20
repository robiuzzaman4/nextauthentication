import { Button } from "@radix-ui/themes";

export default function HomePage() {
  return (
    <div className="p-20">
      <h1>Hello Wolrd</h1>
      <Button
        color="gray"
        size="3"
        variant="classic"
        highContrast
        radius="large"
      >
        Login
      </Button>
    </div>
  );
}
