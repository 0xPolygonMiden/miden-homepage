import { valueToEstree } from "estree-util-value-to-estree";
import  { type Root } from "mdast";
import { toString } from "mdast-util-to-string";
import  { type Plugin } from "unified";
import { visit } from "unist-util-visit";

export interface Heading {
  text: string;
  id: string;
}

const rehypeExtractHeadings: Plugin<[{}?], Root> = () => {
  return (tree: Root) => {
    const headings: Heading[] = [];

    visit(
      tree,
      "element",
      function (node: { properties: { id: string }; tagName: string }) {
        if (
          node.tagName === "h1" ||
          node.tagName === "h2" ||
          node.tagName === "h3" ||
          node.tagName === "h4" ||
          node.tagName === "h5" ||
          node.tagName === "h6"
        ) {
          const text = toString(node);
          const id = node.properties.id;

          headings.push({ text, id });
        }
      }
    );

    tree.children.unshift({
      type: "mdxjsEsm",
      value: "",
      data: {
        estree: {
          type: "Program",
          sourceType: "module",
          body: [
            {
              type: "ExportNamedDeclaration",
              declaration: {
                type: "VariableDeclaration",
                kind: "const",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: { type: "Identifier", name: "headings" },
                    init: valueToEstree(headings),
                  },
                ],
              },
              specifiers: [],
              source: null,
            },
          ],
        },
      },
    } as any);

    return tree;
  };
};

export default rehypeExtractHeadings;
