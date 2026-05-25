export default function PitfallChecklist({ report }) {
  const { pitfalls } = report;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          避坑清单
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-red-50/40 border border-red-200/50">
          <h3 className="text-sm font-semibold text-red-800 mb-3 flex items-center gap-2">
            <span className="text-base">×</span>
            不要这样写
          </h3>
          <ul className="space-y-2">
            {pitfalls.avoid.map((item, idx) => (
              <li key={idx} className="text-sm text-ink-light leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-5 rounded-xl bg-emerald-50/40 border border-emerald-200/50">
          <h3 className="text-sm font-semibold text-emerald-800 mb-3 flex items-center gap-2">
            <span className="text-base">✓</span>
            可以这样写
          </h3>
          <ul className="space-y-2">
            {pitfalls.try.map((item, idx) => (
              <li key={idx} className="text-sm text-ink-light leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
