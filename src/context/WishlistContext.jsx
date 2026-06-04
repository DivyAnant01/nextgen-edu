import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import toast from "react-hot-toast";

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

    setWishlist([
      ...wishlist,
      university,
    ]);

    toast.success(
      "Added to Wishlist"
    );
  };

  const removeFromWishlist = (
    id
  ) => {
    setWishlist(
      wishlist.filter(
        (item) =>
          item.id !== id
      )
    );

    toast.success(
      "Removed from Wishlist"
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () =>
  useContext(WishlistContext);