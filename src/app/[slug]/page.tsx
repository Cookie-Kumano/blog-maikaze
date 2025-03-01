import path from "path";
import { getPostBody } from "../../utils/getPostBody";
import { getAll } from "@/utils/getAll";
import { DIRECTORY } from "@/constants/generals";
import Card from "@/components/Card";

// 指定されていないパスのレンダリングを無効にする
export const dynamicParams = false;

// 静的ルートを定義
export const generateStaticParams = async () => {
  const posts = await getAll();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await getPostBody(path.join(DIRECTORY, slug, "index.md"));

  return (
    <Card>
      <article>
        <h1>{post.metadata.title}</h1>
        <p>{post.metadata.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
      </article>
    </Card>
  );
};

export default Page;
