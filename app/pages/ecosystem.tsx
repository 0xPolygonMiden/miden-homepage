import { href, Link } from "react-router";
import { Container, Header } from "~/components/container";
import { type Item } from "~/routes/ecosystem";

export function PageEcosystem({ items }: { items: Item[] }) {
  return (
    <Container className="w-miden">
      <Header>
        <h2>Learn how to build on miden</h2>
      </Header>
      <div>
        <div className="mb-3 p-6 pb-0 w-miden font-bold">Projects</div>
        <div className="gap-3 grid grid-cols-1 md:grid-cols-2 px-6">
          {items.map((item) => (
            <Link
              to={item.link}
              key={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between p-6 border hover:!border-border transition-colors"
            >
              <span className="flex items-center gap-2 pb-4 border-b">
                {item.icon}
                <h4>{item.label}</h4>
              </span>
              <p className="my-4 mb-6 text-muted-foreground">
                {item.description}
              </p>
              <span className="flex justify-center items-center bg-accent size-4 text-accent-foreground">
                ↗
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
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLScGmZdSbJHeoRcIzret0dOG4PxorovSGBUXpVmUf0EFFLsW-w/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                Apply to the Pioneer program →
              </Link>
            </li>
            <li>
              <Link
                prefetch="intent"
                to={href("/ecosystem/program/pioneers")}
                className="text-accent underline underline-offset-2"
              >
                Learn more about our Pioneer program →{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
