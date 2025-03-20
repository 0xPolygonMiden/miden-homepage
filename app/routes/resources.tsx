import { type Route } from ".react-router/types/app/routes/+types/resources";
import { getFeaturedPapers } from "~/lib/papers.server";
import { getFeaturedPosts } from "~/lib/posts.server";
import { getFeaturedTalks } from "~/lib/talks.server";
import { PageResources } from "~/pages/resources";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Resources – Miden" }];
}

export function loader({}: Route.LoaderArgs) {
  const posts = getFeaturedPosts();
  const papers = getFeaturedPapers();
  const talks = getFeaturedTalks();

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
