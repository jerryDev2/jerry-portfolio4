import React from "react";
import { motion } from "framer-motion";
import html from "../assets/img/html.png"
import css from "../assets/img/css.png";
import javascript from "../assets/img/javaScript.png"
import react from "../assets/img/react.png"
import tailwind from "../assets/img/tailwind.png"
import motionImg from "../assets/img/motion.png"
import java from "../assets/img/java.png"
import cSharp from "../assets/img/cSharp.png";
import springBoot from "../assets/img/springBoot.png"
import dotnet from "../assets/img/dotnet.png"
import sql from "../assets/img/sql.png"
import mongodb from "../assets/img/mongodb.png"
import git from "../assets/img/git.png"
import github from "../assets/img/github.png"
import figma from "../assets/img/figma.png"
import vscode from "../assets/img/vscode.png";
import intelij from "../assets/img/intelij.png";
import photoshop from "../assets/img/photoshop.png";



function Skills() {
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
      transition: { type: "spring", stiffness: 400, damping: 12 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };
  return (
    <div className="mt-30 px-5 max-w-5xl mx-auto">
      <h2 className="font-bold text-2xl text-[#ffffffb9] tracking-[10px] text-center">
        {" "}
        Skills
      </h2>
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="tracker-[10px] mt-15 text-2xl text-[#ffffffb9] tracking-[10px] text-center"
      >
        {" "}
        FRONTEND DEVELOPMENT
      </motion.h2>
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-6 md:p-10 border-b-2 border-[#ffffff29] justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={html} alt="" width={"70px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3">
            HTML
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={css} alt="" width={"60px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3">
            CSS
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={javascript} alt="" width={"40px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3">
            JavaScript
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={react} alt="" width={"55px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3">
            React
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={tailwind} alt="" width={"60px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3">
            Tailwind CSS
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={motionImg} alt="" width={"50px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3 mt-2">
            Framer Motion
          </motion.h3>
        </motion.div>
      </motion.section>
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="tracker-[10px] mt-8 md:mt-12 text-2xl text-[#ffffffb9] tracking-[10px] text-center"
      >
        {" "}
        BACKEND DEVELOPMENT
      </motion.h2>
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full md:w-[100%] mx-auto gap-6 p-6 md:p-10 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={java} alt="" width={"60px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3">
            Java
          </motion.h3>
        </motion.div>



        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={springBoot} alt="" width={"50px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mt-4  mb-3">
            Spring-boot
          </motion.h3>
        </motion.div>
        

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={sql} alt="" width={"50px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mt-3 mb-3">
            SQL
          </motion.h3>
        </motion.div>
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={mongodb} alt="" width={"60px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mt-3 mb-3">
            MogoDB
          </motion.h3>
        </motion.div>
      </motion.section>
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="tracker-[10px] pt-8 md:pt-12 border-t-2 border-[#ffffff29] text-2xl text-[#ffffffb9] tracking-[10px] text-center"
      >
        {" "}
        TOOLS
      </motion.h2>
      <motion.section
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full md:w-[100%] mx-auto gap-6 p-6 md:p-10 border-b-2 border-[#ffffff29] justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={git} alt="" width={"50px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mt-3 mb-3">
            Git
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={github} alt="" width={"60px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3">
            GitHub
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={figma} alt="" width={"60px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mb-3">
            Figma
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={vscode} alt="" width={"50px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mt-3 mb-3">
            VS Code
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={intelij} alt="" width={"50px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mt-3 mb-3">
            Intelij
          </motion.h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d00]"
        >
          <img src={photoshop} alt="" width={"50px"} />
          <motion.h3 className="text-white text-[20px] font-semibold mt-4 mb-3">
            PhotoShop
          </motion.h3>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Skills;
