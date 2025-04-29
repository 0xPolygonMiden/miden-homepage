import { Container, Header, Wrapper } from "~/components/container";
import {
  Item,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "~/components/list";
import type { Item as ItemType } from "~/routes/developers";

export function PageDevelopers({ items }: { items: ItemType[] }) {
  return (
    <Container>
      <Header>
        <h2>Why build on miden?</h2>
        <p>
          Edge execution enables what traditional blockchains can’t provide: An
          environment to create and deploy scalable applications with private
          and public transactions.
        </p>
        <p>
          Miden offers the flexibility and security guarantees needed to build
          previously impossible products through account abstraction,
          self-custodied state, and smart contracts written in Rust.
        </p>
      </Header>

      <div className="mt-16">
        <Wrapper>
          {items.map((item) => (
            <Item
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={item.label}
            >
              <ItemHeader>
                <ItemTitle>{item.label}</ItemTitle>
              </ItemHeader>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          ))}
        </Wrapper>
      </div>
    </Container>
  );
}
