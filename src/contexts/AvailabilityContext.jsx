import React, { createContext, useContext, useState } from "react";

const AvailabilityContext = createContext();

export const useAvailability = () => {
  const context = useContext(AvailabilityContext);
  if (!context) {
    throw new Error(
      "useAvailability must be used within an AvailabilityProvider"
    );
  }
  return context;
};

export const AvailabilityProvider = ({ children }) => {
  const [isAvailable, setIsAvailable] = useState(true);

  const toggleAvailability = () => {
    setIsAvailable((prev) => !prev);
  };

  const value = {
    isAvailable,
    setIsAvailable,
    toggleAvailability,
  };

  return (
    <AvailabilityContext.Provider value={value}>
      {children}
    </AvailabilityContext.Provider>
  );
};
