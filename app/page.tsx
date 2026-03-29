import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Stack from "@/components/stack";
import WritingList from "@/components/writing-list";
import { getAllMdxFiles } from "@/lib/server-utils";

export default function Home() {
  const blogs = getAllMdxFiles("writings");

  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Stack />
      <WritingList blogs={blogs} sectionId="writing" />
    </>
  );
}
