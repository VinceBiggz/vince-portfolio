import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      className="w-full min-h-screen bg-gradient-to-br from-white via-gray-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-6 py-20"
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
          <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            I’m <span className="font-semibold text-indigo-700 dark:text-indigo-400">Vincent Wachira</span> — a senior IT strategist and cloud engineer with a decade of success delivering digital transformation, security, and automation at scale.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Notable achievements include automating issue tracking at Wasoko, reducing Time to Resolution by 50%, and leading a Tanzania Data Center setup for Nala to meet regulatory compliance. I’m proficient in HTML, CSS, JavaScript, Python, and SQL.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Certifications: <span className="font-semibold text-indigo-700 dark:text-indigo-400">Google Certified Professional Cloud Architect, ISO 27001 Internal Auditor, ALX-T Cloud DevOps Engineer, Oracle Certified Foundations Associate.</span>
          </p>
        </motion.div>

        {/* Animated Core Expertise Box */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <img
            src="/assets/vincent_wachira_pic_1.jpeg"
            alt="Vincent Wachira"
            className="w-32 h-32 rounded-full mb-4 object-cover"
            loading="lazy"
          />
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-full transform transition-all hover:scale-[1.02]">
            <h3 className="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4 text-center">
              Core Expertise
            </h3>
            <ul className="text-gray-800 dark:text-gray-200 space-y-3 text-base md:text-lg list-inside">
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
