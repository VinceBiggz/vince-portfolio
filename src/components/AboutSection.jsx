import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profilePic from "../assets/vincent_wachira_pic_1.jpeg";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      className="flex min-h-screen w-full items-center justify-center bg-white px-6 py-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.7 }}
      aria-labelledby="about-heading"
    >
      <motion.div 
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Animated Intro */}
        <motion.div
          className="space-y-6"
          variants={containerVariants}
        >
          <motion.h2 
            id="about-heading" 
            className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl"
            variants={itemVariants}
          >
            About Me
          </motion.h2>
          
          <motion.p 
            className="text-lg leading-relaxed text-gray-700"
            variants={itemVariants}
          >
            I&apos;m <span className="font-semibold text-indigo-700">Vincent Wachira</span> — a senior IT strategist and cloud engineer with a decade of success delivering digital transformation, security, and automation at scale.
          </motion.p>
          
          <motion.p 
            className="text-lg leading-relaxed text-gray-700"
            variants={itemVariants}
          >
            Notable achievements include automating issue tracking at Wasoko, reducing Time to Resolution by 50%, and leading a Tanzania Data Center setup for Nala to meet regulatory compliance. I&apos;m proficient in HTML, CSS, JavaScript, Python, and SQL.
          </motion.p>
          
          <motion.p 
            className="text-lg leading-relaxed text-gray-700"
            variants={itemVariants}
          >
            Certifications: <span className="font-semibold text-indigo-700">Google Certified Professional Cloud Architect, ISO 27001 Internal Auditor, ALX-T Cloud DevOps Engineer, Oracle Certified Foundations Associate.</span>
          </motion.p>

          {/* Achievements Card */}
          <motion.div 
            className="rounded-2xl bg-gray-800 p-6 text-white shadow-xl"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-3 text-xl font-semibold text-blue-400">Key Achievements</h3>
            <ul className="list-inside list-disc space-y-2 text-gray-200">
              <li>Automated issue tracking workflows at Wasoko → 50% faster Time to Resolution</li>
              <li>Led Tanzania Data Center setup for Nala to meet regulatory compliance</li>
              <li>Designed secure CI/CD pipelines and observability dashboards across teams</li>
            </ul>
          </motion.div>

          {/* Programming Languages Card */}
          <motion.div 
            className="rounded-2xl bg-gray-800 p-6 text-white shadow-xl"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-3 text-xl font-semibold text-blue-400">Programming Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "Python", "SQL"].map((lang, index) => (
                <motion.span
                  key={lang}
                  className="rounded-full bg-blue-600 px-3 py-1 text-white"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, backgroundColor: "#4f46e5" }}
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Animated Core Expertise Box */}
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
        >
          <motion.img
            src={profilePic}
            alt="Portrait of Vincent Wachira"
            className="mb-6 h-auto w-[280px] rounded-2xl border-4 border-indigo-200 object-cover shadow-2xl md:w-[360px] lg:w-[420px]"
            loading="lazy"
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              borderColor: "#6366f1"
            }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.div 
            className="w-full rounded-2xl bg-gray-800 p-8 text-white shadow-xl"
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="mb-4 text-center text-2xl font-semibold text-blue-400">
              Core Expertise
            </h3>
            <ul className="list-inside space-y-3 text-base text-gray-200 md:text-lg">
              {[
                "☁️ Cloud Architecture – AWS, Azure, GCP",
                "🔐 Cybersecurity & ISO 27001 Auditing",
                "⚙️ DevOps Pipelines & Automation",
                "📊 Monitoring, Logging & KPIs",
                "🧠 AI & ML Integration"
              ].map((expertise, index) => (
                <motion.li
                  key={expertise}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                >
                  {expertise}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
