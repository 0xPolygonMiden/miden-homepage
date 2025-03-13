import { NavLink } from "react-router";
import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import { ListItem } from "~/components/list";
import type { Post } from "~/lib/posts";

export function PageBlog({ posts }: { posts: Post[] }) {
  return (
    <div className="flex-1">
      <Container className="flex-none">
        <Header>
          <div className="flex items-center gap-2 text-neutral-500">
            <span>/</span>
            <NavLink to="/resources" prefetch="intent">
              Resources
            </NavLink>
            <span>/</span>
            <NavLink
              to="/resources/blog"
              prefetch="intent"
              className="aria-[current='page']:font-bold aria-[current='page']:text-neutral-800"
            >
              Blog
            </NavLink>
          </div>
        </Header>
      </Container>

      <div>
        <h3 className="my-3 px-6 w-miden">Featured</h3>
        <ul className="flex flex-col">
          {posts.map((item) => (
            <li key={item.title}>
              <ListItem to={`/resources/blog/${item.slug}`}>
                <time className="text-accent">{item.date}</time>
                <h4 className="text-neutral-600">{item.title}</h4>
              </ListItem>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
