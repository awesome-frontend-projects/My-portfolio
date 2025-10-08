import React from "react";

import Skills from "./Skills";

import { motion } from "motion/react";
import * as variants from "../motion/animation";

const About = () => {
  return (
    <section className="pt-20 md:pt-28" id="about">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div>
          <motion.h2
            variants={variants.fadeInUp}
            className="section-title mb-3.5"
          >
            About Me
          </motion.h2>
          <motion.p variants={variants.fadeInUp}>
            I'm a highly skilled Frontend Developer with more than 4 years of
            experience in building web applications. On this page,you can learn
            more about my knowledge stack.
          </motion.p>
        </div>
        {/* Wrapper */}
        <motion.div
          variants={variants.fadeIn}
          className="border mt-8 px-8 py-4 rounded-lg border-zinc-200 dark:border-zinc-900"
        >
          <Skills />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
