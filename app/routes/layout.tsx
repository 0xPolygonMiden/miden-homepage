import { Link, Outlet } from "react-router";
import { Banner } from "~/components/banner";
import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";

export default function Layout() {
  return (
    <main className="flex flex-col mx-auto w-full min-h-dvh text-sm">
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
      <Outlet />
      <Footer />
    </main>
  );
}
