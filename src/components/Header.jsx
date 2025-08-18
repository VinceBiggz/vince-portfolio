import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext.jsx";
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
  const { isDarkMode, toggleDarkMode } = useTheme();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/testimonials", label: "Testimonials" },
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <motion.nav
        className="bg-gray-800 text-white shadow-lg dark:bg-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo/Brand */}
            <motion.div
              className="shrink-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <NavLink
                to="/"
                className="text-xl font-bold text-white transition-colors hover:text-indigo-300"
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
                {navItems.map((item) => (
                  <motion.div key={item.to} variants={itemVariants}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-indigo-600 text-white shadow-lg"
                            : "text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-800"
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
                className="rounded-md p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isDarkMode ? (
                  <Sun className="size-5" />
                ) : (
                  <Moon className="size-5" />
                )}
              </motion.button>

              {/* Social Links */}
              <div className="hidden items-center space-x-2 sm:flex">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white dark:hover:bg-gray-800"
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
                    <social.icon className="size-5" />
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