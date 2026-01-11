import { useGameState } from "../hooks/useGameState";
import { territories } from "../data";
import { QuestionRenderer, WolfRewardModal } from "../components";

export function QuizScreen() {
  const {
    currentTerritory,
    currentQuestionIndex,
    score,
    selectedAnswer,
    showFeedback,
    showPackReward,
    pendingWolf,
    shuffledQuestions,
    navigateTo,
    selectAnswer,
    nextQuestion,
    addWolfToPack,
  } = useGameState();

  if (!currentTerritory || shuffledQuestions.length === 0) {
    navigateTo("home");
    return null;
  }

  const territory = territories[currentTerritory];
  const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header with progress */}
          <div className="bg-slate-800 p-4">
            <div className="flex items-center justify-between text-white mb-2">
              <button
                onClick={() => navigateTo("home")}
                className="text-slate-300 hover:text-white"
              >
                ← Back
              </button>
              <span className="font-medium">{territory.name}</span>
              <span>{score} 🐺</span>
            </div>
            <div className="bg-slate-700 rounded-full h-2">
              <div
                className="bg-amber-400 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-slate-400 text-sm mt-1 text-center">
              Question {currentQuestionIndex + 1} of {shuffledQuestions.length}
            </div>
          </div>

          {/* Question */}
          <div className="p-6">
            <QuestionRenderer
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              showFeedback={showFeedback}
              onSelectAnswer={selectAnswer}
            />

            {showFeedback && (
              <button
                onClick={nextQuestion}
                className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                {currentQuestionIndex < shuffledQuestions.length - 1
                  ? "Next Question →"
                  : "See Results →"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Wolf Reward Modal */}
      {showPackReward && pendingWolf && (
        <WolfRewardModal
          wolf={{
            id: "",
            name: pendingWolf.name,
            role: pendingWolf.role,
            fact: pendingWolf.fact,
            earned: true,
            trait: pendingWolf.trait,
            lastFedAt: 0,
          }}
          onNameSubmit={addWolfToPack}
        />
      )}
    </div>
  );
}
