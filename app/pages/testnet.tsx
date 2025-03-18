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
      <div className="flex flex-col gap-3 mt-6 px-6 w-miden">
        {items.map((item) => (
          <Link
            to={item.link.href}
            prefetch="intent"
            key={item.label}
            className="p-6 border"
          >
            <h4 className="pb-2 border-b w-fit">{item.label}</h4>
            <p className="my-6 text-neutral-600">{item.description}</p>
            <span className="flex justify-center items-center bg-accent size-4 text-accent-foreground">
              ↗<span className="sr-only">{item.link.label}</span>
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
