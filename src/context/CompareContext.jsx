import { createContext, useContext, useState } from "react";

const CompareContext = createContext();

export function CompareProvider({ children }) {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = (university) => {
    if (
      compareList.find(
        (u) => u.id === university.id
      )
    )
      return;

    if (compareList.length >= 3) return;

    setCompareList([
      ...compareList,
      university,
    ]);
  };

  const removeFromCompare = (id) => {
    setCompareList(
      compareList.filter(
        (u) => u.id !== id
      )
    );
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export const useCompare = () =>
  useContext(CompareContext);