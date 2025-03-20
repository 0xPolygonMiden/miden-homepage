import { Link } from "react-router";
import { Container, Header } from "~/components/container";
import { IconPaper, IconTalk } from "~/components/icons";
import { ListItem } from "~/components/list";
import { type Article } from "~/lib/data";

export function PageResources({
  posts,
  papers,
  talks,
}: {
  posts: Article[];
  papers: { label: string; link: string }[];
  talks: { label: string; link: string }[];
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
                <ListItem to={`/resource/blog/${item.slug}`} prefetch="intent">
                  <time className="text-accent">{item.date}</time>
                  <h4 className="text-neutral-600 truncate">{item.title}</h4>
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
            {papers.slice(0, 5).map((item) => (
              <li key={item.label}>
                <ListItem
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center h-5 text-accent">
                    <IconPaper className="size-3.5" />
                  </div>
                  <h4 className="text-neutral-600 truncate">{item.label}</h4>
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
            {talks.slice(0, 5).map((item) => (
              <li key={item.label}>
                <ListItem
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center h-5 text-accent">
                    <IconTalk className="size-3.5" />
                  </div>
                  <h4 className="text-neutral-600 truncate">{item.label}</h4>
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
