import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpeg";

const HeroSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const slides = [
    {
      img: img1,
      heading: "Nature Beauty",
      text: "Explore the beauty of nature",
    },
    {
      img: img2,
      heading: "City Life",
      text: "Discover the amazing city vibes",
    },
    {
      img: img3,
      heading: "Technology World",
      text: "Innovations that change the world",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true, // optional, aap chaho to true kar sakte ho
  };

  return (
    <div className="w-full h-[65vh] relative overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[65vh]">
            <img
              src={slide.img}
              alt={slide.heading}
              className="w-full h-[65vh] object-cover brightness-95 "
            />
            {/* <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center text-white px-4">
              <h1
                className="text-4xl text-[#6F3827] md:text-6xl font-bold mb-4"
                data-aos="fade" // 👈 yahan fade use karo instead of fade-down
              >
                {slide.heading}
              </h1>
              <p
                className="text-lg md:text-2xl"
                data-aos="fade" // 👈 yahan bhi fade use karo
              >
                {slide.text}
              </p>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
