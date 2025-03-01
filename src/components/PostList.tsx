import { PostData } from "@/types/Post";
import Link from "next/link";
import React from "react";
import Card from "./Card";
import styles from "@/styles/modules/PostList.module.scss";
import Tags from "./Tags";

type Props = {
  tag?: string,
  posts: PostData[]
}

const dateOptions: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
}

const PostList: React.FC<Props> = ({tag, posts}) => (
  <>
    <div>
      <h1>記事一覧{tag && ': 「'+ tag +'」'}</h1>
      {posts.map((post) => (
        <Card key={post.slug}>
          <Link href={`/${post.slug}`}>
            <h2>{post.metadata.title}</h2>  
          </Link>
          <div className={styles.metadata}>
            <p>公開日: {post.metadata.date.toLocaleDateString('ja-JP', dateOptions)}</p>
            <Tags tags={post.metadata.tags} />
          </div>
          <p>{post.metadata.description}</p>
        </Card>
      ))}
    </div>
  </>
);

export default PostList;