/* eslint @typescript-eslint/no-explicit-any: 0 */
import { PostMetadata } from "../types/Post";

export const isPostMetadata = (data: any): data is PostMetadata => {
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    Array.isArray(data.tags) &&
    data.tags.every((tag: any) => typeof tag === "string") &&
    data.date instanceof Date &&
    !isNaN(data.date.getTime())
  );
};
