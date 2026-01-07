import type { WolfRole, Wolf, StatName } from "../types";
import { roleTraits, WOLF_NAMES } from "../data/constants";

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
  };
}
