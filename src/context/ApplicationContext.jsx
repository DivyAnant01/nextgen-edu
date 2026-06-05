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

  const {
    addActivity,
  } = useActivity();

  const {
    addNotification,
  } = useNotification();

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

    addActivity(
      `📝 Applied to ${application.university}`
    );

    addNotification(
      `Application submitted for ${application.university}`
    );

    toast.success(
      "Application Submitted Successfully"
    );
  };

  const removeApplication = (
    id
  ) => {
    const app =
      applications.find(
        (item) =>
          item.id === id
      );

    setApplications(
      applications.filter(
        (item) =>
          item.id !== id
      )
    );

    addActivity(
      app
        ? `🗑️ Removed application for ${app.university}`
        : "🗑️ Application Removed"
    );

    addNotification(
      app
        ? `Application removed for ${app.university}`
        : "Application Removed"
    );

    toast.success(
      "Application Removed"
    );
  };

  const updateStatus = (
    id,
    status
  ) => {
    const app =
      applications.find(
        (item) =>
          item.id === id
      );

    setApplications(
      applications.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                status,
              }
            : item
      )
    );

    addActivity(
      app
        ? `📌 ${app.university} status updated to ${status}`
        : `📌 Application status updated`
    );

    addNotification(
      app
        ? `${app.university} status changed to ${status}`
        : `Application status changed`
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