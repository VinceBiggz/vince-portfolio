import { lazy, Suspense, useEffect } from "react";
import HeroSection from "../components/HeroSection.jsx";
//import AboutSection from "../components/AboutSection.jsx";
import { usePerformance } from "../hooks/usePerformance.js";

// Lazy load components for better performance
const BlogSection = lazy(() => import("../components/BlogSection.jsx"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection.jsx"));
const SocialMediaSection = lazy(() => import("../components/SocialMediaSection.jsx"));

// Loading skeleton for lazy components
const SectionSkeleton = () => (
  <div className="py-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="mb-8 h-8 w-64 rounded bg-gray-200 dark:bg-gray-700 mx-auto"></div>
        <div className="mb-12 h-4 w-96 rounded bg-gray-200 dark:bg-gray-700 mx-auto"></div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl bg-white dark:bg-gray-700 p-6 shadow-lg">
              <div className="mb-4 h-48 w-full rounded bg-gray-200 dark:bg-gray-600"></div>
              <div className="mb-3 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-600"></div>
              <div className="space-y-2">
                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-600"></div>
                <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-600"></div>
                <div className="h-4 w-4/6 rounded bg-gray-200 dark:bg-gray-600"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  // Performance monitoring
  const { trackRenderTime, trackMemoryUsage } = usePerformance("Home");

  useEffect(() => {
    // Track component render time
    trackRenderTime("HomePage");
    
    // Track memory usage after initial render
    setTimeout(() => {
      trackMemoryUsage();
    }, 1000);
  }, [trackRenderTime, trackMemoryUsage]);

  return (
    <div>
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <BlogSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SocialMediaSection />
      </Suspense>
    </div>
  );
}