import { useApplications } from "../../context/ApplicationContext";

export default function RecentActivity() {
  const { applications } = useApplications();

  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      {applications.length === 0 ? (
        <p className="text-gray-400">
          No recent activity
        </p>
      ) : (
        <div className="space-y-4">
          {applications
            .slice()
            .reverse()
            .slice(0, 5)
            .map((app) => (
              <div
                key={app.id}
                className="border-b border-white/10 pb-3"
              >
                <p>
                  Applied for{" "}
                  <strong>
                    {app.university}
                  </strong>
                </p>

                <p className="text-sm text-gray-400">
                  {app.appliedAt}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}