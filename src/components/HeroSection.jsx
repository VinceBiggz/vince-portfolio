import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 flex flex-col justify-center items-center text-center px-4 py-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Vincent Wachira
        </h1>

        <h2 className="text-xl md:text-2xl text-indigo-700 font-semibold mb-6">
          Building Secure, Scalable Systems with Precision and Purpose
        </h2>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          I'm a seasoned IT professional passionate about digital transformation,
          cybersecurity, and automation. I help organizations harness cloud and AI
          technologies to streamline operations and drive measurable results.
        </p>

        <a
          href="#projects"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
