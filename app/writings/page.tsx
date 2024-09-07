import { IBlog } from "@/lib/utils";
import Link from "next/link";
import fs from "fs";
import path from "path";

function getAllBlogs(): IBlog[] {
  const files = fs.readdirSync(
    path.join(process.cwd(), "app", "posts")
  );

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const dir = path.join(process.cwd(), "app", "posts", file);

    const content = fs.readFileSync(dir, "utf8");

    const title = content.split("\n")[0].replace("# ", "");
    const createdAt = fs.statSync(dir).birthtime;

    return {
      id: slug,
      title,
      date: createdAt.toDateString(),
    };
  });
}

export default function WritingsPage() {
  const allBlogs = getAllBlogs();
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
