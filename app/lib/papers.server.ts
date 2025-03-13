import type { ReactElement } from "react";
import type { Frontmatter, Article, Category } from "~/lib/data";

export function getAllPapers(): Article[] {
  const modules = import.meta.glob<{
    frontmatter: Frontmatter;
    default: (props: any) => ReactElement;
  }>(`../content/resources.blog.*.mdx`, { eager: true });

  const articles = Object.entries(modules).map(([file, article]) => {
    let id = file
      .replace(`../content/resources.blog.`, "")
      .replace(/\.mdx$/, "");

    return {
      slug: id,
      ...article.frontmatter,
    };
  });

  return articles ?? [];
}

export function getFeaturedPapers(): Article[] {
  const allPapers = getAllPapers();
  return allPapers.filter((paper) => paper.featured);
}

export function getPaper({
  slug,
  category,
}: {
  slug: string;
  category: Category;
}): Article | undefined {
  const allPapers = getAllPapers();
  return allPapers.find((paper) => paper.slug === slug);
}
