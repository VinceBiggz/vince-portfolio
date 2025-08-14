import { motion } from "framer-motion";
import projectImage from "../assets/cloud_native_issue_tracker.png";

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

  return (
    <motion.div
      className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xl"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={image || projectImage} 
          alt={title} 
          className="mb-4 h-48 w-full rounded-xl object-cover shadow-md" 
        />
        <div className="absolute right-2 top-2">
          {getStatusBadge(status)}
        </div>
      </div>
      
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="mb-4 leading-relaxed text-gray-700">{description}</p>
      
      {/* Tech Stack */}
      {techStack && (
        <div className="mb-4">
          <h4 className="mb-2 text-sm font-semibold text-gray-600">Tech Stack:</h4>
          <div className="flex flex-wrap gap-1">
            {techStack.slice(0, 3).map((tech, index) => (
              <span key={index} className="rounded-md bg-indigo-50 px-2 py-1 text-xs text-indigo-700">
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="rounded-md bg-gray-50 px-2 py-1 text-xs text-gray-600">
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
            className="font-medium text-blue-600 transition-colors hover:text-blue-800"
          >
            GitHub
          </a>
        )}
        {githubLink && isPlaceholderLink(githubLink) && (
          <span className="cursor-not-allowed font-medium text-gray-400">
            GitHub (Coming Soon)
          </span>
        )}
      </div>
    </motion.div>
  );
}