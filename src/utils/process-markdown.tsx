import MarkdownIt from "markdown-it";

export function preprocessMarkdown(content: string): string {
  return content
    .replace(/\r\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/-\s*\*\*/g, "- **")
    .replace(/\*\*([^\s])/g, "** $1")
    .replace(/(#+)([^\s#])/g, "$1 $2")
    .replace(/[ \t]+$/gm, "")
    .replace(/---\s*---/g, "---")
    .replace(/&nbsp;/g, " ")
    .replace(/&mdash;/g, "—");
}

export const md = new MarkdownIt();
