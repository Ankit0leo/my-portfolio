import React from "react";
import Image from "next/image";
import { assets } from "@/assets/data/assets";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="text-center">
        <h1 className="text-3xl font-bold cursor-pointer font-Ovo tracking-wider">
          KeKe<span className="text-rose-500">.</span>
        </h1>
        <div className="w-max flex items-center gap-2 mx-auto mt-5">
          <a href="mailto:keshabwii66@gmail.com" className="flex items-center gap-2 hover:text-rose-500 transition-colors duration-300">
            <Image src={assets.mail_icon} alt="Email" className="w-6" />
            <span className="text-gray-600 font-Outfit mr-4">keshabwii66@gmail.com</span>
          </a>
          <a href="tel:+9779817439773" className="flex items-center gap-2 hover:text-rose-500 transition-colors duration-300">
            <Image src={assets.mobile_icon} alt="Phone" className="w-6" />
            <span className="text-gray-600 font-Outfit">+977 9817439773</span>
          </a>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-200 mx-[10%] mt-12 py-6">
        <p className="text-gray-500 font-Outfit text-sm">
          © 2024 KeKe. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0 font-Outfit text-sm">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/KESHABWI"
              className="flex items-center gap-2 hover:text-rose-500 transition-colors duration-300"
            >
              <Image src={assets.github_icon} alt="GitHub" className="w-5" />
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/keshab-kamal-674b86238/"
              className="flex items-center gap-2 hover:text-rose-500 transition-colors duration-300"
            >
              <Image src={assets.linkedin_icon} alt="LinkedIn" className="w-5" />
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
