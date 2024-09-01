import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  date: string;
};

export default function WritingsPage() {
  const allBlogs = [
    {
      id: 1,
      title: "Blog 1",
      date: "August 1, 2021",
    },
    {
      id: 2,
      title: "Blog 2",
      date: "August 2, 2022",
    },
    {
      id: 3,
      title: "Blog 3",
      date: "August 3, 2023",
    },
  ];
  return (
    <ul className="space-y-4">
      {allBlogs.map((blog) => (
        <Blog key={blog.id} blog={blog} />
      ))}
    </ul>
  );
}

const Blog = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/writings/${blog.title}`} className="flex gap-4">
      <p className="text-neutral-500">{blog.date}</p>
      <p>{blog.title}</p>
    </Link>
  );
};
