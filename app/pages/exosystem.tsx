import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import type { Item } from "~/routes/ecosystem";

export function PageEcosystem({ items }: { items: Item[] }) {
  return (
    <Container className="w-miden">
      <Header>
        <h2>Learn how to build on miden</h2>
      </Header>
      <div>
        <div className="p-6 pb-0 w-miden font-bold">Projects</div>
        <div>
          {items.map((item) => (
            <Link
              to={item.link.href}
              prefetch="intent"
              key={item.label}
              className="block p-6 border"
            >
              <h4 className="pb-2 border-b w-fit">{item.label}</h4>
              <p className="my-6 text-neutral-600">{item.description}</p>
              <span className="flex justify-center items-center bg-accent size-4 text-accent-foreground">
                ↗<span className="sr-only">{item.link.label}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div className="my-6">
        <div className="p-6 pb-0 w-miden font-bold">Pioneer program</div>
        <div className="mt-6 px-6 max-w-xl text-balance">
          <p>
            The Pioneer program provides critical support and grants funding to
            accelerate the teams shaping tomorrow’s onchain economies.
          </p>
          <ul className="flex flex-col gap-3 mt-6">
            <li>
              <Link to="/" className="text-accent underline underline-offset-2">
                Apply to the Pioneer program →
              </Link>
            </li>
            <li>
              <Link to="/" className="text-accent underline underline-offset-2">
                Learn more about our Pioneer program →{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
