export default function SwapThinkerButton({ onSwapThinker }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          onClick={onSwapThinker}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-coffee text-parchment-50 font-medium text-base transition-all duration-200 hover:bg-warm-brick shadow-sm hover:shadow-md min-h-[44px]"
        >
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
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
          换一位思想家继续追问
        </button>
      </div>
    </section>
  );
}
