import React from "react";
import dynamic from "next/dynamic";
import { getAllMdxFiles } from "@/lib/server-utils";

export async function generateStaticParams() {
  const allWritings = getAllMdxFiles("writings");
  const allDevlogs = getAllMdxFiles("devlogs");

  const writings = allWritings.map((blog) => ({
    type: "writings",
    slug: blog.id,
  }));
  const devlogs = allDevlogs.map((blog) => ({
    type: "devlogs",
    slug: blog.id,
  }));

  return [...writings, ...devlogs];
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
    <div className="prose dark:prose-invert prose-neutral">
      <Blog />
    </div>
  );
}
