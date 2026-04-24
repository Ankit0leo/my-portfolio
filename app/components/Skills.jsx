import { skillsData } from "@/assets/data/skills";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="skills" 
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I know
      </motion.h4>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        My Skills
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I have a diverse set of skills ranging from frontend development to machine learning and devops tools. 
        Here are some of the technologies I work with.
      </motion.p>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              visible: { opacity: 1, scale: 1, y: 0 }
            }}
            whileHover={{ scale: 1.1, y: -5, rotate: [-2, 2, 0] }}
            className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-2xl cursor-pointer bg-white/40 hover:bg-white duration-300 w-full max-w-[160px] group shadow-sm hover:shadow-lg"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110 duration-500">
              <Image 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
            <p className="text-sm font-semibold text-gray-700 group-hover:text-black transition-colors duration-500">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
