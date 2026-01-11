import { useGameState } from "../hooks/useGameState";
import { WolfTraitDisplay } from "../components";
import { isWolfHungry, getHoursSinceFed } from "../utils/wolfUtils";

export function WolfDetailScreen() {
  const { selectedWolf, navigateTo, selectWolf, treats, feedWolf } = useGameState();

  if (!selectedWolf) {
    navigateTo("pack");
    return null;
  }

  const hungry = isWolfHungry(selectedWolf);
  const hoursSinceFed = getHoursSinceFed(selectedWolf);
  const canFeed = treats.meatChunk > 0 && hungry;

  const handleFeed = () => {
    if (canFeed && feedWolf) {
      feedWolf(selectedWolf.id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 p-6">
      <div className="max-w-md mx-auto">
        <button
          onClick={() => {
            selectWolf(null);
            navigateTo("pack");
          }}
          className="text-slate-300 hover:text-white mb-6"
        >
          ← Back to Pack
        </button>

        <div className="bg-white rounded-xl p-6 text-center">
          <div className="text-6xl mb-4">🐺</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{selectedWolf.name}</h1>
          <div className="text-amber-600 font-medium mb-4">{selectedWolf.role}</div>

          {selectedWolf.fact && (
            <div className="bg-amber-50 rounded-lg p-3 mb-6">
              <p className="text-sm text-amber-800">🐾 {selectedWolf.fact}</p>
            </div>
          )}

          {/* Hunger status */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">Status</h3>
            <div
              className={`rounded-lg p-4 ${
                hungry
                  ? "bg-amber-100 border border-amber-300"
                  : "bg-green-50 border border-green-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">
                  {hungry ? "🍖 Hungry" : "✓ Ready"}
                </span>
                <span className="text-sm text-gray-600">
                  {hungry
                    ? `${Math.floor(hoursSinceFed)}h since fed`
                    : `Fed ${Math.floor(hoursSinceFed)}h ago`}
                </span>
              </div>
              {hungry ? (
                <p className="text-sm text-amber-700">
                  This wolf needs feeding to stay healthy and ready.
                </p>
              ) : (
                <p className="text-sm text-green-700">
                  This wolf is well-fed and ready for action.
                </p>
              )}
            </div>

            {/* Feed button */}
            <button
              onClick={handleFeed}
              disabled={!canFeed}
              className={`mt-3 w-full py-3 px-4 rounded-lg font-bold transition-colors ${
                canFeed
                  ? "bg-amber-500 hover:bg-amber-600 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {!hungry
                ? "Already Fed"
                : treats.meatChunk === 0
                  ? "No Meat Chunks Available"
                  : "Feed Wolf (1 Meat Chunk)"}
            </button>
          </div>

          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">Defining Trait</h3>
            <WolfTraitDisplay trait={selectedWolf.trait} />
          </div>
        </div>
      </div>
    </div>
  );
}
