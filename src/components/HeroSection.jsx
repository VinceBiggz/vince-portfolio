import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/vincent_wachira_pic_1.jpeg";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-6 py-16">
      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profilePic}
            alt="Vincent Wachira"
            className="h-auto w-[280px] rounded-2xl border-4 border-indigo-200 object-cover shadow-2xl md:w-[360px] lg:w-[420px]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Vincent Wachira
          </h1>
          <h2 className="text-lg font-medium tracking-wide text-indigo-600 md:text-xl lg:text-2xl">
            Building Secure, Scalable Systems with Precision and Purpose
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-gray-700 md:text-lg">
            I&apos;m a seasoned IT professional with over 12 years of experience leading digital
            transformation, cloud migration, and automation initiatives. I align
            technology strategy with business goals to deliver measurable outcomes.
          </p>
          <div>
            <a
              href="#projects"
              className="inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700"
            >
              View Projects
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;