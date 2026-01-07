import { useGameState } from "../hooks/useGameState";
import { territories } from "../data";
import { TreatsDisplay, TerritoryCard, WolfTraitDisplay } from "../components";

export function HomeScreen() {
  const {
    pack,
    treats,
    completedTerritories,
    territoryScores,
    startTerritory,
    navigateTo,
    selectWolf,
  } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🐺</div>
          <h1 className="text-3xl font-bold text-white mb-2">Wolf Grammar Quest</h1>
          <p className="text-slate-300">Build your pack by mastering grammar!</p>
        </div>

        {/* Treats Bar */}
        <div className="bg-slate-700 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-slate-300 text-sm font-medium">Your Treats</span>
            <TreatsDisplay treats={treats} />
          </div>
        </div>

        {/* Pack Preview */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Your Pack</h2>
            <span className="text-amber-600 font-medium">
              {pack.length} {pack.length === 1 ? "wolf" : "wolves"}
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            {pack.map((wolf, idx) => (
              <button
                key={wolf.id || idx}
                onClick={() => {
                  selectWolf(wolf);
                  navigateTo("wolfDetail");
                }}
                className="flex flex-col items-center bg-slate-50 rounded-lg p-3 hover:bg-amber-50 transition-colors cursor-pointer"
              >
                <div className="text-3xl mb-1">🐺</div>
                <div className="font-medium text-gray-800">{wolf.name}</div>
                <div className="text-xs text-amber-600">{wolf.role}</div>
                <WolfTraitDisplay trait={wolf.trait} compact={true} />
              </button>
            ))}
          </div>
          {pack.length < 9 && (
            <div className="mt-4 text-sm text-gray-500 text-center">
              Complete a territory with 80% or higher to earn a new wolf!
            </div>
          )}
        </div>

        {/* Territories */}
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white mb-4">Choose Your Territory</h2>
        </div>

        <div className="space-y-3">
          {Object.entries(territories).map(([key, territory]) => (
            <TerritoryCard
              key={key}
              territoryId={key}
              territory={territory}
              isCompleted={completedTerritories[key] || false}
              score={
                territoryScores[key]
                  ? { score: territoryScores[key], total: territory.questions.length }
                  : undefined
              }
              onStart={() => startTerritory(key)}
            />
          ))}
        </div>

        {/* Navigation Links */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigateTo("pack")}
            className="text-amber-400 hover:text-amber-300 font-medium"
          >
            View Full Pack →
          </button>
          <button
            onClick={() => navigateTo("inventory")}
            className="text-amber-400 hover:text-amber-300 font-medium"
          >
            View Inventory →
          </button>
        </div>
      </div>
    </div>
  );
}
