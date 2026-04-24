import React from "react";
import Image from "next/image";
import { assets } from "@/assets/data/assets";
import { motion } from "framer-motion";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      <motion.div variants={itemVariants}>
        <Image
          src={assets.profile_img}
          alt="Profile Image"
          className="w-32 rounded-full border-1 border-white shadow-lg shadow-black/30"
        />
      </motion.div>
      <motion.h3 variants={itemVariants} className="flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I&apos;m KESHAB KAMAL
        <motion.div
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
        >
          <Image src={assets.hand_icon} alt="Hand Icon" className="w-6" />
        </motion.div>
      </motion.h3>
      <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-Ovo leading-tight">
        Python Backend Developer <br/> & Project Lead
      </motion.h1>
      <motion.p variants={itemVariants} className="max-w-2xl mx-auto">
        I’m passionate about building scalable multi-tenant architectures, 
        real-time systems, and AI-driven applications.
      </motion.p>
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-10 py-3 border border-white rounded-full flex items-center gap-2 bg-black text-white"
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt="Right Arrow"
            className="w-4 "
          />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume/Keshab_Resume.pdf"
          download="Keshab_Kamal_Resume.pdf"
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          Download Resume
          <Image
            src={assets.download_icon}
            alt="Download Icon"
            className="w-4 "
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
