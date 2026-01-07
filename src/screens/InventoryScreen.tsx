import { useGameState } from "../hooks/useGameState";
import { treatInfo } from "../data/constants";

export function InventoryScreen() {
  const { treats, navigateTo } = useGameState();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 p-6">
      <div className="max-w-md mx-auto">
        <button onClick={() => navigateTo("home")} className="text-slate-300 hover:text-white mb-6">
          ← Back to Map
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Your Inventory</h1>
          <p className="text-slate-300">Treats for your wolf pack</p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="font-bold text-gray-800 mb-4">Treats</h2>
          <div className="space-y-4">
            {Object.entries(treatInfo).map(([key, info]) => (
              <div key={key} className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg">
                <div className="text-3xl">{info.icon}</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{info.name}</div>
                  <div className="text-sm text-gray-500">{info.description}</div>
                </div>
                <div className="text-2xl font-bold text-amber-600">
                  {treats[key as keyof typeof treats]}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded-lg">
            <h3 className="font-medium text-amber-800 mb-2">How to earn treats</h3>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>🍖 1 Meat Chunk for every 2 correct answers</li>
              <li>🍖 +1 bonus treat for scoring 70%+</li>
              <li>🍖 +3 bonus treats for scoring 90%+</li>
              <li>🫐🥩 Special treats for scoring 90%+</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-slate-700 rounded-xl p-6 text-center">
          <div className="text-slate-300 mb-2">Coming Soon</div>
          <div className="text-amber-400 font-medium">Feed your wolves to keep them happy!</div>
          <div className="text-slate-400 text-sm mt-2">Phase 2 will add wolf care and feeding.</div>
        </div>
      </div>
    </div>
  );
}
