export type Frontmatter = {
  title: string;
  author: string;
  date: string;
  featured?: boolean;
};

export type Talk = {
  slug: string;
} & Frontmatter;
