const examples = [
  {
    id: 1,
    title: "独处美学",
    text: "真正的自由，是一个人喝咖啡、读书、独处。",
    typeLabel: "独处美学滤镜",
  },
  {
    id: 2,
    title: "松弛感哲学",
    text: "松弛感，是普通人最高级的精神状态。",
    typeLabel: "松弛感哲学滤镜",
  },
  {
    id: 3,
    title: "清醒人设",
    text: "清醒的人都不再解释自己。",
    typeLabel: "清醒人设滤镜",
  },
  {
    id: 4,
    title: "反关系自由",
    text: "远离所有消耗你的人，才是真正的自爱。",
    typeLabel: "反关系自由滤镜",
  },
  {
    id: 5,
    title: "金句复制",
    text: "人生最高级的活法，就是和自己和解。",
    typeLabel: "金句复制滤镜",
  },
  {
    id: 6,
    title: "公共讨论退场",
    text: "我不想再争论了，过好自己就够了。",
    typeLabel: "公共讨论退场滤镜",
  },
];

export default function ExampleLibrary({ onSelectExample }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <div className="mb-8">
        <h2 className="section-title mb-2 flex items-center gap-2">
          <span className="w-1 h-6 bg-caramel rounded-full" />
          待拆金句卡片
        </h2>
        <p className="text-ink-light text-sm">
          点击一张卡片，将它递入会客室。
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {examples.map((ex) => (
          <button
            key={ex.id}
            onClick={() => onSelectExample(ex.text)}
            className="text-left p-5 rounded-xl bg-gradient-to-br from-parchment-100 to-stone-50/80 border-2 border-parchment-300/60 hover:border-caramel/60 hover:shadow-md transition-all duration-200 hover:scale-[1.02] group min-h-[44px]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-caramel/15 text-coffee border border-caramel/20">
                {ex.title}
              </span>
              <svg
                className="w-4 h-4 text-parchment-400 group-hover:text-caramel transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </div>
            <p className="text-sm text-ink leading-relaxed line-clamp-3 break-words">
              「{ex.text}」
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
