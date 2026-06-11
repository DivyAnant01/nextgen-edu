import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] =
    useState(false);

  const {
    theme,
    toggleTheme,
  } = useTheme();

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

          {/* <NavLink
            to="/admission"
            className={navClass}
          >
            Admission
          </NavLink> */}

          <NavLink
            to="/about"
            className={navClass}
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={navClass}
          >
            Contact
          </NavLink>
        </div>

        {/* Right Section */}

        <div
          className="
          flex
          items-center
          gap-3
          ml-auto
          "
        >
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

          <Link
            to="/contact"
            className="
            hidden
            xl:block
            bg-cyan-500
            px-4
            py-2
            rounded-xl
            hover:bg-cyan-600
            "
          >
            Apply
          </Link>

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

            {/* <NavLink
              to="/admission"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Admission
            </NavLink> */}

            <NavLink
              to="/about"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() =>
                setMobileOpen(false)
              }
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
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
              Apply
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}