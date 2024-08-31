"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

const NavButton = ({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <button
        className={cn("px-2 py-1 relative text-sm transition-colors", {
          "text-black": isActive,
          "text-gray-500 hover:text-white": !isActive,
        })}
      >
        <span className="relative z-10">{children}</span>
        {isActive && (
          <span className="absolute inset-0 z-0 bg-gray-100 rounded-md" />
        )}
      </button>
    </Link>
  );
};

export default NavButton;
