import React from "react";
import dynamic from "next/dynamic";
import { getAllMdxFiles } from "@/lib/server-utils";
import Link from "next/link";

export const dynamicParams = false;

export async function generateStaticParams() {
  const allWritings = getAllMdxFiles("writings");

  return allWritings.map((blog) => ({
    type: "writings",
    slug: blog.id,
  }));
}

export default function Post({
  params,
}: {
  params: { slug: string; type: string };
}) {
  const Blog = dynamic(
    () => import(`@/markdown/${params.type}/${params.slug}.mdx`),
    {
      ssr: true,
    }
  );

  return (
    <>
      <p className="mb-10">
        <Link
          className="text-[13px] tracking-[0.05em] text-terminal-dim no-underline transition-colors duration-150 hover:text-terminal-fg"
          href="/writings"
        >
          ← writing
        </Link>
      </p>
      <article className="prose prose-invert max-w-none prose-headings:font-medium prose-headings:text-terminal-fg prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-p:text-[15px] prose-p:leading-[1.75] prose-p:text-terminal-muted prose-li:text-[15px] prose-li:leading-[1.75] prose-li:text-terminal-muted prose-strong:text-terminal-fg prose-code:rounded-none prose-code:bg-terminal-hover prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[13px] prose-code:text-terminal-accent prose-pre:border prose-pre:border-terminal-border prose-pre:bg-terminal-hover prose-pre:text-[13px] prose-pre:leading-relaxed prose-pre:text-terminal-fg [&_a]:text-terminal-accent [&_a]:no-underline [&_a]:underline-offset-4 [&_a:hover]:underline">
        <Blog />
      </article>
    </>
  );
}
