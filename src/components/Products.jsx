import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../assets/images/Dried Apple.jpg";
import img2 from "../assets/images/Dried Banana.jpg";
import img3 from "../assets/images/Dried Ladyfinger.jpg";
import img4 from "../assets/images/Dried Bitter gaurd.jpg";
import img5 from "../assets/images/Dried Mango.jpg";
import img6 from "../assets/images/Dried Red chili.jpg";
import img7 from "../assets/images/Dried taro root.jpg";
import img8 from "../assets/images/Dried Tomato.jpg";
import img9 from "../assets/images/Piyaz.jpg";
import img10 from "../assets/images/Hari Mirch.jpg";
import img11 from "../assets/images/Ginger Powder.jpg";
import img12 from "../assets/images/Garlic Powder.jpg";
import img13 from "../assets/images/Ajwa Dats.jpg";

const products = [
  {
    id: 1,
    name: "Dried Apple Slices – Natural & Healthy",
    price: "Rs.510.00 PKR",
    img: img1,
    buyLink:
      "https://openmarket.pk/products/dried-apple-slices-natural-healthy",
  },
  {
    id: 2,
    name: "Dried Banana Chips – Naturally Sweet",
    price: "Rs.300.00 PKR",
    img: img2,
    buyLink:
      "https://openmarket.pk/products/dried-apple-slices-natural-healthy-1",
  },
  {
    id: 3,
    name: "Dried Ladyfinger (Okra) – Natural Slices",
    price: "Rs.370.00 PKR",
    img: img3,
    buyLink:
      "https://openmarket.pk/products/dried-ladyfinger-okra-natural-slices",
  },
  {
    id: 4,
    name: "Dried Green Chili – Bold & Spicy",
    price: "Rs.500.00 PKR",
    img: img4,
    buyLink:
      "https://openmarket.pk/products/whole-dried-green-chili-bold-spicy",
  },
  {
    id: 5,
    name: "Dried Mango Slices – Sweet & Chewy",
    price: "Rs.350.00 PKR",
    img: img5,
    buyLink: "https://openmarket.pk/products/dried-mango-slices-sweet-chewy",
  },
  {
    id: 6,
    name: "Dried Red Chili – Bold & Spicy",
    price: "Rs.400.00 PKR",
    img: img6,
    buyLink: "https://openmarket.pk/products/whole-dried-red-chili-bold-spicy",
  },
  {
    id: 7,
    name: "Dried Taro Root (Arvi) – Natural Cut",
    price: "Rs.220.00 PKR",
    img: img7,
    buyLink: "https://openmarket.pk/products/dried-taro-root-arvi-natural-cut",
  },
  {
    id: 8,
    name: "Tomato Powder – Pure & Natural",
    price: "Rs.270.00 PKR",
    img: img8,
    buyLink: "https://openmarket.pk/products/tomato-powder-pure-natural",
  },
  {
    id: 9,
    name: "Brown Piyaz – Crispy Fried Onion",
    price: "Rs.320.00 PKR",
    img: img9,
    buyLink: "https://openmarket.pk/products/brown-piyaz-crispy-fried-onion",
  },
  {
    id: 10,
    name: "Dried Green Chili – Bold & Spicy",
    price: "Rs.500.00 PKR",
    img: img10,
    buyLink:
      "https://openmarket.pk/products/whole-dried-green-chili-bold-spicy",
  },
  {
    id: 11,
    name: "Ginger Powder – Natural & Powerful Flavor",
    price: "Rs.290.00 PKR",
    img: img11,
    buyLink:
      "https://openmarket.pk/products/ginger-powder-natural-powerful-flavor",
  },
  {
    id: 12,
    name: "Garlic Powder – Pure & Aromatic",
    price: "Rs.310.00 PKR",
    img: img12,
    buyLink: "http://openmarket.pk/products/garlic-powder-pure-aromatic",
  },
  {
    id: 13,
    name: "Ajwa Dates – Premium Quality",
    price: "Rs.510.00 PKR",
    img: img13,
    buyLink: "https://openmarket.pk/products/ajwa-dates-premium-quality?_pos=1&_sid=735fe02b4&_ss=r",
  },
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-[#CFB999] py-20 px-20 ">
      {/* Heading */}
      <h2
        className="text-5xl md:text-6xl font-extrabold text-center text-white mb-6"
        data-aos="fade-down"
      >
        Our Products
      </h2>
      <p
        className="text-center text-white text-lg font-bold leading-relaxed mb-16"
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
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
        <div className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition text-base sm:text-lg">
          Buy Now
        </div>
      </div>
    </a>
  ))}
</div>

    </div>
  );
};

export default Products;
