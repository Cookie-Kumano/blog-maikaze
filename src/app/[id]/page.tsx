import { DIRECTORY } from "@/constants/generals";
import path from "path";
import { getPostBody } from "../utils/getPostBody";
import { notFound } from "next/navigation";

const Page = async({ params }: { params: { id: string } }) => {
  const fullPath = path.join(DIRECTORY, params.id, "index.md");

  try {
    const post = await getPostBody(fullPath);

    return (
      <article>
        <h1>{post.metadata.title}</h1>
        <p>{post.metadata.description}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
      </article>
    )
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    notFound();
  }

}

export default Page;