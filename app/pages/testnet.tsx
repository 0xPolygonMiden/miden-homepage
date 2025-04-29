import { Container, Header, Wrapper } from "~/components/container";
import {
  Item,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "~/components/list";
import type { Item as ItemType } from "~/routes/testnet";

export function PageTestnet({ items }: { items: ItemType[] }) {
  return (
    <Container>
      <Header>
        <h2>Miden Testnet</h2>
        <p>
          The current version is Alpha Testnet v07. It is ready for builders to
          experiment with, but some important features (e.g. Rust compilation)
          are not yet available.
        </p>
      </Header>
      <div className="mt-16">
        <Wrapper className="flex flex-col">
          {items.map((item) => (
            <Item
              target="_blank"
              key={item.label}
              to={item.link.href}
              rel="noopener noreferrer"
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
