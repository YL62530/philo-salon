export default function SpreadableSuggestions({
  report,
  generatedSpreadableSuggestions,
}) {
  const spreadable =
    generatedSpreadableSuggestions || report.spreadableSuggestions;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          传播表达建议
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="card-parchment p-5">
          <h3 className="text-sm font-semibold text-warm-brown mb-3">
            标题方向
          </h3>
          <ul className="space-y-3">
            {spreadable.titles.map((t, idx) => (
              <li
                key={idx}
                className="text-sm text-ink leading-relaxed p-3 rounded-lg bg-white/50 border border-parchment-300/50 hover:border-caramel/40 transition-colors cursor-default"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-parchment p-5">
          <h3 className="text-sm font-semibold text-warm-brown mb-3">
            封面句方向
          </h3>
          <ul className="space-y-3">
            {spreadable.hooks.map((h, idx) => (
              <li
                key={idx}
                className="text-sm text-ink leading-relaxed p-3 rounded-lg bg-white/50 border border-parchment-300/50 hover:border-caramel/40 transition-colors cursor-default"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
