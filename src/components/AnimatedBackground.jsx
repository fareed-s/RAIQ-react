import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { productss } from "../components/data";
import Loader from "./Loader";

const AnimatedBackground = () => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const container = containerRef.current;

    // 3 sets (original + 2 copies)
    for (let i = 0; i < 2; i++) {
      const children = Array.from(container.children);
      children.forEach((child) => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });
    }

    gsap.to(container, {
      x: "-33.33%",
      ease: "linear",
      duration: 20,
      repeat: -1,
      modifiers: {
        x: (x) => {
          const value = parseFloat(x);
          return (value % -33.33) + "%";
        },
      },
    });
  }, []);

  const handleRedirect = (url) => {
    setLoading(true);

    setTimeout(() => {
      window.location.href = url;
    }, 2000);
  };

  return (
    <div className="w-full overflow-hidden relative h-55 bg-[#9c8666]">
      {/* Loader */}
      {loading && <Loader />}

      <div
        ref={containerRef}
        className="flex items-center h-full"
        style={{ whiteSpace: "nowrap" }}
      >
        {productss.map((brand, i) => (
          <div
            key={i}
            onClick={() => handleRedirect(brand.buyLink)}
            className="flex-shrink-0 mx-2 relative cursor-pointer"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="h-48 w-auto object-cover rounded-xl shadow-lg"
            />

            <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-white text-sm font-semibold">
              {brand.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
