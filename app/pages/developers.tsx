import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import type { Item } from "~/routes/developers";

export function PageDevelopers({ items }: { items: Item[] }) {
  return (
    <Container>
      <Header>
        <h2>Learn how to build on miden</h2>
      </Header>

      <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 mt-6 w-miden">
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
