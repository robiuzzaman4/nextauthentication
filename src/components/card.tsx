import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-gray-100 border border-gray-200 p-2 w-full rounded-3xl">
      <div className="w-full flex flex-col gap-6 bg-white p-6 shadow-md rounded-2xl border border-gray-200">
        {children}
      </div>
    </div>
  );
}
