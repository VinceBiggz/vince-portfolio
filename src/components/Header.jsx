import { NavLink, Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Globe } from "lucide-react";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4" aria-label="Primary">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-white focus:text-blue-700 dark:focus:bg-gray-900 focus:ring-2 focus:ring-blue-600 focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold"><Link to="/">Vincent Wachira</Link></h1>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${isActive ? "text-blue-300" : ""}`
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${isActive ? "text-blue-300" : ""}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${isActive ? "text-blue-300" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded ${isActive ? "text-blue-300" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a href="https://github.com/VinceBiggz" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="hover:text-blue-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/vincentwachira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="hover:text-blue-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/vincentwachira" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile" className="hover:text-blue-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/vincentwachira" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile" className="hover:text-blue-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://vincentwachira.dev" target="_blank" rel="noopener noreferrer" aria-label="Portfolio website" className="hover:text-blue-400 transition-colors">
            <Globe className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}