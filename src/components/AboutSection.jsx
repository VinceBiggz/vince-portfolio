import { motion } from "framer-motion";
import profilePic from "../assets/vincent_wachira_pic_1.jpeg";

export default function AboutSection() {
  return (
    <motion.section
      className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Animated Intro */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 id="about-heading" className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm <span className="font-semibold text-indigo-700">Vincent Wachira</span> — a senior IT strategist and cloud engineer with a decade of success delivering digital transformation, security, and automation at scale.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Notable achievements include automating issue tracking at Wasoko, reducing Time to Resolution by 50%, and leading a Tanzania Data Center setup for Nala to meet regulatory compliance. I'm proficient in HTML, CSS, JavaScript, Python, and SQL.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Certifications: <span className="font-semibold text-indigo-700">Google Certified Professional Cloud Architect, ISO 27001 Internal Auditor, ALX-T Cloud DevOps Engineer, Oracle Certified Foundations Associate.</span>
          </p>

          {/* Achievements */}
          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Key Achievements</h3>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Automated issue tracking workflows at Wasoko → 50% faster Time to Resolution</li>
              <li>Led Tanzania Data Center setup for Nala to meet regulatory compliance</li>
              <li>Designed secure CI/CD pipelines and observability dashboards across teams</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="bg-gray-800 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white">HTML</span>
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white">CSS</span>
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white">JavaScript</span>
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white">Python</span>
              <span className="px-3 py-1 rounded-full bg-blue-600 text-white">SQL</span>
            </div>
          </div>
        </motion.div>

        {/* Animated Core Expertise Box */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <img
            src={profilePic}
            alt="Portrait of Vincent Wachira"
            className="w-[280px] md:w-[360px] lg:w-[420px] h-auto object-cover rounded-2xl shadow-2xl border-4 border-indigo-200 mb-6"
            loading="lazy"
          />
          <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-xl w-full transform transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
              Core Expertise
            </h3>
            <ul className="text-gray-200 space-y-3 text-base md:text-lg list-inside">
              <li>☁️ Cloud Architecture – AWS, Azure, GCP</li>
              <li>🔐 Cybersecurity & ISO 27001 Auditing</li>
              <li>⚙️ DevOps Pipelines & Automation</li>
              <li>📊 Monitoring, Logging & KPIs</li>
              <li>🧠 AI & ML Integration</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
