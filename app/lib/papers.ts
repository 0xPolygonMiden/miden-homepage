export type Frontmatter = {
  title: string;
  author: string;
  date: string;
  featured?: boolean;
};

export type Paper = {
  slug: string;
} & Frontmatter;
