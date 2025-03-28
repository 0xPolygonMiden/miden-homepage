import { type Route } from ".react-router/types/app/routes/+types/home";
import { PageHome } from "~/pages/homepage";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Miden" }];
}

export default function RouteHome({}: Route.ComponentProps) {
  return <PageHome />;
}
