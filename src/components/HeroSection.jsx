import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import OptimizedImage from "./OptimizedImage.jsx";
import profilePic from "../assets/vincent_wachira_pic_1.jpeg";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-6 py-16">
      <motion.div
        className="grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Image */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <OptimizedImage
            src={profilePic}
            alt="Vincent Wachira"
            className="h-auto w-[280px] rounded-2xl border-4 border-indigo-200 object-cover shadow-2xl md:w-[360px] lg:w-[420px]"
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderColor: "#6366f1"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl font-extrabold leading-tight text-gray-900 lg:text-6xl"
            variants={itemVariants}
          >
            Vincent Wachira
          </motion.h1>
          
          <motion.h2 
            className="text-lg font-medium tracking-wide text-indigo-600 md:text-xl lg:text-2xl"
            variants={itemVariants}
          >
            Building Secure, Scalable Systems with Precision and Purpose
          </motion.h2>
          
          <motion.p 
            className="max-w-xl text-base leading-relaxed text-gray-700 md:text-lg"
            variants={itemVariants}
          >
            I&apos;m a seasoned IT professional with over 12 years of experience leading digital
            transformation, cloud migration, and automation initiatives. I align
            technology strategy with business goals to deliver measurable outcomes.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Link
              to="/projects"
              className="group inline-block rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                View Projects
                <motion.svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;