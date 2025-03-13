import { getPosts } from "~/lib/posts.server";
import { PageResources } from "~/pages/resources";
import type { Route } from "./+types/resources";
import { getPapers } from "~/lib/papers.server";
import { getTalks } from "~/lib/talks.server";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Resources – Miden" }];
}

export function loader({}: Route.LoaderArgs) {
  const posts = getPosts();
  const papers = getPapers();
  const talks = getTalks();

  return {
    posts,
    papers,
    talks,
  };
}

export default function RouteResources({
  loaderData: { posts, papers, talks },
}: Route.ComponentProps) {
  return <PageResources posts={posts} papers={papers} talks={talks} />;
}
