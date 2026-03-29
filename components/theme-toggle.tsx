"use client";

import { useState, useCallback } from "react";

const STORAGE_KEY = "me-theme";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        localStorage.setItem(STORAGE_KEY, next ? "dark" : "light");
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="border border-terminal-border bg-transparent px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-terminal-dim transition-colors duration-150 hover:border-terminal-accent hover:text-terminal-accent"
      onClick={toggle}
    >
      {dark ? "light" : "dark"}
    </button>
  );
}
