import { mailtoHref, social } from "@/lib/social";

const footerLinkClass =
  "text-[12px] text-terminal-dim no-underline transition-colors duration-150 hover:text-terminal-accent";

export default function SiteFooter() {
  return (
    <footer className="mt-[100px] flex flex-col gap-4 border-t border-terminal-border pt-6 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-[12px] text-terminal-dim">
        © 2026 Jaswinder Singh
      </span>
      <div className="flex flex-wrap gap-5">
        <a
          className={footerLinkClass}
          href={social.github}
          rel="noopener noreferrer"
          target="_blank"
        >
          github
        </a>
        <a
          className={footerLinkClass}
          href={social.linkedin}
          rel="noopener noreferrer"
          target="_blank"
        >
          linkedin
        </a>
        <a
          className={footerLinkClass}
          href={social.leetcode}
          rel="noopener noreferrer"
          target="_blank"
        >
          leetcode
        </a>
        <a className={footerLinkClass} href={mailtoHref}>
          email
        </a>
      </div>
    </footer>
  );
}
