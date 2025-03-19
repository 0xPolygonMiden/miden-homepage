import  { type Route } from "./+types/developers";
import { PageDevelopers } from "~/pages/developers";

export type Item = (typeof items)[0];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Developers – Miden" }];
}

const items = [
  {
    label: "Miden Docs",
    description:
      "Everything you need to know to get started building with Miden.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
  {
    label: "Miden Playground",
    description: "Start experimenting with Miden.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
];

export default function RouteDevelopers({}: Route.ComponentProps) {
  return <PageDevelopers items={items} />;
}
