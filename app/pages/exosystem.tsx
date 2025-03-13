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
        <div className="font-bold w-miden p-6 pb-0">Projects</div>
        <div className="mt-6 w-miden grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3">
          {items.map((item) => (
            <div key={item.label} className="border p-6">
              <h4 className="border-b w-fit pb-2">{item.label}</h4>
              <p className="text-neutral-600 my-6">{item.description}</p>
              <Link
                to={item.link.href}
                className="size-4 bg-accent text-accent-foreground flex items-center justify-center"
              >
                ↗<span className="sr-only">{item.link.label}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <div className="font-bold w-miden p-6 pb-0">Pioneer program</div>
        <div className="mt-6 px-6 max-w-xl text-balance">
          <p>
            The Pioneer program provides critical support and grants funding to
            accelerate the teams shaping tomorrow’s onchain economies.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
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
