import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { desktopSlides, mobileSlides } from "./data";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlides(mobileSlides);
      } else {
        setSlides(desktopSlides);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: true,
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* 🔥 slick white-line fix INSIDE component */}
      <style>
        {`
          .slick-slide > div {
            line-height: 0;
          }
          .slick-slide img {
            display: block;
          }
        `}
      </style>

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full">
            <img
              src={slide.img}
              alt={slide.heading}
              className="
                w-full
                h-auto sm:h-[65vh]
                object-contain sm:object-cover
                block
              "
            />

            {/* optional text */}
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-lg sm:text-3xl font-bold">{slide.heading}</h2>
              <p className="text-sm sm:text-lg">{slide.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
