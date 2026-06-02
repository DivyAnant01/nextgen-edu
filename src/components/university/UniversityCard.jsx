import { Link } from "react-router-dom";
import { Heart, Scale } from "lucide-react";
import { useCompare } from "../../context/CompareContext";

export default function UniversityCard({ university }) {
  const { addToCompare } = useCompare();

  return (
    <div
      className="
      glass
      rounded-3xl
      overflow-hidden
      transition-all
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >
      <img
        src={university.banner}
        alt={university.name}
        className="
        h-56
        w-full
        object-cover
        "
      />

      <div className="p-6">
        <div className="flex justify-between items-center">
          <img
            src={university.logo}
            alt={university.name}
            className="h-14 object-contain"
          />

          <button
            className="
            p-2
            rounded-full
            bg-white/10
            hover:bg-white/20
            "
          >
            <Heart size={18} />
          </button>
        </div>

        <h3 className="text-xl font-bold mt-4">
          {university.name}
        </h3>

        <p className="text-gray-400 mt-2">
          📍 {university.location}
        </p>

        <div className="flex gap-4 mt-3">
          <span>
            ⭐ {university.rating}
          </span>

          <span>
            ₹{university.fees}
          </span>
        </div>

        <div className="flex gap-3 mt-6">
          <Link
            to={`/universities/${university.slug}`}
            className="
            flex-1
            text-center
            bg-cyan-500
            px-5
            py-3
            rounded-xl
            font-medium
            "
          >
            View Details
          </Link>

          <button
            onClick={() =>
              addToCompare(university)
            }
            className="
            px-4
            py-3
            rounded-xl
            border
            border-white/20
            hover:bg-white/10
            "
          >
            <Scale size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}