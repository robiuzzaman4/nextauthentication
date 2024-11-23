import { signOut } from "@/auth";
import { Button } from "@radix-ui/themes";

export default function Logout() {
  return (
    <form
    className="w-full"
      action={async () => {
        "use server";
        await signOut({
          redirectTo: "/",
        });
      }}
    >
      <Button
        color="red"
        size="3"
        variant="classic"
        radius="large"
        highContrast
        className="hover:cursor-pointer w-full text-sm"
        type="submit"
      >
        Logout
      </Button>
    </form>
  );
}
