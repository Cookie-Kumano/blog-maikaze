import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "../types/Post";
import { parseMetadata } from "./parseMetadata";

export const getMetadata = async (filePath: string): Promise<PostData> => {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  const metadata = parseMetadata(data);

  return {
    slug: path.basename(path.dirname(filePath)),
    metadata,
  };
};
