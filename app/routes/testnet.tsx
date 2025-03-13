import { PageTestnet } from "~/pages/testnet";
import type { Route } from "./+types/testnet";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Testnet – Miden" }];
}

export default function RouteTestnet({}: Route.ComponentProps) {
  return <PageTestnet />;
}
