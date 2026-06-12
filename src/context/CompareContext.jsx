import {
  createContext,
  useContext,
  useState,
} from "react";

const CompareContext =
  createContext();

export function CompareProvider({
  children,
}) {
  const [compareItems, setCompareItems] =
    useState([]);

  const addToCompare = (
    university
  ) => {
    if (
      compareItems.find(
        (u) =>
          u.id === university.id
      )
    )
      return;

    if (compareItems.length >= 4)
      return;

    setCompareItems([
      ...compareItems,
      university,
    ]);
  };

  const removeFromCompare = (
    id
  ) => {
    setCompareItems(
      compareItems.filter(
        (u) => u.id !== id
      )
    );
  };

  const clearCompare = () => {
    setCompareItems([]);
  };

  return (
    <CompareContext.Provider
      value={{
        compareItems,
        addToCompare,
        removeFromCompare,
        clearCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export const useCompare = () =>
  useContext(CompareContext);