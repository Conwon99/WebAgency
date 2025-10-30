import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

const LocationAyrshire = () => {
  useEffect(() => {
    trackPageView('Location Ayrshire Page');
  }, []);

  return (
    <div className="font-inter">
      <Helmet>
        <title>Web Design & Local SEO in Ayrshire | CodaPixel</title>
        <meta name="description" content="Professional web design and local SEO services in Ayrshire. Serving Ayr, Prestwick, Troon, Kilmarnock, Irvine, and all of South Ayrshire. Fast builds, GBP optimization." />
        <link rel="canonical" href="https://codapixel.co.uk/locations/ayrshire" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Web Design & SEO in Ayrshire | CodaPixel" />
        <meta property="og:description" content="Professional web design and SEO services in Ayrshire. Serving Ayr, Prestwick, Troon, Kilmarnock, Irvine, and all of South Ayrshire." />
        <meta property="og:url" content="https://codapixel.co.uk/locations/ayrshire" />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Design & SEO in Ayrshire | CodaPixel" />
        <meta name="twitter:description" content="Professional web design and SEO services in Ayrshire. Serving Ayr, Prestwick, Troon, Kilmarnock, Irvine." />
        <meta name="twitter:image" content="/C logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codapixel.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://codapixel.co.uk/locations' },
              { '@type': 'ListItem', position: 3, name: 'Ayrshire', item: 'https://codapixel.co.uk/locations/ayrshire' }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <Hero location="Ayrshire" />
      
      {/* Ayrshire Locations Section */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <MapPin className="w-16 h-16 text-cleaning-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-4 font-thicccboi">
              Serving All of Ayrshire
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8 max-w-3xl mx-auto">
              From the coast at Ayr and Troon to the communities of Kilmarnock and Irvine, we help Ayrshire businesses succeed online.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {['Ayr', 'Prestwick', 'Troon', 'Kilmarnock', 'Irvine', 'Mauchline', 'Maybole', 'Girvan'].map((town) => (
                <Link key={town} to={`/locations/${town.toLowerCase()}`} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-cleaning-text">{town}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <HomeContact />
      <Footer />
    </div>
  );
};

export default LocationAyrshire;