import { useApplications } from "../../context/ApplicationContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";

export default function StatsCards() {
  const { applications } = useApplications();
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();

  const stats = [
    {
      title: "Applications",
      value: applications.length,
    },
    {
      title: "Wishlist",
      value: wishlist.length,
    },
    {
      title: "Compare",
      value: compareList.length,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="glass p-6 rounded-3xl"
        >
          <p className="text-gray-400">
            {item.title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}