import {
  createContext,
  useContext,
  useState,
} from "react";

const WishlistContext =
  createContext();

export function WishlistProvider({
  children,
}) {
  const [wishlist, setWishlist] =
    useState([]);

  const addToWishlist = (
    university
  ) => {
    const exists =
      wishlist.find(
        (item) =>
          item.id ===
          university.id
      );

    if (exists) return;

    setWishlist([
      ...wishlist,
      university,
    ]);
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