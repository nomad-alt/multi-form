import React, { createContext, useState, useContext } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  useContext(DataContext);
}