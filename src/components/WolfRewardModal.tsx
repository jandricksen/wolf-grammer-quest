import type { Wolf } from "../types";
import { WolfTraitDisplay } from "./WolfTraitDisplay";

interface WolfRewardModalProps {
  wolf: Wolf;
  onNameSubmit: () => void;
}

export function WolfRewardModal({ wolf, onNameSubmit }: WolfRewardModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full text-center max-h-[90vh] overflow-y-auto">
        <div className="text-6xl mb-4">🐺</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Meet Your New Wolf!</h2>
        <p className="text-gray-600 mb-4">You&apos;ve earned a new {wolf.role} for your pack!</p>

        {/* Show wolf name */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg p-4 mb-4">
          <div className="text-xs uppercase tracking-wide text-amber-600 mb-1">Name</div>
          <div className="text-3xl font-bold text-gray-800">{wolf.name}</div>
        </div>

        {/* Show wolf trait */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-700 mb-3">Defining Trait</h3>
          <WolfTraitDisplay trait={wolf.trait} />
        </div>

        <div className="bg-amber-50 rounded-lg p-3 mb-4">
          <p className="text-sm text-amber-800">🐾 {wolf.fact}</p>
        </div>

        <button
          onClick={onNameSubmit}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Welcome to the Pack!
        </button>
      </div>
    </div>
  );
}
