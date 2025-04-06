import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg py-4">
      <div className="container mx-auto flex justify-center space-x-8">
        <Link
          to="/"
          className="text-white text-lg font-semibold hover:underline hover:text-yellow-300 transition duration-300"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white text-lg font-semibold hover:underline hover:text-yellow-300 transition duration-300"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
