import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import type { Post } from "~/lib/posts";

export function PageBlog({ posts }: { posts: Post[] }) {
  return (
    <Container>
      <Header>
        <div className="flex items-center gap-6">
          <Link to="/resources" prefetch="intent">
            ↵ Back
          </Link>
          <h2>Blog</h2>
        </div>
        <span className="font-bold">Index</span>
      </Header>

      <div className="mt-6">
        <h3 className="my-6">Featured</h3>
        <ul className="flex flex-col gap-3">
          {posts.map((item) => (
            <li key={item.title}>
              <Link
                prefetch="intent"
                to={`/resources/blog/${item.slug}`}
                className="flex items-start gap-3"
              >
                <time>{item.date}</time>
                <h4 className="text-neutral-600">{item.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
