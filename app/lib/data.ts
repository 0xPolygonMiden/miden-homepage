export type Frontmatter = {
  title: string;
  author: string;
  date: string;
  featured?: boolean;
};

export enum Category {
  Blog = "blog",
  Papers = "papers",
  Talks = "talks",
}

export type Article = {
  slug: string;
} & Frontmatter;
