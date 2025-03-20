import { type Route } from ".react-router/types/app/routes/+types/overview";
import { Category } from "~/lib/data";
import { getFeaturedPosts } from "~/lib/posts.server";
import { PageOverview } from "~/pages/overview";
import { papers, talks } from "~/routes/resources";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Blog – Miden" }];
}

export async function loader({ params }: Route.LoaderArgs) {
  let data = null;
  let category = params.category as Category;

  if (category === Category.Blog) {
    data = getFeaturedPosts();
  }

  return {
    category,
    data,
  };
}

export default function RouteOverview({
  loaderData: { data, category },
}: Route.ComponentProps) {
  return (
    <PageOverview
      posts={data}
      papers={papers}
      talks={talks}
      category={category}
    />
  );
}
