import { PageHome } from "~/pages/homepage";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Miden" }];
}

export default function Home({}: Route.ComponentProps) {
  return <PageHome />;
}
