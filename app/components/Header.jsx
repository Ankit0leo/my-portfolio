import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className=" ">
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="w-32 rounded-full border-1 border-white shadow-lg shadow-black/30"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I'm KESHAB KAMAL
        <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[6xl]">
        AI/ML Engineer & Developer{" "}
      </h1>
      <p className="max-w-2xl mx-auto">
        I’m passionate about building intelligent, visually appealing, and
        user-friendly web applications.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full flex items-center gap-2 bg-black text-white"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            className="w-4 "
          />
        </a>
        <a
          href="/Keshab_CV.pdf"
          download="Keshab_CV.pdf"
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          Download Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4 "
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
