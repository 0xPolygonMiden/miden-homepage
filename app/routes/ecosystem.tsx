import { PageEcosystem } from "~/pages/exosystem";
import type { Route } from "./+types/ecosystem";

export type Item = (typeof items)[0];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ecosystem – Miden" }];
}

const items = [
  {
    label: "MidenPay",
    description:
      "A privacy-first, gas-efficient payment system for instant crypto transactions.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
  {
    label: "MidenPay",
    description:
      "A privacy-first, gas-efficient payment system for instant crypto transactions.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
  {
    label: "MidenPay",
    description:
      "A privacy-first, gas-efficient payment system for instant crypto transactions.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
  {
    label: "MidenPay",
    description:
      "A privacy-first, gas-efficient payment system for instant crypto transactions.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
  {
    label: "MidenPay",
    description:
      "A privacy-first, gas-efficient payment system for instant crypto transactions.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
  {
    label: "MidenPay",
    description:
      "A privacy-first, gas-efficient payment system for instant crypto transactions.",
    link: {
      href: "/",
      label: "Explorer",
    },
  },
];

export default function RouteEcosystem({}: Route.ComponentProps) {
  return <PageEcosystem items={items} />;
}
