// src/components/AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - About Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Me
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            I’m Vincent Wachira, a Google Certified Cloud Architect and senior IT consultant with over a decade of experience in IT infrastructure, cybersecurity, automation, and digital transformation. I've held leadership roles in startups, multinational companies, and non-profits, delivering scalable systems and secure platforms that drive real business outcomes.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            My core strengths include leading cross-functional tech teams, executing cloud migrations (GCP, AWS, Azure), and enforcing ISO-compliant security frameworks. I’m also deeply passionate about leveraging AI and automation to optimize business operations, particularly in emerging markets.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            I'm currently expanding my expertise into generative AI and ML microservices, and I enjoy sharing knowledge and collaborating with forward-thinking teams across industries.
          </p>
        </div>

        {/* Right - Tech Stack */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-end">
          {[
            "Google Cloud",
            "AWS",
            "Azure",
            "Python",
            "JavaScript",
            "SQL",
            "ISO 27001",
            "Metabase",
            "MDM",
            "GitHub",
            "Power BI",
            "Docker",
            "Kubernetes",
            "Vite",
          ].map((tech) => (
            <span
              key={tech}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
