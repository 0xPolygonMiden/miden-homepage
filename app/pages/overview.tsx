import { NavLink } from "react-router";
import { Container, Header } from "~/components/container";
import { IconPaper, IconTalk } from "~/components/icons";
import { ListItem } from "~/components/list";
import { Category, type Article } from "~/lib/data";

export function PageOverview({
  posts,
  papers,
  talks,
  category,
}: {
  posts: Article[] | null;
  papers: { label: string; link: string }[];
  talks: { label: string; link: string }[];
  category: Category;
}) {
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
              to={`/resources/${category}`}
              prefetch="intent"
              className="aria-[current='page']:font-bold aria-[current='page']:text-neutral-800 uppercase"
            >
              {category}
            </NavLink>
          </div>
        </Header>
      </Container>

      <div>
        <h3 className="my-3 px-6 w-miden">Featured</h3>
        <ul className="flex flex-col">
          {category === Category.Blog &&
            posts &&
            posts.map((item) => (
              <li key={item.title}>
                <ListItem to={`/resource/${category}/${item.slug}`}>
                  <time className="text-accent">{item.date}</time>
                  <h4 className="text-neutral-600 truncate">{item.title}</h4>
                </ListItem>
              </li>
            ))}
          {category == Category.Papers &&
            papers.map((item) => (
              <li key={item.label}>
                <ListItem to={item.link}>
                  <div className="flex justify-center items-center h-5 text-accent">
                    <IconPaper className="size-3.5" />
                  </div>
                  <h4 className="text-neutral-600 truncate">{item.label}</h4>
                </ListItem>
              </li>
            ))}
          {category == Category.Talks &&
            talks.map((item) => (
              <li key={item.label}>
                <ListItem to={item.link}>
                  <div className="flex justify-center items-center h-5 text-accent">
                    <IconTalk className="size-3.5" />
                  </div>
                  <h4 className="text-neutral-600 truncate">{item.label}</h4>
                </ListItem>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
