import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img4 from "../assets/images/banner/4.jpg";
import img5 from "../assets/images/banner/5.jpg";
import img6 from "../assets/images/banner/6.jpg";
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
    {
      img: img4,
      heading: "Technology World",
      text: "Innovations that change the world",
    },
    {
      img: img5,
      heading: "Technology World",
      text: "Innovations that change the world",
    },
    {
      img: img6,
      heading: "Technology World",
      text: "Innovations that change the world",
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
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
