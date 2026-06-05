import {
  useActivity,
} from "../../context/ActivityContext";

export default function RecentActivity() {
  const {
    activities,
  } = useActivity();

  return (
    <div className="glass p-6 rounded-3xl">

      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      {activities.length === 0 ? (

        <p className="text-gray-400">
          No recent activity
        </p>

      ) : (

        <div className="space-y-4">

          {activities
            .slice(0, 8)
            .map((activity) => (

              <div
                key={activity.id}
                className="
                border-b
                border-white/10
                pb-3
                "
              >
                <p>
                  {activity.text}
                </p>

                <p className="text-sm text-gray-400">
                  {activity.date}
                </p>
              </div>

            ))}

        </div>

      )}

    </div>
  );
}