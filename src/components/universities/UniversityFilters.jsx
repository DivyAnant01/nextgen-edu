export default function UniversityFilters({
  search,
  setSearch,
  rating,
  setRating,
  sort,
  setSort,
}) {
  return (
    <div
      className="
      glass
      p-6
      rounded-3xl
      mb-8
      "
    >
      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Search University..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
          p-4
          rounded-xl
          bg-black/20
          "
        />

        <select
          value={rating}
          onChange={(e) =>
            setRating(e.target.value)
          }
          className="
          p-4
          rounded-xl
          bg-black/20
          "
        >
          <option value="">
            All Ratings
          </option>

          <option value="4.5">
            4.5+
          </option>

          <option value="4.7">
            4.7+
          </option>

          <option value="4.8">
            4.8+
          </option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className="
          p-4
          rounded-xl
          bg-black/20
          "
        >
          <option value="">
            Sort By
          </option>

          <option value="high">
            Rating High-Low
          </option>

          <option value="low">
            Rating Low-High
          </option>
        </select>

      </div>
    </div>
  );
}