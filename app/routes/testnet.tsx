import { type Route } from ".react-router/types/app/routes/+types/testnet";
import { PageTestnet } from "~/pages/testnet";

export type Item = (typeof items)[0];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Testnet – Miden" }];
}

const items = [
  {
    label: "Midenscan",
    description: "Explore accounts, notes, and transactions on block explorer.",
    link: {
      href: "https://testnet.midenscan.com/",
      label: "Explorer",
    },
  },
  {
    label: "Miden Faucet",
    description: "Get Miden testnet tokens and start experimenting with Miden.",
    link: {
      href: "https://faucet.testnet.miden.io/",
      label: "Faucet",
    },
  },
  {
    label: "Miden Wallet",
    description:
      "Install the first wallet for Miden, and start client-side proving.",
    link: {
      href: "#",
      label: "Wallet",
    },
  },
];

export default function RouteTestnet({}: Route.ComponentProps) {
  return <PageTestnet items={items} />;
}
