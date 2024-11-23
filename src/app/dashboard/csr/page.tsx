import Csr from "@/components/pages/dashboard/csr";
import { SessionProvider } from "next-auth/react";

export default function CsrPage() {
  return (
    <SessionProvider>
      <Csr />
    </SessionProvider>
  );
}
