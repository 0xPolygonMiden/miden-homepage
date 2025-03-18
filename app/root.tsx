import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { Banner } from "~/components/banner";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import { Navigation } from "~/components/navigation";
import type { Route } from "./+types/root";
import "./app.css";
import faviconIco from "/favicon.ico";
import faviconSvg from "/favicon.svg";
import appleTouchIcon from "/icons/apple-touch-icon.png";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Reenie+Beanie&display=swap",
  },
  { rel: "icon", href: `${faviconIco}`, sizes: "any" },
  { rel: "icon", href: `${faviconSvg}`, type: "image/svg+xml" },
  { rel: "apple-touch-icon", href: `${appleTouchIcon}` },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="rgb(250, 250, 250);" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Miden" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <Meta />
        <Links />
      </head>
      <body className="py-safe">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

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
      <Container className="flex flex-col justify-center items-center">
        <h1 className="mb-2 font-bold text-lg">{message}</h1>
        <p className="text-sm">{details}</p>
        {stack && (
          <pre className="p-4 w-full overflow-x-auto">
            <code>{stack}</code>
          </pre>
        )}
      </Container>
      <Footer />
    </main>
  );
}
