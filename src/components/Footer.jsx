import { Github, Linkedin, Twitter, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Vincent Wachira. All rights reserved.</p>
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
    </footer>
  );
}