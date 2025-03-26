import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";

export default function Layout() {
  return (
    <main className="flex flex-col mx-auto w-full min-h-dvh text-sm">
      <Navigation />
      <Outlet />
      <Footer />
    </main>
  );
}
