import { type Route } from ".react-router/types/app/routes/+types/developers";
import { PageDevelopers } from "~/pages/developers";

export type Item = (typeof items)[0];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Developers – Miden" }];
}

const items = [
  {
    label: "Docs",
    description:
      "Everything you need to know to get started building with Miden.",
    link: "https://0xpolygonmiden.github.io/miden-docs/",
  },
  {
    label: "Playground",
    description: "Start experimenting with Miden.",
    link: "https://miden-playground.pages.dev/",
  },
];

export default function RouteDevelopers({}: Route.ComponentProps) {
  return <PageDevelopers items={items} />;
}
