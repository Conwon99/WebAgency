import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const LocationScotlandPage = () => {
  useEffect(() => {
    trackPageView('Location Scotland Page');
  }, []);

  return (
    <>
      <Hero location="Scotland" />
      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in Scotland?</h3>
            <p className="text-gray-700 font-figtree">Yes. We serve all of Scotland, including Glasgow, Edinburgh, Aberdeen, Dundee, Inverness, Stirling, Perth, Dunfermline and more.</p>
          </div>
        </div>
      </section>
      
      {/* Scottish Cities Section */}
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
              Covering All of Scotland
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-figtree">
              From the Highlands to the Lowlands, we help Scottish businesses succeed online with professional web design and SEO services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Ayrshire', link: '/locations/ayrshire' },
                { name: 'Argyll', link: '/locations/argyll' },
                { name: 'Glasgow', link: '/locations/glasgow' },
                { name: 'Edinburgh', link: '/locations/edinburgh' },
                { name: 'Aberdeen', link: '/locations/aberdeen' },
                { name: 'Dundee', link: '/locations/dundee' },
                { name: 'Inverness', link: '/locations/inverness' },
                { name: 'Stirling', link: '/locations/stirling' },
                { name: 'Perth', link: '/locations/perth' },
                { name: 'Dunfermline', link: '/locations/dunfermline' }
              ].map((city) => (
                <a key={city.name} href={city.link} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 font-figtree">{city.name}</p>
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

export default LocationScotlandPage;

