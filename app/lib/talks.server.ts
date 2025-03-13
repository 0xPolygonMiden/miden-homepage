import type { ReactElement } from "react";
import type { Article, Frontmatter } from "./data";

export function getTalks(): Article[] {
  const modules = import.meta.glob<{
    frontmatter: Frontmatter;
    default: (props: any) => ReactElement;
  }>("../content/resources.talks.*.mdx", { eager: true });

  const talks = Object.entries(modules).map(([file, talk]) => {
    let id = file
      .replace("../content/resources.talks.", "")
      .replace(/\.mdx$/, "");

    return {
      slug: id,
      ...talk.frontmatter,
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
