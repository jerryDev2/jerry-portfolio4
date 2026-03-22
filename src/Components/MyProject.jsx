import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/image.png";
import img2 from "../assets/img/image2.png";
import img3 from "../assets/img/image3.png";
import img4 from "../assets/img/image4.png";
import img5 from "../assets/img/image5.png";
import img6 from "../assets/img/image6.png";
import img7 from "../assets/img/image7.png"

function MyProject() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.18, when: "beforeChildren" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 6px 24px rgba(187,0,174,0.18)",
      transition: { type: "spring", stiffness: 400, damping: 12 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section className="max-w-5xl mx-auto mt-30 px-4" id="projects">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="font-bold text-4xl text-white text-center mb-8"
      >
        My <span className="text-[#ff00ee]">Projects</span>
      </motion.h2>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2 md:p-6"
      >
        <a href="https://pnc-personal-bank-henna.vercel.app/" target="blank">
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-full bg-[#1c0038] cursor-pointer overflow-hidden rounded-[10px] text-white"
          >
            <img src={img7} alt="Project 1" className="w-full" />
            <h2 className="font-bold text-2xl p-4">PNC Personal Banking</h2>
            <p className="p-4">
              A full-stack banking app with user authentication, account
              dashboard, and transaction management. Built with React, Spring
              Boot, and PostgreSQL.
            </p>
            <section className="p-4">
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mb-3">
                React
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
                Tailwind CSS
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
                Spring Boot
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
                Postgresql
              </button>
            </section>
          </motion.div>
        </a>

        <a href="https://alberto-watch-company2.netlify.app/" target="blank">
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-full bg-[#1c0038] cursor-pointer overflow-hidden rounded-[10px] text-white"
          >
            <img src={img1} alt="Project 1" className="w-full" />
            <h2 className="font-bold text-2xl p-4">Alberto Watch</h2>
            <p className="p-4">
              A luxury watch brand website with product browsing, modal pricing
              popups, and store locator. Built with React and Tailwind CSS.
            </p>
            <section className="p-4">
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mb-3 ">
                React
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
                Tailwind CSS
              </button>
            </section>
          </motion.div>
        </a>
        <a href="https://campus-connect109.netlify.app" target="blank">
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-full bg-[#1c0038] cursor-pointer overflow-hidden rounded-[10px] text-white"
          >
            <img src={img2} alt="Project 2" className="w-full" />
            <h2 className="font-bold text-2xl p-4">CampusConnect</h2>
            <p className="p-4">
              A college event management platform where students can browse,
              filter, and register for campus events. Built with React and
              JavaScript.
            </p>
            <section className="p-4">
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mb-3">
                React
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
                Tailwind CSS
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
                Framer Motion
              </button>
            </section>
          </motion.div>
        </a>
        <a href="https://jerry-research.netlify.app" target="blank">
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-full bg-[#1c0038] cursor-pointer overflow-hidden rounded-[10px] text-white"
          >
            <img src={img3} alt="Project 3" className="w-full" />
            <h2 className="font-bold text-2xl p-4">Jerry Personal AI</h2>
            <p className="p-4">
              A custom AI-powered personal assistant designed to handle multiple
              decisions and provide intelligent responses. Built with React and
              CSS.
            </p>
            <section className="p-4">
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mb-3">
                React
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
                Tailwind CSS
              </button>
            </section>
          </motion.div>
        </a>
        <a href="https://tamara-catering-service.netlify.app" target="blank">
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-full bg-[#1c0038] cursor-pointer overflow-hidden rounded-[10px] text-white"
          >
            <img src={img4} alt="Project 4" className="w-full" />
            <h2 className="font-bold text-2xl p-4">Tamara Catering</h2>
            <p className="p-4">
              A responsive business website for a catering company with menu
              showcase, services, and booking enquiry form. Built with React and
              Tailwind CSS.
            </p>
            <section className="p-4">
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mb-3">
                React
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
                Tailwind CSS
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
                Framer Motion
              </button>
            </section>
          </motion.div>
        </a>

        <a href="https://jerry-portfolio1.netlify.app" target="blank">
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="w-full bg-[#1c0038] cursor-pointer overflow-hidden rounded-[10px] text-white"
          >
            <img src={img6} alt="Project 6" className="w-full" />
            <h2 className="font-bold text-2xl p-4">Jerry Site</h2>
            <p className="p-4">
              A personal developer portfolio showcasing projects, skills, and
              services with smooth animations and responsive design. Built with
              React and Framer Motion.
            </p>
            <section className="p-4">
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 ">
                React
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
                Tailwind CSS
              </button>
              <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
                Framer Motion
              </button>
            </section>
          </motion.div>
        </a>
      </motion.section>
    </section>
  );
}

export default MyProject;
