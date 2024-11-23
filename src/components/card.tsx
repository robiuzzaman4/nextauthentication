import { cn } from "@/utils";
import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className="bg-gray-100 border border-gray-200 p-2 w-full h-full rounded-3xl">
      <div
        className={cn(
          "w-full h-full flex flex-col gap-6 bg-white p-6 shadow-md rounded-2xl border border-gray-200",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
