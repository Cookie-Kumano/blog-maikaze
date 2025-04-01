/* eslint @typescript-eslint/no-explicit-any: 0 */
import { PostMetadata } from "../types/Post";

export const parseMetadata = (data: Record<string, any>): PostMetadata => {
  return {
    title: data.title,
    date: new Date(data.date),
    description: data.description,
    tags: Array.isArray(data.tags) ? data.tags : [],
  };
};
