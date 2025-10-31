import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";
import { trackBookCall, trackWhatsApp, trackPhoneCall, trackCalendlyEvent } from "@/lib/analytics";

const HomeContact = () => {
  // Load Calendly script lazily when section comes into view
  useEffect(() => {
    let hasLoaded = false;
    
    const loadCalendly = () => {
      if (hasLoaded || document.querySelector('script[src*="calendly"]')) {
        hasLoaded = true;
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
      hasLoaded = true;
    };
    
    // Load when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadCalendly();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' }
    );
    
    const section = document.getElementById('contact-section');
    if (section) {
      observer.observe(section);
    }
    
    // Set up Calendly event listeners
    const handleCalendlyEvent = (e: any) => {
      const eventType = e.data.event;
      if (eventType === 'calendly.event_scheduled') {
        trackCalendlyEvent('scheduled', 'Contact Section');
      } else if (eventType === 'calendly.popup_open') {
        trackCalendlyEvent('opened', 'Contact Section');
      } else if (eventType === 'calendly.popup_close') {
        trackCalendlyEvent('closed', 'Contact Section');
      }
    };
    
    window.addEventListener('message', handleCalendlyEvent);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, []);

  return (
    <section id="contact-section" data-section="Contact" className="pt-40 pb-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start justify-items-center">
          {/* Left - Heading and Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Section Header */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-thicccboi font-bold text-gray-900 mb-6 leading-tight">
                Book your <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">free</span> website demo.
              </h1>
            </div>
            {/* Benefits removed per request */}

            {/* Contact Preferences */}
            <div className="mt-6">
              <h4 className="text-lg font-figtree font-semibold text-gray-900 mb-4">Prefer to text or call?</h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/447792145328"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp('contact_section')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                  WhatsApp Us
                </a>
                <a 
                  href="tel:+447792145328"
                  onClick={() => trackPhoneCall('contact_section')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us +44 7792 145328
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right - Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="p-4 sm:p-8 w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-thicccboi font-bold text-gray-900 mb-2">
                Schedule Your Call
              </h3>
              <p className="text-gray-600 font-figtree">
                Choose a time that works for you
              </p>
                  </div>
            
            {/* Calendly Inline Widget */}
            <div 
              className="calendly-inline-widget w-full" 
              data-url="https://calendly.com/dorward-connor/website-demo?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{ width: '100%', minWidth: 0, height: '650px' }}
            >
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact; 