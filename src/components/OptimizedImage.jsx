import { motion } from "framer-motion";
import { useLazyLoad, usePreloadImage } from "../hooks/usePerformance.js";

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E",
  ...props 
}) {
  const [ref, isVisible] = useLazyLoad();
  const { isLoaded, error } = usePreloadImage(isVisible ? src : null);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        {...props}
      >
        <span className="text-sm text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      variants={imageVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      {...props}
    >
      {/* Placeholder */}
      <img
        src={placeholder}
        alt=""
        className="absolute inset-0 size-full object-cover"
        aria-hidden="true"
      />
      
      {/* Actual Image */}
      {isVisible && (
        <motion.img
          src={src}
          alt={alt}
          className="relative size-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          loading="lazy"
          onLoad={() => {
            // Trigger any additional load events
          }}
        />
      )}
      
      {/* Loading Indicator */}
      {isVisible && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="size-6 animate-spin rounded-full border-2 border-indigo-600 border-t-transparent"></div>
        </div>
      )}
    </motion.div>
  );
}
