import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import toast from "react-hot-toast";

const ApplicationContext =
  createContext();

export function ApplicationProvider({
  children,
}) {
  const [applications,
    setApplications] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "applications"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "applications",
      JSON.stringify(
        applications
      )
    );
  }, [applications]);

  const addApplication = (
    application
  ) => {
    const newApplication = {
      id: Date.now(),
      status: "Pending",
      createdAt:
        new Date().toISOString(),
      ...application,
    };

    setApplications(
      (prev) => [
        ...prev,
        newApplication,
      ]
    );

    toast.success(
      "Application Submitted Successfully"
    );
  };

  const removeApplication = (
    id
  ) => {
    setApplications(
      applications.filter(
        (app) =>
          app.id !== id
      )
    );

    toast.success(
      "Application Removed"
    );
  };

  const updateStatus = (
    id,
    status
  ) => {
    setApplications(
      applications.map(
        (app) =>
          app.id === id
            ? {
                ...app,
                status,
              }
            : app
      )
    );
  };

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        removeApplication,
        updateStatus,
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