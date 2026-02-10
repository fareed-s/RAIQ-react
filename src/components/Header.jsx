import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // search aur cart icons
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <nav className="w-full bg-white py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-start md:justify-center md:flex-1">
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-14 w-auto cursor-pointer brightness-110 "
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 text-2xl">
          <FiSearch className="cursor-pointer text-gray-500 hover:text-yellow-400 transition-colors duration-300" />
          <FiShoppingCart className="cursor-pointer text-gray-500 hover:text-yellow-400 transition-colors duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
