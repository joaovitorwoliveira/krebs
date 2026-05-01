import type { Block, Inline, Text } from "@contentful/rich-text-types";

type Node = Block | Inline | Text;

export function extractNodeText(node: Node): string {
  if (node.nodeType === "text") return node.value;
  if (!("content" in node) || !node.content) return "";
  return node.content.map((child) => extractNodeText(child as Node)).join("");
}
