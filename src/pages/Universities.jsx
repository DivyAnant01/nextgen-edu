import { useState } from "react";

import UniversityCard from "../components/universities/UniversityCard";
import UniversityFilters from "../components/universities/UniversityFilters";
import AdvancedFilters from "../components/universities/AdvancedFilters";

import { universities } from "../data/universities";

export default function Universities() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState("");
  const [sort, setSort] = useState("");
  const [location, setLocation] = useState("");
  const [course, setCourse] = useState("");
  const [fees, setFees] = useState(60000);

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
        u.courses?.includes(course)) &&
      getFeeValue(u.fees) <= fees
  );

  if (rating) {
    filtered = filtered.filter(
      (u) => u.rating >= Number(rating)
    );
  }

  if (sort === "high") {
    filtered = [...filtered].sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sort === "low") {
    filtered = [...filtered].sort(
      (a, b) => a.rating - b.rating
    );
  }

  if (sort === "feesLow") {
    filtered = [...filtered].sort(
      (a, b) =>
        getFeeValue(a.fees) -
        getFeeValue(b.fees)
    );
  }

  if (sort === "feesHigh") {
    filtered = [...filtered].sort(
      (a, b) =>
        getFeeValue(b.fees) -
        getFeeValue(a.fees)
    );
  }

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
          rating={rating}
          setRating={setRating}
          sort={sort}
          setSort={setSort}
        />

        {/* Advanced Filters */}

        <div className="my-8">
          <AdvancedFilters
            course={course}
            setCourse={setCourse}
            fees={fees}
            setFees={setFees}
          />
        </div>

        {/* Results Count */}

        <div className="mb-6">
          <p className="text-gray-400">
            Showing {filtered.length} Universities
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
            filtered.map((university) => (
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
    </section>
  );
}