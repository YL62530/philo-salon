import { useState, useRef, useCallback } from "react";
import Header from "./components/Header";
import InputPanel from "./components/InputPanel";
import ThinkerSelection from "./components/ThinkerSelection";
import SalonDialogue from "./components/SalonDialogue";
import FilterReport from "./components/FilterReport";
import HiddenQuestionCard from "./components/HiddenQuestionCard";
import OneMoreQuestionCard from "./components/OneMoreQuestionCard";
import ThinkerLetter from "./components/ThinkerLetter";
import CreativeThread from "./components/CreativeThread";
import WritingAdvice from "./components/WritingAdvice";
import SpreadableSuggestions from "./components/SpreadableSuggestions";
import PitfallChecklist from "./components/PitfallChecklist";
import Footer from "./components/Footer";
import { getThinkerById, defaultThinkerId } from "./data/thinkers";

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

  const salonRef = useRef(null);
  const resultRef = useRef(null);

  const selectedThinkerData = getThinkerById(selectedThinker);

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

  const handleSelectThinker = useCallback(
    (id) => {
      setSelectedThinker(id);
      if (hasSubmitted) {
        setCurrentRound(0);
        setSelectedAnswers({});
        setIsDialogueComplete(false);
      }
    },
    [hasSubmitted]
  );

  const handleSubmit = useCallback(() => {
    if (!userInput.trim()) {
      setInputError("请先递交一句哲学感文案，思想家才有东西可以追问。");
      return;
    }
    setInputError(null);
    setHasSubmitted(true);
    setCurrentRound(0);
    setSelectedAnswers({});
    setIsDialogueComplete(false);
    scrollToSalon();
  }, [userInput, scrollToSalon]);

  const handleFillExample = useCallback(() => {
    setUserInput("真正的自由，是一个人喝咖啡、读书、独处，不再向任何关系索取答案。");
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
      <Header onEnter={scrollToSalon} onExample={handleFillExample} />

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

      <ThinkerSelection
        selectedThinker={selectedThinker}
        onSelectThinker={handleSelectThinker}
      />

      <div ref={salonRef}>
        <SalonDialogue
          hasSubmitted={hasSubmitted}
          thinkerData={selectedThinkerData}
          currentRound={currentRound}
          selectedAnswers={selectedAnswers}
          onSelectAnswer={handleSelectAnswer}
          isDialogueComplete={isDialogueComplete}
        />
      </div>

      <div ref={resultRef}>
        {hasSubmitted && selectedThinkerData && (
          <>
            {isDialogueComplete ? (
              <>
                <FilterReport report={selectedThinkerData.report} />
                <HiddenQuestionCard report={selectedThinkerData.report} />
                <OneMoreQuestionCard report={selectedThinkerData.report} />
                <ThinkerLetter report={selectedThinkerData.report} />
                <CreativeThread report={selectedThinkerData.report} />
                <WritingAdvice report={selectedThinkerData.report} />
                <SpreadableSuggestions report={selectedThinkerData.report} />
                <PitfallChecklist report={selectedThinkerData.report} />
              </>
            ) : (
              <section className="max-w-3xl mx-auto px-6 py-12">
                <div className="card-parchment p-8 text-center">
                  <p className="text-ink-light text-sm mb-2">
                    追问尚未结束
                  </p>
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
