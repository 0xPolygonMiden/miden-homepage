import { Link, NavLink } from "react-router";
import { Logo } from "~/components/logo";

const items = [
  {
    label: "Testnet",
    href: "/testnet",
  },
  {
    label: "Roadmap",
    href: "/roadmap",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Ecosystem",
    href: "/ecosystem",
  },
  {
    label: "Developers",
    href: "/developers",
  },
];

export function Navigation() {
  return (
    <nav className="pl-6 py-3 border-b pr-3 flex items-center justify-between gap-4 text-xs w-miden">
      <Link to="/" prefetch="intent">
        <Logo className="h-9 shrink-0" />
      </Link>
      <ul className="items-center justify-end hidden md:flex">
        {items.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              prefetch="intent"
              className="px-3 aria-[current='page']:text-primary"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
