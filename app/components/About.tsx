"use client";

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, staggerChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section
      id="about"
      className="w-full mx-auto scroll-mt-[100px] lg:px-44 sm:px-24 px-4 pt-[100px] pb-20"
    >
      <motion.h1
        className="sm:text-5xl text-4xl font-bold text-center pb-10 bg-gradient-to-r bg-clip-text text-transparent from-blue-500 to-blue-200"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        ABOUT ME
      </motion.h1>

      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="border border-blue-500 bg-blue-900/5 backdrop-blur-xs lg:p-10 sm:p-7 p-5 rounded-xl flex flex-col gap-4"
      >
        <motion.p
          className="lg:text-xl sm:text-lg text-md opacity-90 leading-relaxed"
          variants={childVariants}
        >
          Hey there! I&apos;m <strong>Chaitanya Khurana</strong>, currently
          pursuing my B.Tech in Artificial Intelligence & Data Science
          (2023–2027) at Dr. Akhilesh Das Gupta Institute of Professional
          Studies, affiliated with GGSIPU.
        </motion.p>

        <motion.p
          className="lg:text-xl sm:text-lg text-md opacity-90 leading-relaxed"
          variants={childVariants}
        >
          I’m passionate about building scalable backend systems, designing
          robust APIs, and optimizing databases to handle real-world workloads.
          I love understanding how systems behave at scale and making them
          faster, more efficient, and more reliable.
        </motion.p>

        <motion.p
          className="lg:text-xl sm:text-lg text-md opacity-90 leading-relaxed"
          variants={childVariants}
        >
          Alongside backend development, I’m exploring GenAI, AI agents, and
          modern LLM workflows to integrate intelligent automation into real
          projects.
        </motion.p>

        <motion.p
          className="lg:text-xl sm:text-lg text-md opacity-90 leading-relaxed"
          variants={childVariants}
        >
          Right now, I’m strengthening my Data Structure and Algorithms  skills in Java to build a
          strong problem-solving foundation for future software engineering
          roles.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
