import { type Route } from ".react-router/types/app/routes/+types/ecosystem";
import { PageEcosystem } from "~/pages/ecosystem";

export type Item = (typeof items)[0];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ecosystem – Miden" }];
}

const items = [
  {
    label: "Keom",
    link: "https://www.keom.io/",
  },
  {
    label: "Composability Labs",
    link: "https://github.com/compolabs",
  },
  {
    label: "Arcane Finance",
    link: "https://www.arcane.finance/",
  },
  {
    label: "Pragma",
    link: "https://www.pragma.build/",
  },
];

export default function RouteEcosystem({}: Route.ComponentProps) {
  return <PageEcosystem items={items} />;
}
