import { getTypeConfig } from "../data/contentTypes";

export default function OneMoreQuestionCard({
  report,
  analysisResult,
  generatedOneMoreQuestion,
}) {
  const oneMoreQuestion =
    generatedOneMoreQuestion ||
    (analysisResult
      ? getTypeConfig(analysisResult.primaryType).oneMoreQuestion
      : report.oneMoreQuestion);

  const thinkerName = report.letterTitle.replace("式回信", "式追问");

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-amber-50 via-parchment-100 to-stone-50 border-2 border-caramel/40 shadow-xl overflow-hidden">
        {/* Paperclip icon */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <div className="w-8 h-10 border-2 border-caramel/40 rounded-b-lg bg-parchment-200/80 shadow-sm flex items-end justify-center pb-1">
            <div className="w-1 h-4 bg-caramel/30 rounded-full" />
          </div>
        </div>

        {/* Dog-ear corner */}
        <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-parchment-300/60 to-transparent" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

        <div className="absolute -top-3 left-8 px-3 py-1 bg-coffee text-parchment-50 text-xs font-medium rounded-full z-10">
          再多问一句
        </div>

        <div className="flex items-start gap-4">
          <span className="text-4xl text-accent-gold/50 font-serif leading-none select-none mt-0.5">
            &ldquo;
          </span>
          <div>
            <p className="text-lg md:text-xl text-ink-dark font-medium leading-relaxed font-serif">
              {oneMoreQuestion}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-warm-brown">
              <span className="w-8 h-px bg-caramel" />
              <span>来自{thinkerName}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
