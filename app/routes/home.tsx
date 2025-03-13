import { PageHome } from "~/pages/homepage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Miden" }];
}

export default function RouteHome({}: Route.ComponentProps) {
  return <PageHome />;
}
