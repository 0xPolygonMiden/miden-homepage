import type { ReactElement } from "react";
import type { Frontmatter, Article, Category, MDXModule } from "~/lib/data";

export function getAllPapers(): Article[] {
  const modules = import.meta.glob<MDXModule>(
    `../content/resources.papers.*.mdx`,
    { eager: true }
  );

  const articles = Object.entries(modules).map(([file, mod]) => {
    let id = file
      .replace(`../content/resources.papers.`, "")
      .replace(/\.mdx$/, "");

    return {
      ...mod.frontmatter,
      slug: id,
      headings: mod.headings,
      component: mod.default,
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
