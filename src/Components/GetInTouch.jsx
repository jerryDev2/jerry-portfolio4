import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function GetInTouch() {
  const form = useRef();
  const [formV, setFormV] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    let templateValue = {
      name: formV.name,
      email: formV.email,
      message: formV.message,
    };

    emailjs
      .send(
        "service_qtehbqa",
        "template_vfas1gq",
        templateValue,
        "aJdH41vh9JyhaMFw2"
      )

      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Error sending message: ", error.text);
          console.log(error);
        }
      );
  };

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, when: "beforeChildren" },
    },
  };

  const infoVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  const formVariants = {
    hidden: { x: 30, opacity: 0, scale: 0.98 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 16 },
    },
  };

  return (
    <section className=" max-w-5xl mx-auto mt-30 p-10" id="contact-me">
      <motion.h2
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold mb-4 bg-linear-to-r from-[#2a003d] to-[#ff00ee] bg-clip-text text-center text-transparent"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-center max-w-2xl mx-auto text-white mb-8"
      >
        Have a project in mind? I'd love to hear about it. Send me a message and
        let's create something amazing together.
      </motion.p>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col md:flex-row md:items-start items-center md:justify-center gap-8 p-6 md:p-10 bg-[#150029] text-white"
      >
     
        <motion.form
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 max-w-md flex flex-col bg-[#1c0036] p-5 rounded-2xl gap-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="text" className="font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="p-3 rounded bg-[#1f003d] border border-[#bb00ae] focus:outline-none focus:border-[#ff00ee]"
              placeholder="John Doe"
              value={formV.name}
              onChange={(e) =>
                setFormV((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="p-3 rounded bg-[#1f003d] border border-[#bb00ae] focus:outline-none focus:border-[#ff00ee]"
              placeholder="your@email.com"
              value={formV.email}
              onChange={(e) =>
                setFormV((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              className="p-3 rounded bg-[#1f003d] border border-[#bb00ae] focus:outline-none focus:border-[#ff00ee]"
              placeholder="Tell me about your project..."
              value={formV.message}
              onChange={(e) =>
                setFormV((prev) => ({ ...prev, message: e.target.value }))
              }
            />
          </div>

          <button className="bg-[#bb00ae] text-white py-3 px-6 rounded hover:bg-[#ff00ee] transition-colors mt-4">
            Send Message
          </button>
        </motion.form>
      </motion.section>
    </section>
  );
}

export default GetInTouch;
