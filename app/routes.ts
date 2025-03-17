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
    route("/developers", "routes/developers.tsx"),
    route("/ecosystem", "routes/ecosystem.tsx"),
    route("/resources", "routes/resources.tsx"),
    route("/resources/:category", "routes/overview.tsx"),
  ]),

  ...(await flatRoutes({ rootDirectory: "content" })),
] satisfies RouteConfig;
