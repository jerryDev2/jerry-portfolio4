import React from "react";
import { motion } from "framer-motion";

function ConnectWithUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialButtonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      backgroundColor: "#bb00ae",
      boxShadow: "0 0 15px rgba(187, 0, 174, 0.5)",
      transition: {
        duration: 0.3
      }
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <motion.section
      className="flex flex-col items-center justify-center gap-5 p-6 md:p-10 max-w-5xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-lg md:text-xl tracking-[10px] font-bold text-[#9e9e9e]"
        variants={itemVariants}
      >
        JERRY<span className="text-[#bb00aed5]">DEV</span>
      </motion.h2>

      <motion.p
        className="text-center w-[95%] md:w-[80%] text-white text-base md:text-lg"
        variants={itemVariants}
      >
        I'd love to connect — follow me on social media to see my latest
        projects, share ideas, collaborate on new work, or just say hello. Let's
        build something great together!
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-3 md:gap-4"
        variants={containerVariants}
      >
        <a href="https://www.tiktok.com/@jerrydev_codes" target="blank">
          <motion.button
            className="bg-[#303030] p-3 cursor-pointer md:p-4 rounded-[10px] text-white text-lg md:text-xl transition-all duration-300"
            variants={socialButtonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="TikTok Profile"
          >
            <i className="fa-brands fa-tiktok"></i>
          </motion.button>
        </a>
        <a href="https://www.instagram.com/jerrydev_codes" target="blank">
          <motion.button
            className="bg-[#303030] p-3 md:p-4 cursor-pointer rounded-[10px] text-white text-lg md:text-xl transition-all duration-300"
            variants={socialButtonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="Instagram Profile"
          >
            <i className="fa-brands fa-instagram"></i>
          </motion.button>
        </a>
        <a href="">
          <motion.button
            className="bg-[#303030] p-3 md:p-4 rounded-[10px] text-white text-lg md:text-xl transition-all duration-300"
            variants={socialButtonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="LinkedIn Profile"
          >
            <i className="fa-brands fa-linkedin"></i>
          </motion.button>
        </a>
        <a href="https://github.com/jerryDev2" target="blank">
          <motion.button
            className="bg-[#303030] p-3 md:p-4 rounded-[10px] text-white text-lg md:text-xl transition-all duration-300"
            variants={socialButtonVariants}
            whileHover="hover"
            whileTap="tap"
            aria-label="GitHub Profile"
          >
            <i className="fa-brands fa-github"></i>
          </motion.button>
        </a>
      </motion.div>
    </motion.section>
  );
}

export default ConnectWithUs;
