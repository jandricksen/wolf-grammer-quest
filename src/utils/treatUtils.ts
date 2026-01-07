import type { Treats } from "../types";

/**
 * Earned treats breakdown with bonus treats count
 */
export interface TreatsEarned extends Partial<Treats> {
  bonusTreats?: number;
}

/**
 * Calculates treats earned based on quiz performance.
 * - 1 Meat Chunk per 2 correct answers
 * - 80%+: +1 bonus Meat Chunk
 * - 90%+: +3 bonus Meat Chunks + 1 random special treat (Wisdom Berry or Swift Meat)
 */
export function calculateTreatsEarned(score: number, totalQuestions: number): TreatsEarned {
  const percentage = score / totalQuestions;
  const earned: TreatsEarned = {
    meatChunk: Math.floor(score / 2), // 1 treat per 2 correct answers
    wisdomBerry: 0,
    swiftMeat: 0,
    goldenKibble: 0,
    bonusTreats: 0,
  };

  // Bonus treats for high scores
  if (percentage >= 0.9) {
    earned.bonusTreats = 3;
    earned.meatChunk = (earned.meatChunk || 0) + 3;
    // 90%+ also earns a special treat (randomly wisdom berry or swift meat)
    if (Math.random() > 0.5) {
      earned.wisdomBerry = 1;
    } else {
      earned.swiftMeat = 1;
    }
  } else if (percentage >= 0.8) {
    earned.bonusTreats = 1;
    earned.meatChunk = (earned.meatChunk || 0) + 1;
  }

  return earned;
}

/**
 * Applies earned treats to the current treat inventory.
 */
export function applyTreatsToInventory(
  currentTreats: Treats,
  earnedTreats: Partial<Treats>
): Treats {
  return {
    meatChunk: currentTreats.meatChunk + (earnedTreats.meatChunk || 0),
    wisdomBerry: currentTreats.wisdomBerry + (earnedTreats.wisdomBerry || 0),
    swiftMeat: currentTreats.swiftMeat + (earnedTreats.swiftMeat || 0),
    goldenKibble: currentTreats.goldenKibble + (earnedTreats.goldenKibble || 0),
  };
}
