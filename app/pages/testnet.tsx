import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import type { Item } from "~/routes/testnet";

export function PageTestnet({ items }: { items: Item[] }) {
  return (
    <Container>
      <Header>
        <h2>Miden is in Alpha Testnet</h2>
        <span className="font-bold">V6</span>
      </Header>
      <div className="mt-6 flex w-miden  flex-col gap-3">
        {items.map((item) => (
          <Link
            to={item.link.href}
            prefetch="intent"
            key={item.label}
            className="border p-6"
          >
            <h4 className="border-b w-fit pb-2">{item.label}</h4>
            <p className="text-neutral-600 my-6">{item.description}</p>
            <span className="size-4 bg-accent text-accent-foreground flex items-center justify-center">
              ↗<span className="sr-only">{item.link.label}</span>
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
