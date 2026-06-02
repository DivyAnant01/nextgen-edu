import { useCompare } from "../context/CompareContext";

export default function CompareUniversities() {
  const {
    compareList,
    removeFromCompare,
  } = useCompare();

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          Compare Universities
        </h1>

        {compareList.length === 0 ? (
          <div className="glass p-10 rounded-3xl text-center">
            <h2 className="text-2xl font-semibold">
              No Universities Selected
            </h2>

            <p className="text-gray-400 mt-3">
              Add universities to compare.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            {compareList.map((u) => (
              <div
                key={u.id}
                className="
                glass
                p-6
                rounded-3xl
                "
              >
                <img
                  src={u.logo}
                  alt={u.name}
                  className="h-16 object-contain"
                />

                <h2 className="text-2xl font-bold mt-4">
                  {u.name}
                </h2>

                <p className="mt-3">
                  📍 {u.location}
                </p>

                <p className="mt-2">
                  ⭐ {u.rating}
                </p>

                <p className="mt-2 text-cyan-400">
                  ₹ {u.fees}
                </p>

                <button
                  onClick={() =>
                    removeFromCompare(u.id)
                  }
                  className="
                  mt-5
                  w-full
                  bg-red-500
                  hover:bg-red-600
                  py-3
                  rounded-xl
                  transition
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