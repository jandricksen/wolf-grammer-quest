import { useGameState } from "../hooks/useGameState";
import { WolfTraitDisplay } from "../components";

export function WolfDetailScreen() {
  const { selectedWolf, navigateTo, selectWolf } = useGameState();

  if (!selectedWolf) {
    navigateTo("pack");
    return null;
  }

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

          <div className="mb-6">
            <h3 className="font-bold text-gray-700 mb-3">Defining Trait</h3>
            <WolfTraitDisplay trait={selectedWolf.trait} />
          </div>
        </div>
      </div>
    </div>
  );
}
