type CodeBlockProps = {
  code: string;
  label?: string;
};

export function CodeBlock({ code, label }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-stone-800/10 bg-stone-950 shadow-2xl shadow-stone-950/10">
      {label ? (
        <div className="border-b border-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-stone-400">
          {label}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-5 text-sm leading-6 text-stone-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
