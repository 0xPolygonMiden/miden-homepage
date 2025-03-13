import type { Route } from ".react-router/types/app/routes/blog/+types";
import { getFeaturedPosts } from "~/lib/posts.server";
import { PageBlog } from "~/pages/blog";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Blog – Miden" }];
}

export function loader({}: Route.LoaderArgs) {
  const posts = getFeaturedPosts();

  return {
    posts,
  };
}

export default function Home({ loaderData: { posts } }: Route.ComponentProps) {
  return <PageBlog posts={posts} />;
}
