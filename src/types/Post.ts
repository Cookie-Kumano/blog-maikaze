export type PostMetadata = {
  title: string;
  date: Date;
  description: string;
  tags: string[];
};

export type PostData = {
  slug: string;
  metadata: PostMetadata;
};

export type PostBody = {
  slug: string;
  contentHtml: string;
  metadata: PostMetadata;
};
