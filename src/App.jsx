import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
// Future: ProjectsSection, ContactSection, etc.

function App() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <HeroSection />
      <AboutSection />
    </div>
  );
}

export default App;
