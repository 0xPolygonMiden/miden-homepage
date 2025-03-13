import type { ReactElement } from "react";
import type { Frontmatter, Post } from "~/lib/posts";

export function getPapers(): Post[] {
  const modules = import.meta.glob<{
    frontmatter: Frontmatter;
    default: (props: any) => ReactElement;
  }>("../content/resources.paper.*.mdx", { eager: true });

  const papers = Object.entries(modules).map(([file, paper]) => {
    let id = file
      .replace("../content/resources.paper.", "")
      .replace(/\.mdx$/, "");

    return {
      slug: id,
      ...paper.frontmatter,
    };
  });

  return papers ?? [];
}

export function getPaper(slug: string): Post | undefined {
  const allPapers = getPapers();
  return allPapers.find((paper) => paper.slug === slug);
}
