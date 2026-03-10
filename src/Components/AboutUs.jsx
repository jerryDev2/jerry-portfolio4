import React from "react";
import { motion } from "framer-motion";
import { useCounter } from "../hooks/useCounter";

function AboutUs() {
  // Initialize counters with useCounter hook
  const [experienceCount, experienceCountRef] = useCounter(1);
  const [projectsCount, projectsCountRef] = useCounter(22);
  const [clientsCount, clientsCountRef] = useCounter(2);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(187, 0, 174, 0.3)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section
      className="max-w-5xl mx-auto text-center py-16 md:py-20 px-4 border-t-2 border-[#1f003d]"
      id="about-me"
    >
      {/* Intro Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl md:text-4xl text-[#ff00ee] mb-8 md:mb-10 font-bold"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-white text-base md:text-lg w-[90%] md:w-[60%] mx-auto mb-5"
          variants={itemVariants}
        >
          I'm Jerry, a Full-Stack Web Developer based in Nigeria with 1+ year of
          hands-on experience building web applications from scratch.
        </motion.p>
        <motion.p
          className="text-white text-base md:text-lg w-[90%] md:w-[60%] mx-auto mb-5"
          variants={itemVariants}
        >
          I specialize in building fast, responsive, and user-friendly apps
          using React on the frontend and Node.js on the backend — from landing
          pages to full platforms with databases and authentication.
        </motion.p>

        <motion.p
          className="text-white text-base md:text-lg w-[90%] md:w-[60%] mx-auto mb-5"
          variants={itemVariants}
        >
          I work with startups, small businesses, and entrepreneurs who need a
          reliable developer to bring their ideas to life. I care about clean
          code, good design, and delivering on time.
        </motion.p>
      </motion.div>

      {/* Education Section */}
      <motion.section
        className="flex flex-col md:flex-row gap-8 md:gap-30 justify-center mt-10 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants}>
          <h4 className="text-[#ffffffb2] text-base md:text-lg mx-auto mb-3 font-bold">
            Education
          </h4>
          <h4 className="text-white text-lg md:text-xl mx-auto mb-2 font-black">
            ADSE (Advance Diploma in Software Engineer )
          </h4>
          <p className="mb-3 text-[#ffffffb2]">
            Aptech Computer Education Center
          </p>
          <h4 className="text-white text-lg md:text-xl mx-auto mb-2 font-black">
            Full Stack Software Engineer
          </h4>
          <p className="mb-3 text-[#ffffffb2]">AltSchool Africa</p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-[#ffffffb2] text-base md:text-lg mx-auto mb-3 font-bold">
            Other Training
          </h4>
          <h4 className="text-white text-lg md:text-xl mx-auto mb-2 font-black">
            Responsive Web Design
          </h4>
          <p className="mb-3 text-[#ffffffb2]">FreeCodeCamp</p>
          <h4 className="text-white text-lg md:text-xl mx-auto mb-2 font-black">
            Fundamentals of Graphic Design
          </h4>
          <p className="mb-3 text-[#ffffffb2]">Coursera</p>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="flex flex-col md:flex-row justify-center w-full gap-4 md:gap-8 lg:gap-20 mt-10 md:mt-15 text-white px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="w-full md:w-[50%] p-6 md:p-10 rounded-[10px] bg-[#000000a1] border-2 border-[#bb00ae]"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={itemVariants}
            ref={experienceCountRef}
          >
            {experienceCount}+
          </motion.h2>
          <motion.p variants={itemVariants}>Years Experience</motion.p>
        </motion.div>

        <motion.div
          className="w-full md:w-[50%] p-6 md:p-10 rounded-[10px] bg-[#000000a1] border-2 border-[#bb00ae]"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={itemVariants}
            ref={projectsCountRef}
          >
            {projectsCount}+
          </motion.h2>
          <motion.p variants={itemVariants}>Projects Completed</motion.p>
        </motion.div>

        <motion.div
          className="w-full md:w-[50%] p-6 md:p-10 rounded-[10px] bg-[#000000a1] border-2 border-[#bb00ae]"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            variants={itemVariants}
            ref={clientsCountRef}
          >
            {clientsCount}+
          </motion.h2>
          <motion.p variants={itemVariants}>Happy Clients</motion.p>
        </motion.div>
      </motion.section>
    </section>
  );
}

export default AboutUs;
