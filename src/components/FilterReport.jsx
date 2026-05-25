import { getTypeConfig, getTypeLabel } from "../data/contentTypes";

export default function FilterReport({ report, analysisResult }) {
  const typeConfig = analysisResult
    ? getTypeConfig(analysisResult.primaryType)
    : null;

  const scores = analysisResult?.scores || {};

  const metrics = [
    {
      label: "金句压缩度",
      value: scores.quoteification ?? report.metrics[0]?.value ?? 70,
    },
    {
      label: "生活方式包装度",
      value: scores.lifestylePackaging ?? report.metrics[1]?.value ?? 70,
    },
    {
      label: "人设浓度",
      value: scores.personaDensity ?? report.metrics[2]?.value ?? 70,
    },
    {
      label: "问题保留度",
      value: scores.questionRetention ?? report.metrics[3]?.value ?? 35,
    },
    {
      label: "哲学含氧量",
      value: scores.philosophicalOxygen ?? report.metrics[4]?.value ?? 40,
    },
    {
      label: "咖啡馆含量",
      value: scores.cafeContent ?? report.metrics[5]?.value ?? 70,
    },
  ];

  const filters = analysisResult
    ? [
        { emoji: "🎭", label: analysisResult.typeLabel },
        ...analysisResult.secondaryTypes.map((t) => ({
          emoji: "💡",
          label: getTypeLabel(t),
        })),
      ]
    : report.filters;

  const reportSummary = analysisResult
    ? `${analysisResult.shortDiagnosis}\n\n${analysisResult.hiddenProblem}`
    : report.reportSummary;

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          你的哲学滤镜报告
        </h2>
      </div>

      <div className="card-parchment p-6 md:p-8 space-y-6">
        {analysisResult && (
          <>
            <div>
              <h3 className="text-sm font-medium text-ink-light mb-2">
                内容类型识别
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-coffee/10 border border-coffee/20 text-coffee text-sm font-medium">
                  主要：{analysisResult.typeLabel}
                </span>
                {analysisResult.secondaryTypes.length > 0 && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/60 border border-parchment-300 text-ink-light text-sm">
                    相关：{analysisResult.secondaryTypes.map(getTypeLabel).join("、")}
                  </span>
                )}
              </div>
              {analysisResult.detectedKeywords.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-xs text-ink-light">命中关键词：</span>
                  {analysisResult.detectedKeywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs px-2 py-0.5 rounded bg-white/60 border border-parchment-300 text-ink-light"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 rounded-lg bg-white/50 border border-parchment-300/60">
              <p className="text-sm text-ink leading-relaxed mb-2">
                <span className="text-coffee font-medium">诊断：</span>
                {analysisResult.shortDiagnosis}
              </p>
              <p className="text-sm text-ink-light leading-relaxed">
                <span className="text-coffee font-medium">被遮住的问题：</span>
                {analysisResult.hiddenProblem}
              </p>
            </div>
          </>
        )}

        <div>
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

        <div className="space-y-4">
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

        {!analysisResult && (
          <div className="p-4 rounded-lg bg-white/50 border border-parchment-300/60">
            <p className="text-ink-light text-sm leading-relaxed">
              {reportSummary}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
