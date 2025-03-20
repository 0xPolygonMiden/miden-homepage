import { type Route } from ".react-router/types/app/routes/+types/ecosystem";
import { PageEcosystem } from "~/pages/ecosystem";

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
