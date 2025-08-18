import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Globe, 
  Sun, 
  Moon 
} from "lucide-react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/VinceBiggz", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/vincentwachira", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/VinceBiggz", icon: Twitter, label: "Twitter" },
    { href: "https://instagram.com/vincentwachira", icon: Instagram, label: "Instagram" },
    { href: "https://vincentwachira.com", icon: Globe, label: "Website" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-indigo-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
      >
        Skip to main content
      </a>

      <motion.nav
        className="bg-gray-800 text-white shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <motion.div
              className="flex-shrink-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to="/"
                className="text-xl font-bold text-white hover:text-indigo-300 transition-colors"
                aria-label="Vincent Wachira Portfolio"
              >
                Vincent Wachira
              </NavLink>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              className="hidden md:block"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <motion.div key={item.to} variants={itemVariants}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-indigo-600 text-white shadow-lg"
                            : "text-gray-300 hover:text-white hover:bg-gray-700"
                        }`
                      }
                      aria-label={`Navigate to ${item.label} page`}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Social Links and Dark Mode Toggle */}
            <motion.div
              className="flex items-center space-x-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Dark Mode Toggle */}
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-colors"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>

              {/* Social Links */}
              <div className="hidden sm:flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                    aria-label={`Visit ${social.label}`}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "#374151",
                      color: "#ffffff"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}