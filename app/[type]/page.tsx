import { getAllMdxFiles } from "@/lib/server-utils";
import WritingList from "@/components/writing-list";
import { notFound } from "next/navigation";

const ALLOWED_TYPES = ["writings"];

export const dynamicParams = false;

export async function generateStaticParams() {
  return ALLOWED_TYPES.map((type) => ({ type }));
}

export default function ListPage({ params }: { params: { type: string } }) {
  if (!ALLOWED_TYPES.includes(params.type)) {
    notFound();
  }

  const allBlogs = getAllMdxFiles(params.type);

  return <WritingList blogs={allBlogs} />;
}
