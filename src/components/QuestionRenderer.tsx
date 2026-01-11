import { useState, useEffect } from "react";
import type { Question } from "../types";
import { shuffleArray } from "../utils/quizUtils";
import { ReadingTimer } from "./ReadingTimer";

interface QuestionRendererProps {
  question: Question;
  selectedAnswer: string | null;
  showFeedback: boolean;
  showAnswers: boolean;
  readingTimeRemaining: number;
  onSelectAnswer: (answer: string) => void;
}

export function QuestionRenderer({
  question,
  selectedAnswer,
  showFeedback,
  showAnswers,
  readingTimeRemaining,
  onSelectAnswer,
}: QuestionRendererProps) {
  // Shuffle options once when question changes
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

  useEffect(() => {
    setShuffledOptions(shuffleArray(question.options));
  }, [question]);

  return (
    <div className="space-y-6">
      <div className="text-lg font-medium text-gray-800">{question.question}</div>

      {/* Show timer while waiting for answers to be revealed */}
      {!showAnswers && <ReadingTimer secondsRemaining={readingTimeRemaining} />}

      {/* Show answer options once timer completes */}
      {showAnswers && (
        <div className="space-y-3">
          {shuffledOptions.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = option === question.correct;

            let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-all ";

            if (showFeedback) {
              if (isCorrect) {
                buttonClass += "bg-green-100 border-green-500 text-green-800";
              } else if (isSelected && !isCorrect) {
                buttonClass += "bg-red-100 border-red-500 text-red-800";
              } else {
                buttonClass += "bg-gray-50 border-gray-200 text-gray-400";
              }
            } else {
              buttonClass +=
                "bg-white border-gray-200 hover:border-amber-400 hover:bg-amber-50 cursor-pointer";
            }

            return (
              <button
                key={idx}
                onClick={() => onSelectAnswer(option)}
                disabled={showFeedback}
                className={buttonClass}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}

      {showFeedback && (
        <div
          className={`p-4 rounded-lg ${selectedAnswer === question.correct ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}
        >
          <div className="font-medium mb-2">
            {selectedAnswer === question.correct ? "🐺 Correct!" : "💭 Not quite..."}
          </div>
          <div className="text-gray-700">
            {selectedAnswer === question.correct
              ? question.explanation
              : question.wrongExplanation || question.explanation}
          </div>
        </div>
      )}
    </div>
  );
}
