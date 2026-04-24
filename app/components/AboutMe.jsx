import { assets, toolsData } from "@/assets/data/assets";
import { infoList } from "@/assets/data/aboutme";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="about" 
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center text-5xl"
      >
        About Me
      </motion.h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-64 sm:w-80 rounded-3xl max-w-none border-[1px] border-gray-700"
        >
          <Image
            src={assets.user_image}
            alt="User Image"
            className="w-full rounded-3xl "
          />
        </motion.div>
        <div className="flex-1">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg"
          >
            I am a high-impact <b>Python Backend Developer & Project Lead</b> with expertise in building
            multi-tenant SaaS architectures, real-time systems, and AI-driven RAG applications.
            Skilled in architecting secure RESTful APIs (DRF/FastAPI), orchestrating <b>LangChain/LangGraph</b> workflows,
            and managing production-ready infrastructure on <b>AWS</b> with Docker. I am passionate about 
            building scalable, efficient, and real-world solutions that deliver high value.
          </motion.p>
          <motion.ul 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, delayChildren: 0.5 }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mt-6"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, translateY: -5 }}
                className="border-[0.5px] border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-gray-100 duration-300"
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <div>
                  <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm break-words">{description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="my-6 text-gray-700 font-Ovo"
          >
            Tools Most I use 
          </motion.h4>
          <motion.ul 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 1.0 }
              }
            }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className=" flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 duration-300"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
