export default function RecentActivity() {
  const activities = [
    "Added Amity University to Wishlist",
    "Compared LPU & Manipal",
    "Viewed Online MBA Course",
    "Downloaded University Brochure",
  ];

  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => (
          <div
            key={index}
            className="
            border-l-2
            border-cyan-500
            pl-4
            "
          >
            {item}
          </div>
        ))}

      </div>
    </div>
  );
}