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
  {
    label: "Midenscan",
    description: "Explore accounts, notes, and transactions on block explorer.",
    link: "https://testnet.midenscan.com/",
  },
  {
    label: "Miden Faucet",
    description: "Get Miden testnet tokens and start experimenting with Miden.",
    link: "https://faucet.testnet.miden.io/",
  },
];

export default function RouteDevelopers({}: Route.ComponentProps) {
  return <PageDevelopers items={items} />;
}
