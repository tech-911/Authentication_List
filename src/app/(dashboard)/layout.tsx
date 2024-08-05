import type { Metadata } from "next";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Nav from "./_components/nav";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Create account with Data Table today",
};
export default function DashBoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full bg-background overflow-auto scroll-smooth">
      <Nav />
      <main className="w-full">{children}</main>
    </div>
  );
}
