import { Link } from "react-router";
import { Container, Header, Wrapper } from "~/components/container";
import type { Item } from "~/routes/testnet";

export function PageTestnet({ items }: { items: Item[] }) {
  return (
    <Container>
      <Header>
        <h2>
          Miden Testnet
        </h2>
        <p>
          The current version is Alpha Testnet v07. It is ready for builders to experiment with, but some important features (e.g. Rust compilation) are not yet available.
        </p>
      </Header>
      <div className="mt-16">
        <Wrapper className="flex flex-col">
          {items.map((item) => (
            <Link
              target="_blank"
              key={item.label}
              to={item.link.href}
              className="py-6 border-t transition-colors"
              rel="noopener noreferrer"
            >
              <h4>{item.label}</h4>
              <p className="mt-2 text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </Wrapper>
      </div>
    </Container>
  );
}
