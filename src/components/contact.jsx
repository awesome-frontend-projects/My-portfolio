import React from "react";
import { socialLink } from "../constant/data";

import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Contact = () => {
  return (
    <section className="pt-28" id="contact">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container grid gap-11 md:grid-cols-[0.7fr_1fr] pb-12 md:pb-16 border-b border-zinc-200 dark:border-zinc-900"
      >
        {/* Content */}
        <div>
          <motion.h2
            variants={variants.fadeInUp}
            className="section-title mb-2.5"
          >
            Get In Tech
          </motion.h2>
          <motion.p variants={variants.fadeInUp}>
            Have a project in mind or just want to say hello? Feel free to reach
            out and let's create something amazing together.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={variants.fadeInUp}
            className="flex items-center gap-2.5 mt-9"
          >
            {socialLink.map((link) => (
              <a
                href="#"
                key={link.id}
                className="hover:text-emerald-700 transition-colors"
              >
                <link.icon />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          variants={variants.fadeIn}
          action="https://getform.io/f/bgdjodwa"
          method="POST"
          className="space-y-3.5"
        >
          {/* Input wrapper */}
          <div className="grid  gap-2.5 md:grid-cols-2">
            {/* input field */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-100/60 dark:bg-zinc-900/60  overflow-hidden">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Name"
                className="py-2.5 px-4 w-full placeholder-zinc-800 dark:placeholder-zinc-400"
                required
              />
            </div>
            {/* input field */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-100/60 dark:bg-zinc-900/60 overflow-hidden">
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Your Email"
                className="py-2.5 px-4 w-full placeholder-zinc-800 dark:placeholder-zinc-400"
              />
            </div>
          </div>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Message"
            className="border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-100/60 dark:bg-zinc-900/60 placeholder-zinc-800 dark:placeholder-zinc-400 h-32 w-full resize-none indent-4 py-2.5"
          />
          {/* Btn */}
          <button className="bg-emerald-600 hover:bg-emerald-800 transition-colors w-full py-2 rounded-lg text-white">
            Submit
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;
