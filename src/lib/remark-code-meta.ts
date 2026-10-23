import type { Code, Root } from "mdast";

type Parent = { children?: unknown[] };

// Copy key="value" pairs from a code fence's meta string onto the rendered
// <code> as data attributes, e.g. ```ts title="a.ts" becomes data-title="a.ts"
export function remarkCodeMeta() {
  return (tree: Root) => {
    const visit = (node: Parent & { type?: string }) => {
      if (node.type === "code") {
        const code = node as unknown as Code;
        const properties: Record<string, string> = {};
        const pairs = Array.from(
          (code.meta ?? "").matchAll(/(\w+)=("(?:[^"\\]|\\.)*")/g),
        );
        for (const [, key, value] of pairs) {
          properties[`data-${key}`] = JSON.parse(value);
        }
        code.data = { ...code.data, hProperties: properties };
      }
      node.children?.forEach((child) => visit(child as Parent));
    };
    visit(tree);
  };
}
