import { thinkerLens, objectTemplates } from "../data/dialogueTemplates";

export function generateThinkerLetter({
  thinkerId,
  analysisResult,
  userInput,
  selectedAnswers,
}) {
  const lens = thinkerLens[thinkerId] || thinkerLens.socrates;
  const obj =
    objectTemplates[analysisResult?.primaryType] || objectTemplates.vague_concept;

  return {
    title: `${lens.name}式回信`,
    body: lens.letterTemplate(obj),
    coreQuestion: obj.deeperQuestion,
    oneMoreQuestion: lens.oneMoreQuestion(obj),
  };
}

export default generateThinkerLetter;
