import { useGameState } from "../hooks/useGameState";
import { treatInfo } from "../data/constants";
import { WolfRewardModal } from "../components";

export function CompletionScreen() {
  const {
    currentTerritory,
    score,
    completedTerritories,
    pendingTreats,
    pendingWolf,
    showPackReward,
    failedWolf,
    shuffledQuestions,
    startTerritory,
    navigateTo,
    addWolfToPack,
  } = useGameState();

  if (!currentTerritory) {
    navigateTo("home");
    return null;
  }

  // Use shuffledQuestions.length for accurate quiz length (may be limited by QUESTIONS_PER_QUIZ)
  const totalQuestions = shuffledQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  const passed = percentage >= 80;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 p-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl p-8 text-center">
        <div className="text-6xl mb-4">{passed ? "🐺" : "🌙"}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {passed ? "Territory Conquered!" : "Keep Practising!"}
        </h2>
        <p className="text-gray-600 mb-4">
          You scored {score} out of {totalQuestions} ({percentage}%)
        </p>

        {/* Treats Earned */}
        {pendingTreats && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <div className="text-amber-800 font-medium mb-2">🍖 Treats Earned!</div>
            <div className="flex flex-wrap justify-center gap-2">
              {(pendingTreats.meatChunk || 0) > 0 && (
                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
                  <span>{treatInfo.meatChunk.icon}</span>
                  <span className="text-sm font-medium">+{pendingTreats.meatChunk}</span>
                </div>
              )}
              {(pendingTreats.wisdomBerry || 0) > 0 && (
                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
                  <span>{treatInfo.wisdomBerry.icon}</span>
                  <span className="text-sm font-medium">+{pendingTreats.wisdomBerry}</span>
                </div>
              )}
              {(pendingTreats.swiftMeat || 0) > 0 && (
                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full">
                  <span>{treatInfo.swiftMeat.icon}</span>
                  <span className="text-sm font-medium">+{pendingTreats.swiftMeat}</span>
                </div>
              )}
            </div>
            {(pendingTreats.bonusTreats || 0) > 0 && (
              <div className="text-xs text-amber-600 mt-2">
                Bonus treats for scoring {percentage >= 90 ? "90%+" : "80%+"}!
              </div>
            )}
          </div>
        )}

        {passed && !completedTerritories[currentTerritory] && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="text-green-800 font-medium">🐺 New wolf earned!</div>
            <div className="text-green-600 text-sm">Check your pack to see your new wolf!</div>
          </div>
        )}

        {!passed && (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-6">
            <div className="text-slate-700 font-medium">Keep going!</div>
            <div className="text-slate-500 text-sm">
              Score 80% or higher to claim this territory and earn a wolf.
            </div>
          </div>
        )}

        {/* Wolf became hungry due to failure */}
        {!passed && failedWolf && (
          <div
            className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
            data-testid="failed-wolf-message"
          >
            <div className="text-red-800 font-medium">🐺 Oh no!</div>
            <div className="text-red-600 text-sm">
              Your poor score has left <span className="font-bold">{failedWolf.name}</span> hungry!
              Earn treats to feed them.
            </div>
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={() => startTerritory(currentTerritory)}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => navigateTo("home")}
            className="w-full bg-slate-100 hover:bg-slate-200 text-gray-700 font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Choose Another Territory
          </button>
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
