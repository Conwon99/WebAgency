// Simple analytics tracking for CTA clicks and user interactions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // In a real implementation, this would send to Google Analytics, Mixpanel, etc.
  console.log('Analytics Event:', eventName, properties);
  
  // For now, we'll use a simple approach that could be extended
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

export const trackCTA = (ctaType: 'phone' | 'messenger' | 'form', location?: string) => {
  trackEvent('cta_click', {
    cta_type: ctaType,
    location: location || 'unknown',
    timestamp: new Date().toISOString()
  });
};

export const trackPageView = (page: string) => {
  trackEvent('page_view', {
    page,
    timestamp: new Date().toISOString()
  });
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
} 