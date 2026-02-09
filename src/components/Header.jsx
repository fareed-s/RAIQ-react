import React from 'react';
import { FiSearch, FiShoppingCart } from "react-icons/fi"; // search aur cart icons
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <nav className="w-full bg-white py-3">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex-1"></div>

        <div className="flex justify-center flex-1">
          <img
            src={logo}
            alt="Logo"
            className="h-17 md:h-15 w-auto  cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="flex items-center space-x-6 flex-1 justify-end text-white text-2xl">
          <FiSearch className="cursor-pointer text-gray-500 hover:text-yellow-400 transition-colors duration-300" />
          <FiShoppingCart className="cursor-pointer text-gray-500 hover:text-yellow-400 transition-colors duration-300" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
