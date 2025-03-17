import type { SVGProps } from "react";
import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import { ListItem } from "~/components/list";
import type { Article } from "~/lib/data";

export function PageResources({
  posts,
  papers,
  talks,
}: {
  posts: Article[];
  papers: Article[];
  talks: Article[];
}) {
  return (
    <div className="flex-1">
      <Container className="flex-none">
        <Header>
          <h2>All we have to say about Miden</h2>
        </Header>
      </Container>

      {posts.length > 0 && (
        <div className="mb-6">
          <h3 className="my-3 px-6 w-miden">Blog</h3>
          <ul className="flex flex-col">
            {posts.map((item) => (
              <li key={item.slug}>
                <ListItem to={`/resource/blog/${item.slug}`}>
                  <time className="text-accent">{item.date}</time>
                  <h4 className="text-neutral-600">{item.title}</h4>
                </ListItem>
              </li>
            ))}
          </ul>
          <Link
            prefetch="intent"
            to="/resources/blog"
            className="block my-3 px-6 w-miden w-miden underline underline-offset-2"
          >
            {">>"} Explore more articles
          </Link>
        </div>
      )}

      {papers.length > 0 && (
        <div className="mb-6">
          <h3 className="my-3 px-6 w-miden">Research papers</h3>
          <ul className="flex flex-col">
            {papers.map((item) => (
              <li key={item.slug}>
                <ListItem to={`/resource/papers/${item.slug}`}>
                  <div className="flex justify-center items-center h-5 text-accent">
                    <IconPaper className="size-3.5" />
                  </div>
                  <h4 className="text-neutral-600">{item.title}</h4>
                </ListItem>
              </li>
            ))}
          </ul>
          <Link
            prefetch="intent"
            to="/resources/papers"
            className="block my-3 px-6 w-miden underline underline-offset-2"
          >
            {">>"} Continue your research
          </Link>
        </div>
      )}

      {talks.length > 0 && (
        <div className="mb-6">
          <h3 className="my-3 px-6 w-miden">Talks</h3>
          <ul className="flex flex-col">
            {talks.map((item) => (
              <li key={item.slug}>
                <ListItem to={`/resource/talks/${item.slug}`}>
                  <div className="flex justify-center items-center h-5 text-accent">
                    <IconTalk className="size-3.5" />
                  </div>
                  <h4 className="text-neutral-600">{item.title}</h4>
                </ListItem>
              </li>
            ))}
          </ul>
          <Link
            prefetch="intent"
            to="/resources/talks"
            className="block my-3 px-6 w-miden underline underline-offset-2"
          >
            {">>"} Explore all talks
          </Link>
        </div>
      )}
    </div>
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
