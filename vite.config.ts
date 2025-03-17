import mdx from "@mdx-js/rollup";
import { reactRouter } from "@react-router/dev/vite";
import { cloudflareDevProxy } from "@react-router/dev/vite/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import remarkInjectHeadings from "./app/lib/rehype-extract-headings";

export default defineConfig(({ isSsrBuild }) => ({
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: isSsrBuild
      ? {
        input: "./workers/app.ts",
      }
      : undefined,
  },
  plugins: [
    cloudflareDevProxy({
      getLoadContext({ context }) {
        return { cloudflare: context.cloudflare };
      },
    }),
    mdx({
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, remarkInjectHeadings],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react",
    }),
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
  ],
}));
