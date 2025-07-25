import { motion } from "framer-motion";

export default function ProjectCard({ title, description, githubLink, demoLink, image }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <div className="mt-4 flex space-x-4">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            GitHub
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}