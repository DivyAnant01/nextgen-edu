export default function AdvancedFilters({
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
      border
      border-white/10
      "
    >
      <h3
        className="
        text-2xl
        font-bold
        mb-6
        "
      >
        Advanced Filters
      </h3>

      {/* Course Filter */}

      <div className="mb-6">
        <label className="block mb-2">
          Course
        </label>

        <select
          value={course}
          onChange={(e) =>
            setCourse(e.target.value)
          }
          className="
          w-full
          p-3
          rounded-xl
          bg-white/10
          border
          border-white/10
          "
        >
          <option value="">
            All Courses
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

          <option value="B.Tech">
            B.Tech
          </option>

          <option value="BA">
            BA
          </option>

          <option value="B.Com">
            B.Com
          </option>
        </select>
      </div>

      {/* Fees Slider */}

      <div>
        <label className="block mb-2">
          Max Fees Per Semester
        </label>

        <input
          type="range"
          min="30000"
          max="60000"
          step="1000"
          value={fees}
          onChange={(e) =>
            setFees(
              Number(e.target.value)
            )
          }
          className="w-full"
        />

        <p className="mt-3 text-cyan-400 font-semibold">
          ₹ {Number(fees).toLocaleString()}
        </p>
      </div>
    </div>
  );
}