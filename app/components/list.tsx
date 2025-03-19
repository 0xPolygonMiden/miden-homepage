import  { type ReactNode } from "react";
import { Link, type To } from "react-router";

export function ListItem({ to, children }: { to: To; children: ReactNode }) {
  return (
    <Link
      to={to}
      prefetch="intent"
      className="flex hover:bg-secondary py-1.5 transition-colors duration-300 hover:duration-100"
    >
      <div className="flex items-center gap-3 px-6 w-full w-miden">
        {children}
      </div>
    </Link>
  );
}
