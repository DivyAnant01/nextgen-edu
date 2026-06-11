import {
  Search,
  Filter,
} from "lucide-react";

export default function UniversityFilters({
  search,
  setSearch,
  course,
  setCourse,
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
      <div
        className="
        flex
        items-center
        gap-3
        mb-6
        "
      >
        <Filter size={20} />

        <h2 className="text-2xl font-bold">
          Find Your University
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="
            absolute
            left-4
            top-4
            "
          />

          <input
            type="text"
            placeholder="Search University..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="
            w-full
            pl-12
            p-4
            rounded-xl
            bg-white/10
            "
          />
        </div>

        {/* Course */}

        <select
          value={course}
          onChange={(e) =>
            setCourse(
              e.target.value
            )
          }
          className="
          p-4
          rounded-xl
          bg-white/10
          "
        >
          <option value="">
            Select Course
          </option>

          <option value="MBA">
            MBA
          </option>

          <option value="BBA">
            BBA
          </option>

          <option value="BCA">
            BCA
          </option>

          <option value="MCA">
            MCA
          </option>

          <option value="BCom">
            B.Com
          </option>

          <option value="MCom">
            M.Com
          </option>
        </select>

      </div>
    </div>
  );
}