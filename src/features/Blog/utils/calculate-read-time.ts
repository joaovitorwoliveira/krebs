import type { Document, Node } from "@contentful/rich-text-types";

import type { BlogPostFAQ } from "../types";

const CHARS_PER_MINUTE = 1000;

function extractText(node: Node | Document): string {
  if ("value" in node && typeof node.value === "string") {
    return node.value;
  }
  if ("content" in node && Array.isArray(node.content)) {
    return node.content.map(extractText).join(" ");
  }
  return "";
}

export function calculateReadTime(
  content?: Document,
  faqs?: BlogPostFAQ[],
  resume?: string,
): number {
  let chars = 0;
  if (content) chars += extractText(content).length;
  if (resume) chars += resume.length;
  if (faqs) {
    for (const faq of faqs) {
      chars += faq.question.length + faq.answer.length;
    }
  }
  return Math.max(1, Math.ceil(chars / CHARS_PER_MINUTE));
}
