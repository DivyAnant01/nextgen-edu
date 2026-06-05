import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Bell,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCompare } from "../../context/CompareContext";
import { useApplications } from "../../context/ApplicationContext";
import { useTheme } from "../../context/ThemeContext";

import {
  useNotification,
} from "../../context/NotificationContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const { user, logout } =
    useAuth();

  const { wishlist } =
    useWishlist();

  const { compareList } =
    useCompare();

  const { applications } =
    useApplications();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  const {
  unreadCount,
} = useNotification();

  const navClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400 font-semibold whitespace-nowrap"
      : "hover:text-cyan-400 duration-300 whitespace-nowrap";

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
      backdrop-blur-xl
      "
    >
      <div
        className="
        max-w-screen-2xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        "
      >
        {/* Logo */}

        <Link
          to="/"
          className="
          text-2xl
          font-bold
          gradient-text
          shrink-0
          "
        >
          NextGenEdu
        </Link>

        {/* Desktop Menu */}

        <div
          className="
          hidden
          xl:flex
          flex-1
          justify-center
          items-center
          gap-5
          text-sm
          overflow-x-auto
          "
        >
          <NavLink
            to="/"
            className={navClass}
          >
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

          <NavLink
            to="/compare"
            className={navClass}
          >
            Compare ({compareList.length})
          </NavLink>

          <NavLink
            to="/wishlist"
            className={navClass}
          >
            Wishlist ({wishlist.length})
          </NavLink>

          {user && (
            <NavLink
              to="/applications"
              className={navClass}
            >
              Applications (
              {applications.length}
              )
            </NavLink>
          )}
                  </div>

        {/* Right Section */}

        <div
          className="
          flex
          items-center
          gap-2
          shrink-0
          ml-auto
          "
        >
          {/* Theme Toggle */}

          <button
            onClick={toggleTheme}
            className="
            p-2
            rounded-xl
            bg-white/10
            hover:bg-white/20
            "
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Notification */}

          {user && (
  <Link
    to="/notifications"
    className="
    relative
    p-2
    rounded-xl
    bg-white/10
    hover:bg-white/20
    "
  >
    <Bell size={18} />

    {unreadCount > 0 && (
      <span
        className="
        absolute
        -top-1
        -right-1
        bg-red-500
        text-[10px]
        px-1.5
        rounded-full
        "
      >
        {unreadCount}
      </span>
    )}
  </Link>
)}

          {/* Guest Buttons */}

          {!user ? (
            <div
              className="
              hidden
              xl:flex
              items-center
              gap-3
              "
            >
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
                px-3
                py-2
                text-sm
                rounded-xl
                hover:bg-cyan-600
                whitespace-nowrap
                "
              >
                Register
              </Link>
            </div>
          ) : (
            <div
              className="
              hidden
              xl:flex
              items-center
              gap-2
              "
            >
              <Link
                to="/dashboard"
                className="
                bg-purple-500
                px-3
                py-2
                text-sm
                rounded-xl
                hover:bg-purple-600
                whitespace-nowrap
                "
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="
                bg-white/10
                px-3
                py-2
                text-sm
                rounded-xl
                max-w-[140px]
                truncate
                "
              >
                {user?.name}
              </Link>

              <button
                onClick={logout}
                className="
                bg-red-500
                px-3
                py-2
                text-sm
                rounded-xl
                hover:bg-red-600
                whitespace-nowrap
                "
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Toggle */}

          <button
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
            className="
            xl:hidden
            "
          >
            {mobileOpen ? (
              <X />
            ) : (
              <Menu />
            )}
          </button>
        </div>
      </div>

            {/* Mobile Menu */}

      {mobileOpen && (
        <div
          className="
          xl:hidden
          glass
          px-6
          pb-6
          "
        >
          <div className="flex flex-col gap-4">

            <NavLink
              to="/"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/universities"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Universities
            </NavLink>

            <NavLink
              to="/courses"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Courses
            </NavLink>

            <NavLink
              to="/reviews"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Reviews
            </NavLink>

            <NavLink
              to="/scholarships"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Scholarships
            </NavLink>

            <NavLink
              to="/wishlist"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Wishlist ({wishlist.length})
            </NavLink>

            <NavLink
              to="/compare"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Compare ({compareList.length})
            </NavLink>

            {user && (
              <>
                <NavLink
                  to="/applications"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  Applications (
                  {applications.length}
                  )
                </NavLink>

                <NavLink
                  to="/dashboard"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/profile"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  Profile
                </NavLink>

                <button
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="
                  bg-red-500
                  py-2
                  rounded-xl
                  "
                >
                  Logout
                </button>
              </>
            )}

            {!user && (
              <>
                <NavLink
                  to="/login"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                >
                  Login
                </NavLink>

                <Link
                  to="/register"
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="
                  bg-cyan-500
                  py-2
                  rounded-xl
                  text-center
                  "
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}