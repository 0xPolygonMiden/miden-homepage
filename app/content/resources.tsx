import type { Route } from "./+types/resources";
import { Link, NavLink, Outlet } from "react-router";
import { Banner } from "~/components/banner";
import { Container, Header } from "~/components/container";
import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";
import { getPost } from "~/lib/posts.server";

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

  const data = getPost(slug);
  if (!data) {
    return new Response("Not found", { status: 404 });
  }

  return { data, category };
}

export default function Layout({
  loaderData: { data, category },
}: Route.ComponentProps) {
  return (
    <main className="flex flex-col mx-auto md:px-12 w-full min-h-dvh text-sm">
      <Banner
        message={
          <p>
            Try Miden today and{" "}
            <Link
              to="/docs"
              prefetch="intent"
              className="underline underline-offset-2"
            >
              get started here
            </Link>
            .
          </p>
        }
      />
      <Navigation />
      <Container>
        <Header>
          <div className="flex items-center gap-2 text-neutral-500">
            <NavLink to="/resources" prefetch="intent">
              Resources
            </NavLink>
            <span>/</span>
            <NavLink to={`/resources/${category}`} prefetch="intent">
              {category}
            </NavLink>
            <span>/</span>
            <NavLink
              to={`/resources/blog/${data.slug}`}
              className="aria-[current='page']:font-bold aria-[current='page']:text-neutral-800"
            >
              {data.title}
            </NavLink>
          </div>
        </Header>

        <div className="relative grid grid-cols-[1fr_768px_1fr] w-full max-w-[calc(768px+256px+256px) font-sans">
          <ul className="top-0 sticky flex flex-col ml-auto py-6 w-3xs h-dvh text-muted-foreground">
            <li>
              <Link to={`/resources/${category}`}>↵</Link>
            </li>
            {data.headings.map((heading) => (
              <li key={heading.id}>
                <Link
                  to={`/resources/blog/${data.slug}#${heading.id}`}
                  className="block py-1.5 hover:text-black transition-colors"
                >
                  {heading.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="px-6 w-full">
            <div className="[&_span.author]:block prose-h1:m-0 prose-h2:mt-6 [&_span.author]:mb-3 prose-h2:mb-3 prose-h3:mb-3 prose-headings:pt-6 [&_span.author]:pb-3 prose-h2:pb-3 prose-h3:pb-3 [&_span.author]:border-b [&h1>a]:border-b prose-h2:border-b font-sans [&_span.author]:font-mono [&h1>a]:font-mono prose-h2:font-mono prose-h1:font-semibold text-sm prose-h2:text-sm prose-h3:text-sm prose-h1:text-4xl prose-h3:underline prose-h3:underline-offset-2 prose-h2:!normal-case leading-[170%] prose">
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
