import { BLOCKS, type Document } from "@contentful/rich-text-types";

import { extractNodeText } from "./extract-node-text";
import { slugify } from "./slugify";

export interface HeadingItem {
  id: string;
  text: string;
}

export function extractHeadings(doc: Document): HeadingItem[] {
  const counts = new Map<string, number>();
  const items: HeadingItem[] = [];

  for (const node of doc.content) {
    if (node.nodeType !== BLOCKS.HEADING_2) continue;
    const text = extractNodeText(node).trim();
    if (!text) continue;
    const base = slugify(text) || "section";
    const n = (counts.get(base) ?? 0) + 1;
    counts.set(base, n);
    const id = n === 1 ? base : `${base}-${n}`;
    items.push({ id, text });
  }

  return items;
}
