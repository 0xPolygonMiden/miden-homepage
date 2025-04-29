import { PageDevelopers } from "~/pages/developers";

export type Item = (typeof items)[0];

export function meta() {
  return [{ title: "Developers – Miden" }];
}

const items = [
  {
    label: "Docs",
    description: "Everything you need to get started building with Miden.",
    link: "https://0xpolygonmiden.github.io/miden-docs/",
  },
  {
    label: "Playground",
    description: "Start experimenting with Miden in your browser.",
    link: "https://miden-playground.pages.dev/",
  },
  {
    label: "Midenscan",
    description:
      "Explore accounts, transaction details, and notes on the Miden block explorer.",
    link: "https://testnet.midenscan.com/",
  },
  {
    label: "Miden Faucet",
    description: "Get Miden testnet tokens and start building with Miden.",
    link: "https://faucet.testnet.miden.io/",
  },
];

export default function RouteDevelopers() {
  return <PageDevelopers items={items} />;
}
