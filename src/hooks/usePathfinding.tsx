import { useContext } from "react";
import { PathfindingContext } from "../context/PathFindingContext";

export const usePathFinding = () => {
  const context = useContext(PathfindingContext);

  if (!context) {
    throw new Error(
      "usePathfinding must be used within a PathFinding provider"
    );
  }

  return context;
};
