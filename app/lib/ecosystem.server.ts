import type { Article, MDXModule } from "~/lib/data";

export function getAllEcosystem(): Article[] {
  const modules = import.meta.glob<MDXModule>(
    `../content/ecosystem.program.*.mdx`,
    {
      eager: true,
    }
  );

  const articles = Object.entries(modules).map(([file, mod]) => {
    let id = file
      .replace(`../content/ecosystem.program.`, "")
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

export function getFeaturedEcosystem(): Article[] {
  const allEcosystem = getAllEcosystem();
  return allEcosystem.filter((ecosystem) => ecosystem.featured);
}

export function getEcosystem(slug: string): Article | undefined {
  const allEcosystem = getAllEcosystem();
  return allEcosystem.find((ecosystem) => ecosystem.slug === slug);
}
