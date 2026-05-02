declare module "@audiencemd/validator" {
  export type AudienceMarkdownSection = {
    level: number;
    title: string;
    content: string;
    start: number;
    end: number;
  };

  export type AudienceMarkdownDocument = {
    raw: string;
    frontmatter: null | { raw: string; data: Record<string, unknown> };
    h1: null | string;
    sections: AudienceMarkdownSection[];
    body: string;
  };

  export function validateAudienceMarkdown(
    text: string,
    options?: { filePath?: string }
  ): {
    valid: boolean;
    errors: string[];
    warnings: string[];
    document: AudienceMarkdownDocument;
  };
}
