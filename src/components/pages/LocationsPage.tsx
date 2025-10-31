import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const LocationsPage = () => {
  const locations = {
    scotland: [
      { city: "Ayrshire", link: "/locations/ayrshire", serviceAreas: "Ayr, Prestwick, Troon, Kilmarnock, Irvine, and all of Ayrshire" },
      { city: "Argyll", link: "/locations/argyll", serviceAreas: "Oban, Campbeltown, Dunoon, Rothesay, Helensburgh, and more" },
      { city: "Glasgow", link: "/locations/glasgow", serviceAreas: "Glasgow, East Kilbride, Paisley, and more" },
      { city: "Edinburgh", link: "/locations/edinburgh", serviceAreas: "Edinburgh, Leith, Livingston, and more" },
      { city: "Aberdeen", link: "/locations/aberdeen", serviceAreas: "Aberdeen and surrounding areas" },
      { city: "Dundee", link: "/locations/dundee", serviceAreas: "Dundee and surrounding areas" },
      { city: "Inverness", link: "/locations/inverness", serviceAreas: "Inverness and Highland region" },
      { city: "Stirling", link: "/locations/stirling", serviceAreas: "Stirling and surrounding areas" },
      { city: "Perth", link: "/locations/perth", serviceAreas: "Perth and surrounding areas" },
      { city: "Dunfermline", link: "/locations/dunfermline", serviceAreas: "Dunfermline and Fife" }
    ],
    england: [],
    wales: [],
    ireland: [],
    usa: [],
    canada: []
  };

  const renderLocationCard = (city: string, serviceAreas: string, link?: string | null, index?: number) => {
    if (link) {
      return (
        <a key={`${city}-${index}`} href={link} className="block h-full">
          <Card className="hover:shadow-lg transition-shadow border-gray-200 cursor-pointer h-full">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">
                    {city}
                  </h3>
                  <p className="text-sm text-gray-700 mb-3 font-figtree">
                    Service Areas: <span className="font-semibold">{serviceAreas}</span>
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
              </div>
            </CardContent>
          </Card>
        </a>
      );
    }
    
    return (
      <div key={`${city}-${index}`}>
        <Card className="hover:shadow-lg transition-shadow border-gray-200 h-full">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">
                  {city}
                </h3>
                <p className="text-sm text-gray-700 mb-3 font-figtree">
                  Service Areas: <span className="font-semibold">{serviceAreas}</span>
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-thicccboi">
              Service Locations
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-figtree">
              Professional web design and local SEO services across the UK, Ireland, North America, and beyond. 
              Our global team ensures rapid response times and expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations by Country */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Scotland */}
          {locations.scotland.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-thicccboi">Scotland</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {locations.scotland.map((loc, index) => renderLocationCard(loc.city, loc.serviceAreas, loc.link, index))}
              </div>
            </motion.div>
          )}

          {/* England - Heading only, no cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-thicccboi">England</h2>
          </motion.div>

          {/* Wales - Heading only, no cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-thicccboi">Wales</h2>
          </motion.div>

          {/* Ireland - Heading only, no cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-thicccboi">Ireland</h2>
          </motion.div>

          {/* USA - Heading only, no cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-thicccboi">United States</h2>
          </motion.div>

          {/* Canada - Heading only, no cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-thicccboi">Canada</h2>
          </motion.div>

        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 sm:p-12 rounded-2xl shadow-lg border border-gray-200"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <MapPin className="w-16 h-16 text-blue-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-thicccboi">
                  Comprehensive Coverage Area
                </h2>
                <p className="text-gray-700 mb-8 leading-relaxed font-figtree">
                  We serve businesses across multiple countries with expert web design and local SEO services. 
                  Whether you're a local business in Ayrshire or expanding across borders, we have the expertise 
                  to help you succeed online.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-900 font-figtree">Global expertise, local understanding</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-900 font-figtree">Fast 48-hour setup in all locations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-900 font-figtree">24/7 support across all time zones</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-900 font-figtree">SEO tailored to local markets</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-600/10 rounded-xl p-8 flex items-center justify-center">
                <MapPin className="w-64 h-64 text-blue-600 opacity-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-thicccboi">
              Ready to Get Started in Your Location?
            </h2>
            <p className="text-lg text-gray-700 mb-8 font-figtree">
              Contact us to discuss your project and find out how we can help your business succeed online in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-figtree">
                  Get a Free Quote
                </Button>
              </a>
              <a href="tel:+447792145328">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 font-figtree">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default LocationsPage;

