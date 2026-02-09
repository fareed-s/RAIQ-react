import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../components/data";
import Loader from "./Loader";

const Products = () => {
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [redirectUrl, setRedirectUrl] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      mirror: false,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }, []);

  const handleRedirect = (url) => {
    setLoading(true); // loader show
    setRedirectUrl(url);

    setTimeout(() => {
      window.location.href = url; // redirect after 2 sec
    }, 2000);
  };

  return (
    <div className="bg-[#CFB999] py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-20 relative">
      {/* Loader */}
      {loading && <Loader />}

      {/* Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#643023] mb-4 sm:mb-6"
        data-aos="fade-down"
      >
        Our Products
      </h2>
      <p
        className="text-center text-[#643023] text-sm sm:text-base md:text-lg font-bold leading-relaxed mb-12 sm:mb-16"
        data-aos="fade-up"
      >
        Explore our exclusive collection of premium products designed for you.
      </p>

      {/* Products Grid */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
  {products.map((product, index) => (
    <div
      key={product.id}
      onClick={() => handleRedirect(product.buyLink)}
      className="group relative overflow-hidden rounded-3xl shadow-xl bg-white transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
      data-aos="zoom-in"
      data-aos-delay={index * 80}
    >
      {/* Product Image */}
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-52 sm:h-64 md:h-72 lg:h-64 xl:h-72 object-cover transition-transform duration-500 group-hover:scale-110 ease-in-out"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Product Info */}
      <div className="p-3 sm:p-4 md:p-5 text-center  relative z-10">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#643023] truncate">
          {product.name}
        </h3>
        <p className="text-[#643023] font-semibold mt-1 text-xs sm:text-sm md:text-base">
          {product.price}
        </p>
      </div>

      {/* Buy Button */}
      <div className="absolute inset-0 flex items-start p-2 justify-end z-10">
        <button
          onClick={(e) => {
            e.stopPropagation(); // ❗ card click se alag rakhe
            handleRedirect(product.buyLink);
          }}
          className="px-3 sm:px-4 py-1 sm:py-2 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-xs sm:text-sm md:text-base"
        >
          Buy
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Products;
