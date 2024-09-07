import { getAllMdxFiles } from "@/lib/server-utils";
import { IBlog } from "@/lib/utils";
import Link from "next/link";

export default function WritingsPage() {
  const allBlogs = getAllMdxFiles("blogs");
  return (
    <ul className="flex flex-col gap-4">
      {allBlogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </ul>
  );
}

const Blog = ({ blog }: { blog: IBlog }) => {
  return (
    <Link href={`/writings/${blog.id}`}>
      <p>
        <span className="text-neutral-500 mr-4">{blog.date}</span> {blog.title}
      </p>
    </Link>
  );
};
