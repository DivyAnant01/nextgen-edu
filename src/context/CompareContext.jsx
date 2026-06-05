import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import toast from "react-hot-toast";

import {
  useActivity,
} from "./ActivityContext";

import {
  useNotification,
} from "./NotificationContext";

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

  const {
    addActivity,
  } = useActivity();

  const {
    addNotification,
  } = useNotification();

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

    addActivity(
      `⚖️ Added ${university.name} to Compare`
    );

    addNotification(
      `${university.name} added to Compare`
    );

    toast.success(
      "Added to Compare"
    );
  };

  const removeFromCompare = (
    id
  ) => {
    const university =
      compareList.find(
        (u) => u.id === id
      );

    setCompareList(
      compareList.filter(
        (u) => u.id !== id
      )
    );

    addActivity(
      university
        ? `❌ Removed ${university.name} from Compare`
        : "❌ Removed a university from Compare"
    );

    addNotification(
      university
        ? `${university.name} removed from Compare`
        : "University removed from Compare"
    );

    toast.success(
      "Removed from Compare"
    );
  };

  const clearCompare = () => {
    setCompareList([]);

    addActivity(
      "🧹 Compare List Cleared"
    );

    addNotification(
      "Compare List Cleared"
    );

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