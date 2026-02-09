import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { products } from "../components/data";

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#CFB999] py-20 px-20 ">
      {/* Heading */}
      <h2
        className="text-5xl md:text-6xl font-extrabold text-center text-[#643023] mb-6"
        data-aos="fade-down"
      >
        Our Products
      </h2>
      <p
        className="text-center text-[#643023] text-lg font-bold leading-relaxed mb-16"
        data-aos="fade-up"
      >
        Explore our exclusive collection of premium products designed for you.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <a
            key={product.id}
            href={product.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl shadow-xl bg-white transition-transform duration-300 "
            data-aos="zoom-in"
            data-aos-delay={index * 80}
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-64 sm:h-72 md:h-80 lg:h-72 xl:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-bold text-[#643023]">
                {product.name}
              </h3>
              <p className="text-[#643023] font-semibold mt-1 text-base">
                {product.price}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute hover:bg-black/50 bg-opacity-50 inset-0 flex items-start p-2 justify-end">
              <div
                className="px-4 py-2  bg-yellow-400 text-black font-bold rounded-4xl 
                  hover:bg-yellow-500 hover:scale-105 transition-all duration-300 
                  text-base sm:text-lg"
              >
                Buy
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Products;
