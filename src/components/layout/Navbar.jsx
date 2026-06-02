import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const { wishlist } = useWishlist();
  const { compareList } = useCompare();

  const navClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-semibold"
      : "hover:text-cyan-400 duration-300";

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      glass
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        <Link
          to="/"
          className="
          text-3xl
          font-bold
          gradient-text
          "
        >
          NextGenEdu
        </Link>

        <div className="flex items-center gap-6">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink
            to="/universities"
            className={navClass}
          >
            Universities
          </NavLink>

          <NavLink
            to="/courses"
            className={navClass}
          >
            Courses
          </NavLink>

          <NavLink
            to="/reviews"
            className={navClass}
          >
            Reviews
          </NavLink>

          <NavLink
            to="/scholarships"
            className={navClass}
          >
            Scholarships
          </NavLink>

          {/* Compare Badge */}

          <NavLink
            to="/compare"
            className="relative"
          >
            Compare

            {compareList.length > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-4
                bg-cyan-500
                text-xs
                px-2
                rounded-full
                "
              >
                {compareList.length}
              </span>
            )}
          </NavLink>

          {/* Wishlist Badge */}

          <NavLink
            to="/wishlist"
            className="relative"
          >
            Wishlist

            {wishlist.length > 0 && (
              <span
                className="
                absolute
                -top-2
                -right-4
                bg-red-500
                text-xs
                px-2
                rounded-full
                "
              >
                {wishlist.length}
              </span>
            )}
          </NavLink>

          {!user ? (
            <>
              <NavLink
                to="/login"
                className={navClass}
              >
                Login
              </NavLink>

              <Link
                to="/register"
                className="
                bg-cyan-500
                px-4
                py-2
                rounded-xl
                hover:bg-cyan-600
                duration-300
                "
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                className="
                bg-purple-500
                px-4
                py-2
                rounded-xl
                hover:bg-purple-600
                duration-300
                "
              >
                Dashboard
              </Link>

              <button
                onClick={logout}
                className="
                bg-red-500
                px-4
                py-2
                rounded-xl
                hover:bg-red-600
                duration-300
                "
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}