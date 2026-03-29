"use client";

import Link from "next/link";

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
      <div className="flex flex-wrap gap-8">
        <Link className={navClass} href="/#about">
          about
        </Link>
        <Link className={navClass} href="/#projects">
          projects
        </Link>
        <Link className={navClass} href="/writings">
          writing
        </Link>
        <a className={navClass} href="mailto:jaswinder.dandyan2000@gmail.com">
          contact
        </a>
      </div>
    </nav>
  );
}
