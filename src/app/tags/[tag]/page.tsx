import { getAll } from "../../utils/getAll"

/**
 * タグ一覧を抽出し、ユニークなページとして生成する
 * @returns tag
 */
export const generateStaticParams = async() => {
  const posts = await getAll();

  const tags = new Set(posts.flatMap(post => post.metadata.tags));
  return Array.from(tags).map(tag => ({tag}));
}

const Page = async ({ params }: { params: {tag: string} }) => {
  const { tag } = params;
  const posts = await getAll();

  const filteredPosts = posts.filter((post) => post.metadata.tags.includes(tag));

  // TODO: コンポーネント化したい
  return (
    <div>
      <h1>記事一覧: 「{tag}」</h1>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.slug}>
            <h2>{post.metadata.title}</h2>
            <p>{post.metadata.description}</p>
            <p>公開日: {post.metadata.date.toLocaleDateString()}</p>
            <p>
              {post.metadata.tags.map((tag) => (
                <span key={tag}>#{tag} </span>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
