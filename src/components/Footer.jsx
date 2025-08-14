import { Github, Linkedin, Twitter, Instagram, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <p>&copy; {new Date().getFullYear()} Vincent Wachira. All rights reserved.</p>
        <div className="flex space-x-4">
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
    </footer>
  );
}