// Analytics utility for tracking user interactions and performance metrics

class Analytics {
  constructor() {
    this.events = [];
    this.isInitialized = false;
  }

  init() {
    if (this.isInitialized) return;
    
    // Initialize analytics
    this.isInitialized = true;
    this.trackPageView(window.location.pathname);
    
    // Track performance metrics
    this.trackPerformance();
    
    // Track user interactions
    this.trackUserInteractions();
  }

  trackPageView(path) {
    const event = {
      type: 'pageview',
      path,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  trackEvent(category, action, label = null, value = null) {
    const event = {
      type: 'event',
      category,
      action,
      label,
      value,
      timestamp: new Date().toISOString(),
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  trackPerformance() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0];
          const paint = performance.getEntriesByType('paint');
          
          const fcp = paint.find(entry => entry.name === 'first-contentful-paint');
          const lcp = paint.find(entry => entry.name === 'largest-contentful-paint');
          
          this.trackEvent('performance', 'page_load', 'load_time', navigation.loadEventEnd - navigation.loadEventStart);
          
          if (fcp) {
            this.trackEvent('performance', 'first_contentful_paint', 'fcp', fcp.startTime);
          }
          
          if (lcp) {
            this.trackEvent('performance', 'largest_contentful_paint', 'lcp', lcp.startTime);
          }
        }, 1000);
      });
    }
  }

  trackUserInteractions() {
    // Track button clicks
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        const button = e.target.tagName === 'BUTTON' ? e.target : e.target.closest('button');
        this.trackEvent('interaction', 'button_click', button.textContent?.trim() || 'unknown');
      }
      
      // Track link clicks
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        const link = e.target.tagName === 'A' ? e.target : e.target.closest('a');
        this.trackEvent('interaction', 'link_click', link.href);
      }
    });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      this.trackEvent('interaction', 'form_submit', e.target.action || 'unknown');
    });

    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0) { // Track every 25%
          this.trackEvent('engagement', 'scroll_depth', `${maxScroll}%`);
        }
      }
    });
  }

  trackProjectView(projectTitle) {
    this.trackEvent('engagement', 'project_view', projectTitle);
  }

  trackContactForm() {
    this.trackEvent('engagement', 'contact_form', 'form_submission');
  }

  trackSocialClick(platform) {
    this.trackEvent('engagement', 'social_click', platform);
  }

  sendToAnalytics(event) {
    // In a real implementation, this would send to Google Analytics, Mixpanel, etc.
    // For now, we'll just log to console and store in localStorage
    console.log('Analytics Event:', event);
    
    // Store in localStorage for demo purposes
    const storedEvents = JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
    storedEvents.push(event);
    localStorage.setItem('portfolio_analytics', JSON.stringify(storedEvents.slice(-100))); // Keep last 100 events
  }

  getAnalyticsData() {
    return JSON.parse(localStorage.getItem('portfolio_analytics') || '[]');
  }

  clearAnalytics() {
    localStorage.removeItem('portfolio_analytics');
    this.events = [];
  }
}

// Create singleton instance
const analytics = new Analytics();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => analytics.init());
} else {
  analytics.init();
}

export default analytics;


