import { Link } from "react-router";
import { Container, Header, Wrapper } from "~/components/container";
import type { Item } from "~/routes/developers";

export function PageDevelopers({ items }: { items: Item[] }) {
  return (
    <Container>
      <Header>
        <h2>Why build on Miden?</h2>
        <p>Edge execution enables what traditional blockchains can’t provide: An environment to create and deploy scalable applications with private and public transactions.</p>
        <p>Miden offers the flexibility and security guarantees needed to build previously impossible products through account abstraction, self-custodied state, and smart contracts written in Rust.</p>
      </Header>

      <div className="mt-16">
        <Wrapper>
          {items.map((item) => (
            <Link
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.label}
              className="block py-6 border-t transition-colors"
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
