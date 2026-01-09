import { assets, toolsData } from "@/assets/assets";
import { infoList } from "@/assets/AboutMeicon/aboutmeicon";
import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none border-[1px] border-gray-700">
          <Image
            src={assets.user_image}
            alt="User Image"
            className="w-full rounded-3xl "
          />
        </div>
        <div className="flex-1">
          <p className="text-lg">
            I’m a software developer skilled in Python and JavaScript, 
            building web applications with React, HTML, and CSS, and APIs 
            using FastAPI. I work with PostgreSQL, Docker, Git/GitHub, and VS Code,
             and have experience in AI/ML using TensorFlow, PyTorch, and Hugging Face.
              I enjoy building efficient, real-world solutions and continuously learning new technologies.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-gray-100 hover:translate-y-1 duration-500"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <div>
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm break-words">{description}</p>
                </div>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700 font-Ovo">Tools Most I use </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className=" flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 duration-300"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
