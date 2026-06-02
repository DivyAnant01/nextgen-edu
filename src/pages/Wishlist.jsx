import {
  useWishlist,
} from "../context/WishlistContext";

export default function Wishlist() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          Saved Universities
        </h1>

        {wishlist.length === 0 ? (
          <div className="glass p-10 rounded-3xl text-center">
            No Universities Saved
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {wishlist.map((u) => (
              <div
                key={u.id}
                className="
                glass
                p-6
                rounded-3xl
                "
              >
                <h2 className="text-2xl font-bold">
                  {u.name}
                </h2>

                <p className="mt-2">
                  {u.location}
                </p>

                <button
                  onClick={() =>
                    removeFromWishlist(
                      u.id
                    )
                  }
                  className="
                  mt-5
                  bg-red-500
                  px-4
                  py-2
                  rounded-xl
                  "
                >
                  Remove
                </button>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}