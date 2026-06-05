import {
  createContext,
  useContext,
  useState,
} from "react";

const ActivityContext =
  createContext();

export function ActivityProvider({
  children,
}) {
  const [activities,
    setActivities] =
    useState([]);

  const addActivity = (
    message
  ) => {
    setActivities((prev) => [
      {
        id: Date.now(),
        message,
        date:
          new Date().toLocaleString(),
      },
      ...prev,
    ]);
  };

  return (
    <ActivityContext.Provider
      value={{
        activities,
        addActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
}

export const useActivity =
  () =>
    useContext(
      ActivityContext
    );