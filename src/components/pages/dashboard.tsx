import React from "react";
import { auth } from "@/auth";
import SessionCard from "@/components/session-card";
import AnatomyCard from "@/components/anatomy-card";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) return;

  return (
    <section className="w-full max-w-screen-lg mx-auto px-4 pt-32 pb-16">
      <div className="w-full grid md:grid-cols-2 gap-12">
        <SessionCard />
        <AnatomyCard title="This Session Accessed via Server Component with Server-Side Rendering." />
      </div>
    </section>
  );
}
