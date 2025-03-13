import { getPosts } from "~/lib/posts.server";
import { PageResources } from "~/pages/resources";
import type { Route } from "./+types/resources";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Resources – Miden" }];
}

export function loader({}: Route.LoaderArgs) {
  const posts = getPosts();

  return {
    posts,
  };
}

export default function Resources({
  loaderData: { posts },
}: Route.ComponentProps) {
  return <PageResources posts={posts} />;
}
