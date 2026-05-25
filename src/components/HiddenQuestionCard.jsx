import { getTypeConfig } from "../data/contentTypes";

export default function HiddenQuestionCard({ report, analysisResult }) {
  const hiddenQuestions = analysisResult
    ? getTypeConfig(analysisResult.primaryType).hiddenQuestions
    : report.hiddenQuestions;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          被遮住的问题
        </h2>
        <p className="text-ink-light text-sm">
          你的金句在传播中，悄悄掩盖了这些真正值得追问的点。
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {hiddenQuestions.map((q, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-white/50 border border-parchment-300/60 hover:border-caramel/40 transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-caramel text-lg font-serif leading-none mt-0.5">
                ?
              </span>
              <p className="text-ink text-sm leading-relaxed">{q}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
