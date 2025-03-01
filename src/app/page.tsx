import { getAll } from "@/utils/getAll";
import { PostData } from "../types/Post";
import PostList from "@/components/PostList";

const Page = async () => {
  const posts: PostData[] = await getAll();

  return (
    <PostList posts={posts}></PostList>
  );
};

export default Page;