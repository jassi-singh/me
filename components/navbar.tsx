"use client";
import NavButton from "@/components/nav-button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname.startsWith("/writings/") || pathname.startsWith("/devlogs/")) {
    return (
      <nav className="relative mb-8 flex gap-2 font-mono">
        <NavButton href="/writings">← Back</NavButton>
      </nav>
    );
  }

  return (
    <nav className="relative mb-8 flex gap-2 font-mono">
      <NavButton href="/">About</NavButton>
      <NavButton href="/writings">Writings</NavButton>
      <NavButton href="/devlogs">Devlogs</NavButton>
    </nav>
  );
}
