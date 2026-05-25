export default function FilterReport({ report }) {
  const { filters, metrics, reportSummary } = report;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          你的哲学滤镜报告
        </h2>
      </div>

      <div className="card-parchment p-6 md:p-8">
        <div className="mb-6">
          <h3 className="text-sm font-medium text-ink-light mb-3">主要滤镜</h3>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 border border-parchment-300 text-ink text-sm"
              >
                <span>{f.emoji}</span>
                <span>{f.label}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-ink-light">{m.label}</span>
                <span className="font-medium text-coffee">{m.value}%</span>
              </div>
              <div className="h-2 rounded-full bg-parchment-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-caramel to-coffee transition-all duration-1000"
                  style={{ width: `${m.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-white/50 border border-parchment-300/60">
          <p className="text-ink-light text-sm leading-relaxed">{reportSummary}</p>
        </div>
      </div>
    </section>
  );
}
