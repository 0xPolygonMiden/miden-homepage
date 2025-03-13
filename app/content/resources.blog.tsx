import type { Route } from ".react-router/types/app/content/+types/resources.blog";
import { Link, NavLink, Outlet } from "react-router";
import { Banner } from "~/components/banner";
import { Container, Header } from "~/components/container";
import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";
import { getPost } from "~/lib/posts.server";

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const slug = url.pathname.split("/").pop();

  if (!slug) {
    return new Response("Not found", { status: 404 });
  }

  const post = getPost(slug);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  return { post };
}

export default function Layout({ loaderData: { post } }: Route.ComponentProps) {
  return (
    <main className="w-full flex flex-col min-h-dvh text-sm md:px-12 mx-auto">
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
            <span>/</span>
            <NavLink to="/resources" prefetch="intent">
              Resources
            </NavLink>
            <span>/</span>
            <NavLink to="/resources/blog" prefetch="intent">
              Blog
            </NavLink>
            <span>/</span>
            <NavLink
              to={`/resources/blog/${post.slug}`}
              className="aria-[current='page']:font-bold aria-[current='page']:text-neutral-800"
            >
              {post.title}
            </NavLink>
          </div>
        </Header>
        <div className="w-miden px-6">
          <div className="prose prose-h2:text-sm prose-h2:!normal-case prose-h2:font-mono prose-h2:pb-3 prose-h2:mb-3 prose-h2:border-b prose-h2:mt-12 prose-h3:pb-3 prose-h3:mb-3 prose-h3:underline prose-h3:underline-offset-2 prose-h3:text-sm font-sans text-sm leading-[170%] py-6 prose-h1:m-0 prose-h1:font-semibold prose-h1:text-4xl [&_span.author]:font-mono [&_span.author]:border-b [&_span.author]:mb-3 [&_span.author]:pb-3 [&_span.author]:block">
            <Outlet />
          </div>
        </div>
        ca
      </Container>
      <Footer />
    </main>
  );
}
