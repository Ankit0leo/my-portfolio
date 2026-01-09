import { skillsData } from "@/assets/SkillsIcon/skillicon";
import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I know</h4>
      <h2 className="text-center text-5xl font-Ovo">My Skills</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I have a diverse set of skills ranging from frontend development to machine learning and devops tools. 
        Here are some of the technologies I work with.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-100/50 hover:-translate-y-1 duration-500 w-full max-w-[160px] group shadow-sm hover:shadow-md"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 duration-500">
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-gray-700 group-hover:text-black transition-colors duration-500">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
