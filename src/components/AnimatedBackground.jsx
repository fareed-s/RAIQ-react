import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { productss } from "../components/data";



const AnimatedBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Total 3 sets create karo (original + 2 copies)
    for (let i = 0; i < 2; i++) {
      const children = Array.from(container.children);
      children.forEach(child => {
        const clone = child.cloneNode(true);
        container.appendChild(clone);
      });
    }

    // GSAP seamless loop with 33.33% movement
    gsap.to(container, {
      x: "-33.33%", // Ab 33.33% move karega
      ease: "linear",
      duration: 20,
      repeat: -1,
      modifiers: {
        x: (x) => {
          const value = parseFloat(x);
          // Reset when reach -33.33%
          return (value % -33.33) + "%";
        }
      }
    });
  }, []);

  return (
    <div className="w-full overflow-hidden relative h-55 bg-[#CFB999]">
      <div
        ref={containerRef}
        className="flex items-center h-full"
        style={{ whiteSpace: "nowrap", display: "flex" }}
      >
        {productss.map((brand, i) => (
          <a
            key={i}
            href={brand.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 mx-2 relative"
          >
            <img
              src={brand.img}
              alt={brand.name}
              className="h-48 w-auto object-cover rounded-xl shadow-lg"
            />
            <div className="absolute bottom-2 left-2 bg-black/50 px-2 py-1 rounded text-white text-sm font-semibold">
              {brand.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;