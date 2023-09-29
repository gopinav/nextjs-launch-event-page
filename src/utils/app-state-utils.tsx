import { createContext, useContext } from "react";

type AppState = {
  selectedElements: string[];
  setSelectedElements: (elements: string[]) => void;
};

export const AppStateContext = createContext<AppState>({
  selectedElements: [],
  setSelectedElements: () => {},
});

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within the AppStateProvider");
  }
  return context;
};
