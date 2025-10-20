import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          TextingFactory
        </Link>
        <div className="space-x-6 hidden md:flex">
          <a href="#how" className="hover:text-blue-400">How It Works</a>
          <a href="#earn" className="hover:text-blue-400">Earnings</a>
          <a href="#testimonials" className="hover:text-blue-400">Reviews</a>
          <Link to="/login" className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
