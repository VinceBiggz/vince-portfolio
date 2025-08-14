import { NavLink, Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram, Globe, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white dark:bg-gray-900" aria-label="Primary">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-blue-700 focus:ring-2 focus:ring-blue-600 dark:focus:bg-gray-900">
        Skip to main content
      </a>
      <div className="container mx-auto flex items-center justify-between">
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
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="rounded-lg p-2 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-gray-800"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="size-5 text-yellow-400" />
            ) : (
              <Moon className="size-5 text-gray-300" />
            )}
          </button>
          
          {/* Social Icons */}
          <a href="https://github.com/VinceBiggz" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="transition-colors hover:text-blue-400">
            <Github className="size-6" />
          </a>
          <a href="https://www.linkedin.com/in/vincentwachira" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="transition-colors hover:text-blue-400">
            <Linkedin className="size-6" />
          </a>
          <a href="https://twitter.com/vincentwachira" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile" className="transition-colors hover:text-blue-400">
            <Twitter className="size-6" />
          </a>
          <a href="https://instagram.com/vincentwachira" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile" className="transition-colors hover:text-blue-400">
            <Instagram className="size-6" />
          </a>
          <a href="https://vincentwachira.dev" target="_blank" rel="noopener noreferrer" aria-label="Portfolio website" className="transition-colors hover:text-blue-400">
            <Globe className="size-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}