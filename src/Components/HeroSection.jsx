import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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

  return (
    <section className="  min-h-screen px-4 py-8 lg:py-0">
      <main className="min-h-[90vh] flex flex-col lg:flex-row justify-between items-center w-full max-w-5xl mx-auto gap-8 lg:gap-4">
        <motion.section
          className="text-white w-full lg:w-[50%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            className=" mt-30 text-2xl md:text-3xl lg:text-4xl font-semibold mb-3"
            variants={itemVariants}
          >
            Hello, it's me
          </motion.h3>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-linear-to-r from-[#ff56e3] to-[#680061] bg-clip-text text-transparent"
            variants={itemVariants}
          >
            JERRYDEV
          </motion.h1>
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3"
            variants={itemVariants}
          >
            <span>i'm a </span>
            <span className="text-[#ff00ee]">
              <Typewriter
                words={["Web Developer", "UI/UX Designer", "Graphics Designer"]}
                loop={1000}
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={20}
                delaySpeed={1500}
              />
            </span>
          </motion.h3>
          <motion.p className="text-base md:text-lg" variants={itemVariants}>
            Hi, I am Jerry, a passionate{" "}
            <b>Full Stack Mobile and Web Developer</b>. My journey in tech is
            driven by a desire to create seamless digital experiences that
            captivate and engage users. With a strong foundation in both
            front-end and back-end technologies, I specialize in building
            responsive, user-friendly applications that meet the unique needs of
            each client.
          </motion.p>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#projects">
              <button className="bg-[#2a003d] p-3 px-8 md:px-10 rounded font-semibold text-base md:text-lg mt-5 cursor-pointer hover:bg-[#bb00ae] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff00ee]/20">
                View Projects
              </button>
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          className="w-full lg:w-[50%]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-[url('/img/last.png')] bg-cover bg-center w-full h-[400px] md:h-[500px] lg:h-[650px] rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </motion.section>
      </main>
    </section>
  );
}

export default HeroSection;
