import { GameProvider } from "./contexts/GameContext";
import { useGameState } from "./hooks/useGameState";
import {
  HomeScreen,
  QuizScreen,
  CompletionScreen,
  PackScreen,
  WolfDetailScreen,
  InventoryScreen,
  WinScreen,
} from "./screens";
import type { TestInitialState } from "./types";

// Declare global window property for test state (development only)
declare global {
  interface Window {
    __TEST_INITIAL_STATE__?: TestInitialState;
  }
}

/**
 * AppContent - Main app component with screen routing
 * Renders the appropriate screen based on the current screen state
 */
function AppContent() {
  const { screen } = useGameState();

  // Screen routing - conditional rendering based on screen state
  switch (screen) {
    case "home":
      return <HomeScreen />;
    case "quiz":
      return <QuizScreen />;
    case "complete":
      return <CompletionScreen />;
    case "pack":
      return <PackScreen />;
    case "wolfDetail":
      return <WolfDetailScreen />;
    case "inventory":
      return <InventoryScreen />;
    case "win":
      return <WinScreen />;
    default:
      return <HomeScreen />;
  }
}

/**
 * App - Root component
 * Wraps the app with GameProvider for state management
 */
function App() {
  // Only read test state in development mode
  const testInitialState = import.meta.env.DEV ? window.__TEST_INITIAL_STATE__ : undefined;

  return (
    <GameProvider initialState={testInitialState}>
      <AppContent />
    </GameProvider>
  );
}

export default App;
