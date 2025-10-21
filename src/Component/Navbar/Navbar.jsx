import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);

  if (!loading) {
    <p>loading...</p>;
  }
  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <NavLink className="text-2xl font-bold tracking-wide">
          <span className="text-primary">World</span>
          <span className="text-secondary">Travel</span>
        </NavLink>
        <div className="hidden lg:flex gap-5 items-center">
          <NavLink
            to="/"
            className="  text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="  text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
          >
            About
          </NavLink>

          <NavLink
            to="/packages"
            className="  text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
          >
            Packages
          </NavLink>

          {user && (
            <NavLink
              to="/profile"
              className="  text-base font-medium text-base-content hover:text-primary hover:bg-base-200"
            >
              Profile
            </NavLink>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-3 items-center">
          <ThemeToggle></ThemeToggle>
          <Link
            to={"/register"}
            className="btn btn-primary text-white hover:bg-secondary hover:text-neutral transition-colors duration-300"
          >
            Register
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="  btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className="text-base-content hover:text-primary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-base-content hover:text-primary"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packages"
                className="text-base-content hover:text-primary"
              >
                Packages
              </NavLink>
            </li>
            <ThemeToggle></ThemeToggle>
            <li>
              <Link
                to={"/register"}
                className="btn btn-primary w-full mt-2 text-white hover:bg-secondary hover:text-neutral transition-all duration-300"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
