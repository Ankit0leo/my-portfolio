import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/data/assets";

// Replace these with your actual icon imports from assets
const MAIL_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PERSON_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
);

const MSG_ICON = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const SEND_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const inputVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    formRef.current?.reset();
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* Section headings */}
      <motion.h4
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Get In Touch
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-Ovo"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I&apos;m always open to new opportunities, collaborations, or just a
        friendly chat. Feel free to reach out and I&apos;ll get back to you
        as soon as possible.
      </motion.p>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white/40 border border-gray-300 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 md:p-10"
      >
        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
            className="flex flex-col gap-5"
          >
            {/* Name field */}
            <motion.div variants={inputVariants} className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-400 transition-colors duration-300">
                {PERSON_ICON}
              </span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 bg-white/60 font-Ovo text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all duration-300"
              />
            </motion.div>

            {/* Email field */}
            <motion.div variants={inputVariants} className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-rose-400 transition-colors duration-300">
                {MAIL_ICON}
              </span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 bg-white/60 font-Ovo text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all duration-300"
              />
            </motion.div>

            {/* Message field */}
            <motion.div variants={inputVariants} className="relative group">
              <span className="absolute left-4 top-4 text-gray-400 group-focus-within:text-rose-400 transition-colors duration-300">
                {MSG_ICON}
              </span>
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-gray-300 bg-white/60 font-Ovo text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-100 transition-all duration-300 resize-none leading-relaxed"
              />
            </motion.div>
          </motion.div>

          {/* Status messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 px-4 py-3 rounded-xl border border-green-200 bg-green-50 text-green-700 text-sm font-Ovo flex items-center gap-2"
            >
              <span>✓</span> Message sent! I&apos;ll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 px-4 py-3 rounded-xl border border-red-200 bg-red-50 text-red-600 text-sm font-Ovo"
            >
              Something went wrong. Please try again.
            </motion.div>
          )}

          {/* Submit button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-7 flex justify-center"
          >
            <motion.button
              type="submit"
              disabled={status === "sending"}
              whileHover={status !== "sending" ? { scale: 1.05, y: -2 } : {}}
              whileTap={status !== "sending" ? { scale: 0.97 } : {}}
              className="flex items-center gap-3 px-10 py-3 border border-gray-500 rounded-full font-Ovo text-sm cursor-pointer hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <span className="animate-pulse">Sending…</span>
              ) : (
                <>
                  Send Message
                  {SEND_ICON}
                </>
              )}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>

      {/* Footer note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-6 text-sm text-gray-400 font-Ovo"
      >
        Typically responds within 24 hours
      </motion.p>
    </motion.div>
  );
};

export default Contact;