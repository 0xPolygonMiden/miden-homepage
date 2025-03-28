import type { Article, MDXModule } from "~/lib/data";

export function getAllPapers(): Article[] {
  const modules = import.meta.glob<MDXModule>(
    "../content/resource.papers.*.mdx",
    { eager: true },
  );

  const articles = Object.entries(modules).map(([file, mod]) => {
    const id = file
      .replace("../content/resource.papers.", "")
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

export function getPaper(slug: string): Article | undefined {
  const allPapers = getAllPapers();
  return allPapers.find((paper) => paper.slug === slug);
}
