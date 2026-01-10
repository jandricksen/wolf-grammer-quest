import { useGameState } from "../hooks/useGameState";

export function WinScreen() {
  const { pack, treats, completedTerritories, navigateTo } = useGameState();

  const totalTreats =
    treats.meatChunk + treats.wisdomBerry + treats.swiftMeat + treats.goldenKibble;
  const territoriesCompleted = Object.keys(completedTerritories).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-500 to-amber-700 p-6 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        {/* Celebration header */}
        <div className="mb-8">
          <div className="text-8xl mb-4">🏆</div>
          <h1 className="text-5xl font-bold text-white mb-2">Victory!</h1>
          <h2 className="text-3xl font-bold text-amber-100 mb-4">Alpha of Alphas</h2>
          <p className="text-xl text-white">
            You have mastered all grammar territories and earned the highest honour!
          </p>
        </div>

        {/* Stats panel */}
        <div className="bg-white rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Achievements</h3>

          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🏔️</div>
              <div className="text-3xl font-bold text-amber-600">{territoriesCompleted}</div>
              <div className="text-gray-600">Territories Mastered</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2">🐺</div>
              <div className="text-3xl font-bold text-amber-600">{pack.length}</div>
              <div className="text-gray-600">Wolves in Pack</div>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-2">🥩</div>
              <div className="text-3xl font-bold text-amber-600">{totalTreats}</div>
              <div className="text-gray-600">Treats Earned</div>
            </div>
          </div>

          {/* Pack display */}
          <div className="border-t border-gray-200 pt-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Your Complete Pack</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {pack.map((wolf) => (
                <div
                  key={wolf.id}
                  className="bg-amber-50 rounded-lg p-3 text-center border-2 border-amber-200"
                >
                  <div className="text-3xl mb-1">🐺</div>
                  <div className="font-bold text-gray-800 text-sm">{wolf.name}</div>
                  <div className="text-amber-600 text-xs">{wolf.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigateTo("home")}
            className="bg-white hover:bg-amber-50 text-amber-600 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Return to Map
          </button>
          <button
            onClick={() => navigateTo("pack")}
            className="bg-amber-800 hover:bg-amber-900 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View Pack
          </button>
        </div>

        {/* Encouragement message */}
        <div className="mt-8 text-white text-lg">
          <p>Your wolves are proud to follow such a skilled leader!</p>
          <p className="text-amber-100 mt-2">Keep practising to maintain your grammar mastery.</p>
        </div>
      </div>
    </div>
  );
}
