export default function GameProgress({
  hasSubmitted,
  hasUserSelectedThinker,
  currentRound,
  isDialogueComplete,
}) {
  const steps = [
    "递交金句",
    "思想家已入座",
    "第一轮追问",
    "第二轮追问",
    "问题正在长出来",
    "回信已写好",
    "创作建议",
  ];

  let activeIndex = 0;
  if (!hasSubmitted) {
    activeIndex = 0;
  } else if (isDialogueComplete) {
    activeIndex = 6;
  } else if (currentRound === 2) {
    activeIndex = 4;
  } else if (currentRound === 1) {
    activeIndex = 3;
  } else if (currentRound === 0) {
    activeIndex = hasUserSelectedThinker ? 2 : 1;
  }

  return (
    <section className="max-w-3xl mx-auto px-6 pt-8 pb-4 overflow-x-auto">
      <div className="relative">
        <div className="absolute top-[1.125rem] left-0 right-0 h-0.5 bg-parchment-200 rounded-full" />
        <div
          className="absolute top-[1.125rem] left-0 h-0.5 bg-gradient-to-r from-caramel to-coffee rounded-full transition-all duration-700"
          style={{
            width: `${(activeIndex / (steps.length - 1)) * 100}%`,
          }}
        />
        <div className="relative flex justify-between">
          {steps.map((label, idx) => {
            const isCompleted = idx < activeIndex;
            const isActive = idx === activeIndex;
            const isUpcoming = idx > activeIndex;

            return (
              <div
                key={idx}
                className="flex flex-col items-center gap-2"
                style={{ width: `${100 / steps.length}%` }}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-500 z-10 ${
                    isActive
                      ? "bg-coffee text-parchment-50 border-coffee scale-110 shadow-md"
                      : isCompleted
                      ? "bg-caramel text-parchment-50 border-caramel"
                      : "bg-parchment-50 text-ink-light border-parchment-300"
                  }`}
                >
                  {isCompleted ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    idx + 1
                  )}
                </div>
                <span
                  className={`text-[10px] md:text-xs font-medium text-center leading-tight transition-colors duration-300 ${
                    isActive
                      ? "text-coffee"
                      : isCompleted
                      ? "text-warm-brown"
                      : "text-ink-light/50"
                  }`}
                >
                  {label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
