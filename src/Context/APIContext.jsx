import React, { useContext, useState, useEffect, createContext } from "react";

const APIContext = createContext();

export function APIContextProvider({ children }) {
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [users, setUsers] = useState([]);
  const [cart, setCart] = useState([])

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
  async function fetchUsers() {
    const response = await fetch(`https://6326e609ba4a9c47532c9c95.mockapi.io/users`)
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchFruits()
    fetchVegetables()
    fetchUsers()
  }, [])
  return (
    <APIContext.Provider
      value={{
        fruits,
        vegetables,
        users,
        cart,
        setCart
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
