import PostList from "@/components/PostList";
import { getAll } from "../../../utils/getAll";

// 指定されていないパスのレンダリングを無効にする
export const dynamicParams = false;

// 静的ルートを定義
export const generateStaticParams: () => Promise<
  { tag: string }[]
> = async () => {
  const posts = await getAll();

  const tags = posts.flatMap((post) => post.metadata.tags);
  return tags.map((tag) => ({ tag }));
};

const Page = async ({ params }: { params: Promise<{ tag: string }> }) => {
  const { tag } = await params;
  const posts = await getAll();

  const filteredPosts = posts.filter((post) =>
    post.metadata.tags.includes(tag),
  );

  return <PostList tag={tag} posts={filteredPosts} />;
};

export default Page;
