export default function DashboardStats() {
  return (
    <div className="grid md:grid-cols-4 gap-6">

      <div className="glass p-6 rounded-3xl">
        <h3 className="text-gray-400">
          Saved
        </h3>

        <h2 className="text-4xl font-bold">
          12
        </h2>
      </div>

      <div className="glass p-6 rounded-3xl">
        <h3 className="text-gray-400">
          Applications
        </h3>

        <h2 className="text-4xl font-bold">
          4
        </h2>
      </div>

      <div className="glass p-6 rounded-3xl">
        <h3 className="text-gray-400">
          Compare
        </h3>

        <h2 className="text-4xl font-bold">
          3
        </h2>
      </div>

      <div className="glass p-6 rounded-3xl">
        <h3 className="text-gray-400">
          Profile
        </h3>

        <h2 className="text-4xl font-bold">
          85%
        </h2>
      </div>

    </div>
  );
}