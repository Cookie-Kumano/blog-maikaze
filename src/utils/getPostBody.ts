import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { PostBody } from "../types/Post";
import { parseMetadata } from "./parseMetadata";

export const getPostBody = async (filePath: string): Promise<PostBody> => {
  if (!fs.existsSync(filePath)) throw new Error(`not found: ${filePath}`);

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  // メタデータ変換
  const metadata = parseMetadata(data);

  // MarkdownをHTMLに変換
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug: path.basename(path.dirname(filePath)),
    metadata,
    contentHtml,
  };
};
