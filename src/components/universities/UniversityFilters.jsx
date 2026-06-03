import {
  Search,
  Filter,
} from "lucide-react";

export default function UniversityFilters({
  search,
  setSearch,
  rating,
  setRating,
  sort,
  setSort,
  course,
  setCourse,
  fees,
  setFees,
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
          Advanced Filters
        </h2>
      </div>

      <div className="grid md:grid-cols-5 gap-4">

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
            placeholder="Search..."
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

        {/* Rating */}

        <select
          value={rating}
          onChange={(e) =>
            setRating(
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
            Rating
          </option>

          <option value="4">
            4+
          </option>

          <option value="4.5">
            4.5+
          </option>

          <option value="4.8">
            4.8+
          </option>

        </select>

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
            Course
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

        </select>

        {/* Fees */}

        <select
          value={fees}
          onChange={(e) =>
            setFees(
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
            Fees
          </option>

          <option value="40000">
            Below 40k
          </option>

          <option value="50000">
            Below 50k
          </option>

          <option value="60000">
            Below 60k
          </option>

        </select>

        {/* Sort */}

        <select
          value={sort}
          onChange={(e) =>
            setSort(
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
            Sort
          </option>

          <option value="high">
            Rating High
          </option>

          <option value="low">
            Rating Low
          </option>

          <option value="feesLow">
            Fees Low
          </option>

          <option value="feesHigh">
            Fees High
          </option>

        </select>

      </div>
    </div>
  );
}