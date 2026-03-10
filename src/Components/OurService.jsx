import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function OurService() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const toggleVisibility = () => {
    if (isVisible === false) {
      setIsVisible(true);
      setIsVisible2(false);
      setIsVisible3(false);
      setIsVisible4(false);
    } else {
      setIsVisible(false);
    }
  };

  const toggleVisibility2 = () => {
    if (isVisible2 === false) {
      setIsVisible2(true);
      setIsVisible(false);
      setIsVisible3(false);
      setIsVisible4(false);
    } else {
      setIsVisible2(false);
    }
  };

  const toggleVisibility3 = () => {
    if (isVisible3 === false) {
      setIsVisible3(true);
      setIsVisible2(false);
      setIsVisible(false);
      setIsVisible4(false);
    } else {
      setIsVisible3(false);
    }
  };

  const toggleVisibility4 = () => {
    if (isVisible4 === false) {
      setIsVisible4(true);
      setIsVisible3(false);
      setIsVisible2(false);
      setIsVisible(false);
    } else {
      setIsVisible4(false);
    }
  };

  // Container controls the stagger of its direct children (the cards)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.25,
      },
    },
  };

  // Small item variant for subtle inner fades (kept for headings/paragraphs)
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45 },
    },
  };

  // Card animation - these are the direct children of the grid and will animate one-by-one
  const cardVariants = {
    hidden: { x: -40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        duration: 0.7,
      },
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(187, 0, 174, 0.35)",
      transition: { type: "spring", stiffness: 400, damping: 12 },
    },
  };

  return (
    <section
      className="pt-16 max-w-6xl mx-auto px-4 md:px-10 py-8 mt-10"
      id="service"
    >
      {/* Title and Description */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-2xl text-center tracking-[10px] mb-10 font-bold text-[#ff00ee]"
          variants={itemVariants}
        >
          QUALITY <span className="text-[#ffffffb0]">SERVICES</span>
        </motion.h2>
        <motion.p
          className="text-center text-white mb-15"
          variants={itemVariants}
        >
          As a passionate developer, I transform your innovative ideas into
          exceptional digital experiences. From concept to deployment, I create
          unique web solutions that not only inspire but drive real results for
          your business and leave lasting impressions on your customers.
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Web Development */}
        <motion.div
          onClick={toggleVisibility}
          className="bg-linear-to-r from-[#1f003d] to-[#0f0015] rounded-[10px] cursor-pointer flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 gap-4 w-full"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h3
            className="p-6 md:p-10 text-[#9200c745] text-4xl md:text-6xl font-bold w-full md:w-auto text-center md:text-left shrink-0"
            variants={itemVariants}
          >
            01
          </motion.h3>
          <motion.div variants={itemVariants}>
            <motion.h2
              className=" md:text-xl lg:text-2xl font-bold text-white"
              variants={itemVariants}
            >
              Web Development
            </motion.h2>
            <motion.p className="text-white  mt-3 mb-3" variants={itemVariants}>
              Conducting qualitative and quantitative research and analysis to
              inform design decisions.
            </motion.p>
            <motion.div
              className={`${isVisible === true ? "block" : "hidden"}`}
              variants={itemVariants}
            >
              <motion.ul className="text-white flex flex-col gap-2">
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Responsive Design
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Performance Optimization
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Cross-Browser Compatibility
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  API Integration
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.button
            className="bg-[#2a003d] p-3 md:p-4 rounded-3xl text-white text-xl md:text-2xl mt-4 md:mt-0 md:ml-auto"
            variants={itemVariants}
          >
            <i className="fa-solid fa-angle-right"></i>
          </motion.button>
        </motion.div>

        {/* UI/UX Design */}
        <motion.div
          onClick={toggleVisibility2}
          className="bg-linear-to-r from-[#1f003d] to-[#0f0015] rounded-[10px] cursor-pointer flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 gap-4 w-full"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h3
            className="p-6 md:p-10 text-[#9200c745] text-4xl md:text-6xl font-bold w-full md:w-auto text-center md:text-left shrink-0"
            variants={itemVariants}
          >
            02
          </motion.h3>
          <motion.div variants={itemVariants}>
            <motion.h2
              className="lg:text-2xl md:text-xl font-bold text-white"
              variants={itemVariants}
            >
              UI/UX Design
            </motion.h2>
            <motion.p className="text-white mt-3 mb-3" variants={itemVariants}>
              Creating intuitive and engaging user-centered designs through
              wireframing and prototyping.
            </motion.p>
            <motion.div
              className={`${isVisible2 === true ? "block" : "hidden"}`}
              variants={itemVariants}
            >
              <motion.ul className="text-white flex flex-col gap-2">
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Wireframing
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Prototyping
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  User Testing
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Visual Design
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.button
            className="bg-[#2a003d] p-3 md:p-4 rounded-3xl text-white text-xl md:text-2xl mt-4 md:mt-0 md:ml-auto"
            variants={itemVariants}
          >
            <i className="fa-solid fa-angle-right"></i>
          </motion.button>
        </motion.div>

        {/* E-Commerce Development */}
        <motion.div
          onClick={toggleVisibility3}
          className="bg-linear-to-r from-[#1f003d] to-[#0f0015] rounded-[10px] cursor-pointer flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 gap-4 w-full"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h3
            className="p-6 md:p-10 text-[#9200c745] text-4xl md:text-6xl font-bold w-full md:w-auto text-center md:text-left shrink-0"
            variants={itemVariants}
          >
            03
          </motion.h3>
          <motion.div variants={itemVariants}>
            <motion.h2
              className="lg:text-2xl md:text-xl font-bold text-white"
              variants={itemVariants}
            >
              E-Commerce Development
            </motion.h2>
            <motion.p className="text-white mt-3 mb-3" variants={itemVariants}>
              Building online stores and payment-ready web applications for your
              business.
            </motion.p>
            <motion.div
              className={`${isVisible3 === true ? "block" : "hidden"}`}
              variants={itemVariants}
            >
              <motion.ul className="text-white flex flex-col gap-2">
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Product Listing & Cart System
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Payment Gateway Integration
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Order Management System
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Secure Checkout & Authentication
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.button
            className="bg-[#2a003d] p-3 md:p-4 rounded-3xl text-white text-xl md:text-2xl mt-4 md:mt-0 md:ml-auto"
            variants={itemVariants}
          >
            <i className="fa-solid fa-angle-right"></i>
          </motion.button>
        </motion.div>

        {/* Database Design */}
        <motion.div
          onClick={toggleVisibility4}
          className="bg-linear-to-r from-[#1f003d] to-[#0f0015] rounded-[10px] cursor-pointer flex flex-col md:flex-row items-start md:items-center p-6 md:p-8 gap-4 w-full"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h3
            className="p-6 md:p-10 text-[#9200c745] text-4xl md:text-6xl font-bold w-full md:w-auto text-center md:text-left shrink-0"
            variants={itemVariants}
          >
            04
          </motion.h3>
          <motion.div variants={itemVariants}>
            <motion.h2
              className="lg:text-2xl md:text-xl font-bold text-white"
              variants={itemVariants}
            >
              Database Design
            </motion.h2>
            <motion.p className="text-white mt-3 mb-3" variants={itemVariants}>
              IDesigning and managing efficient, scalable databases to power
              your applications.
            </motion.p>
            <motion.div
              className={`${isVisible4 === true ? "block" : "hidden"}`}
              variants={itemVariants}
            >
              <motion.ul className="text-white flex flex-col gap-2">
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Database Schema Design
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  REST API Integration
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Authentication & Security (JWT / OAuth)
                </motion.li>
                <motion.li
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <i className="fa-solid fa-check text-[12px] text-[#979797]"></i>
                  Data Modeling & Optimization
                </motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
          <motion.button
            className="bg-[#2a003d] p-3 md:p-4 rounded-3xl text-white text-xl md:text-2xl mt-4 md:mt-0 md:ml-auto"
            variants={itemVariants}
          >
            <i className="fa-solid fa-angle-right"></i>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OurService;
