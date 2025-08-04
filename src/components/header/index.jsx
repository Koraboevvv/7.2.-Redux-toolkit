import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-indigo-700 text-white shadow-md">
      <div className=" mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold cursor-pointer">
          Logoo
        </div>
        <nav className="space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-indigo-300 border-b-2 border-indigo-300 pb-1"
                : "hover:text-indigo-300 transition-colors"
            }
          >
            Home
          </NavLink>          
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-300 border-b-2 border-indigo-300 pb-1"
                : "hover:text-indigo-300 transition-colors"
            }
          >
            About
          </NavLink>
        </nav>
        <button className="bg-white text-indigo-700 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
