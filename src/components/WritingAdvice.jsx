export default function WritingAdvice({ report }) {
  const { writingAdvice } = report;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          创作建议
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card-parchment p-5">
          <h3 className="text-sm font-semibold text-warm-brown mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-caramel/20 text-coffee text-xs flex items-center justify-center">
              起
            </span>
            开头建议
          </h3>
          <ul className="space-y-2">
            {writingAdvice.opening.map((item, idx) => (
              <li key={idx} className="text-sm text-ink-light leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-parchment p-5">
          <h3 className="text-sm font-semibold text-warm-brown mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-caramel/20 text-coffee text-xs flex items-center justify-center">
              承
            </span>
            中段建议
          </h3>
          <ul className="space-y-2">
            {writingAdvice.middle.map((item, idx) => (
              <li key={idx} className="text-sm text-ink-light leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card-parchment p-5">
          <h3 className="text-sm font-semibold text-warm-brown mb-3 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-caramel/20 text-coffee text-xs flex items-center justify-center">
              合
            </span>
            结尾建议
          </h3>
          <ul className="space-y-2">
            {writingAdvice.ending.map((item, idx) => (
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
