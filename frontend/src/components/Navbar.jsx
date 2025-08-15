import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            FormBuilder
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-indigo-600 font-medium ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/builder"
              className={({ isActive }) =>
                `hover:text-indigo-600 font-medium ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                }`
              }
            >
              Builder
            </NavLink>

            <NavLink
              to="/preview/" // example preview
              className={({ isActive }) =>
                `hover:text-indigo-600 font-medium ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                }`
              }
            >
              Preview
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden px-4 pb-3 space-y-2 bg-gray-50">
        <NavLink
          to="/"
          className="block text-gray-700 hover:text-indigo-600 font-medium"
        >
          Home
        </NavLink>
        <NavLink
          to="/builder"
          className="block text-gray-700 hover:text-indigo-600 font-medium"
        >
          Builder
        </NavLink>
        <NavLink
          to="/preview/1"
          className="block text-gray-700 hover:text-indigo-600 font-medium"
        >
          Preview
        </NavLink>
      </div>
    </nav>
  );
}
