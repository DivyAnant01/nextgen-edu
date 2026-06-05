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

const WishlistContext =
  createContext();

export function WishlistProvider({
  children,
}) {
  const [wishlist, setWishlist] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "wishlist"
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
      "wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  const addToWishlist = (
    university
  ) => {
    const exists =
      wishlist.find(
        (item) =>
          item.id ===
          university.id
      );

    if (exists) {
      toast.error(
        "Already in Wishlist"
      );
      return;
    }

    setWishlist((prev) => [
      ...prev,
      university,
    ]);

    addActivity(
      `❤️ Added ${university.name} to Wishlist`
    );

    addNotification(
      `${university.name} added to Wishlist`
    );

    toast.success(
      "Added to Wishlist"
    );
  };

  const removeFromWishlist = (
    id
  ) => {
    const university =
      wishlist.find(
        (item) =>
          item.id === id
      );

    setWishlist((prev) =>
      prev.filter(
        (item) =>
          item.id !== id
      )
    );

    addActivity(
      university
        ? `🗑️ Removed ${university.name} from Wishlist`
        : "🗑️ Removed a university from Wishlist"
    );

    addNotification(
      university
        ? `${university.name} removed from Wishlist`
        : "University removed from Wishlist"
    );

    toast.success(
      "Removed from Wishlist"
    );
  };

  const clearWishlist = () => {
    setWishlist([]);

    addActivity(
      "🧹 Wishlist Cleared"
    );

    addNotification(
      "Wishlist Cleared"
    );

    toast.success(
      "Wishlist Cleared"
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () =>
  useContext(WishlistContext);