import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

const Navigationbar = ({ isloggedin, setloggedin }) => {
  return (
    <header className="w-full bg-gray-950 border-b border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <NavLink to="/">
          <img
            src={Logo}
            alt="StudyNotion Logo"
            className="w-40 cursor-pointer"
          />
        </NavLink>

        {/* Nav Links */}
        <nav className="flex items-center gap-8 text-gray-300 font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-white transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-white transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
              className={({ isActive }) =>
              isActive
                ? "text-blue-500"
                : "hover:text-white transition"
            }
          >
            Contact
          </NavLink>

        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          {!isloggedin && (
            <NavLink to="/login">
              <button
                className="
                  px-5
                  py-2
                  rounded-lg
                  border
                  border-gray-700
                  hover:border-blue-500
                  hover:text-blue-400
                  transition-all
                "
              >
                Log In
              </button>
            </NavLink>
          )}

          {!isloggedin && (
            <NavLink to="/signup">
              <button
                className="
                  px-5
                  py-2
                  rounded-lg
                  bg-blue-600
                  hover:bg-blue-700
                  transition-all
                  font-semibold
                  shadow-lg
                  shadow-blue-600/30
                "
              >
                Sign Up
              </button>
            </NavLink>
          )}

          {isloggedin && (
            <>
              <NavLink to="/dashboard">
                <button
                  className="
                    px-5
                    py-2
                    rounded-lg
                    bg-green-600
                    hover:bg-green-700
                    transition-all
                    font-semibold
                    shadow-lg
                    shadow-green-600/30
                  "
                >
                  Dashboard
                </button>
              </NavLink>

              <button
                onClick={() => {
                  setloggedin(false);
                  toast.success("Logged Out");
                }}
                className="
                  px-5
                  py-2
                  rounded-lg
                  bg-red-600
                  hover:bg-red-700
                  transition-all
                  font-semibold
                  shadow-lg
                  shadow-red-600/30
                "
              >
                Log Out
              </button>
            </>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navigationbar;