import { useState, useEffect } from "react";
import UniversityCard from "../components/universities/UniversityCard";
import UniversityFilters from "../components/universities/UniversityFilters";

import { universities } from "../data/universities";

export default function Universities() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");

  const [currentPage, setCurrentPage] =
  useState(1);

const itemsPerPage = 6;

useEffect(() => {
  setCurrentPage(1);
}, [
  search,
 
  location,
  course,
]);

  const getFeeValue = (fee) => {
    if (typeof fee === "number") return fee;

    return Number(
      String(fee).replace(/[^0-9]/g, "")
    );
  };

  let filtered = universities.filter(
    (u) =>
      u.name
        .toLowerCase()
        .includes(search.toLowerCase()) &&
      (location === "" ||
        u.location === location) &&
      (course === "" ||
        u.courses?.includes(course))
  );

 

  const indexOfLastItem =
  currentPage * itemsPerPage;

const indexOfFirstItem =
  indexOfLastItem - itemsPerPage;

const currentUniversities =
  filtered.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

const totalPages =
  Math.ceil(
    filtered.length /
      itemsPerPage
  );

  return (
    <section className="pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-10">
          Universities
        </h1>

        {/* Search Box */}

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search Universities..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-2xl
            bg-white/10
            border
            border-white/10
            "
          />

          {search.length > 0 && (
            <div
              className="
              absolute
              w-full
              mt-2
              glass
              rounded-2xl
              overflow-hidden
              z-20
              "
            >
              {universities
                .filter((u) =>
                  u.name
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .slice(0, 5)
                .map((u) => (
                  <div
                    key={u.id}
                    className="
                    p-4
                    border-b
                    border-white/10
                    hover:bg-white/10
                    cursor-pointer
                    "
                    onClick={() =>
                      setSearch(u.name)
                    }
                  >
                    {u.name}
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Location Filter */}

        <select
          value={location}
          onChange={(e) =>
            setLocation(e.target.value)
          }
          className="
          w-full
          p-4
          rounded-2xl
          bg-white/10
          border
          border-white/10
          mb-6
          "
        >
          <option value="">
            All Locations
          </option>

          <option value="Noida">
            Noida
          </option>

          <option value="Punjab">
            Punjab
          </option>

          <option value="Jaipur">
            Jaipur
          </option>

          <option value="Bangalore">
            Bangalore
          </option>

          <option value="Gangtok">
            Gangtok
          </option>
        </select>

        {/* Main Filters */}

        <UniversityFilters
  search={search}
  setSearch={setSearch}
  course={course}
  setCourse={setCourse}
/>


        <div className="mb-8">
  <button
    onClick={() => {
      setSearch("");
      setSearch("");
setLocation("");
setCourse("");
setCurrentPage(1);
      setLocation("");
      setCourse("");
      setCurrentPage(1);
    }}
    className="
    bg-red-500
    hover:bg-red-600
    px-6
    py-3
    rounded-xl
    transition
    "
  >
    Clear All Filters
  </button>
</div>

        {/* Results Count */}

        <div className="mb-6">
          <p className="text-gray-400">
  Showing {indexOfFirstItem + 1} -
  {Math.min(
    indexOfLastItem,
    filtered.length
  )} of {filtered.length} Universities
</p>
        </div>

        {/* Universities Grid */}

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          "
        >
          {filtered.length > 0 ? (
            currentUniversities.map(
  (university) => (
              <UniversityCard
                key={university.id}
                university={university}
              />
            ))
          ) : (
            <div
              className="
              col-span-3
              text-center
              text-xl
              text-gray-400
              py-20
              "
            >
              No Universities Found
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-10">

  <button
    disabled={currentPage === 1}
    onClick={() =>
      setCurrentPage(currentPage - 1)
    }
    className="
    px-4
    py-2
    rounded-xl
    bg-white/10
    disabled:opacity-40
    "
  >
    Prev
  </button>

  {[...Array(totalPages)].map(
    (_, index) => (
      <button
        key={index}
        onClick={() =>
          setCurrentPage(index + 1)
        }
        className={`px-4 py-2 rounded-xl ${
          currentPage === index + 1
            ? "bg-cyan-500"
            : "bg-white/10"
        }`}
      >
        {index + 1}
      </button>
    )
  )}

  <button
    disabled={
      currentPage === totalPages
    }
    onClick={() =>
      setCurrentPage(currentPage + 1)
    }
    className="
    px-4
    py-2
    rounded-xl
    bg-white/10
    disabled:opacity-40
    "
  >
    Next
  </button>

</div>
    </section>
  );
}