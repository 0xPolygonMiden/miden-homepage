import {
  Logo1kx,
  LogoA16zcrypto,
  LogoDelta,
  LogoFinality,
  LogoHackVC,
  LogoMHVentures,
  LogoP2Ventures,
  LogoSymbolicCapital,
} from "~/components/logo";
import { PageHome, type Investor } from "~/pages/homepage";

export function meta() {
  return [{ title: "Miden" }];
}

const items: Investor[] = [
  {
    icon: <LogoA16zcrypto />,
    label: "A16zcrypto",
    size: "large",
  },
  {
    icon: <Logo1kx />,
    label: "1k(x)",
    size: "large",
  },
  {
    icon: <LogoHackVC />,
    label: "HackVC",
    size: "large",
  },
  {
    icon: <LogoFinality />,
    label: "Finality",
    size: "large",
  },
  {
    icon: <LogoSymbolicCapital />,
    label: "Symbolic Capital",
    size: "small",
  },
  {
    icon: <LogoDelta />,
    label: "Delta",
    size: "small",
  },
  {
    icon: <LogoMHVentures />,
    label: "MH Ventures",
    size: "small",
  },
  {
    icon: <LogoP2Ventures />,
    label: "P2 Ventures",
    size: "small",
  },
];

export default function RouteHome() {
  return <PageHome items={items} />;
}
