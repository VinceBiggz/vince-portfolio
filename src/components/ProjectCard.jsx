import { motion } from "framer-motion";
import OptimizedImage from "./OptimizedImage.jsx";
import projectImage from "../assets/cloud_native_issue_tracker.png";
import analytics from "../utils/analytics.js";

export default function ProjectCard({ title, description, githubLink, image, status, techStack }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "in-development":
        return <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">In Development</span>;
      case "planned":
        return <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">Coming Soon</span>;
      case "completed":
        return <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">Completed</span>;
      default:
        return null;
    }
  };

  const isPlaceholderLink = (link) => link === "#" || link === "";

  const handleProjectClick = () => {
    analytics.trackProjectView(title);
  };

  const handleGitHubClick = () => {
    analytics.trackEvent('engagement', 'github_click', title);
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl dark:border-gray-700 dark:bg-gray-800"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        borderColor: "#6366f1"
      }}
      transition={{ duration: 0.3 }}
      onClick={handleProjectClick}
    >
      <div className="relative">
        <OptimizedImage
          src={image || projectImage}
          alt={title}
          className="mb-4 h-48 w-full rounded-xl object-cover shadow-md"
          variants={imageVariants}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute right-2 top-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {getStatusBadge(status)}
        </motion.div>
      </div>

      <motion.div variants={contentVariants}>
        <motion.h3 
          className="mb-2 text-xl font-bold text-gray-900 dark:text-white"
          whileHover={{ color: "#4f46e5" }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300"
          variants={contentVariants}
        >
          {description}
        </motion.p>

        {/* Tech Stack */}
        {techStack && (
          <motion.div 
            className="mb-4"
            variants={contentVariants}
          >
            <h4 className="mb-2 text-sm font-semibold text-gray-600">Tech Stack:</h4>
            <div className="flex flex-wrap gap-1">
              {techStack.slice(0, 3).map((tech, index) => (
                <motion.span
                  key={index}
                  className="rounded-md bg-indigo-50 px-2 py-1 text-xs text-indigo-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "#e0e7ff",
                    color: "#4338ca"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
              {techStack.length > 3 && (
                <motion.span
                  className="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                >
                  +{techStack.length - 3} more
                </motion.span>
              )}
            </div>
          </motion.div>
        )}

        <motion.div 
          className="flex space-x-4"
          variants={contentVariants}
        >
          {githubLink && !isPlaceholderLink(githubLink) && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 transition-colors hover:text-blue-800"
              whileHover={{ 
                scale: 1.05,
                color: "#1d4ed8"
              }}
              transition={{ duration: 0.2 }}
              onClick={handleGitHubClick}
            >
              GitHub
            </motion.a>
          )}
          {githubLink && isPlaceholderLink(githubLink) && (
            <motion.span 
              className="cursor-not-allowed font-medium text-gray-400"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              GitHub (Coming Soon)
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}