import React, { createContext, useState } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </Context.Provider>
  );
}
export { Context, ContextProvider };
