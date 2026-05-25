import { getTypeConfig } from "../data/contentTypes";

export default function CreativeThread({
  report,
  analysisResult,
  generatedCoreQuestion,
  generatedCreativeThread,
}) {
  const typeThread = analysisResult
    ? getTypeConfig(analysisResult.primaryType).creativeThread
    : null;

  const fallbackThread = typeThread || report.creativeThread;

  const creativeThread = generatedCreativeThread || fallbackThread;

  const coreQuestion = generatedCoreQuestion || creativeThread.coreQuestion;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          创作主线
        </h2>
      </div>

      <div className="card-manuscript p-6 md:p-8 space-y-8 relative overflow-hidden">
        {/* Subtle manuscript watermark */}
        <div className="absolute top-4 right-4 text-[8rem] text-caramel/[0.03] font-serif leading-none select-none pointer-events-none"
        >
          ✎
        </div>

        <div>
          <h3 className="text-sm font-medium text-warm-brown mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
            核心问题
          </h3>
          <p className="text-lg text-ink-dark font-medium leading-relaxed font-serif pl-4 border-l-2 border-caramel/40">
            {coreQuestion}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-warm-brown mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
            核心概念
          </h3>
          <div className="flex flex-wrap gap-2 pl-4">
            {creativeThread.coreConcepts.map((c) => (
              <span
                key={c}
                className="px-3 py-1 rounded-full bg-white/70 border border-parchment-300 text-ink text-sm shadow-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-warm-brown mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
            推进路径
          </h3>
          <ol className="relative pl-4 space-y-4">
            {/* Connecting dotted line */}
            <div className="absolute left-[calc(0.75rem+1px)] top-3 bottom-3 w-px border-l border-dashed border-caramel/30" />
            {creativeThread.path.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-ink text-sm leading-relaxed relative">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-coffee text-parchment-50 text-xs font-medium flex items-center justify-center mt-0.5 z-10">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="text-sm font-medium text-warm-brown mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
            不要偏离
          </h3>
          <ul className="space-y-2 pl-4">
            {creativeThread.donts.map((d, idx) => (
              <li key={idx} className="flex items-start gap-2 text-ink-light text-sm">
                <span className="text-warm-rust mt-0.5">×</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
