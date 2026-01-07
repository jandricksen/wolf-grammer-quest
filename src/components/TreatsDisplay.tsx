import type { Treats, TreatType } from "../types";
import { treatInfo } from "../data/constants";

interface TreatsDisplayProps {
  treats: Treats;
  filter?: TreatType[];
}

export function TreatsDisplay({ treats, filter }: TreatsDisplayProps) {
  const treatEntries = filter
    ? Object.entries(treats).filter(([type]) => filter.includes(type as TreatType))
    : Object.entries(treats).filter(([, count]) => count > 0);

  if (treatEntries.length === 0) {
    return <span className="text-gray-400 text-sm">No treats yet!</span>;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {treatEntries.map(([type, count]) => (
        <div
          key={type}
          className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg"
          title={treatInfo[type].description}
        >
          <span>{treatInfo[type].icon}</span>
          <span className="text-sm font-medium text-amber-800">{count}</span>
        </div>
      ))}
    </div>
  );
}
