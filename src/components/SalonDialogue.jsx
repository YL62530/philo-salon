import { useEffect, useState } from "react";
import { generateDialogue } from "../utils/generateDialogue";
import ThinkerAvatar from "./ThinkerAvatar";

export default function SalonDialogue({
  hasSubmitted,
  thinkerData,
  currentRound,
  selectedAnswers,
  onSelectAnswer,
  isDialogueComplete,
  analysisResult,
  userInput,
}) {
  const [visibleRounds, setVisibleRounds] = useState(new Set());

  useEffect(() => {
    if (!hasSubmitted) {
      setVisibleRounds(new Set());
      return;
    }
    const nextVisible = new Set();
    for (let i = 0; i <= currentRound; i++) {
      nextVisible.add(i);
    }
    const timer = setTimeout(() => {
      setVisibleRounds(nextVisible);
    }, 50);
    return () => clearTimeout(timer);
  }, [hasSubmitted, currentRound]);

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

  const dialogue =
    analysisResult && userInput
      ? generateDialogue({
          thinkerId: thinkerData?.id,
          analysisResult,
          userInput,
        })
      : thinkerData?.dialogueScript || [];
  const thinkerName = thinkerData?.name || "";

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      {/* Thinker profile header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="hidden sm:block">
          <ThinkerAvatar
            thinkerId={thinkerData?.id}
            name={thinkerName}
            size="lg"
          />
        </div>
        <div>
          <h2 className="section-title mb-1 flex items-center gap-2">
            <span className="w-1 h-6 bg-caramel rounded-full" />
            会客室对话
          </h2>
          <p className="text-ink-light text-sm">
            {thinkerData?.tag} · {thinkerName}式追问
          </p>
        </div>
      </div>

      <div className="relative pl-4 md:pl-8 border-l-2 border-caramel/30 space-y-10">
        {dialogue.map((round, roundIndex) => {
          const isVisible = roundIndex <= currentRound;
          const isAnswered = selectedAnswers[roundIndex] !== undefined;
          const isCurrent = roundIndex === currentRound && !isDialogueComplete;
          const isNewlyVisible = visibleRounds.has(roundIndex);

          if (!isVisible) return null;

          return (
            <div
              key={roundIndex}
              className={`relative transition-all duration-500 ${
                isNewlyVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
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
                {/* Letter paper style for thinker prompt */}
                <div className="card-manuscript p-5 md:p-6 relative border-l-4 border-l-caramel/40">
                  <span className="quote-mark absolute top-2 left-3">
                    &ldquo;
                  </span>
                  <p className="text-ink leading-relaxed pl-6 whitespace-pre-line">
                    {round.thinkerPrompt}
                  </p>
                  {/* Small decorative line at bottom-right like letter signature */}
                  <div className="mt-4 flex justify-end">
                    <span className="text-xs text-ink-light/30 italic font-serif">
                      — {thinkerName}
                    </span>
                  </div>
                </div>
              </div>

              {isAnswered ? (
                <div className="p-4 rounded-xl bg-white/60 border border-parchment-300/60 ml-4 md:ml-8 relative">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-parchment-200 rounded-full flex items-center justify-center border border-parchment-300">
                    <svg className="w-2.5 h-2.5 text-ink-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-ink-dark">
                    <span className="text-ink-light mr-2">你的回答：</span>
                    {round.options[selectedAnswers[roundIndex]]}
                  </p>
                </div>
              ) : isCurrent ? (
                <div className="grid sm:grid-cols-2 gap-3 ml-0 md:ml-4">
                  {round.options.map((opt, optIndex) => (
                    <button
                      key={optIndex}
                      onClick={() => onSelectAnswer(roundIndex, optIndex)}
                      className="text-left p-4 rounded-xl border transition-all duration-200 bg-parchment-100/80 border-parchment-300/70 text-ink-light hover:border-caramel hover:bg-white hover:shadow-md break-words min-h-[44px] relative folded-corner"
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
        <div className="mt-10 text-center transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-amber-50 via-parchment-100 to-stone-50 border-2 border-caramel/30 shadow-sm max-w-lg">
            <div className="flex items-center gap-2 text-coffee">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium">追问结束</span>
            </div>
            <p className="text-ink text-sm leading-relaxed">
              你的金句没有被否定，只是被问深了一层。
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
