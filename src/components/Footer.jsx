export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto px-6 py-12 mt-8 border-t border-parchment-300/60">
      <div className="text-center space-y-4">
        <p className="text-sm text-ink-light leading-relaxed max-w-xl mx-auto">
          PhiloSalon 不模拟思想家本人，也不生成伪语录。
          它只是把不同思想传统的问题意识，转化为面向当代社交媒体内容的追问机制。
        </p>
        <div className="flex items-center justify-center gap-3 text-xs text-ink-light/60">
          <span>PhiloSalon</span>
          <span>·</span>
          <span>思想家会客室</span>
          <span>·</span>
          <span>Phase 1</span>
        </div>
      </div>
    </footer>
  );
}
