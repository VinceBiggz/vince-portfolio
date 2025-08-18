import { useEffect, useCallback, useRef } from "react";

export const usePerformance = (pageName) => {
  const startTime = useRef(performance.now());
  const metrics = useRef({
    pageLoadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
  });

  // Track page load time
  useEffect(() => {
    const handleLoad = () => {
      const loadTime = performance.now() - startTime.current;
      metrics.current.pageLoadTime = loadTime;
      
      // Log performance metrics
      console.log(`🚀 ${pageName} Performance Metrics:`, {
        pageLoadTime: `${loadTime.toFixed(2)}ms`,
        timestamp: new Date().toISOString(),
      });

      // Send to analytics (if configured)
      if (window.gtag) {
        window.gtag('event', 'page_load_time', {
          page_name: pageName,
          load_time: loadTime,
        });
      }
    };

    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metrics.current.firstContentfulPaint = entry.startTime;
            console.log(`🎨 FCP: ${entry.startTime.toFixed(2)}ms`);
          }
        });
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.current.largestContentfulPaint = lastEntry.startTime;
        console.log(`📏 LCP: ${lastEntry.startTime.toFixed(2)}ms`);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let cls = 0;
        list.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            cls += entry.value;
          }
        });
        metrics.current.cumulativeLayoutShift = cls;
        console.log(`📐 CLS: ${cls.toFixed(4)}`);
      }).observe({ entryTypes: ['layout-shift'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          metrics.current.firstInputDelay = entry.processingStart - entry.startTime;
          console.log(`⚡ FID: ${metrics.current.firstInputDelay.toFixed(2)}ms`);
        });
      }).observe({ entryTypes: ['first-input'] });
    };

    // Track user interactions
    const trackUserInteractions = () => {
      const interactionEvents = ['click', 'scroll', 'keydown'];
      
      interactionEvents.forEach(eventType => {
        document.addEventListener(eventType, () => {
          const interactionTime = performance.now() - startTime.current;
          
          if (window.gtag) {
            window.gtag('event', 'user_interaction', {
              page_name: pageName,
              event_type: eventType,
              interaction_time: interactionTime,
            });
          }
        }, { passive: true });
      });
    };

    // Initialize tracking
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleLoad);
    } else {
      handleLoad();
    }

    trackCoreWebVitals();
    trackUserInteractions();

    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoad);
    };
  }, [pageName]);

  // Track component render time
  const trackRenderTime = useCallback((componentName) => {
    const renderTime = performance.now() - startTime.current;
    
    console.log(`⚡ ${componentName} render time: ${renderTime.toFixed(2)}ms`);
    
    if (window.gtag) {
      window.gtag('event', 'component_render', {
        page_name: pageName,
        component_name: componentName,
        render_time: renderTime,
      });
    }
  }, [pageName]);

  // Track memory usage
  const trackMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = performance.memory;
      console.log(`💾 Memory Usage:`, {
        used: `${(memory.usedJSHeapSize / 1048576).toFixed(2)}MB`,
        total: `${(memory.totalJSHeapSize / 1048576).toFixed(2)}MB`,
        limit: `${(memory.jsHeapSizeLimit / 1048576).toFixed(2)}MB`,
      });
    }
  }, []);

  return {
    metrics: metrics.current,
    trackRenderTime,
    trackMemoryUsage,
  };
};

// Hook for tracking scroll performance
export const useScrollPerformance = () => {
  const scrollMetrics = useRef({
    scrollDepth: 0,
    scrollTime: 0,
    scrollEvents: 0,
  });

  useEffect(() => {
    let scrollStartTime = performance.now();
    let scrollTimeout;

    const handleScroll = () => {
      scrollMetrics.current.scrollEvents++;
      
      // Calculate scroll depth
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = (scrollTop / docHeight) * 100;
      
      scrollMetrics.current.scrollDepth = Math.max(scrollMetrics.current.scrollDepth, scrollDepth);
      
      // Track scroll time
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        scrollMetrics.current.scrollTime = performance.now() - scrollStartTime;
        
        console.log(`📜 Scroll Performance:`, {
          depth: `${scrollMetrics.current.scrollDepth.toFixed(1)}%`,
          time: `${scrollMetrics.current.scrollTime.toFixed(2)}ms`,
          events: scrollMetrics.current.scrollEvents,
        });
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return scrollMetrics.current;
};

export const useLazyLoad = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return [setRef, isVisible];
};

export const usePreloadImage = (src) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setError(new Error("Failed to load image"));
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return { isLoaded, error };
};


