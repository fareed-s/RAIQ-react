import React from "react";
import cat1 from "../assets/images/Dried Apple.jpg";
import cat2 from "../assets/images/Dried Tomato.jpg";
import cat3 from "../assets/images/Ginger Powder.jpg";
import cat4 from "../assets/images/Dried Bitter gaurd.jpg";

const categories = [
  {
    id: 1,
    title: "Dried Fruits",
    desc: "Naturally sweet & healthy dried fruits",
    img: cat1,
    link: "https://openmarket.pk/collections/dried-fruits",
  },
  {
    id: 2,
    title: "Dried Vegetables",
    desc: "Carefully dried fresh vegetables",
    img: cat2,
    link: "https://openmarket.pk/collections/dried-vegetables",
  },
  {
    id: 3,
    title: "Spices & Powders",
    desc: "Pure & aromatic spices for taste",
    img: cat3,
    link: "https://openmarket.pk/collections/spices-powders",
  },
  {
    id: 3,
    title: "Herbal & Functional Ingredients",
    desc: "Pure & aromatic spices for taste",
    img: cat4,
    link: "https://openmarket.pk/collections/herbal-functional-ingredients",
  },
];

const Categories = () => {
  return (
    <section className="bg-[#F5E9D9] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center text-[#643023] mb-6">
          Shop by Category
        </h2>
        <p className="text-center text-[#643023] mb-14 text-lg">
          Choose from our wide range of premium categories
        </p>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <a
              key={cat.id}
              href={cat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <img
                src={cat.img}
                alt={cat.title}
                loading="lazy"
                className="w-full h-104 object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 hover:bg-black/50 bg-linear-to-t from-black/70 flex flex-col justify-end p-8">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {cat.title}
                </h3>
                <p className="text-[#F5E9D9] mb-4">{cat.desc}</p>
                <span className="text-yellow-400 font-semibold">
                  View Category 
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
