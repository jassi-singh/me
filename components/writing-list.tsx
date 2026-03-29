import Link from "next/link";
import type { IBlog } from "@/lib/utils";
import SectionLabel from "@/components/section-label";

type Props = {
  blogs: IBlog[];
  /** If set, section gets this id for in-page nav */
  sectionId?: string;
};

function formatListDate(blog: IBlog): string {
  const raw = blog.date;
  if (!raw) return "";
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return raw;
  return d.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function WritingList({ blogs, sectionId }: Props) {
  return (
    <section className="mb-[72px]" id={sectionId}>
      <SectionLabel>writing</SectionLabel>
      <ul className="list-none">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="flex items-baseline justify-between gap-4 border-b border-terminal-border py-3.5 first:border-t"
          >
            <Link
              className="text-[14px] leading-snug text-terminal-fg no-underline transition-colors duration-150 hover:text-terminal-accent"
              href={`/writings/${blog.id}`}
            >
              {blog.title}
            </Link>
            <span className="shrink-0 whitespace-nowrap text-[12px] tabular-nums text-terminal-dim">
              {formatListDate(blog)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
