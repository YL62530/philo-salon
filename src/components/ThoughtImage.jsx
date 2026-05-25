import { useState, useEffect } from "react";

export default function ThoughtImage({
  src,
  alt,
  variant = "inline",
  className = "",
}) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    const img = new Image();
    img.onload = () => setStatus("loaded");
    img.onerror = () => setStatus("error");
    img.src = src;
  }, [src]);

  const variantClasses = {
    hero: "w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg",
    card: "w-full h-48 object-cover rounded-xl shadow-md",
    texture: "w-full h-full object-cover opacity-20",
    portrait: "w-full h-full object-cover",
    inline: "w-16 h-16 object-cover rounded-lg shadow-sm",
  };

  const filterClass =
    variant === "texture"
      ? ""
      : "sepia-[0.12] brightness-[1.02] contrast-[0.98]";

  const hoverClass =
    variant === "texture"
      ? ""
      : "transition-all duration-500 hover:sepia-0 hover:brightness-100 hover:contrast-100 hover:scale-[1.02]";

  if (status === "error" || status === "loading") {
    const isPortrait = variant === "portrait";
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-parchment-200 to-parchment-300 border-2 border-dashed border-caramel/30 text-ink-light/40 ${
          isPortrait ? "rounded-t-full rounded-b-lg" : "rounded-xl"
        } ${variant === "hero" ? "w-full h-64 md:h-80" : ""} ${
          variant === "card" ? "w-full h-48" : ""
        } ${variant === "inline" ? "w-16 h-16" : ""} ${className}`}
      >
        <span className="text-xs text-center px-2">
          {status === "loading" ? "..." : "图片待补充"}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${variantClasses[variant] || variantClasses.inline} ${filterClass} ${hoverClass} ${className}`}
      loading="lazy"
    />
  );
}
