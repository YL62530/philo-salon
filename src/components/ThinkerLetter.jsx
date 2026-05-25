import { generateThinkerLetter } from "../utils/generateThinkerLetter";
import ThinkerAvatar from "./ThinkerAvatar";

export default function ThinkerLetter({
  report,
  thinkerId,
  analysisResult,
  userInput,
  selectedAnswers,
}) {
  const generated =
    thinkerId && analysisResult && userInput
      ? generateThinkerLetter({ thinkerId, analysisResult, userInput, selectedAnswers })
      : null;

  const letterTitle = generated?.title || report.letterTitle;
  const letterBody = generated?.body || report.letterBody;
  const thinkerName = letterTitle.replace("式回信", "");

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          思想家回信
        </h2>
      </div>

      <div className="relative p-8 md:p-10 rounded-xl bg-gradient-to-br from-parchment-100/90 via-parchment-50 to-stone-50/80 border border-parchment-300 shadow-sm overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none" />

        {/* Top decorative line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-caramel via-coffee to-caramel rounded-t-xl opacity-30" />

        {/* Thinker header with avatar */}
        <div className="relative flex items-center gap-4 mb-6 pb-4 border-b border-parchment-300/60">
          <ThinkerAvatar
            thinkerId={thinkerId}
            name={thinkerName}
            size="md"
          />
          <div>
            <h3 className="text-lg font-bold text-ink-dark font-serif">
              {letterTitle}
            </h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-ink-light">
              <span>致来访者</span>
              <span className="text-caramel">·</span>
              <span>关于你的金句</span>
            </div>
          </div>
        </div>

        <div className="relative space-y-4 text-ink leading-relaxed whitespace-pre-line">
          {letterBody}
        </div>

        {/* Bottom area with note and stamp */}
        <div className="relative mt-8 flex items-end justify-between">
          <div className="flex items-center gap-2 text-sm text-ink-light">
            <span className="w-6 h-px bg-caramel" />
            <span>此信仅为你提供一个继续追问的起点</span>
          </div>

          {/* Stamp */}
          <div className="stamp">
            <span className="text-center leading-tight">
              思想家<br />回信
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
