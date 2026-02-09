import React from "react";
import loaderImg from "../assets/images/loadeer.png"; // aapka custom image path

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="relative w-40 h-40 sm:w-48 sm:h-48">
        {/* Circular spinning lines */}
        <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin-slow"></div>
        <div className="absolute inset-0 rounded-full border-4 border-yellow-300 border-t-transparent animate-spin-reverse"></div>

        {/* Center Image - Bigger and properly centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={loaderImg}
            alt="Loading..."
            className="w-23 h-23 rounded-full sm:w-24 sm:h-24 object-contain animate-pulse-slow"
          />
        </div>
        
        {/* Loading text */}
        <div className="absolute -bottom-10 left-0 right-0 text-center">
          <p className="text-white font-semibold text-lg animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;