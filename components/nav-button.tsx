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
          "text-neutral-100": isActive,
          "text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100":
            !isActive,
        })}
      >
        <span className="relative z-10">{children}</span>
        {isActive && (
          <span className="absolute inset-0 z-0 bg-neutral-700 rounded-md" />
        )}
      </button>
    </Link>
  );
};

export default NavButton;
