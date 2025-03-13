import { Link, Outlet } from "react-router";
import { Banner } from "~/components/banner";
import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";

export default function Layout() {
  return (
    <main className="w-full flex flex-col min-h-dvh w-miden text-sm md:px-12">
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
