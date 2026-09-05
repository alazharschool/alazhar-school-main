// Performance monitoring utilities

export interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

export interface PerformanceEvent {
  name: string;
  value: number;
  timestamp: Date;
  metadata?: Record<string, any>;
}

class PerformanceMonitor {
  private events: PerformanceEvent[] = [];
  private observers: Map<string, PerformanceObserver> = new Map();

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  private initializeObservers() {
    // Observe navigation timing
    if ('PerformanceObserver' in window) {
      // Navigation timing
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.recordEvent('navigation', navEntry.loadEventEnd - navEntry.loadEventStart);
          }
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      this.observers.set('navigation', navigationObserver);

      // Paint timing
      const paintObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint') {
            this.recordEvent(`paint_${entry.name}`, entry.startTime);
          }
        });
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.set('paint', paintObserver);

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordEvent('largest_contentful_paint', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.set('lcp', lcpObserver);

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as any;
          this.recordEvent('first_input_delay', fidEntry.processingStart - fidEntry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.set('fid', fidObserver);

      // Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.recordEvent('cumulative_layout_shift', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.set('cls', clsObserver);
    }
  }

  public recordEvent(name: string, value: number, metadata?: Record<string, any>) {
    const event: PerformanceEvent = {
      name,
      value,
      timestamp: new Date(),
      metadata
    };

    this.events.push(event);

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(event);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Event: ${name} = ${value}ms`, metadata);
    }
  }

  public measurePageLoad() {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        
        this.recordEvent('page_load_time', loadTime, {
          url: window.location.href,
          userAgent: navigator.userAgent
        });
      });
    }
  }

  public measureCustomMetric(name: string, fn: () => number) {
    const startTime = performance.now();
    const result = fn();
    const endTime = performance.now();
    
    this.recordEvent(name, endTime - startTime, { result });
  }

  public async measureAsyncMetric(name: string, fn: () => Promise<any>) {
    const startTime = performance.now();
    const result = await fn();
    const endTime = performance.now();
    
    this.recordEvent(name, endTime - startTime, { result });
  }

  public getMetrics(): PerformanceMetrics {
    const metrics: Partial<PerformanceMetrics> = {};
    
    this.events.forEach(event => {
      switch (event.name) {
        case 'navigation':
          metrics.pageLoadTime = event.value;
          break;
        case 'paint_first-contentful-paint':
          metrics.firstContentfulPaint = event.value;
          break;
        case 'largest_contentful_paint':
          metrics.largestContentfulPaint = event.value;
          break;
        case 'cumulative_layout_shift':
          metrics.cumulativeLayoutShift = event.value;
          break;
        case 'first_input_delay':
          metrics.firstInputDelay = event.value;
          break;
      }
    });

    return metrics as PerformanceMetrics;
  }

  public getEvents(): PerformanceEvent[] {
    return [...this.events];
  }

  public clearEvents() {
    this.events = [];
  }

  private sendToAnalytics(event: PerformanceEvent) {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance', {
        event_category: 'performance',
        event_label: event.name,
        value: Math.round(event.value),
        custom_parameters: event.metadata
      });
    }

    // Send to custom analytics endpoint
    fetch('/api/analytics/performance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    }).catch(() => {
      // Silently fail if analytics endpoint is not available
    });
  }

  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Utility functions
export const measurePageLoad = () => performanceMonitor.measurePageLoad();

export const measureCustomMetric = (name: string, fn: () => number) => 
  performanceMonitor.measureCustomMetric(name, fn);

export const measureAsyncMetric = (name: string, fn: () => Promise<any>) => 
  performanceMonitor.measureAsyncMetric(name, fn);

export const getPerformanceMetrics = () => performanceMonitor.getMetrics();

export const getPerformanceEvents = () => performanceMonitor.getEvents();

// React hook for performance monitoring
export const usePerformanceMonitoring = () => {
  return {
    measureCustomMetric,
    measureAsyncMetric,
    getMetrics: getPerformanceMetrics,
    getEvents: getPerformanceEvents
  };
}; 