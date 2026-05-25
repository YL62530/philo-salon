export default function OneMoreQuestionCard({ report }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-amber-50 via-parchment-100 to-stone-50 border-2 border-caramel/40 shadow-lg">
        <div className="absolute -top-3 left-8 px-3 py-1 bg-coffee text-parchment-50 text-xs font-medium rounded-full">
          再多问一句
        </div>

        <div className="flex items-start gap-4">
          <span className="text-4xl text-accent-gold/50 font-serif leading-none select-none">
            &ldquo;
          </span>
          <div>
            <p className="text-lg md:text-xl text-ink-dark font-medium leading-relaxed font-serif">
              {report.oneMoreQuestion}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-warm-brown">
              <span className="w-8 h-px bg-caramel" />
              <span>来自{report.letterTitle.replace("式回信", "式追问")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
