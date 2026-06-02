import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  User,
  Heart,
  Scale,
  FileText,
  LogOut,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";

export default function DashboardSidebar() {
  const { logout } = useAuth();

  const { wishlist } = useWishlist();
  const { compareList } = useCompare();

  const linkClass = ({ isActive }) =>
    `
    flex
    items-center
    justify-between
    p-3
    rounded-xl
    duration-300
    ${
      isActive
        ? "bg-cyan-500 text-white"
        : "hover:bg-white/10"
    }
  `;

  return (
    <div
      className="
      glass
      p-6
      rounded-3xl
      h-fit
      sticky
      top-24
      "
    >
      <h2 className="text-2xl font-bold mb-8">
        Student Panel
      </h2>

      <div className="space-y-3">

        {/* Dashboard */}

        <NavLink
          to="/dashboard"
          className={linkClass}
        >
          <div className="flex items-center gap-3">
            <LayoutDashboard size={18} />
            Dashboard
          </div>
        </NavLink>

        {/* Profile */}

        <NavLink
          to="/profile"
          className={linkClass}
        >
          <div className="flex items-center gap-3">
            <User size={18} />
            Profile
          </div>
        </NavLink>

        {/* Wishlist */}

        <NavLink
          to="/wishlist"
          className={linkClass}
        >
          <div className="flex items-center gap-3">
            <Heart size={18} />
            Wishlist
          </div>

          {wishlist.length > 0 && (
            <span
              className="
              bg-red-500
              text-xs
              px-2
              py-1
              rounded-full
              "
            >
              {wishlist.length}
            </span>
          )}
        </NavLink>

        {/* Applications */}

        <NavLink
          to="/applications"
          className={linkClass}
        >
          <div className="flex items-center gap-3">
            <FileText size={18} />
            Applications
          </div>
        </NavLink>

        {/* Compare */}

        <NavLink
          to="/compare"
          className={linkClass}
        >
          <div className="flex items-center gap-3">
            <Scale size={18} />
            Compare
          </div>

          {compareList.length > 0 && (
            <span
              className="
              bg-cyan-500
              text-xs
              px-2
              py-1
              rounded-full
              "
            >
              {compareList.length}
            </span>
          )}
        </NavLink>

        {/* Divider */}

        <div className="border-t border-white/10 my-4" />

        {/* Logout */}

        <button
          onClick={logout}
          className="
          w-full
          bg-red-500
          hover:bg-red-600
          duration-300
          py-3
          rounded-xl
          flex
          items-center
          justify-center
          gap-2
          "
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </div>
  );
}