import { GameProvider } from "./contexts/GameContext";
import { useGameState } from "./hooks/useGameState";
import {
  HomeScreen,
  QuizScreen,
  CompletionScreen,
  PackScreen,
  WolfDetailScreen,
  InventoryScreen,
} from "./screens";

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
    default:
      return <HomeScreen />;
  }
}

/**
 * App - Root component
 * Wraps the app with GameProvider for state management
 */
function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
