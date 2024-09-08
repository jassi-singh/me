import { getAllMdxFiles } from "@/lib/server-utils";
import { IBlog } from "@/lib/utils";
import Link from "next/link";

const ALLOWED_TYPES = ["writings", "devlogs"];

export const dynamicParams = false;

export async function generateStaticParams() {
  return ALLOWED_TYPES.map((type) => ({ type }));
}

export default function WritingsPage({ params }: { params: { type: string } }) {

  const allBlogs = getAllMdxFiles(params.type);
  return (
    <ul className="flex flex-col gap-4">
      {allBlogs.map((blog) => (
        <Blog key={blog.id} blog={blog} type={params.type} />
      ))}
    </ul>
  );
}

const Blog = ({ blog, type }: { blog: IBlog; type: string }) => {
  return (
    <Link href={`/${type}/${blog.id}`}>
      <p>
        <span className="text-neutral-500 mr-4 font-mono italic">
          {blog.date}
        </span>{" "}
        {blog.title}
      </p>
    </Link>
  );
};
