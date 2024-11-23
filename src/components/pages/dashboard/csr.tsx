"use client";

import React from "react";
import { useSession } from "next-auth/react";
import SessionCard from "@/components/session-card";
import AnatomyCard from "@/components/anatomy-card";

export default function Csr() {
  const { data: session } = useSession();

  if (!session?.user) return;

  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 pt-32 pb-16">
      <div className="w-full grid md:grid-cols-2 gap-12">
        <SessionCard session={session} />
        <AnatomyCard page="csr" />
      </div>
    </section>
  );
}
