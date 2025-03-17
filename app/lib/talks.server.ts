import type { Article, MDXModule } from "./data";

export function getTalks(): Article[] {
  const modules = import.meta.glob<MDXModule>(
    "../content/resources.talks.*.mdx",
    { eager: true }
  );

  const talks = Object.entries(modules).map(([file, mod]) => {
    let id = file
      .replace("../content/resources.talks.", "")
      .replace(/\.mdx$/, "");

    return {
      ...mod.frontmatter,
      slug: id,
      headings: mod.headings,
      component: mod.default,
    };
  });

  return talks ?? [];
}

export function getFeaturedTalks(): Article[] {
  const allTalks = getTalks();
  return allTalks.filter((talk) => talk.featured);
}

export function getTalk(slug: string): Article | undefined {
  const allTalks = getTalks();
  return allTalks.find((talk) => talk.slug === slug);
}
