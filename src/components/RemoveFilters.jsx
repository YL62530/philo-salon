export default function RemoveFilters({ removeFilters }) {
  if (!removeFilters || removeFilters.length === 0) return null;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          <svg className="w-5 h-5 text-warm-rust" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          需要卸掉的滤镜
        </h2>
        <p className="text-ink-light text-sm">
          这些表达容易让内容重新滑回金句、人设或生活方式包装。
        </p>
      </div>

      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-stone-50/80 via-parchment-100 to-amber-50/40 border-2 border-warm-rust/20 shadow-sm relative overflow-hidden">
        {/* Editor strike decoration */}
        <div className="absolute top-3 right-4 text-xs text-warm-rust/30 font-serif tracking-widest select-none"
        >
          EDITOR'S STRIKE
        </div>
        <ul className="space-y-3">
          {removeFilters.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-ink text-sm leading-relaxed">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-warm-rust/15 text-warm-rust text-xs flex items-center justify-center mt-0.5">
                ×
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
