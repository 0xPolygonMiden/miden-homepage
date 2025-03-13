import { PageDevelopers } from "~/pages/developers";
import type { Route } from "./+types/testnet";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Testnet – Miden" }];
}

export default function Home({}: Route.ComponentProps) {
  return <PageDevelopers />;
}
