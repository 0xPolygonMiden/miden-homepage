import { Link, NavLink } from "react-router";
import { ChevronRight, MenuIcon, XIcon } from "lucide-react";
import { Logo } from "~/components/logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";

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
    <nav className="flex justify-between items-center gap-4 px-6 py-3 md:pr-3 md:pl-6 border-b w-miden text-xs">
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

      <Drawer>
        <DrawerTrigger className="group md:hidden block">
          <MenuIcon
            className="group-data-[state=open]:hidden size-5"
            strokeWidth={1.5}
          />
          <XIcon
            className="hidden group-data-[state=open]:block size-5"
            strokeWidth={1.5}
          />
        </DrawerTrigger>
        <DrawerContent>
          <div className="p-6">
            <DrawerHeader className="mb-4 px-3">
              <DrawerTitle className="text-lg">
                <Logo className="h-9 shrink-0" />
              </DrawerTitle>
              <DrawerDescription className="text-base">
                Miden is a privacy-preserving blockchain platform that enables
                secure and scalable transactions.
              </DrawerDescription>
            </DrawerHeader>
            <ul className="flex flex-col gap-2 pb-6 text-lg">
              <li>
                <NavLink
                  to="/"
                  prefetch="intent"
                  className="flex justify-between items-center px-3 text-muted-foreground aria-[current='page']:text-primary"
                >
                  Home
                  <ChevronRight />
                </NavLink>
              </li>
              {items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    to={item.href}
                    prefetch="intent"
                    className="flex justify-between items-center px-3 text-muted-foreground aria-[current='page']:text-primary"
                  >
                    {item.label}
                    <ChevronRight />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  );
}
