import { useState, useRef, useCallback, useMemo } from "react";
import Header from "./components/Header";
import InputPanel from "./components/InputPanel";
import ExampleLibrary from "./components/ExampleLibrary";
import ThinkerSelection from "./components/ThinkerSelection";
import GameProgress from "./components/GameProgress";
import SalonDialogue from "./components/SalonDialogue";
import FilterReport from "./components/FilterReport";
import HiddenQuestionCard from "./components/HiddenQuestionCard";
import OneMoreQuestionCard from "./components/OneMoreQuestionCard";
import ThinkerLetter from "./components/ThinkerLetter";
import CopyResultButton from "./components/CopyResultButton";
import KeepElements from "./components/KeepElements";
import RemoveFilters from "./components/RemoveFilters";
import CreativeThread from "./components/CreativeThread";
import WritingAdvice from "./components/WritingAdvice";
import SpreadableSuggestions from "./components/SpreadableSuggestions";
import PitfallChecklist from "./components/PitfallChecklist";
import SwapThinkerButton from "./components/SwapThinkerButton";
import RestartButton from "./components/RestartButton";
import Footer from "./components/Footer";
import { getThinkerById, defaultThinkerId } from "./data/thinkers";
import { analyzeInput } from "./utils/analyzeInput";
import { generateThinkerLetter } from "./utils/generateThinkerLetter";
import { generateCreativeAdvice } from "./utils/generateCreativeAdvice";

function App() {
  const [userInput, setUserInput] = useState("");
  const [contentGoal, setContentGoal] = useState("social");
  const [tonePreference, setTonePreference] = useState("calm");
  const [selectedThinker, setSelectedThinker] = useState(defaultThinkerId);
  const [currentRound, setCurrentRound] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isDialogueComplete, setIsDialogueComplete] = useState(false);
  const [inputError, setInputError] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [hasUserSelectedThinker, setHasUserSelectedThinker] = useState(false);
  const [swapHint, setSwapHint] = useState(false);

  const salonRef = useRef(null);
  const resultRef = useRef(null);
  const thinkerRef = useRef(null);
  const exampleRef = useRef(null);

  const selectedThinkerData = getThinkerById(selectedThinker);

  const generatedLetter = useMemo(() => {
    if (
      !hasSubmitted ||
      !selectedThinkerData ||
      !analysisResult ||
      !userInput
    )
      return null;
    return generateThinkerLetter({
      thinkerId: selectedThinkerData.id,
      analysisResult,
      userInput,
      selectedAnswers,
    });
  }, [hasSubmitted, selectedThinkerData, analysisResult, userInput, selectedAnswers]);

  const creativeAdvice = useMemo(() => {
    if (
      !hasSubmitted ||
      !selectedThinkerData ||
      !analysisResult ||
      !userInput
    )
      return null;
    return generateCreativeAdvice({
      thinkerId: selectedThinkerData.id,
      analysisResult,
      userInput,
      selectedAnswers,
    });
  }, [hasSubmitted, selectedThinkerData, analysisResult, userInput, selectedAnswers]);

  const scrollToSalon = useCallback(() => {
    setTimeout(() => {
      salonRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const scrollToResults = useCallback(() => {
    setTimeout(() => {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const scrollToThinkerSelection = useCallback(() => {
    setTimeout(() => {
      thinkerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const scrollToExampleLibrary = useCallback(() => {
    setTimeout(() => {
      exampleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSelectThinker = useCallback(
    (id) => {
      setSelectedThinker(id);
      setHasUserSelectedThinker(true);
      setSwapHint(false);
      if (hasSubmitted) {
        setCurrentRound(0);
        setSelectedAnswers({});
        setIsDialogueComplete(false);
      }
    },
    [hasSubmitted]
  );

  const handleSwapThinker = useCallback(() => {
    setSwapHint(true);
    setCurrentRound(0);
    setSelectedAnswers({});
    setIsDialogueComplete(false);
    scrollToThinkerSelection();
  }, [scrollToThinkerSelection]);

  const handleRestart = useCallback(() => {
    setUserInput("");
    setContentGoal("social");
    setTonePreference("calm");
    setSelectedThinker(defaultThinkerId);
    setCurrentRound(0);
    setSelectedAnswers({});
    setHasSubmitted(false);
    setIsDialogueComplete(false);
    setAnalysisResult(null);
    setHasUserSelectedThinker(false);
    setSwapHint(false);
    setInputError(null);
    scrollToTop();
  }, [scrollToTop]);

  const handleSelectExample = useCallback(
    (text) => {
      setUserInput(text);
      setCurrentRound(0);
      setSelectedAnswers({});
      setHasSubmitted(false);
      setIsDialogueComplete(false);
      setAnalysisResult(null);
      setHasUserSelectedThinker(false);
      setInputError(null);
      scrollToTop();
    },
    [scrollToTop]
  );

  const handleSubmit = useCallback(() => {
    if (!userInput.trim()) {
      setInputError("请先递交一句哲学感文案，思想家才有东西可以追问。");
      return;
    }
    setInputError(null);

    const result = analyzeInput(userInput);
    setAnalysisResult(result);

    if (!hasUserSelectedThinker && result.recommendedThinkers.length > 0) {
      setSelectedThinker(result.recommendedThinkers[0]);
    }

    setHasSubmitted(true);
    setCurrentRound(0);
    setSelectedAnswers({});
    setIsDialogueComplete(false);
    scrollToSalon();
  }, [userInput, hasUserSelectedThinker, scrollToSalon]);

  const handleFillExample = useCallback(() => {
    setUserInput(
      "真正的自由，是一个人喝咖啡、读书、独处，不再向任何关系索取答案。"
    );
    setContentGoal("social");
    setTonePreference("calm");
    setInputError(null);
  }, []);

  const handleClear = useCallback(() => {
    setUserInput("");
    setCurrentRound(0);
    setSelectedAnswers({});
    setHasSubmitted(false);
    setIsDialogueComplete(false);
    setAnalysisResult(null);
    setHasUserSelectedThinker(false);
    setInputError(null);
  }, []);

  const handleSelectAnswer = useCallback(
    (roundIndex, optionIndex) => {
      setSelectedAnswers((prev) => ({ ...prev, [roundIndex]: optionIndex }));
      if (roundIndex < 2) {
        setCurrentRound(roundIndex + 1);
      } else {
        setIsDialogueComplete(true);
        setTimeout(() => scrollToResults(), 300);
      }
    },
    [scrollToResults]
  );

  return (
    <div className="min-h-svh bg-parchment-50">
      <Header onEnter={scrollToSalon} onExample={scrollToExampleLibrary} />

      <InputPanel
        userInput={userInput}
        setUserInput={setUserInput}
        contentGoal={contentGoal}
        setContentGoal={setContentGoal}
        tonePreference={tonePreference}
        setTonePreference={setTonePreference}
        onSubmit={handleSubmit}
        onFillExample={handleFillExample}
        onClear={handleClear}
        inputError={inputError}
      />

      <div ref={exampleRef}>
        <ExampleLibrary onSelectExample={handleSelectExample} />
      </div>

      <GameProgress
        hasSubmitted={hasSubmitted}
        hasUserSelectedThinker={hasUserSelectedThinker}
        currentRound={currentRound}
        isDialogueComplete={isDialogueComplete}
      />

      <div ref={thinkerRef}>
        {swapHint && (
          <div className="max-w-5xl mx-auto px-6 pt-4">
            <div className="p-4 rounded-lg bg-amber-50/80 border border-caramel/40 flex items-start gap-3">
              <svg
                className="w-5 h-5 text-coffee flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-sm text-warm-brown">
                请选择另一位思想家，看看同一句话会有怎样的不同追问。
              </p>
            </div>
          </div>
        )}
        <ThinkerSelection
          selectedThinker={selectedThinker}
          onSelectThinker={handleSelectThinker}
          analysisResult={analysisResult}
        />
      </div>

      <div ref={salonRef}>
        <SalonDialogue
          hasSubmitted={hasSubmitted}
          thinkerData={selectedThinkerData}
          currentRound={currentRound}
          selectedAnswers={selectedAnswers}
          onSelectAnswer={handleSelectAnswer}
          isDialogueComplete={isDialogueComplete}
          analysisResult={analysisResult}
          userInput={userInput}
        />
      </div>

      <div ref={resultRef}>
        {hasSubmitted && selectedThinkerData && (
          <>
            {isDialogueComplete ? (
              <>
                <FilterReport
                  report={selectedThinkerData.report}
                  analysisResult={analysisResult}
                />
                <HiddenQuestionCard
                  report={selectedThinkerData.report}
                  analysisResult={analysisResult}
                />
                <OneMoreQuestionCard
                  report={selectedThinkerData.report}
                  analysisResult={analysisResult}
                  generatedOneMoreQuestion={generatedLetter?.oneMoreQuestion}
                />
                <ThinkerLetter
                  report={selectedThinkerData.report}
                  thinkerId={selectedThinkerData.id}
                  analysisResult={analysisResult}
                  userInput={userInput}
                  selectedAnswers={selectedAnswers}
                />
                <CopyResultButton
                  userInput={userInput}
                  selectedThinkerData={selectedThinkerData}
                  analysisResult={analysisResult}
                  generatedLetter={generatedLetter}
                  creativeAdvice={creativeAdvice}
                />
                <KeepElements keepElements={creativeAdvice?.keepElements} />
                <RemoveFilters removeFilters={creativeAdvice?.removeFilters} />
                <CreativeThread
                  report={selectedThinkerData.report}
                  analysisResult={analysisResult}
                  generatedCoreQuestion={generatedLetter?.coreQuestion}
                  generatedCreativeThread={creativeAdvice?.creativeThread}
                />
                <WritingAdvice
                  report={selectedThinkerData.report}
                  generatedWritingAdvice={creativeAdvice?.writingAdvice}
                />
                <SpreadableSuggestions
                  report={selectedThinkerData.report}
                  generatedSpreadableSuggestions={creativeAdvice?.spreadableSuggestions}
                />
                <PitfallChecklist
                  report={selectedThinkerData.report}
                  generatedPitfalls={creativeAdvice?.pitfallChecklist}
                />
                <SwapThinkerButton onSwapThinker={handleSwapThinker} />
                <RestartButton onRestart={handleRestart} />
              </>
            ) : (
              <section className="max-w-3xl mx-auto px-6 py-12">
                <div className="card-parchment p-8 text-center">
                  <p className="text-ink-light text-sm mb-2">追问尚未结束</p>
                  <p className="text-ink text-base">
                    完成会客室中的三轮对话后，思想家将为你生成完整的回信与创作建议。
                  </p>
                </div>
              </section>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
