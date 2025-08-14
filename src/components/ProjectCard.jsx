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

  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={image || projectImage} 
          alt={title} 
          className="w-full h-48 object-cover rounded-xl mb-4 shadow-md" 
        />
        <div className="absolute top-2 right-2">
          {getStatusBadge(status)}
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
      
      {/* Tech Stack */}
      {techStack && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-1">
            {techStack.slice(0, 3).map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-md">
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded-md">
                +{techStack.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}
      
      <div className="flex space-x-4">
        {githubLink && !isPlaceholderLink(githubLink) && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            GitHub
          </a>
        )}
        {githubLink && isPlaceholderLink(githubLink) && (
          <span className="text-gray-400 font-medium cursor-not-allowed">
            GitHub (Coming Soon)
          </span>
        )}
      </div>
    </motion.div>
  );
}