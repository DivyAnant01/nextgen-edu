import { Link } from "react-router-dom";
import { Heart, Scale, Eye } from "lucide-react";
import { useState } from "react";

import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";

import QuickViewModal from "./QuickViewModal";

export default function UniversityCard({
  university,
}) {
  const { addToWishlist } =
    useWishlist();

  const { addToCompare } =
    useCompare();

  const [open, setOpen] =
    useState(false);

  return (
    <>
      <div
        className="
        glass
        rounded-3xl
        overflow-hidden
        hover:-translate-y-2
        duration-300
        "
      >
        <img
          src={
            university.banner ||
            university.image
          }
          alt={university.name}
          className="
          w-full
          h-60
          object-cover
          "
        />

        <div className="p-6">

          <div className="flex justify-between items-center">

            <h3 className="text-2xl font-bold">
              {university.name}
            </h3>

            <button
              onClick={() =>
                addToWishlist(
                  university
                )
              }
              className="
              p-2
              rounded-full
              bg-white/10
              hover:bg-white/20
              "
            >
              <Heart size={18} />
            </button>

          </div>

          <p className="text-gray-400 mt-2">
            📍 {university.location}
          </p>

          <div className="flex gap-4 mt-4">

            <span>
              ⭐ {university.rating}
            </span>

            <span>
              ₹ {university.fees}
            </span>

          </div>

          {university.approvals && (
            <div className="flex flex-wrap gap-2 mt-4">

              {university.approvals
                .slice(0, 3)
                .map((approval) => (
                  <span
                    key={approval}
                    className="
                    text-xs
                    px-3
                    py-1
                    rounded-full
                    bg-cyan-500/20
                    "
                  >
                    {approval}
                  </span>
                ))}

            </div>
          )}

          <div className="flex gap-3 mt-6">

            <Link
              to={`/universities/${university.slug}`}
              className="
              flex-1
              text-center
              bg-cyan-500
              px-4
              py-3
              rounded-xl
              "
            >
              View Details
            </Link>

            <button
              onClick={() =>
                setOpen(true)
              }
              className="
              px-4
              py-3
              rounded-xl
              border
              border-white/20
              hover:bg-white/10
              "
            >
              <Eye size={18} />
            </button>

            <button
              onClick={() =>
                addToCompare(
                  university
                )
              }
              className="
              px-4
              py-3
              rounded-xl
              border
              border-white/20
              hover:bg-white/10
              "
            >
              <Scale size={18} />
            </button>

          </div>

        </div>
      </div>

      <QuickViewModal
        university={university}
        isOpen={open}
        onClose={() =>
          setOpen(false)
        }
      />
    </>
  );
}