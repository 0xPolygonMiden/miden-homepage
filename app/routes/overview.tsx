import { Category } from "~/lib/data";
import { getFeaturedPosts } from "~/lib/posts.server";
import { PageOverview } from "~/pages/overview";
import { papers, talks } from "~/routes/resources";
import type { Route } from "./+types/overview";

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function meta({ data: { category } }: Route.MetaArgs) {
  return [{ title: `${capitalize(category)} – Miden` }];
}

export async function loader({ params }: Route.LoaderArgs) {
  let data = null;
  const category = params.category as Category;

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
