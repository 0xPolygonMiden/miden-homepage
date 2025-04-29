import { PageTestnet } from "~/pages/testnet";

export type Item = (typeof items)[0];

export function meta() {
  return [{ title: "Testnet – Miden" }];
}

const items = [
  {
    label: "Midenscan",
    description:
      "Explore accounts, transaction details, and notes on the Miden block explorer.",
    link: {
      href: "https://testnet.midenscan.com/",
      label: "Explorer",
    },
  },
  {
    label: "Miden Faucet",
    description: "Get Miden testnet tokens and start building  with Miden.",
    link: {
      href: "https://faucet.testnet.miden.io/",
      label: "Faucet",
    },
  },
  {
    label: "Miden Wallet",
    description: "Install the Miden wallet and experience client-side proving.",
    link: {
      href: "#",
      label: "Wallet",
    },
  },
];

export default function RouteTestnet() {
  return <PageTestnet items={items} />;
}
