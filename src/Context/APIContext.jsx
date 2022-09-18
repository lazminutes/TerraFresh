import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  async function fetchFruits() {
    const response = await fetch(`https://6326e609ba4a9c47532c9c95.mockapi.io/fruits`)
    const data = await response.json()
    setFruits(data)
  }
  async function fetchVegetables() {
    const response = await fetch(`https://6326e609ba4a9c47532c9c95.mockapi.io/vegetables`)
    const data = await response.json()
    setVegetables(data)
  }
  useEffect(() => {
    fetchFruits()
    fetchVegetables()
  }, [])
  return (
    <APIContext.Provider
      value={{
        fruits,
        vegetables
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
