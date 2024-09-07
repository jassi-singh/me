import React from "react";
import dynamic from "next/dynamic";

export default function Post({ params }: { params: { slug: string } }) {
  const Blog = dynamic(() => import(`@/app/posts/${params.slug}.mdx`), {
    ssr: true,
  });

  return (
    <div className="prose max-w-none">
      <Blog />
    </div>
  );
}
