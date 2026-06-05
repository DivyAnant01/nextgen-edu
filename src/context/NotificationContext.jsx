import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const NotificationContext =
  createContext();

export function NotificationProvider({
  children,
}) {
  const [notifications,
    setNotifications] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "notifications"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(
        notifications
      )
    );
  }, [notifications]);

  const addNotification = (
    message
  ) => {
    const newNotification = {
      id: Date.now(),
      message,
      read: false,
      createdAt:
        new Date().toLocaleString(),
    };

    setNotifications(
      (prev) => [
        newNotification,
        ...prev,
      ]
    );
  };

  const markAsRead = (
    id
  ) => {
    setNotifications(
      notifications.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                read: true,
              }
            : item
      )
    );
  };

  const deleteNotification = (
    id
  ) => {
    setNotifications(
      notifications.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  const clearNotifications =
    () => {
      setNotifications([]);
    };

  const unreadCount =
    notifications.filter(
      (item) => !item.read
    ).length;

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        deleteNotification,
        clearNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export const useNotification =
  () =>
    useContext(
      NotificationContext
    );