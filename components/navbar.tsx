"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { mailtoHref } from "@/lib/social";

const ThemeToggle = dynamic(() => import("@/components/theme-toggle"), {
  ssr: false,
  loading: () => (
    <span
      className="inline-block min-w-[52px] border border-transparent px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] opacity-0"
      aria-hidden
    >
      ···
    </span>
  ),
});

const navClass =
  "text-[13px] tracking-[0.05em] text-terminal-dim no-underline transition-colors duration-150 hover:text-terminal-fg";

export default function Navbar() {
  return (
    <nav className="mb-20 flex flex-col gap-4 border-b border-terminal-border pb-5 sm:flex-row sm:items-center sm:justify-between">
      <Link
        className="text-[14px] tracking-[0.06em] text-terminal-accent no-underline"
        href="/"
      >
        js@jaswinder ~
      </Link>
      <div className="flex flex-wrap items-center gap-8">
        <Link className={navClass} href="/#about">
          about
        </Link>
        <Link className={navClass} href="/#projects">
          projects
        </Link>
        <Link className={navClass} href="/writings">
          writing
        </Link>
        <a className={navClass} href={mailtoHref}>
          contact
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
