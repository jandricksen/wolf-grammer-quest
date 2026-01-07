/**
 * Quiz utility functions for scoring and validation.
 */

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * Returns a new array, does not mutate the original.
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Checks if a score meets the passing threshold (80%).
 */
export function checkPassingScore(score: number, total: number): boolean {
  return score >= total * 0.8;
}

/**
 * Calculates the percentage score as a decimal (0-1).
 */
export function getScorePercentage(score: number, total: number): number {
  if (total === 0) return 0;
  return score / total;
}

/**
 * Calculates the percentage score as a whole number (0-100).
 */
export function getScorePercentageDisplay(score: number, total: number): number {
  return Math.round(getScorePercentage(score, total) * 100);
}
