import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { useEffect } from "react";

const LocationArgyllPage = () => {
  useEffect(() => {
    trackPageView('Location Argyll Page');
  }, []);

  const towns = [
    'Oban',
    'Campbeltown',
    'Dunoon',
    'Rothesay',
    'Helensburgh',
    'Lochgilphead',
    'Inveraray',
    'Tarbert',
    'Tobermory'
  ];

  return (
    <>
      <Hero location="Argyll" />

      {/* Argyll Towns Section */}
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
              Serving All of Argyll
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto font-figtree">
              From Oban and Campbeltown to Dunoon and Rothesay, we help Argyll businesses succeed online with professional web design and SEO.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {towns.map((town) => (
                <a key={town} href={`/locations/${town.toLowerCase()}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-gray-900 font-figtree">{town}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in Argyll?</h3>
            <p className="text-gray-700 font-figtree">Yes. We serve all of Argyll (including Oban, Campbeltown, Dunoon, Rothesay, Helensburgh and more) with fast websites, local SEO, and conversion tracking.</p>
          </motion.div>
        </div>
      </section>

      <HomeContact />
    </>
  );
};

export default LocationArgyllPage;


