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
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {items.map((item) => (
          <div key={item.label} className="border-r last:border-r-0">
            <h3 className="mb-3">{item.label}</h3>
            <p className="text-neutral-600 mb-6">{item.description}</p>
            <Link to={item.link.href} className="underline underline-offset-2">
              {">>"} {item.link.label}
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}
