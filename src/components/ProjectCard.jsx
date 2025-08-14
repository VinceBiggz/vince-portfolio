import { motion } from "framer-motion";
import projectImage from "../assets/cloud_native_issue_tracker.png";

export default function ProjectCard({ title, description, githubLink, demoLink, image }) {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img 
        src={image || projectImage} 
        alt={title} 
        className="w-full h-48 object-cover rounded-xl mb-4 shadow-md" 
      />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      <div className="flex space-x-4">
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            GitHub
          </a>
        )}
        {demoLink && (
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}