import { type Route } from ".react-router/types/app/routes/+types/ecosystem";
import {
  LogoArcane,
  LogoComposabilityLabs,
  LogoKeom,
  LogoPragma,
} from "~/components/logo";
import { PageEcosystem } from "~/pages/ecosystem";

export type Item = (typeof items)[0];

export function meta({}: Route.MetaArgs) {
  return [{ title: "Ecosystem – Miden" }];
}

const items = [
  {
    icon: <LogoKeom className="size-6" />,
    label: "Keom",
    description: "Efficient Private Order Book",
    link: "https://www.keom.io/",
  },
  {
    icon: <LogoComposabilityLabs className="size-6" />,
    label: "Composability Labs",
    description: "Compliant Dark Pool",
    link: "https://github.com/compolabs",
  },
  {
    icon: <LogoPragma className="size-6" />,
    label: "Pragma",
    description: "High-frequency Oracle",
    link: "https://www.pragma.build/",
  },
  {
    icon: <LogoArcane className="size-6" />,
    label: "Arcane Finance",
    description: "Compliant On-Chain Mixer",
    link: "https://www.arcane.finance/",
  },
];

export default function RouteEcosystem({}: Route.ComponentProps) {
  return <PageEcosystem items={items} />;
}
