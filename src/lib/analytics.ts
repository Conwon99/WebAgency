// Google Analytics tracking for CTA clicks and user interactions
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  console.log('Analytics Event:', eventName, properties);
  
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

// Track Book a Call button clicks
export const trackBookCall = (location: string) => {
  trackEvent('book_call_click', {
    event_category: 'CTA',
    event_label: 'Book a Call',
    location: location,
    timestamp: new Date().toISOString()
  });
};

// Track WhatsApp button clicks
export const trackWhatsApp = (location: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'CTA',
    event_label: 'WhatsApp',
    location: location,
    timestamp: new Date().toISOString()
  });
};

// Track Calendly widget interactions
export const trackCalendlyEvent = (eventType: 'opened' | 'closed' | 'scheduled', details?: string) => {
  trackEvent('calendly_interaction', {
    event_category: 'Calendly',
    event_label: eventType,
    details: details || '',
    timestamp: new Date().toISOString()
  });
};

// Track phone call clicks
export const trackPhoneCall = (location: string) => {
  trackEvent('phone_call_click', {
    event_category: 'CTA',
    event_label: 'Phone Call',
    location: location,
    timestamp: new Date().toISOString()
  });
};

// Track page views
export const trackPageView = (page: string) => {
  trackEvent('page_view', {
    event_category: 'Navigation',
    event_label: page,
    timestamp: new Date().toISOString()
  });
};

// Track section views (for scroll tracking)
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', {
    event_category: 'Engagement',
    event_label: sectionName,
    timestamp: new Date().toISOString()
  });
};

// Legacy function for backward compatibility
export const trackCTA = (ctaType: 'phone' | 'messenger' | 'form' | 'book_call' | 'whatsapp', location?: string) => {
  switch (ctaType) {
    case 'book_call':
      trackBookCall(location || 'unknown');
      break;
    case 'whatsapp':
      trackWhatsApp(location || 'unknown');
      break;
    case 'phone':
      trackPhoneCall(location || 'unknown');
      break;
    case 'messenger':
      trackEvent('messenger_click', {
        event_category: 'CTA',
        event_label: 'Messenger',
        location: location || 'unknown',
        timestamp: new Date().toISOString()
      });
      break;
    case 'form':
      trackEvent('form_submit', {
        event_category: 'CTA',
        event_label: 'Form Submit',
        location: location || 'unknown',
        timestamp: new Date().toISOString()
      });
      break;
    default:
      trackEvent('cta_click', {
        cta_type: ctaType,
        location: location || 'unknown',
        timestamp: new Date().toISOString()
      });
  }
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
} 