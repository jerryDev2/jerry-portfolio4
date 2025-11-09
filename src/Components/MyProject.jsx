import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/image.png";
import img2 from "../assets/img/image2.png";
import img3 from "../assets/img/image3.png";
import img4 from "../assets/img/image4.png";
import img5 from "../assets/img/image5.png";
import img6 from "../assets/img/image6.png";

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
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="w-full bg-[#1c0038] overflow-hidden rounded-[10px] text-white"
        >
          <img src={img1} alt="Project 1" className="w-full" />
          <h2 className="font-bold text-2xl p-4">Alberto Watch</h2>
          <p className="p-4">
            <b>Alberto Watch Company</b> is a luxury timepiece e-commerce
            platform that showcases premium watches with sophistication and
            elegance.
          </p>
          <section className="p-4">
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
              reactjs
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
              Tailwind
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
              Firebase
            </button>
          </section>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="w-full bg-[#1c0038] overflow-hidden rounded-[10px] text-white"
        >
          <img src={img2} alt="Project 2" className="w-full" />
          <h2 className="font-bold text-2xl p-4">CampusConnect</h2>
          <p className="p-4">
            <b>Campus Connect</b> is a dynamic student engagement platform
            designed to be the central hub for campus life, connecting students
            with events, activities, and the broader university community.
          </p>
          <section className="p-4">
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mb-3">
              ReactJS
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
              tailwindcss
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
              Framer Motion
            </button>
          </section>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="w-full bg-[#1c0038] overflow-hidden rounded-[10px] text-white"
        >
          <img src={img3} alt="Project 3" className="w-full" />
          <h2 className="font-bold text-2xl p-4">Jerry Personal AI</h2>
          <p className="p-4">
            <b>Jerry Personal AI</b> is a custom-built personal AI assistant
            designed to provide intelligent, conversational support across
            multiple domains, from creative brainstorming to technical
            problem-solving.
          </p>
          <section className="p-4">
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mb-3">
              Reactjs
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
              Tailwindcss
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7]">
              AI API
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mt-3">
              Firebase
            </button>
          </section>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="w-full bg-[#1c0038] overflow-hidden rounded-[10px] text-white"
        >
          <img src={img4} alt="Project 4" className="w-full" />
          <h2 className="font-bold text-2xl p-4">Tamara Catering</h2>
          <p className="p-4">
            <b>Tamara Catering Service</b> is a specialized food service
            platform celebrating authentic African cuisine, offering both
            delivery and buffet catering for events and everyday dining.
          </p>
          <section className="p-4">
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 mb-3">
              Reactjs
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
              Tailwindcss
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
              Framer Motion
            </button>
          </section>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="w-full bg-[#1c0038] overflow-hidden rounded-[10px] text-white"
        >
          <img src={img5} alt="Project 5" className="w-full" />
          <h2 className="font-bold text-2xl p-4">Story Topia</h2>
          <p className="p-4">
            <b>StoryTopia</b> is a digital storytelling platform dedicated to
            preserving and sharing timeless Nigerian folktales, connecting
            modern audiences with ancestral wisdom and cultural heritage.
          </p>
          <section className="p-4">
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
              HTML
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
              CSS
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
              JavaScript
            </button>
          </section>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="w-full bg-[#1c0038] overflow-hidden rounded-[10px] text-white"
        >
          <img src={img6} alt="Project 6" className="w-full" />
          <h2 className="font-bold text-2xl p-4">Jerry Site</h2>
          <p className="p-4">
            <b>My personal portfolio website</b> created with a passion for
            creating User-friendly and intuitive interfaces that adequately
            represent my skills and projects
          </p>
          <section className="p-4">
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2 ">
              ReactJs
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mr-2">
              Tailwind
            </button>
            <button className="bg-[#9200c745] p-1 px-6 rounded-3xl border-2 border-[#9200c7] mt-3">
              Framer Motion
            </button>
          </section>
        </motion.div>
      </motion.section>
    </section>
  );
}

export default MyProject;
