import { contentTypeConfig, getTypeLabel } from "../data/contentTypes";

const absoluteWords = [
  "真正", "所有", "永远", "都应该", "最高级", "唯一", "每个人",
  "任何人", "总要", "必须", "一定", "才是", "终究", "不过是",
  "无非是", "说到底", "本质上", "最好的",
];

const lifestyleItems = [
  "咖啡", "读书", "看展", "穿搭", "城市", "夜晚", "房间", "角落",
  "窗", "阳光", "沙发", "台灯", "书桌", "散步", "街道", "耳机",
  "音乐", "电影", "旅行", "拍照", "打卡", "餐厅", "酒馆", "书店",
];

const personaWords = [
  "清醒", "看透", "不解释", "不讨好", "不在乎", "成熟", "成年人",
  "高级", "体面", "理智", "冷静", "克制", "懂事", "沉默", "格局",
  "段位",
];

const questionWords = [
  "为什么", "是否", "如何", "到底", "吗", "呢", "什么", "怎样",
  "怎么", "难道", "不是吗", "对不对",
];

const conflictMarkers = [
  "但", "但是", "却", "然而", "反而", "其实", "不过", "虽然",
  "尽管", "即使", "不是…而是", "看似", "表面", "背后",
];

function countMatches(text, wordList) {
  let count = 0;
  for (const word of wordList) {
    const regex = new RegExp(word, "g");
    const matches = text.match(regex);
    if (matches) count += matches.length;
  }
  return count;
}

function calculateBaseScores(text) {
  const absCount = countMatches(text, absoluteWords);
  const lifeCount = countMatches(text, lifestyleItems);
  const personaCount = countMatches(text, personaWords);
  const questionCount = countMatches(text, questionWords);
  const conflictCount = countMatches(text, conflictMarkers);

  const textLen = text.length;
  const densityFactor = Math.min(textLen / 30, 1);

  let quoteification = Math.min(30 + absCount * 18 + densityFactor * 20, 98);
  let lifestylePackaging = Math.min(25 + lifeCount * 20 + densityFactor * 15, 96);
  let personaDensity = Math.min(20 + personaCount * 22 + densityFactor * 15, 94);
  let questionRetention = Math.min(15 + questionCount * 25, 90);
  let philosophicalOxygen = Math.min(20 + questionCount * 15 + conflictCount * 12, 88);
  let cafeContent = Math.min(20 + lifeCount * 18, 95);

  if (questionCount === 0) {
    questionRetention = Math.max(questionRetention - 25, 12);
    philosophicalOxygen = Math.max(philosophicalOxygen - 18, 15);
  }

  if (absCount > 0 && questionCount === 0) {
    philosophicalOxygen = Math.max(philosophicalOxygen - 15, 10);
  }

  if (lifeCount > 0 && questionCount === 0 && absCount === 0) {
    philosophicalOxygen = Math.max(philosophicalOxygen - 10, 15);
  }

  if (conflictCount > 0) {
    philosophicalOxygen = Math.min(philosophicalOxygen + 10, 90);
  }

  return {
    quoteification: Math.round(quoteification),
    lifestylePackaging: Math.round(lifestylePackaging),
    personaDensity: Math.round(personaDensity),
    questionRetention: Math.round(questionRetention),
    philosophicalOxygen: Math.round(philosophicalOxygen),
    cafeContent: Math.round(cafeContent),
  };
}

function detectContentType(text) {
  const typeScores = [];

  for (const [typeId, config] of Object.entries(contentTypeConfig)) {
    if (typeId === "vague_concept") continue;

    let score = 0;
    const matched = [];
    for (const kw of config.keywords) {
      if (text.includes(kw)) {
        score += 1;
        matched.push(kw);
      }
    }

    if (score > 0) {
      typeScores.push({ typeId, score, matched });
    }
  }

  typeScores.sort((a, b) => b.score - a.score);

  if (typeScores.length === 0) {
    return {
      primaryType: "vague_concept",
      secondaryTypes: [],
      detectedKeywords: [],
    };
  }

  const primary = typeScores[0];
  const secondary = typeScores
    .slice(1)
    .filter((s) => s.score >= primary.score * 0.5)
    .map((s) => s.typeId);

  return {
    primaryType: primary.typeId,
    secondaryTypes: secondary,
    detectedKeywords: primary.matched,
  };
}

export function analyzeInput(text) {
  if (!text || typeof text !== "string") {
    return {
      primaryType: "vague_concept",
      typeLabel: getTypeLabel("vague_concept"),
      secondaryTypes: [],
      scores: {
        quoteification: 15,
        lifestylePackaging: 12,
        personaDensity: 10,
        questionRetention: 8,
        philosophicalOxygen: 10,
        cafeContent: 10,
      },
      detectedKeywords: [],
      recommendedThinkers: contentTypeConfig.vague_concept.recommendedThinkers,
      shortDiagnosis: contentTypeConfig.vague_concept.shortDiagnosis,
      hiddenProblem: contentTypeConfig.vague_concept.hiddenProblem,
    };
  }

  const cleaned = text.trim();
  const chineseCharCount = (cleaned.match(/[一-鿿]/g) || []).length;

  const scores = calculateBaseScores(cleaned);

  const allKeywords = [];
  for (const word of [
    ...absoluteWords,
    ...lifestyleItems,
    ...personaWords,
    ...questionWords,
    ...conflictMarkers,
  ]) {
    if (cleaned.includes(word) && !allKeywords.includes(word)) {
      allKeywords.push(word);
    }
  }

  if (chineseCharCount < 8) {
    return {
      primaryType: "vague_concept",
      typeLabel: getTypeLabel("vague_concept"),
      secondaryTypes: [],
      scores,
      detectedKeywords: allKeywords.slice(0, 6),
      recommendedThinkers: contentTypeConfig.vague_concept.recommendedThinkers,
      shortDiagnosis: contentTypeConfig.vague_concept.shortDiagnosis,
      hiddenProblem: contentTypeConfig.vague_concept.hiddenProblem,
    };
  }

  const { primaryType, secondaryTypes, detectedKeywords } =
    detectContentType(cleaned);

  const config = contentTypeConfig[primaryType];

  const mergedKeywords = [
    ...new Set([...detectedKeywords, ...allKeywords]),
  ].slice(0, 8);

  return {
    primaryType,
    typeLabel: getTypeLabel(primaryType),
    secondaryTypes,
    scores,
    detectedKeywords: mergedKeywords,
    recommendedThinkers: config.recommendedThinkers,
    shortDiagnosis: config.shortDiagnosis,
    hiddenProblem: config.hiddenProblem,
  };
}

export function getTypeConfig(typeId) {
  return contentTypeConfig[typeId] || contentTypeConfig.vague_concept;
}

export default analyzeInput;
