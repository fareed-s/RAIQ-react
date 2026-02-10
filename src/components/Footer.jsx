import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#643023] text-[#F5E9D9]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl  font-extrabold mb-4">Premium Dried Foods</h2>
          <p className="text-sm leading-relaxed text-[#E8D7C3]">
            We provide high-quality dried fruits, vegetables & spices. 100%
            natural, hygienic and full of flavor.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-[#E8D7C3]">
            <li className="hover:text-yellow-400  cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition">
              Products
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition">
              About Us
            </li>
            <li className="hover:text-yellow-400 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-[#E8D7C3] mb-2">📞 +92 300 1234567</p>
          <p className="text-sm text-[#E8D7C3] mb-6">
            📧 contact@raiqtraders.com
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400 text-black hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex justify-around border-t border-[#7A3E2E] text-center py-4 text-sm text-[#E8D7C3]">
        © {new Date().getFullYear()} Premium Dried Foods. All Rights Reserved.
        <span className="block sm:inline sm:ml-2">
          Developed by :
          <a
            href="https://code5.com.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-500 font-semibold "
          >
            {" "}
            Code5 Technology
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
