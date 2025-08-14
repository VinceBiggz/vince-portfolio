import { motion } from "framer-motion";
import profilePic from "../assets/vincent_wachira_pic_1.jpeg";

export default function AboutSection() {
  return (
    <motion.section
      className="flex min-h-screen w-full items-center justify-center bg-white px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Animated Intro */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 id="about-heading" className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            I&apos;m <span className="font-semibold text-indigo-700">Vincent Wachira</span> — a senior IT strategist and cloud engineer with a decade of success delivering digital transformation, security, and automation at scale.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Notable achievements include automating issue tracking at Wasoko, reducing Time to Resolution by 50%, and leading a Tanzania Data Center setup for Nala to meet regulatory compliance. I&apos;m proficient in HTML, CSS, JavaScript, Python, and SQL.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Certifications: <span className="font-semibold text-indigo-700">Google Certified Professional Cloud Architect, ISO 27001 Internal Auditor, ALX-T Cloud DevOps Engineer, Oracle Certified Foundations Associate.</span>
          </p>

          {/* Achievements */}
          <div className="rounded-2xl bg-gray-800 p-6 text-white shadow-xl">
            <h3 className="mb-3 text-xl font-semibold text-blue-400">Key Achievements</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-200">
              <li>Automated issue tracking workflows at Wasoko → 50% faster Time to Resolution</li>
              <li>Led Tanzania Data Center setup for Nala to meet regulatory compliance</li>
              <li>Designed secure CI/CD pipelines and observability dashboards across teams</li>
            </ul>
          </div>

          {/* Programming Languages */}
          <div className="rounded-2xl bg-gray-800 p-6 text-white shadow-xl">
            <h3 className="mb-3 text-xl font-semibold text-blue-400">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-600 px-3 py-1 text-white">HTML</span>
              <span className="rounded-full bg-blue-600 px-3 py-1 text-white">CSS</span>
              <span className="rounded-full bg-blue-600 px-3 py-1 text-white">JavaScript</span>
              <span className="rounded-full bg-blue-600 px-3 py-1 text-white">Python</span>
              <span className="rounded-full bg-blue-600 px-3 py-1 text-white">SQL</span>
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
            className="mb-6 h-auto w-[280px] rounded-2xl border-4 border-indigo-200 object-cover shadow-2xl md:w-[360px] lg:w-[420px]"
            loading="lazy"
          />
          <div className="w-full rounded-2xl bg-gray-800 p-8 text-white shadow-xl transition-all hover:scale-[1.02]">
            <h3 className="mb-4 text-center text-2xl font-semibold text-blue-400">
              Core Expertise
            </h3>
            <ul className="list-inside space-y-3 text-base text-gray-200 md:text-lg">
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
