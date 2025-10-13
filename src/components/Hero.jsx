import React from "react";
import { heroItems, heroBtns } from "../constant/data";

import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Hero = () => {
  return (
    <section className="mt-28" id="#">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container"
      >
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          {/* Content */}
          <div>
            <motion.p
              variants={variants.fadeInUp}
              className="text-lg md:text-xl font-light 
            !text-emerald-600"
            >
              Hi, I'm Medhanye Tsegay
            </motion.p>
            <motion.h1
              variants={variants.fadeInUp}
              className="text-3xl my-[10px_16px] font-semibold"
            >
              Frontend Developer
            </motion.h1>
            <motion.p variants={variants.fadeInUp}>
              Passionate Front-end developer with 4+ years of experience
              building scalable web applications.
            </motion.p>
          </div>
          {/* Image */}
          <motion.div
            variants={variants.fadeIn}
            className="w-2xs h-72 rounded-full overflow-hidden mx-auto lg:mx-0"
          >
            <img
              src="/images/hero-img.jpg"
              alt=" hero image"
              width={280}
              height={280}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        {/* hero boxs */}
        <motion.div
          variants={variants.fadeIn}
          className="grid sm:grid-cols-2 md:grid-cols-3 items-center gap-5 md:divide-x divide-zinc-200 dark:divide-zinc-900 mt-5"
        >
          {heroItems.map((item) => (
            // card
            <div key={item.id} className="flex gap-2 items-start">
              <span className="size-10 flex bg-zinc-100 items-center justify-center rounded-xl border border-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-900">
                <item.icon size={26} />
              </span>
              <div>
                <h2 className="font-semibold text-lg">{item.subtitle}</h2>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
        {/* hero Btns */}
        <motion.div
          variants={variants.fadeIn}
          className="flex flex-col sm:flex-row gap-4 my-8"
        >
          {heroBtns.map((item) => (
            <a
              href={item.href}
              key={item.id}
              className="btn border-zinc-200 dark:border-zinc-900 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-emerald-700  before:scale-y-0 before:transition-transform hover:before:scale-y-100 before:origin-top before:-z-10 hover:text-zinc-100"
            >
              <span>
                <item.icon />
              </span>
              {item.label}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
