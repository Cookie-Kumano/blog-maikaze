import { getAll } from "@/utils/getAll";
import { PostData } from "../types/Post";
import Link from "next/link";

const Page = async () => {
  const posts: PostData[] = await getAll();

  return (
    <div>
      <h1>記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${post.slug}`}><h2>{post.metadata.title}</h2></Link>
            <p>{post.metadata.description}</p>
            <p>公開日: {post.metadata.date.toLocaleDateString()}</p>
            <p>
              {post.metadata.tags.map((tag) => (
                <Link href={`/tags/${tag}`} key={tag}>#{tag}</Link>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;