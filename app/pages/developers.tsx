import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import { type Item } from "~/routes/developers";

export function PageDevelopers({ items }: { items: Item[] }) {
  return (
    <Container>
      <Header>
        <h2>Why build on miden?</h2>
        <p>
          On Miden, builders can build applications that are infeasible on other
          systems. Miden is for high throughput and private applications. In
          protocol safeguards, like native account abstraction, and Rust smart
          contractors provide the safety you need to build the future's
          financial applications.
        </p>
      </Header>

      <div className="mt-12">
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
      </div>
    </Container>
  );
}
