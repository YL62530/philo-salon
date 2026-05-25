import ThoughtImage from "./ThoughtImage";
import { getThinkerPortraitPath } from "../utils/imagePath";

function getInitial(name) {
  if (!name) return "?";
  const firstChar = name.charAt(0);
  return firstChar;
}

export default function ThinkerAvatar({
  thinkerId,
  name,
  size = "md",
  isActive = false,
  className = "",
}) {
  const src = thinkerId ? getThinkerPortraitPath(thinkerId) : null;

  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-lg",
    lg: "w-20 h-20 text-2xl",
  };

  const activeRing = isActive
    ? "ring-2 ring-caramel ring-offset-2 ring-offset-parchment-50 shadow-lg"
    : "ring-1 ring-warm-brown/20";

  return (
    <div
      className={`relative flex-shrink-0 overflow-hidden rounded-t-full rounded-b-lg bg-gradient-to-br from-parchment-200 to-parchment-300 ${sizeClasses[size]} ${activeRing} transition-all duration-300 hover:scale-105 ${className}`}
    >
      <ThoughtImage
        src={src}
        alt={name || thinkerId}
        variant="portrait"
        className="absolute inset-0"
      />
      {!src && (
        <div className="absolute inset-0 flex items-center justify-center text-coffee font-serif font-bold select-none">
          {getInitial(name)}
        </div>
      )}
    </div>
  );
}
