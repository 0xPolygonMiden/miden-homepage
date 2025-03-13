import type { ReactElement } from "react";
import type { Article, Frontmatter } from "./data";

export function getPosts(): Article[] {
  const modules = import.meta.glob<{
    frontmatter: Frontmatter;
    default: (props: any) => ReactElement;
  }>("../content/resources.blog.*.mdx", { eager: true });

  const posts = Object.entries(modules).map(([file, post]) => {
    let id = file
      .replace("../content/resources.blog.", "")
      .replace(/\.mdx$/, "");

    return {
      slug: id,
      ...post.frontmatter,
    };
  });

  return posts ?? [];
}

export function getFeaturedPosts(): Article[] {
  const allPosts = getPosts();
  return allPosts.filter((post) => post.featured);
}

export function getPost(slug: string): Article | undefined {
  const allPosts = getPosts();
  return allPosts.find((post) => post.slug === slug);
}
