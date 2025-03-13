import { Link } from "react-router";
import { Container, Header } from "~/components/container";

const items = [
  {
    label: "Miden Docs",
    description:
      "Everything you need to know to get started building with Miden.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
  {
    label: "Miden Playground",
    description: "Start experimenting with Miden.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
];

export function PageDevelopers() {
  return (
    <Container>
      <Header>
        <h2>Learn how to build on miden</h2>
      </Header>

      <div className="mt-6 w-miden grid sm:grid-cols-2 grid-cols-1 gap-3">
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
    </Container>
  );
}
