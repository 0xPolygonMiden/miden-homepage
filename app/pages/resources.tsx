import type { SVGProps } from "react";
import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import type { Post } from "~/lib/posts";

const articles = [
  {
    label: "Miden’s Asset Model: How every asset is native",
    date: "17.03.25",
    href: "/",
  },
  {
    label: "Privacy simply scales better",
    date: "17.03.25",
    href: "/",
  },
  {
    label: "Miden: Transaction Model",
    date: "17.03.25",
    href: "/",
  },
  {
    label: "Miden: State Model",
    date: "17.03.25",
    href: "/",
  },
  {
    label: "Ethereum’s feature set extended",
    date: "17.03.25",
    href: "/",
  },
];

export function PageResources({ posts }: { posts: Post[] }) {
  return (
    <Container>
      <Header>
        <h2>All we have to say about Miden</h2>
      </Header>
      <div className="mt-6">
        <h3 className="my-6">Blog</h3>
        <ul className="flex flex-col gap-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/resources/blog/${post.slug}`}
                prefetch="intent"
                className="flex items-start gap-3"
              >
                <time>{post.date}</time>
                <h4 className="text-neutral-600">{post.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          prefetch="intent"
          to="/resources/blog"
          className="my-6 block underline underline-offset-2"
        >
          {">>"} Explore more articles
        </Link>
      </div>

      <div className="mt-6">
        <h3 className="my-6">Research papers</h3>
        <ul className="flex flex-col gap-3">
          {articles.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                prefetch="intent"
                className="flex items-start gap-3"
              >
                <div className="h-5 flex items-center justify-center">
                  <IconPaper className="size-3.5" />
                </div>
                <h4 className="text-neutral-600">{item.label}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          prefetch="intent"
          to="/resources/blog"
          className="my-6 block underline underline-offset-2"
        >
          {">>"} Continue your research
        </Link>
      </div>

      <div className="mt-6">
        <h3 className="my-6">Talks</h3>
        <ul className="flex flex-col gap-3">
          {articles.map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                prefetch="intent"
                className="flex items-start gap-3"
              >
                <div className="h-5 flex items-center justify-center">
                  <IconTalk className="size-3.5" />
                </div>
                <h4 className="text-neutral-600">{item.label}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          prefetch="intent"
          to="/resources/blog"
          className="my-6 block underline underline-offset-2"
        >
          {">>"} Explore all talks
        </Link>
      </div>
    </Container>
  );
}

function IconPaper(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line y1="1" x2="14" y2="1" stroke="currentColor" strokeWidth={2} />
      <line y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth={2} />
      <line y1="13" x2="9" y2="13" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

function IconTalk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.0107 6.04762C10.7438 6.4709 10.7438 7.5291 10.0107 7.95238L4.64957 11.0476C3.91643 11.4709 3 10.9418 3 10.0952L3 3.90476C3 3.0582 3.91643 2.5291 4.64957 2.95238L10.0107 6.04762Z"
      />
    </svg>
  );
}
