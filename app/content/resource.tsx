import { type Route } from ".react-router/types/app/content/+types/resource";
import { motion } from "motion/react";
import { useState } from "react";
import { Link, Outlet } from "react-router";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { ListItem } from "~/components/list";
import { Navigation } from "~/components/navigation";
import { getEcosystem } from "~/lib/ecosystem.server";
import { getPaper } from "~/lib/papers.server";
import { getFeaturedPosts, getPost } from "~/lib/posts.server";
import { getTalk } from "~/lib/talks.server";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const pathname = url.pathname.split("/");

  const slug = pathname.pop();
  if (!slug) {
    return new Response("Not found", { status: 404 });
  }

  const category = pathname[pathname.length - 1];
  if (!category) {
    return new Response("Not found", { status: 404 });
  }

  let data;

  switch (category) {
    case "blog": {
      data = getPost(slug);
      break;
    }
    case "papers": {
      data = getPaper(slug);
      break;
    }
    case "talks": {
      data = getTalk(slug);
      break;
    }
    case "ecosystem": {
      data = getEcosystem(slug);
      break;
    }
    default:
      throw new Response("Not found", { status: 404 });
  }
  if (!data) {
    throw new Response("Not found", { status: 404 });
  }

  const relatedPosts = getFeaturedPosts();

  return { data, category, relatedPosts };
}

export function meta({ data: { data } }: Route.MetaArgs) {
  return [{ title: `${data.title} – Miden` }];
}

export default function Layout({
  loaderData: { data, category, relatedPosts },
}: Route.ComponentProps) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <main className="flex flex-col mx-auto md:px-6 w-full min-h-dvh text-sm">
        <Navigation />
        <div className="my-12">
          <div className="relative gap-6 xl:grid grid-cols-[1fr_800px_1fr] w-full w-miden max-w-[calc(800px+256px+256px) xl:max-w-full font-sans">
            <ul className="hidden top-0 sticky xl:flex flex-col ml-auto p-6 w-full max-w-3xs h-fit text-muted-foreground">
              <li>
                <Link
                  to={`/resources`}
                  className="flex items-center gap-1 py-1.5 overflow-hidden hover:text-black text-balance transition-colors"
                  onMouseEnter={() => {
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => {
                    setIsHovering(false);
                  }}
                >
                  <motion.span className="block bg-white size-4">↵</motion.span>
                  <motion.span
                    className="block"
                    transition={{
                      duration: isHovering ? 0.4 : 0.2,
                    }}
                    initial={{ opacity: 0, x: "-20%" }}
                    animate={{
                      opacity: isHovering ? 1 : 0,
                      x: isHovering ? 0 : "-20%",
                    }}
                  >
                    <motion.span
                      className="block truncate uppercase"
                      initial={{ width: 65 }}
                      animate={{ width: isHovering ? 65 : 0 }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      Go back
                    </motion.span>
                  </motion.span>
                </Link>
              </li>
              {data.headings.map((heading) => (
                <li key={heading.id}>
                  <Link
                    to={`/resource/${category}/${data.slug}#${heading.id}`}
                    className="block py-1.5 hover:text-black text-balance transition-colors"
                  >
                    {heading.text}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-6 w-full">
              <div className="[&_span.author]:block prose-h1:m-0 [&_span.author]:mt-1 prose-h2:mt-6 [&_span.author]:mb-3 prose-h2:mb-3 prose-h3:mb-3 prose-h1:first:pt-0 prose-headings:pt-6 [&_span.author]:pb-3 prose-h2:pb-3 prose-h3:pb-3 [&h1>a]:border-b prose-img:w-full max-w-full [&_*]:max-w-[600px] font-sans [&_span.author]:font-mono [&h1>a]:font-mono prose-h2:!font-mono prose-h1:font-semibold text-sm prose-h2:text-sm prose-h3:text-sm prose-h1:text-4xl prose-h3:underline prose-h3:underline-offset-2 prose-h2:!normal-case prose-h1:text-balance leading-[170%] prose">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Container className="my-0 mb-12 text-sm">
        <h3 className="my-b">More blogs</h3>
        <ul className="flex flex-col">
          {relatedPosts.map((item) => (
            <li key={item.slug}>
              <ListItem to={`/resource/blog/${item.slug}`} prefetch="intent">
                <time className="text-accent">{item.date}</time>
                <h4 className="text-muted-foreground truncate">{item.title}</h4>
              </ListItem>
            </li>
          ))}
        </ul>
        <Link
          prefetch="intent"
          to="/resources"
          className="block my-3 underline underline-offset-2"
        >
          {">>"} Explore more articles
        </Link>
      </Container>
      <Footer />
    </>
  );
}
