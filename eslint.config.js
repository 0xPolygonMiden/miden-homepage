import { default as defaultConfig } from "@epic-web/config/eslint";
import reactHooks from "eslint-plugin-react-hooks";

/** @type {import("eslint").Linter.Config} */
export default [
  ...defaultConfig,
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    ignores: [".react-router/*", ".wrangler/*", "build/*", "node_modules/*"],
  },
];
