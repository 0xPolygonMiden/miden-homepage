import { href, Link } from "react-router";
import { Container, Header, Wrapper } from "~/components/container";
import {
  Item,
  ItemDescription,
  ItemHeader,
  ItemTitle,
} from "~/components/list";
import type { Item as ItemType } from "~/routes/ecosystem";

export function PageEcosystem({ items }: { items: ItemType[] }) {
  return (
    <Container>
      <Header>
        <h2>Miden Pioneer Program</h2>
        <p>
          The Miden Pioneer Program gives top teams critical support and funding
          to build the future of on-chain economies.
        </p>
        <p>
          Created to expand the Miden ecosystem, this accelerator brings
          together venture funds, market makers, and technical support to help
          founders navigate the key stages of startup growth.
        </p>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              prefetch="intent"
              to={href("/ecosystem/program/pioneers")}
              className="text-primary underline underline-offset-2"
            >
              Learn more about our Pioneer program →{" "}
            </Link>
          </li>
          <li>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSep4KHHPR7N0Wp4kw9fcLl3w5oXtx8AooJOOYxBTY3WAtjSLA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              Apply to the Pioneer program →
            </Link>
          </li>
        </ul>
      </Header>

      <div className="mt-16">
        <div className="mb-6 font-bold">Projects</div>
        <Wrapper>
          {items.map((item) => (
            <Item
              to={item.link}
              key={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ItemHeader>
                {item.icon}
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
