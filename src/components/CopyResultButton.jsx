import { useState, useCallback } from "react";

export default function CopyResultButton({
  userInput,
  selectedThinkerData,
  analysisResult,
  generatedLetter,
  creativeAdvice,
}) {
  const [copied, setCopied] = useState(false);

  const buildMarkdown = useCallback(() => {
    const thinkerName = selectedThinkerData?.name || "思想家";
    const typeLabel = analysisResult?.typeLabel || "未识别";
    const oneMoreQuestion = generatedLetter?.oneMoreQuestion || "";
    const letterBody = generatedLetter?.body || "";
    const coreQuestion = creativeAdvice?.creativeThread?.coreQuestion || "";
    const mainArgument = creativeAdvice?.creativeThread?.mainArgument || "";
    const path = creativeAdvice?.creativeThread?.path || [];
    const titles = creativeAdvice?.spreadableSuggestions?.titles || [];
    const avoid = creativeAdvice?.pitfallChecklist?.avoid || [];
    const tryInstead = creativeAdvice?.pitfallChecklist?.try || [];

    const sections = [
      `# PhiloSalon 追问结果`,
      ``,
      `**原始金句：** ${userInput}`,
      ``,
      `**思想家：** ${thinkerName}`,
      ``,
      `**内容类型：** ${typeLabel}`,
      ``,
      `---`,
      ``,
      `## 再多问一句`,
      ``,
      `${oneMoreQuestion}`,
      ``,
      `---`,
      ``,
      `## 思想家回信`,
      ``,
      `${letterBody}`,
      ``,
      `---`,
      ``,
      `## 核心问题`,
      ``,
      `${coreQuestion}`,
      ``,
      `---`,
      ``,
      `## 创作主线`,
      ``,
      `${mainArgument}`,
      ``,
      path.length > 0
        ? `**推进路径：**\n\n${path.map((s, i) => `${i + 1}. ${s}`).join("\n")}`
        : "",
      ``,
      `---`,
      ``,
      `## 标题方向`,
      ``,
      titles.length > 0
        ? titles.map((t, i) => `${i + 1}. ${t}`).join("\n")
        : "",
      ``,
      `---`,
      ``,
      `## 避坑清单`,
      ``,
      avoid.length > 0
        ? `**不要这样写：**\n\n${avoid.map((a) => `- ${a}`).join("\n")}`
        : "",
      ``,
      tryInstead.length > 0
        ? `**可以这样写：**\n\n${tryInstead.map((t) => `- ${t}`).join("\n")}`
        : "",
      ``,
      `---`,
      ``,
      `来自 PhiloSalon 思想家会客室`,
    ];

    return sections.filter(Boolean).join("\n");
  }, [userInput, selectedThinkerData, analysisResult, generatedLetter, creativeAdvice]);

  const handleCopy = useCallback(async () => {
    const text = buildMarkdown();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("复制失败，请手动选择并复制内容。");
    }
  }, [buildMarkdown]);

  return (
    <section className="max-w-3xl mx-auto px-6 py-8">
      <div className="flex justify-center">
        <button
          onClick={handleCopy}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-base transition-all duration-200 min-h-[44px] ${
            copied
              ? "bg-emerald-600 text-white shadow-md"
              : "bg-coffee text-parchment-50 hover:bg-warm-brick shadow-sm hover:shadow-md"
          }`}
        >
          {copied ? (
            <>
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
              已复制
            </>
          ) : (
            <>
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
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              复制结果
            </>
          )}
        </button>
      </div>
    </section>
  );
}
