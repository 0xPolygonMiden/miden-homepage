import {
  LogoArcane,
  LogoComposabilityLabs,
  LogoPragma,
  LogoLinum,
  LogoLeo,
} from "~/components/logo";
import { PageEcosystem } from "~/pages/ecosystem";

export type Item = (typeof items)[0];

export function meta() {
  return [{ title: "Ecosystem – Miden" }];
}

const items = [
  {
    icon: <LogoPragma className="size-6" />,
    label: "Pragma",
    description: "High-frequency Oracle",
    link: "https://github.com/astraly-labs/pragma-miden",
  },
  {
    icon: <LogoArcane className="size-6" />,
    label: "Arcane Finance",
    description: "Compliant On-Chain Mixer",
    link: "https://github.com/arcane-finance-defi/miden-bridge-mono",
  },
  {
    icon: <LogoComposabilityLabs className="size-6" />,
    label: "Composability Labs",
    description: "Compliant Dark Pool as extension of their perp DEX on Aptos",
    link: "https://github.com/compolabs/miden-dark-pool/tree/dev/tcp",
  },
  {
    icon: <LogoLinum className="size-6" />,
    label: "Linum Labs",
    description: "Compliant Dark Pool using MPC",
    link: "https://www.linumlabs.com/",
  },
  {
    icon: <LogoLeo className="size-6" />,
    label: "Leo Wallet",
    description: "Wallet and WebClient SDK",
    link: "https://www.leo.app/miden",
  },
];

export default function RouteEcosystem() {
  return <PageEcosystem items={items} />;
}
