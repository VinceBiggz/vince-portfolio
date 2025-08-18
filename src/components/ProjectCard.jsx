import { motion } from "framer-motion";
import projectImage from "../assets/cloud_native_issue_tracker.png";

export default function ProjectCard({ title, description, githubLink, image, status, techStack }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "in-development":
        return <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">In Development</span>;
      case "planned":
        return <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">Coming Soon</span>;
      case "completed":
        return <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Completed</span>;
      default:
        return null;
    }
  };

  const isPlaceholderLink = (link) => link === "#" || link === "";

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
      className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
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
    >
      <div className="relative">
        <motion.img
          src={image || projectImage}
          alt={title}
          className="w-full h-48 object-cover rounded-xl mb-4 shadow-md"
          variants={imageVariants}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute top-2 right-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {getStatusBadge(status)}
        </motion.div>
      </div>

      <motion.div variants={contentVariants}>
        <motion.h3 
          className="text-xl font-bold text-gray-900 mb-2"
          whileHover={{ color: "#4f46e5" }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-700 mb-4 leading-relaxed"
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
            <h4 className="text-sm font-semibold text-gray-600 mb-2">Tech Stack:</h4>
            <div className="flex flex-wrap gap-1">
              {techStack.slice(0, 3).map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-md"
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
                  className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded-md"
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
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
              whileHover={{ 
                scale: 1.05,
                color: "#1d4ed8"
              }}
              transition={{ duration: 0.2 }}
            >
              GitHub
            </motion.a>
          )}
          {githubLink && isPlaceholderLink(githubLink) && (
            <motion.span 
              className="text-gray-400 font-medium cursor-not-allowed"
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