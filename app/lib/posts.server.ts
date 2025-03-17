import type { Article, MDXModule } from "./data";

export function getPosts(): Article[] {
  const modules = import.meta.glob<MDXModule>(
    "../content/resource.blog.*.mdx",
    { eager: true }
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

export function getFeaturedPosts(): Article[] {
  const allPosts = getPosts();
  return allPosts.filter((post) => post.featured);
}

export function getPost(slug: string): Article | undefined {
  const allPosts = getPosts();
  return allPosts.find((post) => post.slug === slug);
}
