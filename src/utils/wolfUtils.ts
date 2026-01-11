import type { WolfRole, Wolf, StatName } from "../types";
import { roleTraits, WOLF_NAMES, HUNGER_THRESHOLD_HOURS } from "../data/constants";

/**
 * Gets a random wolf name that hasn't been used yet.
 * Falls back to a random name if all names are used.
 */
export function getRandomWolfName(usedNames: string[]): string {
  const availableNames = WOLF_NAMES.filter((name) => !usedNames.includes(name));

  if (availableNames.length === 0) {
    // All names used, pick any random name
    return WOLF_NAMES[Math.floor(Math.random() * WOLF_NAMES.length)];
  }

  return availableNames[Math.floor(Math.random() * availableNames.length)];
}

/**
 * Gets the defining trait for a wolf based on their role.
 */
export function getWolfTrait(role: WolfRole): StatName {
  return roleTraits[role];
}

/**
 * Creates the initial wolf (Luna) that every player starts with.
 */
export function createInitialWolf(): Wolf {
  return {
    id: "luna_alpha",
    name: "Luna",
    role: "Alpha",
    earned: true,
    fact: "The alpha wolf leads and protects the pack.",
    trait: "courage",
    lastFedAt: Date.now(),
  };
}

/**
 * Gets the number of hours since a wolf was last fed.
 */
export function getHoursSinceFed(wolf: Wolf): number {
  const now = Date.now();
  const millisSinceFed = now - wolf.lastFedAt;
  return millisSinceFed / (1000 * 60 * 60);
}

/**
 * Checks if a wolf is hungry (needs feeding).
 * Returns true if more than HUNGER_THRESHOLD_HOURS have passed since last feeding.
 */
export function isWolfHungry(wolf: Wolf): boolean {
  return getHoursSinceFed(wolf) >= HUNGER_THRESHOLD_HOURS;
}

/**
 * Gets the hunger status of a wolf.
 * Returns "hungry" if the wolf needs feeding, "ready" otherwise.
 */
export function getHungerStatus(wolf: Wolf): "ready" | "hungry" {
  return isWolfHungry(wolf) ? "hungry" : "ready";
}
