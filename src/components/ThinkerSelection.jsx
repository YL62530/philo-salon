import { thinkerGroups } from "../data/thinkers";

export default function ThinkerSelection({ selectedThinker, onSelectThinker }) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          选择一位思想家
        </h2>
        <p className="text-ink-light text-sm">
          我们不模拟思想家本人，而是借用其问题意识来追问你的表达。
        </p>
      </div>

      <div className="space-y-10">
        {thinkerGroups.map((group) => (
          <div key={group.id}>
            <h3 className="text-sm font-semibold text-warm-brown uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-caramel" />
              {group.title}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.thinkers.map((t) => {
                const isActive = selectedThinker === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => onSelectThinker(t.id)}
                    className={`text-left p-5 rounded-xl border-2 transition-all duration-200 bg-gradient-to-br ${t.accentClass} ${
                      isActive
                        ? "border-coffee shadow-md scale-[1.02]"
                        : "border-transparent hover:border-caramel/40 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-lg font-bold text-ink-dark">
                        {t.name}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${t.tagColor}`}
                      >
                        {t.tag}
                      </span>
                    </div>
                    <p className="text-sm text-ink mb-3 leading-relaxed">
                      <span className="text-coffee font-medium">追问：</span>
                      {t.questionDirection}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.suitableFor.map((fit) => (
                        <span
                          key={fit}
                          className="text-xs px-2 py-0.5 rounded bg-white/60 text-ink-light border border-parchment-300/50"
                        >
                          {fit}
                        </span>
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
