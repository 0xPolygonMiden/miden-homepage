import { href, Link } from "react-router";
import { Container, Header, Wrapper } from "~/components/container";
import type { Item } from "~/routes/ecosystem";

export function PageEcosystem({ items }: { items: Item[] }) {
  return (
    <Container>
      <Header>
        <h2>Pioneer program</h2>
        <p>
          The Pioneer program provides critical support and grants funding to
          accelerate the teams shaping tomorrow’s onchain economies.
        </p>
        <ul className="flex flex-col gap-3">
          <li>
            <Link
              prefetch="intent"
              to={href("/ecosystem/program/pioneers")}
              className="text-accent underline underline-offset-2"
            >
              Learn more about our Pioneer program →{" "}
            </Link>
          </li>
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
        </ul>
      </Header>

      <div className="mt-16">
        <div className="mb-6 font-bold">Projects</div>
        <Wrapper>
          {items.map((item) => (
            <Link
              to={item.link}
              key={item.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between py-6 border-t transition-colors"
            >
              <span className="flex items-center gap-3">
                {item.icon}
                <h4>{item.label}</h4>
              </span>
              <p className="mt-4 text-muted-foreground">{item.description}</p>
            </Link>
          ))}
        </Wrapper>
      </div>
    </Container>
  );
}
