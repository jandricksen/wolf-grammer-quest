import type { StatInfo, TreatInfo, RoleTraits } from "../types";

// Wolf names - curated list for auto-generated names
export const WOLF_NAMES = [
  "Shadow",
  "Storm",
  "River",
  "Frost",
  "Ash",
  "Ember",
  "Sage",
  "Willow",
  "Thunder",
  "Blaze",
  "Mist",
  "Raven",
  "Flint",
  "Jasper",
  "Hazel",
  "Rowan",
  "Ghost",
  "Star",
  "Sky",
  "Rain",
  "Blade",
  "Stone",
  "Nova",
  "Echo",
  "Wolf",
  "Bear",
  "Hawk",
  "Fox",
  "Otter",
  "Badger",
  "Pine",
  "Oak",
  "Cliff",
  "Ridge",
  "Vale",
  "Brook",
  "Creek",
  "Canyon",
  "Peak",
  "Thorn",
  "Fang",
  "Claw",
  "Paw",
  "Talon",
  "Spirit",
  "Soul",
  "Dream",
  "Vision",
  "Hunter",
  "Scout",
  "Tracker",
  "Guard",
  "Keeper",
  "Warden",
  "Sage",
  "Elder",
  "Alpha",
  "Beta",
  "Omega",
  "Delta",
  "Silver",
  "Gold",
  "Copper",
  "Onyx",
  "Jade",
  "Ruby",
  "Amber",
  "Pearl",
  "Midnight",
  "Dawn",
  "Dusk",
  "Twilight",
];

// Stat definitions - what each stat means
export const statInfo: Record<string, StatInfo> = {
  wisdom: { icon: "📚", color: "blue", description: "Helps solve tricky puzzles" },
  swiftness: { icon: "💨", color: "green", description: "Quick thinking and reactions" },
  courage: { icon: "🦁", color: "red", description: "Brave in difficult situations" },
  kindness: { icon: "💝", color: "pink", description: "Caring and helpful to others" },
  focus: { icon: "🎯", color: "purple", description: "Concentration and attention" },
};

// Treat definitions
export const treatInfo: Record<string, TreatInfo> = {
  meatChunk: { icon: "🍖", name: "Meat Chunk", description: "Restores hunger" },
  wisdomBerry: { icon: "🫐", name: "Wisdom Berry", description: "Boosts Wisdom" },
  swiftMeat: { icon: "🥩", name: "Swift Meat", description: "Boosts Swiftness" },
  goldenKibble: { icon: "✨", name: "Golden Kibble", description: "Rare! Boosts all stats" },
};

// Role-to-trait mapping - each role has one defining trait
export const roleTraits: RoleTraits = {
  Alpha: "courage",
  Scout: "swiftness",
  Tracker: "wisdom",
  Hunter: "courage",
  Guardian: "kindness",
  Howler: "focus",
  Shadow: "swiftness",
  Elder: "wisdom",
  Storyteller: "kindness",
};

// Hunger system constants
export const HUNGER_THRESHOLD_HOURS = 24;
export const FEEDING_COST = 1; // Meat chunks per feeding

// Reading timer constants
export const READING_TIME_SECONDS = 5;
