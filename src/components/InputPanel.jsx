import { sampleInput, contentGoals, expressionStyles } from "../data/examples";

export default function InputPanel({
  userInput,
  setUserInput,
  contentGoal,
  setContentGoal,
  tonePreference,
  setTonePreference,
  onSubmit,
  onFillExample,
  onClear,
  inputError,
}) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="card-parchment p-6 md:p-8">
        <h2 className="section-title mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          递交你的金句
        </h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-ink-light mb-2">
            粘贴一句哲学感文案、金句、标题或社交媒体笔记
          </label>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="例如：真正的自由，是一个人喝咖啡、读书、独处，不再向任何关系索取答案。"
            className="w-full h-32 p-4 rounded-lg bg-white/60 border border-parchment-300 text-ink placeholder:text-ink-light/50 resize-none focus:outline-none focus:ring-2 focus:ring-caramel/40 focus:border-caramel transition-all leading-relaxed"
          />
          {inputError && (
            <p className="mt-2 text-sm text-warm-rust">{inputError}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-ink-light mb-3">
              内容目标
            </label>
            <div className="flex flex-wrap gap-2">
              {contentGoals.map((g) => (
                <button
                  key={g.id}
                  onClick={() => setContentGoal(g.id)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                    contentGoal === g.id
                      ? "bg-coffee text-parchment-50 border-coffee"
                      : "bg-white/50 text-ink-light border-parchment-300 hover:border-caramel"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink-light mb-3">
              表达气质
            </label>
            <div className="flex flex-wrap gap-2">
              {expressionStyles.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setTonePreference(s.id)}
                  className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                    tonePreference === s.id
                      ? "bg-coffee text-parchment-50 border-coffee"
                      : "bg-white/50 text-ink-light border-parchment-300 hover:border-caramel"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button onClick={onSubmit} className="btn-primary">
            递交金句
          </button>
          <button onClick={onFillExample} className="btn-secondary">
            填入示例
          </button>
          <button
            onClick={onClear}
            className="px-4 py-3 rounded-lg text-ink-light hover:text-coffee transition-colors text-sm"
          >
            清空
          </button>
        </div>
      </div>
    </section>
  );
}
