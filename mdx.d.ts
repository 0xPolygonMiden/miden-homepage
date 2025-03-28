declare module "*.mdx" {
  const MDXContent: (props: any) => ReactElement;
  export const frontmatter: {
    title: string;
    author: string;
    featured?: boolean;
  };
  export default MDXContent;
}

declare const frontmatter: {
  title: string;
  author: string;
  featured?: boolean;
};
