import { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

/**
 * Custom hook to access game state and actions.
 * Throws an error if used outside of GameProvider.
 */
export function useGameState() {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("useGameState must be used within a GameProvider");
  }

  return context;
}
