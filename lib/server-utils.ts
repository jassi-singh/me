import fs from "fs";
import path from "path";
import { IBlog } from "./utils";

export function getAllMdxFiles(dir: string): IBlog[] {
  const filesPath = path.join(process.cwd(), "markdown", dir);
  const files = fs.readdirSync(filesPath);

  return files
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const dir = path.join(filesPath, file);

      const fileContent = fs.readFileSync(dir, "utf8");

      const blog: IBlog = {
        id: slug,
        title: "",
        date: "",
        published: false,
      };

      const frontMatterRegex = /{\/\*\s*([\s\S]*?)\s*\*\/}/;
      const match = fileContent.match(frontMatterRegex);

      if (match) {
        const frontMatterLines = match[1].split("\n");

        frontMatterLines.forEach((line) => {
          const [key, ...rest] = line.split(":");
          const value = rest.join(":").trim();

          switch (key.trim()) {
            case "id":
              blog.id = value;
              break;
            case "title":
              blog.title = value;
              break;
            case "date":
              blog.date = new Date(value).toDateString();
              break;
            case "published":
              blog.published = value.toLowerCase() === "true";
              break;
            default:
              break;
          }
        });
      }

      return blog;
    })
    .filter((blog) => blog.published)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
