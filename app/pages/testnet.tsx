import { Link } from "react-router";
import { Container, Header } from "~/components/container";

const items = [
  {
    label: "Midenscan",
    description: "Explore accounts, notes, and transactions on block explorer.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
  {
    label: "Miden Faucet",
    description: "Get Miden testnet tokens and start experimenting with Miden.",
    link: {
      href: "/",
      label: "Faucet",
    },
  },
  {
    label: "Miden Wallet",
    description:
      "Install the first wallet for Miden, and start client-side proving.",
    link: {
      href: "/",
      label: "Wallet",
    },
  },
];

export function PageTestnet() {
  return (
    <Container>
      <Header>
        <h2>Miden is in Alpha Testnet</h2>
        <span className="font-bold">V6</span>
      </Header>
      <div className="mt-6 flex w-miden  flex-col gap-3">
        {items.map((item) => (
          <div key={item.label} className="border p-6">
            <h4 className="border-b w-fit pb-2">{item.label}</h4>
            <p className="text-neutral-600 my-6">{item.description}</p>
            <Link
              to={item.link.href}
              className="size-4 bg-accent text-accent-foreground flex items-center justify-center"
            >
              ↗<span className="sr-only">{item.link.label}</span>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
