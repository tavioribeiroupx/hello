"use client";

import { useTheme } from "@/hooks/use-theme.hooks";
import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="inline-flex size-14 items-center justify-center rounded-full bg-primary-500 transition-colors hover:bg-primary-600"
      aria-label={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
      title={isDark ? "Tema: escuro" : "Tema: claro"}
    >
      {isDark ? (
        <CiLight size={25} className="text-white" />
      ) : (
        <CiDark size={25} className="text-white" />
      )}
    </button>
  );
}
