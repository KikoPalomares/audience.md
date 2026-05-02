type MarkdownExcerptProps = {
  markdown: string;
};

export function MarkdownExcerpt({ markdown }: MarkdownExcerptProps) {
  const lines = markdown.split("\n");
  return (
    <article className="prose prose-stone max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-a:text-stone-950 prose-pre:bg-stone-950">
      {lines.map((line, index) => {
        const key = `${index}-${line}`;
        if (line.startsWith("# ")) return <h1 key={key}>{line.replace(/^# /, "")}</h1>;
        if (line.startsWith("## ")) return <h2 key={key}>{line.replace(/^## /, "")}</h2>;
        if (line.startsWith("### ")) return <h3 key={key}>{line.replace(/^### /, "")}</h3>;
        if (line.startsWith("- ")) return <p key={key} className="my-1 pl-4 before:mr-2 before:content-['•']">{line.replace(/^- /, "")}</p>;
        if (line.trim() === "") return <div key={key} className="h-2" />;
        if (line.startsWith("```")) return null;
        return <p key={key}>{line}</p>;
      })}
    </article>
  );
}
