import { Category } from "~/lib/data";
import { getFeaturedPapers } from "~/lib/papers.server";
import { getFeaturedPosts } from "~/lib/posts.server";
import { getFeaturedTalks } from "~/lib/talks.server";
import { PageOverview } from "~/pages/overview";
import type { Route } from "./+types/overview";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Blog – Miden" }];
}

export async function loader({ params }: Route.LoaderArgs) {
  let data;
  let category = params.category as Category;

  switch (category) {
    case Category.Blog: {
      data = getFeaturedPosts();
      break;
    }
    case Category.Papers: {
      data = getFeaturedPapers();
      break;
    }
    case Category.Talks: {
      data = getFeaturedTalks();
      break;
    }
    default: {
      throw new Error("Invalid category");
    }
  }

  return {
    category,
    data,
  };
}

export default function RouteOverview({
  loaderData: { data, category },
}: Route.ComponentProps) {
  return <PageOverview data={data} category={category} />;
}
