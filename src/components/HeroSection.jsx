import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center px-4">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Vincent Wachira
        </h1>

        <h2 className="text-xl md:text-2xl text-indigo-600 font-medium mb-6">
          Building Secure, Scalable Systems with Precision and Purpose
        </h2>

        <p className="text-gray-700 text-md md:text-lg leading-relaxed mb-8">
          I'm a seasoned IT professional passionate about digital transformation,
          cybersecurity, and automation. I help organizations harness cloud and AI technologies to streamline operations and drive measurable results.
        </p>

        <a
          href="#projects"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
