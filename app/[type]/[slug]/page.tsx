import React from "react";
import dynamic from "next/dynamic";

export default function Post({
  params,
}: {
  params: { slug: string; type: string };
}) {
  const Blog = dynamic(() => import(`@/markdown/${params.type}/${params.slug}.mdx`), {
    ssr: true,
  });

  return (
    <div className="max-w-none">
      <Blog />
    </div>
  );
}
