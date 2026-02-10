import React from "react";
import loaderImg from "../assets/images/logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm">
      <div
        className="
      relative
      w-36 h-36
      sm:w-44 sm:h-44
      md:w-52 md:h-52
      lg:w-60 lg:h-60
    "
      >
        {/* Spinning circles */}
        <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 rounded-full border-4 border-yellow-500 border-t-transparent animate-spin-slow"></div>
        <div className="absolute inset-0 rounded-full border-4 border-yellow-300 border-t-transparent animate-spin-reverse"></div>

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center rounded-full  p-1">
          <img
            src={loaderImg}
            alt="Loading..."
            className="
          w-[65%] h-[65%]
          sm:w-[68%] sm:h-[68%]
          md:w-[70%] md:h-[70%]
          object-contain
          brightness-200
        "
          />
        </div>

        {/* Text */}
        <div className="absolute -bottom-10 left-0 right-0 text-center">
          <p className="text-white font-semibold text-base sm:text-lg animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
