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
        <h3 className="my-6 px-6 w-miden">Featured</h3>
        <ul className="flex flex-col">
          {posts.map((item) => (
            <li key={item.title}>
              <Link
                prefetch="intent"
                to={`/resources/blog/${item.slug}`}
                className="py-1.5 flex hover:bg-secondary transition-colors hover:duration-100 duration-300"
              >
                <div className="w-full px-6 w-miden flex items-center gap-3">
                  <time>{item.date}</time>
                  <h4 className="text-neutral-600">{item.title}</h4>
                </div>
                cla
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
