import {
  createContext,
  useContext,
  useState,
} from "react";

const ApplicationContext =
  createContext();

export function ApplicationProvider({
  children,
}) {
  const [applications,
    setApplications] =
    useState([]);

  const addApplication = (
    application
  ) => {
    setApplications((prev) => [
      ...prev,
      {
        id: Date.now(),
        status: "Pending",
        ...application,
      },
    ]);
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

export const useApplications =
  () =>
    useContext(
      ApplicationContext
    );