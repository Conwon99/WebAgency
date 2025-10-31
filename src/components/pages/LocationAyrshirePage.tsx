import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const LocationAyrshirePage = () => {
  useEffect(() => {
    trackPageView('Location Ayrshire Page');
  }, []);

  return (
    <>
      <Hero location="Ayrshire" />
      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in Ayrshire?</h3>
            <p className="text-gray-700 font-figtree">Yes. We serve Ayr, Prestwick, Troon, Kilmarnock, Irvine, Mauchline, Maybole, Girvan and surrounding areas with fast websites and local SEO.</p>
          </div>
        </div>
      </section>
      
      {/* Ayrshire Locations Section */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-thicccboi">
              Serving All of Ayrshire
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-figtree">
              From the coast at Ayr and Troon to the communities of Kilmarnock and Irvine, we help Ayrshire businesses succeed online.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {['Ayr', 'Prestwick', 'Troon', 'Kilmarnock', 'Irvine', 'Mauchline', 'Maybole', 'Girvan'].map((town) => (
                <a key={town} href={`/locations/${town.toLowerCase()}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 font-figtree">{town}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <HomeContact />
    </>
  );
};

export default LocationAyrshirePage;

