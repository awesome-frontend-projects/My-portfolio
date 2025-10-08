import React from "react";
import { projectsItems } from "../constant/data";
import { RiExternalLinkLine, RiGithubFill } from "@remixicon/react";

import { motion } from "motion/react";
import * as variants from "../motion/animation";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.div
        variants={variants.staggerContainer}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <div className="space-y-3">
          <motion.h2 variants={variants.fadeInUp} className="section-title">
            Projects
          </motion.h2>
          <motion.p variants={variants.fadeInUp} className="max-w-lg">
            Explore a selection of my recent work, showcasing innovative
            solutions and creative implementations across various technologies.
          </motion.p>
        </div>
        {/* wrapper */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {projectsItems.map((item) => (
            // Card
            <motion.div
              variants={variants.fadeIn}
              key={item.id}
              className="border border-zinc-200 dark:border-zinc-800 rounded-md overflow-hidden bg-zinc-100/40 dark:bg-zinc-900/40 hover:!border-emerald-600/50 focus:!border-emerald-600/50 transition-all hover:shadow-lg hover:shadow-emerald-600/10 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform group-hover:scale-105 group-focus:scale-105"
                />
                {/* overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={item.link}
                    target="_blank"
                    className="size-12 flex items-center justify-center bg-emerald-600 rounded-full text-white hover:bg-emerald-700 focus:bg-emerald-700 transition-colors"
                  >
                    <RiExternalLinkLine />
                  </a>
                  <a
                    href="#"
                    className="size-12 flex items-center justify-center bg-white text-black rounded-full hover:bg-zinc-200 focus:bg-zinc-200 transition-colors"
                  >
                    <RiGithubFill />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-emerald-600 group-focus:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-2 hover:line-clamp-none">
                  {item.text}
                </p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-emerald-600/10 rounded-full border border-emerald-600/20 text-emerald-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
