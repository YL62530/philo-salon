export default function Header({ onEnter, onExample }) {
  return (
    <header className="relative w-full overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-parchment-200/80 border border-caramel/30 text-warm-brown text-sm mb-8">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-caramel animate-pulse" />
          互动式哲学对话游戏
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-ink-dark tracking-tight mb-3 font-serif">
          PhiloSalon
        </h1>
        <p className="text-xl md:text-2xl text-coffee font-medium mb-4 tracking-widest">
          思想家会客室
        </p>

        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-8 bg-caramel/50" />
          <p className="text-base md:text-lg text-warm-brown italic font-serif">
            把金句交给思想家，让问题重新长出来
          </p>
          <span className="h-px w-8 bg-caramel/50" />
        </div>

        <p className="text-ink-light leading-relaxed max-w-xl mx-auto mb-10 text-base">
          输入一句哲学感文案，选择一位思想家，让他/她的问题意识帮你拆开这句话：
          <br className="hidden md:block" />
          它为什么动人，它遮住了什么问题，它还能如何发展成更有主线的表达。
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={onEnter} className="btn-primary text-base px-8 py-3.5">
            进入会客室
          </button>
          <button onClick={onExample} className="btn-secondary text-base px-8 py-3.5">
            查看示例
          </button>
        </div>
      </div>
    </header>
  );
}
