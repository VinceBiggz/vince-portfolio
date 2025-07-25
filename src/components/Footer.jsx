import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Vincent Wachira. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/VinceBiggz" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}