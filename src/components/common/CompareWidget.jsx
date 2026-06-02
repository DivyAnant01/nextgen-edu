import { Link } from "react-router-dom";
import { useCompare } from "../../context/CompareContext";

export default function CompareWidget() {
  const { compareList } = useCompare();

  if (compareList.length === 0) {
    return null;
  }

  return (
    <div
      className="
      fixed
      left-6
      bottom-6
      z-50
      glass
      p-5
      rounded-2xl
      w-72
      shadow-2xl
      "
    >
      <h3 className="font-bold text-lg">
        Compare Universities
      </h3>

      <p className="text-gray-400 mt-2">
        {compareList.length} University Selected
      </p>

      <Link
        to="/compare"
        className="
        mt-4
        block
        text-center
        bg-cyan-500
        py-3
        rounded-xl
        font-semibold
        "
      >
        Compare Now
      </Link>
    </div>
  );
}