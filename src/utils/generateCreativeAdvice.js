import {
  contentTypeAdviceTemplates,
  thinkerAdviceLens,
} from "../data/creativeAdviceTemplates";

function mergeArrays(a = [], b = []) {
  return [...a, ...b];
}

export function generateCreativeAdvice({
  thinkerId,
  analysisResult,
  userInput,
  selectedAnswers,
}) {
  const typeTemplate =
    contentTypeAdviceTemplates[analysisResult?.primaryType] ||
    contentTypeAdviceTemplates.vague_concept;
  const lens = thinkerAdviceLens[thinkerId] || thinkerAdviceLens.socrates;

  const mainArgument = lens.mainArgumentSuffix
    ? `${typeTemplate.mainArgument} ${lens.mainArgumentSuffix}`
    : typeTemplate.mainArgument;

  return {
    creativeThread: {
      coreQuestion: typeTemplate.coreQuestion,
      coreConcepts: mergeArrays(
        typeTemplate.coreConcepts,
        lens.addedCoreConcepts
      ),
      mainArgument,
      path: mergeArrays(typeTemplate.progression, lens.addedProgression),
      donts: mergeArrays(
        typeTemplate.avoidDirections,
        lens.addedAvoidDirections
      ),
    },
    writingAdvice: {
      opening: mergeArrays(
        typeTemplate.writingAdvice.opening,
        lens.addedWritingAdvice?.opening
      ),
      middle: mergeArrays(
        typeTemplate.writingAdvice.middle,
        lens.addedWritingAdvice?.middle
      ),
      ending: mergeArrays(
        typeTemplate.writingAdvice.ending,
        lens.addedWritingAdvice?.ending
      ),
    },
    spreadableSuggestions: {
      titles: mergeArrays(
        typeTemplate.spreadableSuggestions.titles,
        lens.addedSpreadableSuggestions?.titles
      ),
      hooks: mergeArrays(
        typeTemplate.spreadableSuggestions.hooks,
        lens.addedSpreadableSuggestions?.hooks
      ),
    },
    pitfallChecklist: {
      avoid: mergeArrays(
        typeTemplate.pitfallChecklist.avoid,
        lens.addedPitfallChecklist?.avoid
      ),
      try: mergeArrays(
        typeTemplate.pitfallChecklist.tryInstead,
        lens.addedPitfallChecklist?.tryInstead
      ),
    },
    keepElements: typeTemplate.keepElements,
    removeFilters: typeTemplate.removeFilters,
  };
}

export default generateCreativeAdvice;
