export default function Notifications() {
  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6">
        Notifications
      </h2>

      <div className="space-y-4">

        <div className="bg-white/5 p-4 rounded-xl">
          Scholarship applications are open.
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          New Online MBA intake started.
        </div>

        <div className="bg-white/5 p-4 rounded-xl">
          Last date for admission this month.
        </div>

      </div>
    </div>
  );
}