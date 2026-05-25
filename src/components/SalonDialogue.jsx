export default function SalonDialogue({
  hasSubmitted,
  thinkerData,
  currentRound,
  selectedAnswers,
  onSelectAnswer,
  isDialogueComplete,
}) {
  if (!hasSubmitted) {
    return (
      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="section-title mb-2 flex items-center gap-2">
            <span className="w-1 h-6 bg-caramel rounded-full" />
            会客室对话
          </h2>
        </div>
        <div className="card-parchment p-10 text-center">
          <p className="text-ink-light text-sm mb-2">会客室尚未点灯</p>
          <p className="text-ink text-base">
            递交一句金句后，思想家才会开始追问。
          </p>
        </div>
      </section>
    );
  }

  const dialogue = thinkerData?.dialogueScript || [];
  const thinkerName = thinkerData?.name || "";

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          会客室对话
        </h2>
        <p className="text-ink-light text-sm">
          {thinkerData?.tag} · {thinkerName}式追问
        </p>
      </div>

      <div className="relative pl-4 md:pl-8 border-l-2 border-caramel/30 space-y-10">
        {dialogue.map((round, roundIndex) => {
          const isVisible = roundIndex <= currentRound;
          const isAnswered = selectedAnswers[roundIndex] !== undefined;
          const isCurrent = roundIndex === currentRound && !isDialogueComplete;

          if (!isVisible) return null;

          return (
            <div key={roundIndex} className="relative">
              <div
                className={`absolute -left-[calc(1rem+2px)] md:-left-[calc(2rem+2px)] top-0 w-4 h-4 rounded-full border-4 ${
                  isAnswered
                    ? "bg-coffee border-parchment-50"
                    : "bg-caramel border-parchment-50"
                }`}
              />

              <div className="mb-4">
                <div className="inline-flex items-center gap-2 text-xs text-warm-brown font-medium mb-2">
                  <span className="px-2 py-0.5 rounded bg-parchment-200 border border-caramel/30">
                    Round {roundIndex + 1}
                  </span>
                  <span>{thinkerName}式追问</span>
                </div>
                <div className="card-parchment p-5 md:p-6 relative">
                  <span className="quote-mark absolute top-2 left-3">
                    &ldquo;
                  </span>
                  <p className="text-ink leading-relaxed pl-6">
                    {round.thinkerPrompt}
                  </p>
                </div>
              </div>

              {isAnswered ? (
                <div className="p-4 rounded-lg bg-coffee/5 border border-coffee/20">
                  <p className="text-sm text-ink-dark">
                    <span className="text-ink-light mr-2">你的回答：</span>
                    {round.options[selectedAnswers[roundIndex]]}
                  </p>
                </div>
              ) : isCurrent ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {round.options.map((opt, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => onSelectAnswer(roundIndex, optIndex)}
                      className="text-left p-4 rounded-lg border transition-all duration-200 bg-white/40 border-parchment-300/50 text-ink-light hover:border-caramel hover:bg-parchment-100"
                    >
                      <span className="text-sm">{opt}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {isDialogueComplete && (
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coffee/10 border border-coffee/20 text-coffee text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-coffee animate-pulse" />
            追问结束，生成思想家回信与创作建议……
          </div>
        </div>
      )}
    </section>
  );
}
