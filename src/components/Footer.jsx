import { imageCredits } from "../data/imageCredits";

export default function Footer() {
  const hasCredits = Object.values(imageCredits).some(
    (c) => c.title || c.author || c.source
  );

  return (
    <footer className="max-w-3xl mx-auto px-6 py-12 mt-8 border-t border-parchment-300/60">
      <div className="text-center space-y-6">
        <div className="space-y-3 max-w-xl mx-auto">
          <p className="text-sm text-ink-light leading-relaxed">
            PhiloSalon 不复刻思想家本人，也不生成伪语录。它把不同思想传统的问题意识转化为互动追问机制，帮助用户把社交媒体哲学金句重新带回问题本身。
          </p>
          <p className="text-sm text-ink-light leading-relaxed">
            这个项目关注的不是「哲学内容是否正确」，而是它如何被金句化、生活方式化，以及如何重新发展成有主线的表达。
          </p>
        </div>

        {!hasCredits && (
          <p className="text-xs text-ink-light/40 leading-relaxed max-w-lg mx-auto">
            图片与肖像素材仅作为本地项目展示使用。正式发布前请确认每张图片的来源、作者与授权信息。
          </p>
        )}

        <div className="flex items-center justify-center gap-3 text-xs text-ink-light/60">
          <span>PhiloSalon</span>
          <span>·</span>
          <span>思想家会客室</span>
          <span>·</span>
          <span>Phase 6.5</span>
        </div>
      </div>
    </footer>
  );
}
