import fs from "fs";
import path from "path";
import { IBlog } from "./utils";

export function getAllMdxFiles(dir: string): IBlog[] {
  const filesPath = path.join(process.cwd(), "markdown", dir);
  const files = fs.readdirSync(filesPath);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const dir = path.join(filesPath, file);

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
