import { NavLink } from "react-router";
import { Container, Header } from "~/components/container";
import { ListItem } from "~/components/list";
import type { Article } from "~/lib/data";

export function PageTalks({ talks }: { talks: Article[] }) {
  return (
    <div className="flex-1">
      <Container className="flex-none">
        <Header>
          <div className="flex items-center gap-2 text-neutral-500">
            <NavLink to="/resources" prefetch="intent">
              Resources
            </NavLink>
            <span>/</span>
            <NavLink
              to="/resources/talks"
              prefetch="intent"
              className="aria-[current='page']:font-bold aria-[current='page']:text-neutral-800"
            >
              Talks
            </NavLink>
          </div>
        </Header>
      </Container>

      <div>
        <h3 className="my-3 px-6 w-miden">Featured</h3>
        <ul className="flex flex-col">
          {talks.map((item) => (
            <li key={item.title}>
              <ListItem to={`/resource/talks/${item.slug}`}>
                <time className="text-accent">{item.date}</time>
                <h4 className="text-muted-foreground">{item.title}</h4>
              </ListItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
