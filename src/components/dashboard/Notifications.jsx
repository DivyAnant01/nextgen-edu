export default function Notifications() {
  const notifications = [
    "Application submitted successfully",
    "Compare list updated",
    "Wishlist updated",
  ];

  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6">
        Notifications
      </h2>

      <div className="space-y-4">
        {notifications.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 p-3 rounded-xl"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}