# API Documentation

This document provides comprehensive documentation for all custom hooks, components, and utilities in the Vincent Wachira Portfolio project.

## 📚 **Table of Contents**

- [Custom Hooks](#custom-hooks)
- [Components](#components)
- [Utilities](#utilities)
- [Configuration](#configuration)

---

## 🪝 **Custom Hooks**

### `usePerformance`

A comprehensive performance monitoring hook that tracks Core Web Vitals, user interactions, and component performance.

#### **Import**
```javascript
import { usePerformance } from '../hooks/usePerformance';
```

#### **Usage**
```javascript
function MyComponent() {
  const { 
    performanceMetrics, 
    trackEvent, 
    trackPageView,
    memoryUsage 
  } = usePerformance();

  // Track custom events
  const handleClick = () => {
    trackEvent('button_click', { button: 'cta', page: 'home' });
  };

  // Track page views
  useEffect(() => {
    trackPageView('/home');
  }, []);

  return (
    <div>
      <p>FCP: {performanceMetrics.fcp}ms</p>
      <p>LCP: {performanceMetrics.lcp}ms</p>
      <p>Memory: {memoryUsage.usedJSHeapSize}MB</p>
    </div>
  );
}
```

#### **Returns**
- `performanceMetrics` (object): Core Web Vitals metrics
  - `fcp` (number): First Contentful Paint time
  - `lcp` (number): Largest Contentful Paint time
  - `cls` (number): Cumulative Layout Shift
  - `fid` (number): First Input Delay
- `trackEvent` (function): Track custom events
- `trackPageView` (function): Track page views
- `memoryUsage` (object): Memory consumption data
- `scrollMetrics` (object): Scroll performance data

#### **Parameters**
- `options` (object, optional): Configuration options
  - `enableLogging` (boolean): Enable console logging (default: true)
  - `trackMemory` (boolean): Track memory usage (default: true)
  - `trackScroll` (boolean): Track scroll performance (default: true)

---

## 🧩 **Components**

### `OptimizedImage`

A performance-optimized image component with lazy loading, error handling, and viewport-based loading.

#### **Import**
```javascript
import OptimizedImage from '../components/OptimizedImage';
```

#### **Usage**
```javascript
<OptimizedImage
  src="/path/to/image.jpg"
  alt="Description"
  className="w-full h-64 object-cover"
  placeholder="/path/to/placeholder.jpg"
  onLoad={() => console.log('Image loaded')}
  onError={() => console.log('Image failed to load')}
/>
```

#### **Props**
- `src` (string, required): Image source URL
- `alt` (string, required): Alt text for accessibility
- `className` (string, optional): CSS classes
- `placeholder` (string, optional): Placeholder image URL
- `onLoad` (function, optional): Load success callback
- `onError` (function, optional): Load error callback
- `threshold` (number, optional): Intersection Observer threshold (default: 0.1)
- `rootMargin` (string, optional): Intersection Observer root margin (default: '50px')

#### **Features**
- **Lazy Loading**: Images load only when entering viewport
- **Error Handling**: Fallback to placeholder on load failure
- **Performance Tracking**: Tracks load time and success rate
- **Smooth Transitions**: Fade-in animation on load
- **Accessibility**: Proper alt text and loading states

### `LoadingSkeleton`

A professional loading skeleton component with smooth animations and customizable content.

#### **Import**
```javascript
import LoadingSkeleton from '../components/LoadingSkeleton';
```

#### **Usage**
```javascript
<LoadingSkeleton
  type="card"
  count={3}
  className="grid grid-cols-1 md:grid-cols-3 gap-6"
/>
```

#### **Props**
- `type` (string, required): Skeleton type ('card', 'text', 'avatar', 'custom')
- `count` (number, optional): Number of skeleton items (default: 1)
- `className` (string, optional): Container CSS classes
- `height` (string, optional): Custom height for custom type
- `width` (string, optional): Custom width for custom type

#### **Available Types**
- `card`: Blog post or project card skeleton
- `text`: Text content skeleton
- `avatar`: Profile picture skeleton
- `custom`: Customizable skeleton

#### **Features**
- **Smooth Animations**: Pulse animation with configurable timing
- **Responsive Design**: Adapts to different screen sizes
- **Multiple Types**: Pre-built skeletons for common use cases
- **Customizable**: Support for custom dimensions and styling

### `PageTransition`

A smooth page transition component using Framer Motion.

#### **Import**
```javascript
import PageTransition from '../components/PageTransition';
```

#### **Usage**
```javascript
<PageTransition>
  <div>Page content here</div>
</PageTransition>
```

#### **Props**
- `children` (ReactNode, required): Page content
- `className` (string, optional): Additional CSS classes
- `duration` (number, optional): Animation duration in seconds (default: 0.3)

#### **Features**
- **Smooth Animations**: Fade-in and slide-up transitions
- **Performance Optimized**: Uses Framer Motion for smooth 60fps animations
- **Customizable**: Configurable duration and easing
- **Accessibility**: Respects user's motion preferences

### `NewsletterSignup`

A newsletter subscription component with validation, loading states, and success/error handling.

#### **Import**
```javascript
import NewsletterSignup from '../components/NewsletterSignup';
```

#### **Usage**
```javascript
<NewsletterSignup />
```

#### **Features**
- **Email Validation**: Client-side email format validation
- **Loading States**: Visual feedback during submission
- **Success/Error Handling**: Clear feedback messages
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Dark Mode Support**: Consistent theming across modes

#### **States**
- `idle`: Initial state
- `loading`: Submission in progress
- `success`: Successful subscription
- `error`: Submission failed

### `BlogSection`

An interactive blog section with search, filtering, social sharing, and modal reading.

#### **Import**
```javascript
import BlogSection from '../components/BlogSection';
```

#### **Usage**
```javascript
<BlogSection />
```

#### **Features**
- **Search & Filtering**: Real-time search with category filtering
- **Social Sharing**: Share on Twitter, Facebook, LinkedIn, Email
- **Modal Reading**: Full article viewing in modal
- **Auto-Scroll**: Horizontal scrolling with navigation arrows
- **Responsive Design**: Touch-friendly mobile interactions

#### **Blog Post Structure**
```javascript
{
  id: 1,
  title: "Article Title",
  excerpt: "Brief description...",
  content: "<p>Full HTML content...</p>",
  image: "/path/to/image.jpg",
  category: "Technology",
  tags: ["React", "Performance"],
  author: "Vincent Wachira",
  date: "2024-12-19",
  readTime: "5 min read"
}
```

### `TestimonialsSection`

An interactive testimonials section with navigation, auto-scroll, and modal viewing.

#### **Import**
```javascript
import TestimonialsSection from '../components/TestimonialsSection';
```

#### **Usage**
```javascript
<TestimonialsSection />
```

#### **Features**
- **Navigation Arrows**: Manual scrolling with smooth transitions
- **Auto-Scroll**: Automatic progression every 5 seconds
- **Modal Viewing**: Full testimonial reading in modal
- **Responsive Design**: Touch-friendly mobile scrolling
- **Accessibility**: Keyboard navigation support

---

## 🛠 **Utilities**

### `analytics.js`

Custom analytics utility for tracking user interactions and performance metrics.

#### **Import**
```javascript
import { trackEvent, trackPageView, trackPerformance } from '../utils/analytics';
```

#### **Functions**

##### `trackEvent(eventName, properties)`
Track custom user events.

```javascript
trackEvent('button_click', {
  button: 'cta',
  page: 'home',
  timestamp: Date.now()
});
```

##### `trackPageView(page, properties)`
Track page views and navigation.

```javascript
trackPageView('/about', {
  referrer: document.referrer,
  userAgent: navigator.userAgent
});
```

##### `trackPerformance(metrics)`
Track performance metrics.

```javascript
trackPerformance({
  fcp: 1200,
  lcp: 2500,
  cls: 0.05,
  fid: 45
});
```

#### **Configuration**
```javascript
// Configure analytics
window.gtag = window.gtag || function() {
  (window.dataLayer = window.dataLayer || []).push(arguments);
};

// Set up Google Analytics
gtag('config', 'GA_MEASUREMENT_ID', {
  page_title: document.title,
  page_location: window.location.href
});
```

---

## ⚙️ **Configuration**

### Vite Configuration

The project uses an optimized Vite configuration for performance and development experience.

#### **Key Features**
- **Base Path**: Configured for GitHub Pages deployment
- **Bundle Splitting**: Manual chunks for optimal loading
- **Asset Organization**: Separate directories for different file types
- **Development Server**: HMR optimizations and overlay improvements

#### **Build Optimization**
```javascript
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animations': ['framer-motion'],
          'icons': ['lucide-react'],
        },
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
  },
});
```

### ESLint Configuration

Flat config format for modern ESLint setup.

#### **Rules**
- **React**: Best practices and hooks rules
- **Tailwind**: Class order and validation
- **Prettier**: Code formatting integration
- **General**: Common JavaScript best practices

### Performance Monitoring

Comprehensive performance tracking system.

#### **Metrics Tracked**
- **Core Web Vitals**: FCP, LCP, CLS, FID
- **User Interactions**: Click events, form submissions
- **Navigation**: Page views and routing
- **Memory Usage**: Heap size and garbage collection
- **Scroll Performance**: Scroll events and timing

#### **Implementation**
```javascript
// Performance monitoring setup
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'largest-contentful-paint') {
      trackPerformance({ lcp: entry.startTime });
    }
  }
});

observer.observe({ entryTypes: ['largest-contentful-paint'] });
```

---

## 📊 **Performance Guidelines**

### **Best Practices**
1. **Lazy Loading**: Use Suspense boundaries for large components
2. **Image Optimization**: Always use OptimizedImage for images
3. **Bundle Splitting**: Keep chunks under 250KB
4. **Performance Monitoring**: Track Core Web Vitals in production
5. **Error Handling**: Implement proper error boundaries

### **Performance Targets**
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Bundle Size**: < 500KB total

### **Monitoring**
- Use `usePerformance` hook for real-time metrics
- Implement error tracking for production
- Monitor Core Web Vitals in Google Search Console
- Track user interactions and conversion rates

---

## 🔧 **Development Tools**

### **Available Scripts**
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint
- `npm run format`: Format with Prettier
- `npm run analyze`: Analyze bundle size
- `npm run performance`: Run performance tests
- `npm run lighthouse`: Generate Lighthouse report

### **Debugging**
- Performance metrics logged to console in development
- Bundle analysis available via `npm run analyze`
- Lighthouse reports for performance auditing
- React DevTools for component debugging

---

## 📚 **Additional Resources**

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Web Vitals](https://web.dev/vitals/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

**Note**: This documentation is maintained alongside the codebase. For the most up-to-date information, refer to the actual component implementations and inline comments.
