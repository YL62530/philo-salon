import { thinkerLens, objectTemplates } from "../data/dialogueTemplates";

export function generateDialogue({ thinkerId, analysisResult, userInput }) {
  const lens = thinkerLens[thinkerId] || thinkerLens.socrates;
  const obj =
    objectTemplates[analysisResult?.primaryType] || objectTemplates.vague_concept;

  const firstQuestion = lens.lensQuestion(obj);

  return [
    {
      round: 1,
      thinkerPrompt:
        `你递交的这句话是：「${userInput}」。\n` +
        `它之所以有吸引力，是因为${obj.surfaceAttraction}。\n` +
        `但从${lens.name}的问题意识看，第一步不是接受这个结论，而是追问：${firstQuestion}`,
      options: obj.optionSet,
    },
    {
      round: 2,
      thinkerPrompt:
        `如果继续追问，问题也许不是「${obj.coreObject}好不好」，而是：${obj.hiddenTension}。\n` +
        `这句话说得很快，但它省略了中间最困难的部分。`,
      options: obj.round2Options,
    },
    {
      round: 3,
      thinkerPrompt:
        `所以它真正适合发展成的，不是一句更漂亮的金句，而是一个可以展开的问题：${obj.deeperQuestion}。\n` +
        `如果你要继续写，最好围绕这个问题，而不是只强化原来的姿态。`,
      options: obj.round3Options,
    },
  ];
}

export default generateDialogue;
