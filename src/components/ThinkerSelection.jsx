import { thinkerGroups } from "../data/thinkers";
import { getThinkerNames } from "../data/contentTypes";
import ThinkerAvatar from "./ThinkerAvatar";

const roomIcons = {
  classical: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M6 20V10l6-4 6 4v10M9 20v-6h6v6" />
    </svg>
  ),
  chinese: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  modern: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
    </svg>
  ),
  ethics: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
  power: (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
};

const roomClasses = {
  classical: "room-classical",
  chinese: "room-chinese",
  modern: "room-modern",
  ethics: "room-ethics",
  power: "room-power",
};

const roomNumbers = {
  classical: "Room 01",
  chinese: "Room 02",
  modern: "Room 03",
  ethics: "Room 04",
  power: "Room 05",
};

export default function ThinkerSelection({
  selectedThinker,
  onSelectThinker,
  analysisResult,
}) {
  const recommendedIds = analysisResult?.recommendedThinkers || [];

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

      {analysisResult && recommendedIds.length > 0 && (
        <div className="mb-6 p-4 rounded-lg bg-amber-50/60 border border-caramel/30">
          <p className="text-sm text-warm-brown">
            根据这句话，系统建议你先听听：
            <span className="font-medium text-coffee ml-1">
              {getThinkerNames(recommendedIds)}
            </span>
            的追问。
          </p>
        </div>
      )}

      <div className="space-y-10">
        {thinkerGroups.map((group, groupIdx) => (
          <div
            key={group.id}
            className={`p-5 md:p-6 rounded-2xl border border-parchment-300/40 ${roomClasses[group.id] || ""}`}
          >
            <h3 className="text-sm font-semibold text-warm-brown uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-caramel" />
              {roomIcons[group.id]}
              <span>{group.title}</span>
              <span className="text-[10px] text-ink-light/40 font-normal normal-case tracking-normal ml-1">
                {roomNumbers[group.id]}
              </span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.thinkers.map((t) => {
                const isActive = selectedThinker === t.id;
                const isRecommended = recommendedIds.includes(t.id);
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
                    <div className="flex items-start gap-3 mb-3">
                      <ThinkerAvatar
                        thinkerId={t.id}
                        name={t.name}
                        size="sm"
                        isActive={isActive}
                        className="flex-shrink-0 mt-0.5"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <span className="text-lg font-bold text-ink-dark truncate">
                            {t.name}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          {isRecommended && (
                            <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-amber-100 text-amber-800 border border-amber-200">
                              推荐追问
                            </span>
                          )}
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium ${t.tagColor}`}
                          >
                            {t.tag}
                          </span>
                        </div>
                      </div>
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
