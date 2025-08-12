import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/vincent_wachira_pic_1.jpeg";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
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
            className="w-[280px] md:w-[360px] lg:w-[420px] h-auto object-cover rounded-2xl shadow-2xl border-4 border-indigo-200"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Vincent Wachira
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl text-indigo-600 font-medium tracking-wide">
            Building Secure, Scalable Systems with Precision and Purpose
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl">
            I'm a seasoned IT professional with over 12 years of experience leading digital
            transformation, cloud migration, and automation initiatives. I align
            technology strategy with business goals to deliver measurable outcomes.
          </p>
          <div>
            <a
              href="#projects"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300"
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