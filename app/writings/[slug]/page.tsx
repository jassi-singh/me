import React from "react";
import fs from "fs";
import path from "path";

export default function Post({ params }: { params: { slug: string } }) {
  const blog = fs.readFileSync(
    path.join(process.cwd(), "app", "writings", "posts", `${params.slug}`),
    "utf8"
  );

  return (
    <>
      {blog}
    </>
  );
}
