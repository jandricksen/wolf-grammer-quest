import { useGameState } from "../hooks/useGameState";
import { WolfTraitDisplay } from "../components";
import { isWolfHungry } from "../utils/wolfUtils";

export function PackScreen() {
  const { pack, navigateTo, selectWolf } = useGameState();

  const hungryCount = pack.filter(isWolfHungry).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 p-6">
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigateTo("home")} className="text-slate-300 hover:text-white mb-6">
          ← Back to Map
        </button>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Your Wolf Pack</h1>
          <p className="text-slate-300">{pack.length} members strong</p>
          {hungryCount > 0 && (
            <p className="text-amber-300 mt-2">
              🍖 {hungryCount} {hungryCount === 1 ? "wolf is" : "wolves are"} hungry
            </p>
          )}
        </div>

        <div className="grid gap-4">
          {pack.map((wolf, idx) => {
            const hungry = isWolfHungry(wolf);
            return (
              <button
                key={wolf.id || idx}
                onClick={() => {
                  selectWolf(wolf);
                  navigateTo("wolfDetail");
                }}
                className={`rounded-xl p-4 flex items-start gap-4 hover:bg-amber-50 transition-colors text-left ${
                  hungry ? "bg-amber-50 border-2 border-amber-300" : "bg-white"
                }`}
              >
                <div className="text-4xl relative">
                  🐺
                  {hungry && <div className="absolute -top-1 -right-1 text-xl">🍖</div>}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-lg flex items-center gap-2">
                    {wolf.name}
                    {hungry && <span className="text-sm text-amber-600">Hungry</span>}
                  </div>
                  <div className="text-amber-600 mb-2">{wolf.role}</div>
                  <WolfTraitDisplay trait={wolf.trait} compact={true} />
                </div>
                <div className="text-gray-400">→</div>
              </button>
            );
          })}
        </div>

        {pack.length < 9 && (
          <div className="mt-8 text-center text-slate-300">
            Complete more territories to grow your pack!
          </div>
        )}
      </div>
    </div>
  );
}
