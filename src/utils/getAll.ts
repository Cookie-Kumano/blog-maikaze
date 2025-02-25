/* eslint @typescript-eslint/no-explicit-any: 0 */
import fs from "fs";
import path from "path";
import { getMetadata } from "./getMetadata";
import { PostData } from "../types/Post";
import { DIRECTORY } from "@/constants/generals";

export const getAll = async ():Promise<PostData[]> => {
  const postDirs = fs.readdirSync(DIRECTORY);

  const posts =  await Promise.all(postDirs.map((dir) => {
      const fullPath = path.join(DIRECTORY, dir, "index.md");
      return getMetadata(fullPath)
    })
  );

  return posts.sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime());
}
