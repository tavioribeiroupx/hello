// app/(public)/layout.tsx (ou onde estiver o seu PublicLayout)

import ThemeToggle from "@/components/theme-toggler";
import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full dark:bg-gray-900">
      
      {children}

      <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
        <ThemeToggle />
      </div>
    </div>
  );
}