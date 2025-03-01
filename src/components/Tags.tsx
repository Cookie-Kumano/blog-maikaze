import Link from "next/link";
import styles from "@/styles/modules/Tags.module.scss";

type Props = {
  tags?: string[]
}

const Tags: React.FC<Props> = ({tags}) => (
  <div className={styles.tags}>
    {tags && tags.map((tag) => (
      <Link key={tag} href={`/tags/${tag}`}>#{tag}</Link>
    ))}
  </div>
)

export default Tags;