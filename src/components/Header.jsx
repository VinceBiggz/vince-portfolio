import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Vincent Wachira</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
          <li><Link to="/projects" className="hover:text-blue-400">Projects</Link></li>
          <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
        </ul>
        <div className="flex space-x-4">
          <a href="https://github.com/VinceBiggz" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/vincentwachira" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
}