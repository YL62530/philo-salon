export default function ThinkerLetter({ report }) {
  const { letterTitle, letterBody } = report;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          思想家回信
        </h2>
      </div>

      <div className="relative p-8 md:p-10 rounded-xl bg-white/70 border border-parchment-300 shadow-sm">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-caramel via-coffee to-caramel rounded-t-xl opacity-30" />

        <div className="mb-6 pb-4 border-b border-parchment-300/60">
          <h3 className="text-lg font-bold text-ink-dark font-serif">
            {letterTitle}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-sm text-ink-light">
            <span>致来访者</span>
            <span className="text-caramel">·</span>
            <span>关于你的金句</span>
          </div>
        </div>

        <div className="space-y-4 text-ink leading-relaxed whitespace-pre-line">
          {letterBody}
        </div>

        <div className="mt-8 flex items-center gap-2 text-sm text-ink-light">
          <span className="w-6 h-px bg-caramel" />
          <span>此信仅为你提供一个继续追问的起点</span>
        </div>
      </div>
    </section>
  );
}
