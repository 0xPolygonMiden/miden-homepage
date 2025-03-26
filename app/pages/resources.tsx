import { useState } from "react";
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
  const [showMorePosts, setShowMorePosts] = useState(false);
  const [showMorePapers, setShowMorePapers] = useState(false);
  const [showMoreTalks, setShowMoreTalks] = useState(false);

  return (
    <div className="flex-1">
      {posts.length > 0 && (
        <div className="mb-6">
          <h2 className="my-3 px-6 w-miden !font-mono !font-medium text-2xl">
            Blog
          </h2>
          <ul className="flex flex-col">
            {posts.slice(0, showMorePosts ? posts.length : 5).map((item) => (
              <li key={item.slug}>
                <ListItem to={`/resource/blog/${item.slug}`} prefetch="intent">
                  <time className="text-accent">{item.date}</time>
                  <h4 className="text-muted-foreground truncate">
                    {item.title}
                  </h4>
                </ListItem>
              </li>
            ))}
          </ul>
          {!showMorePosts && (
            <button
              onClick={() => setShowMorePosts(true)}
              className="block my-3 px-6 w-miden text-left underline underline-offset-2"
            >
              {">>"} Explore more articles
            </button>
          )}
        </div>
      )}

      {papers.length > 0 && (
        <div className="mb-6">
          <h2 className="my-3 px-6 w-miden !font-mono !font-medium text-2xl">
            Research papers
          </h2>
          <ul className="flex flex-col">
            {papers.slice(0, showMorePapers ? papers.length : 5).map((item) => (
              <li key={item.label}>
                <ListItem
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center h-5 text-accent">
                    <IconPaper className="size-3.5" />
                  </div>
                  <h4 className="text-muted-foreground truncate">
                    {item.label}
                  </h4>
                </ListItem>
              </li>
            ))}
          </ul>
          {!showMorePapers && (
            <button
              onClick={() => setShowMorePapers(true)}
              className="block my-3 px-6 w-miden text-left underline underline-offset-2"
            >
              {">>"} Continue your research
            </button>
          )}
        </div>
      )}

      {talks.length > 0 && (
        <div className="mb-6">
          <h2 className="my-3 px-6 w-miden !font-mono !font-medium text-2xl">
            Talks
          </h2>
          <ul className="flex flex-col">
            {talks.slice(0, showMoreTalks ? talks.length : 5).map((item) => (
              <li key={item.label}>
                <ListItem
                  to={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex justify-center items-center h-5 text-accent">
                    <IconTalk className="size-3.5" />
                  </div>
                  <h4 className="text-muted-foreground truncate">
                    {item.label}
                  </h4>
                </ListItem>
              </li>
            ))}
          </ul>
          {!showMoreTalks && (
            <button
              onClick={() => setShowMoreTalks(true)}
              className="block my-3 px-6 w-miden text-left underline underline-offset-2"
            >
              {">>"} Explore all talks
            </button>
          )}
        </div>
      )}
    </div>
  );
}
