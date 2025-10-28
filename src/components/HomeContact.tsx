import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";

const HomeContact = () => {
  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact-section" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Heading and Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div className="mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-thicccboi font-bold text-gray-900 mb-6 leading-tight">
                Book your <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">free</span> website demo.
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-figtree font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                  <p className="text-gray-700 font-figtree">Get your website preview within 48 hours of our call.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-figtree font-semibold text-gray-900 mb-2">No Risk</h3>
                  <p className="text-gray-700 font-figtree">14-day money-back guarantee if you're not completely satisfied.</p>
                </div>
              </div>
            </div>

            {/* Contact Preferences */}
            <div className="mt-6">
              <h4 className="text-lg font-figtree font-semibold text-gray-900 mb-4">Prefer to text or call?</h4>
              <div className="flex flex-col gap-4">
                <a 
                  href="https://wa.me/447792145328"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black rounded-full font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 transition-colors"
                >
                  <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
                  WhatsApp Us
                </a>
                <a 
                  href="tel:+447792145328"
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
            className="p-8"
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
              className="calendly-inline-widget" 
              data-url="https://calendly.com/dorward-connor/website-demo?hide_event_type_details=1&hide_gdpr_banner=1" 
              style={{ minWidth: '320px', height: '700px' }}
            >
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact; 