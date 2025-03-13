import type { ReactNode } from "react";
import { Link, type To } from "react-router";

export function ListItem({ to, children }: { to: To; children: ReactNode }) {
  return (
    <Link
      to={to}
      prefetch="intent"
      className="py-1.5 flex hover:bg-secondary transition-colors hover:duration-100 duration-300"
    >
      <div className="w-full px-6 w-miden flex items-center gap-3">
        {children}
      </div>
    </Link>
  );
}
