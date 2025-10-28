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
    <section className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
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
              <p className="text-xl sm:text-2xl text-gray-700 font-figtree leading-relaxed">
                Get a free preview of your website designed specifically for your business. See exactly what you'll get before you commit.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-figtree font-semibold text-gray-900 mb-2">Free Website Preview</h3>
                  <p className="text-gray-700 font-figtree">See your actual website designed and built before you make any commitment.</p>
                </div>
              </div>

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
            <div className="bg-gray-50 rounded-xl p-6 mt-6">
              <h4 className="text-lg font-figtree font-semibold text-gray-900 mb-4">Prefer to text or call?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <img src="/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-figtree font-medium">WhatsApp</p>
                    <a 
                      href="https://wa.me/447792145328"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 font-figtree hover:text-green-700 transition-colors"
                    >
                      +44 7792 145328
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-figtree font-medium">Phone Call</p>
                    <a 
                      href="tel:+447792145328"
                      className="text-blue-600 font-figtree hover:text-blue-700 transition-colors"
                    >
                      +44 7792 145328
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right - Calendly Widget */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
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