import HeroSection from "../components/HeroSection.jsx";
//import AboutSection from "../components/AboutSection.jsx";
import BlogSection from "../components/BlogSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import SocialMediaSection from "../components/SocialMediaSection.jsx";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BlogSection />
      <TestimonialsSection />
      <SocialMediaSection />
    </div>
  );
}