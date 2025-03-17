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
    <nav className="flex justify-between items-center gap-4 py-3 pr-3 pl-6 border-b w-miden text-xs">
      <Link to="/" prefetch="intent">
        <Logo className="h-9 shrink-0" />
      </Link>
      <ul className="hidden md:flex justify-end items-center">
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
