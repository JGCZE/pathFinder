import { PathfindingProvider } from "./context/PathFindingContext";

function App() {
  return (
    <PathfindingProvider>
      <h1 className="text-3xl font-bold underline h-screen w-screen bg-blue-600">
        Hello world!
      </h1>
    </PathfindingProvider>
  );
}

export default App;
