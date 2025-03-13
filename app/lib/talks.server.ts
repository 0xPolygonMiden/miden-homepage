import type { ReactElement } from "react";
import type { Frontmatter, Post } from "~/lib/posts";

export function getTalks(): Post[] {
  const modules = import.meta.glob<{
    frontmatter: Frontmatter;
    default: (props: any) => ReactElement;
  }>("../content/resources.talk.*.mdx", { eager: true });

  const talks = Object.entries(modules).map(([file, talk]) => {
    let id = file
      .replace("../content/resources.talk.", "")
      .replace(/\.mdx$/, "");

    return {
      slug: id,
      ...talk.frontmatter,
    };
  });

  return talks ?? [];
}

export function getTalk(slug: string): Post | undefined {
  const allTalks = getTalks();
  return allTalks.find((talk) => talk.slug === slug);
}
