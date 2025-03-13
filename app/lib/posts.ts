export type Frontmatter = {
  title: string;
  author: string;
  date: string;
  featured?: boolean;
};

export type Post = {
  slug: string;
} & Frontmatter;
