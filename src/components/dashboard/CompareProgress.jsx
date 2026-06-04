import { useCompare } from "../../context/CompareContext";

export default function CompareProgress() {
  const { compareList } = useCompare();

  const percent =
    (compareList.length / 3) * 100;

  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-4">
        Compare Usage
      </h2>

      <div className="w-full bg-white/10 h-4 rounded-full">
        <div
          className="bg-cyan-500 h-4 rounded-full"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>

      <p className="mt-4 text-gray-400">
        {compareList.length} of 3
        universities selected
      </p>
    </div>
  );
}