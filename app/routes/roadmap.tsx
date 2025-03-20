import { type Route } from ".react-router/types/app/routes/+types/developers";
import { PageRoadmap } from "~/pages/roadmap";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Roadmap – Miden" }];
}

export default function RouteRoadmap({}: Route.ComponentProps) {
  return <PageRoadmap />;
}
