import { useCompare } from "../context/CompareContext";

export default function CompareUniversities() {
  const {
    compareList,
    removeFromCompare,
    clearCompare,
  } = useCompare();

  if (compareList.length === 0) {
    return (
      <section className="pt-32 pb-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-10">
            Compare Universities
          </h1>

          <div className="glass p-10 rounded-3xl text-center">
            <h2 className="text-2xl font-semibold">
              No Universities Selected
            </h2>

            <p className="text-gray-400 mt-3">
              Add universities to compare.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <h1 className="text-5xl font-bold">
            Compare Universities
          </h1>

          <button
            onClick={clearCompare}
            className="
            bg-red-500
            hover:bg-red-600
            px-5
            py-3
            rounded-xl
            transition
            "
          >
            Clear All
          </button>
        </div>

        {/* Desktop Table */}

        <div className="hidden lg:block overflow-x-auto">
          <div className="glass rounded-3xl overflow-hidden">

            <table className="w-full">
              <tbody>

                <tr className="border-b border-white/10">
                  <td className="p-6 font-bold">
                    University
                  </td>

                  {compareList.map((u) => (
                    <td
                      key={u.id}
                      className="p-6 text-center"
                    >
                      <img
                        src={u.logo}
                        alt={u.name}
                        className="
                        h-16
                        mx-auto
                        object-contain
                        "
                      />

                      <h3 className="font-bold mt-4">
                        {u.name}
                      </h3>
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-6 font-bold">
                    Location
                  </td>

                  {compareList.map((u) => (
                    <td
                      key={u.id}
                      className="p-6 text-center"
                    >
                      {u.location}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-6 font-bold">
                    Rating
                  </td>

                  {compareList.map((u) => (
                    <td
                      key={u.id}
                      className="p-6 text-center"
                    >
                      ⭐ {u.rating}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-6 font-bold">
                    Fees
                  </td>

                  {compareList.map((u) => (
                    <td
                      key={u.id}
                      className="
                      p-6
                      text-center
                      text-cyan-400
                      "
                    >
                      ₹ {Number(u.fees).toLocaleString()}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-6 font-bold">
                    Courses
                  </td>

                  {compareList.map((u) => (
                    <td
                      key={u.id}
                      className="p-6 text-center"
                    >
                      {u.courses?.join(", ")}
                    </td>
                  ))}
                </tr>

                <tr className="border-b border-white/10">
                  <td className="p-6 font-bold">
                    Approvals
                  </td>

                  {compareList.map((u) => (
                    <td
                      key={u.id}
                      className="p-6 text-center"
                    >
                      {u.approvals?.join(", ")}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="p-6 font-bold">
                    Action
                  </td>

                  {compareList.map((u) => (
                    <td
                      key={u.id}
                      className="p-6 text-center"
                    >
                      <button
                        onClick={() =>
                          removeFromCompare(u.id)
                        }
                        className="
                        bg-red-500
                        hover:bg-red-600
                        px-4
                        py-2
                        rounded-xl
                        "
                      >
                        Remove
                      </button>
                    </td>
                  ))}
                </tr>

              </tbody>
            </table>

          </div>
        </div>

        {/* Mobile Cards */}

        <div className="grid md:grid-cols-2 gap-6 lg:hidden">
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

              <div className="space-y-3 mt-5">

                <p>
                  📍 {u.location}
                </p>

                <p>
                  ⭐ {u.rating}
                </p>

                <p className="text-cyan-400">
                  ₹ {Number(u.fees).toLocaleString()}
                </p>

                <p>
                  <strong>Courses:</strong>
                  {" "}
                  {u.courses?.join(", ")}
                </p>

                <p>
                  <strong>Approvals:</strong>
                  {" "}
                  {u.approvals?.join(", ")}
                </p>

              </div>

              <button
                onClick={() =>
                  removeFromCompare(u.id)
                }
                className="
                mt-6
                w-full
                bg-red-500
                hover:bg-red-600
                py-3
                rounded-xl
                "
              >
                Remove
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}