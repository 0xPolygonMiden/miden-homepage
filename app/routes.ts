import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    route("/testnet", "routes/testnet.tsx"),
    route("/resources", "routes/resources.tsx"),
    route("/resources/blog", "routes/blog/index.tsx"),
    route("/developers", "routes/developers.tsx"),
    route("/ecosystem", "routes/ecosystem.tsx"),
  ]),

  ...(await flatRoutes({
    rootDirectory: "content",
    ignoredRouteFiles: [
      "routes/layout.tsx",
      "routes/home.tsx",
      "routes/testnet.tsx",
      "routes/resources.tsx",
      "routes/blog/index.tsx",
      "routes/developers.tsx",
    ],
  })),
] satisfies RouteConfig;
