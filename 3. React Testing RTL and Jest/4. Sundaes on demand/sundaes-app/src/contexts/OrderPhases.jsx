import { createContext, useContext, useState, useMemo } from "react";

const OrderPhases = createContext();

// create a custom hook to check whether we're inside a provider
export function useOrderPhases() {
  const context = useContext(OrderPhases);

  // is inside a provider?
  if (!context) {
    throw new Error(
      "userOrderPhases must be used within an OrderPhasesProvider"
    );
  }

  return context;
}

export function OrderPhasesProvider(props) {
  const currentPhaseLimit = 3;
  const [currentPhase, updateCurrentPhase] = useState(1);

  const value = useMemo(() => {
    function nextPhase() {
      if (currentPhase + 1 > currentPhaseLimit) {
        updateCurrentPhase(1);
      } else {
        updateCurrentPhase(currentPhase + 1);
      }
    }

    return [currentPhase, nextPhase];
  }, [currentPhase, currentPhaseLimit]);

  return <OrderPhases.Provider value={value} {...props} />;
}
