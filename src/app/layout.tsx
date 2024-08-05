import type { Metadata } from "next";
import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./GlobalRedux/provider";
import { Toaster } from "@/components/ui/toaster";
import Preloader from "./loading";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Data Table app",
  description: "Create account and view list of users on data table.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-screen scroll-smooth">
      <body className={cn(inter.className, "h-full w-full")}>
        <Providers>
          <Suspense fallback={<Preloader />}>{children}</Suspense>
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
