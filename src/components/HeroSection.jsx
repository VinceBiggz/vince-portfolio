// src/components/HeroSection.jsx
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        
        {/* Image Container */}
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <img
            src="/img/vincent_wachira_pic_1.jpeg"
            alt="Vincent Wachira"
            className="max-w-[90%] max-h-[90vh] md:max-w-[50vw] md:max-h-[90vh] object-cover rounded-lg shadow-lg border border-indigo-200"
          />
        </div>

        {/* Text Container */}
        <div className="md:w-1/2 w-full text-center md:text-left px-4 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Vincent Wachira
          </h1>

          <h2 className="text-xl md:text-2xl text-indigo-600 font-semibold">
            Building Secure, Scalable Systems with Precision and Purpose
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            I'm a seasoned IT professional passionate about digital transformation,
            cybersecurity, and automation. I help organizations harness cloud and AI
            technologies to streamline operations and drive measurable results.
          </p>

          <a
            href="#projects"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition"
          >
            View Projects
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
