"use client";
import { assets } from "@/assets/data/assets";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Replace with your own Access Key from Web3Forms
    formData.append("access_key", "59c1e3d3-cd26-4623-a751-72b1857f1e43");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/background/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] relative z-10"
    >
      <motion.h4 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I&apos;d love to hear from you! Whether you have a question about a project, 
        a collaboration opportunity, or just want to say hi, feel free to reach out.
      </motion.p>

      <motion.form 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        onSubmit={onSubmit} 
        className="max-w-2xl mx-auto backdrop-blur-sm bg-white/30 p-8 rounded-2xl shadow-xl border border-white/40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 mb-8">
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white/80 focus:bg-white transition-colors"
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white/80 focus:bg-white transition-colors"
          />
        </div>
        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white/80 focus:bg-white transition-colors mb-6"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 shadow-md"
        >
          Submit now
          <Image src={assets.send_icon} alt="Send" className="w-4" />
        </motion.button>

        <p className="mt-4 text-center text-gray-800 font-medium">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
