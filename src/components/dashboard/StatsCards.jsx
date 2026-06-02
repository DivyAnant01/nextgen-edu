import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";

export default function StatsCards() {
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();

  const stats = [
    {
      title: "Saved Universities",
      value: wishlist.length,
    },
    {
      title: "Compared",
      value: compareList.length,
    },
    {
      title: "Applications",
      value: 0,
    },
    {
      title: "Profile Score",
      value: "75%",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="
          glass
          p-6
          rounded-3xl
          "
        >
          <h3 className="text-gray-400">
            {item.title}
          </h3>

          <p className="text-4xl font-bold mt-3">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}