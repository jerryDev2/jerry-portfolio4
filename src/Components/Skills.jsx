import React from "react";
import { motion } from "framer-motion";

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
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">
            HTML/CSS
          </motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "95%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">95%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">
            JavaScript
          </motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">80%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">React</motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">85%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">
            React Native
          </motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">75%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">
            Tailwind
          </motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "95%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">95%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">Motion</motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">80%</h3>
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full md:w-[55%] mx-auto gap-6 p-6 md:p-10 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">Java</motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">75%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">MongoDB</motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">80%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">Csharp</motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">80%</h3>
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
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full md:w-[95%] mx-auto gap-6 p-6 md:p-10 border-b-2 border-[#ffffff29] justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">Linux</motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">75%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">Git</motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">80%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">Figma</motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">80%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">
            Photoshop
          </motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">80%</h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="pt-8 pb-6 px-2 rounded-lg bg-[#28004d]"
        >
          <motion.h3 className="text-white text-[16px] mb-3">
            Coreldraw
          </motion.h3>
          <section className="w-full bg-[#210042] p-2 overflow-hidden relative rounded-[10px]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="bg-[#5f00be] absolute top-0 left-0 p-2 rounded-[10px] text-white"
            />
          </section>
          <h3 className="text-white text-[14px] text-right mt-3">80%</h3>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Skills;
