import type { Territory } from "../types";

interface TerritoryCardProps {
  territoryId: string;
  territory: Territory;
  isCompleted: boolean;
  score?: { score: number; total: number };
  onStart: () => void;
}

export function TerritoryCard({ territory, isCompleted, score, onStart }: TerritoryCardProps) {
  return (
    <button
      onClick={onStart}
      className="w-full bg-white rounded-xl p-4 flex items-center gap-4 hover:bg-amber-50 transition-colors text-left"
    >
      <div className="text-3xl">{territory.icon}</div>
      <div className="flex-1">
        <div className="font-bold text-gray-800 flex items-center gap-2">
          {territory.name}
          {isCompleted && <span className="text-green-500">✓</span>}
        </div>
        <div className="text-sm text-gray-500">{territory.description}</div>
        {score && (
          <div className="text-xs text-amber-600 mt-1">
            Best: {score.score}/{score.total}
          </div>
        )}
      </div>
      <div className="text-gray-400">→</div>
    </button>
  );
}
