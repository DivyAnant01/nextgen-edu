import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import toast from "react-hot-toast";

const CompareContext =
  createContext();

export function CompareProvider({
  children,
}) {
  const [compareList, setCompareList] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "compareList"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "compareList",
      JSON.stringify(compareList)
    );
  }, [compareList]);

  const addToCompare = (
    university
  ) => {
    const exists =
      compareList.find(
        (u) =>
          u.id === university.id
      );

    if (exists) {
      toast.error(
        "Already Added"
      );
      return;
    }

    if (
      compareList.length >= 3
    ) {
      toast.error(
        "Maximum 3 Universities Allowed"
      );
      return;
    }

    setCompareList([
      ...compareList,
      university,
    ]);

    toast.success(
      "Added to Compare"
    );
  };

  const removeFromCompare = (
    id
  ) => {
    setCompareList(
      compareList.filter(
        (u) => u.id !== id
      )
    );

    toast.success(
      "Removed from Compare"
    );
  };

  const clearCompare = () => {
    setCompareList([]);

    toast.success(
      "Compare List Cleared"
    );
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
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