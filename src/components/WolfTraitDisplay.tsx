import type { StatName } from "../types";
import { statInfo } from "../data/constants";

interface WolfTraitDisplayProps {
  trait: StatName;
  compact?: boolean;
}

export function WolfTraitDisplay({ trait, compact = false }: WolfTraitDisplayProps) {
  const info = statInfo[trait];

  if (compact) {
    return (
      <div className="flex items-center gap-1 text-sm" title={`${trait}: ${info.description}`}>
        <span>{info.icon}</span>
        <span className="capitalize text-gray-600">{trait}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-3">
      <span className="text-2xl">{info.icon}</span>
      <div>
        <div className="font-bold capitalize text-gray-800">{trait}</div>
        <div className="text-sm text-gray-600">{info.description}</div>
      </div>
    </div>
  );
}
