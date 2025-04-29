import type { Article, MDXModule } from "./data";

export function getPosts(): Article[] {
  const modules = import.meta.glob<MDXModule>(
    "../content/resource.blog.*.mdx",
    { eager: true },
  );

  const posts = Object.entries(modules).map(([path, mod]) => {
    const id = path
      .replace("../content/resource.blog.", "")
      .replace(".mdx", "");

    return {
      ...mod.frontmatter,
      slug: id,
      headings: mod.headings,
      component: mod.default,
    };
  });

  return posts ?? [];
}

const format = (dateStr: string): string => {
  const [day, month, year] = dateStr.split(".");
  return `${`20${year}`}-${month}-${day}`;
};

export function getFeaturedPosts(): Article[] {
  const allPosts = getPosts();
  return allPosts
    .filter((post) => post.featured)
    .sort(
      (a, b) =>
        new Date(format(b.date)).getTime() - new Date(format(a.date)).getTime(),
    );
}

export function getRelatedPosts(slug: Article["slug"]): Article[] {
  const allPosts = getPosts();
  return allPosts
    .filter((post) => post.featured)
    .filter((post) => slug !== post.slug)
    .sort(
      (a, b) =>
        new Date(format(b.date)).getTime() - new Date(format(a.date)).getTime(),
    );
}

export function getPost(slug: string): Article | undefined {
  const allPosts = getPosts();
  return allPosts.find((post) => post.slug === slug);
}
