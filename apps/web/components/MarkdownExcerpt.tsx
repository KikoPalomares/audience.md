import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownExcerptProps = {
  markdown: string;
};

const components: Components = {
  a({ children, ...props }) {
    return (
      <a className="font-medium underline decoration-stone-400 underline-offset-4 transition hover:decoration-stone-950" {...props}>
        {children}
      </a>
    );
  },
  blockquote({ children, ...props }) {
    return (
      <blockquote className="border-l-4 border-stone-300 pl-5 font-normal italic text-stone-700" {...props}>
        {children}
      </blockquote>
    );
  },
  code({ children, className, ...props }) {
    const isBlockCode = Boolean(className);
    return (
      <code
        className={
          isBlockCode
            ? `font-mono text-stone-100 ${className}`
            : "rounded bg-stone-950/5 px-1.5 py-0.5 font-mono text-[0.9em] font-medium text-stone-900 before:content-none after:content-none"
        }
        {...props}
      >
        {children}
      </code>
    );
  },
  pre({ children, ...props }) {
    return (
      <pre className="max-w-full overflow-x-auto rounded-2xl border border-stone-800/10 bg-stone-950 p-4 text-sm leading-6 shadow-sm sm:p-5" {...props}>
        {children}
      </pre>
    );
  },
  table({ children, ...props }) {
    return (
      <div className="my-8 max-w-full overflow-x-auto rounded-2xl border border-stone-900/10 bg-white/55 shadow-sm">
        <table className="my-0 min-w-full divide-y divide-stone-900/10" {...props}>
          {children}
        </table>
      </div>
    );
  },
  th({ children, ...props }) {
    return (
      <th className="bg-stone-950/5 px-4 py-3 text-left text-sm font-semibold text-stone-950" {...props}>
        {children}
      </th>
    );
  },
  td({ children, ...props }) {
    return (
      <td className="px-4 py-3 align-top text-sm leading-6 text-stone-700" {...props}>
        {children}
      </td>
    );
  }
};

export function MarkdownExcerpt({ markdown }: MarkdownExcerptProps) {
  return (
    <article className="prose prose-stone max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-h1:text-4xl prose-h1:tracking-tight prose-h2:mt-12 prose-h2:border-t prose-h2:border-stone-900/10 prose-h2:pt-8 prose-p:leading-8 prose-li:my-1 prose-li:leading-7 prose-ol:pl-6 prose-ul:pl-6 prose-strong:text-stone-950">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </article>
  );
}
