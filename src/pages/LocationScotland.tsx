import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

const LocationScotland = () => {
  useEffect(() => {
    trackPageView('Location Scotland Page');
  }, []);

  return (
    <div className="font-inter">
      <Helmet>
        <title>Web Design & SEO in Scotland | CodaPixel</title>
        <meta name="description" content="Professional web design and SEO services across Scotland. Serving Glasgow, Edinburgh, Aberdeen, Dundee, Ayrshire, and all of Scotland. Fast builds, GBP optimization." />
        <link rel="canonical" href="https://codapixel.co.uk/locations/scotland" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Web Design & SEO in Scotland | CodaPixel" />
        <meta property="og:description" content="Professional web design and SEO services across Scotland. Serving all major cities and regions." />
        <meta property="og:url" content="https://codapixel.co.uk/locations/scotland" />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Design & SEO in Scotland | CodaPixel" />
        <meta name="twitter:description" content="Professional web design and SEO services across Scotland. Serving all major cities and regions." />
        <meta name="twitter:image" content="/C logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codapixel.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://codapixel.co.uk/locations' },
              { '@type': 'ListItem', position: 3, name: 'Scotland', item: 'https://codapixel.co.uk/locations/scotland' }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <Hero location="Scotland" />
      
      {/* Scottish Cities Section */}
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
              Covering All of Scotland
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8 max-w-3xl mx-auto">
              From the Highlands to the Lowlands, we help Scottish businesses succeed online with professional web design and SEO services.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { name: 'Ayrshire', link: '/locations/ayrshire' },
                { name: 'Glasgow', link: '/locations/glasgow' },
                { name: 'Edinburgh', link: '/locations/edinburgh' },
                { name: 'Aberdeen', link: '/locations/aberdeen' },
                { name: 'Dundee', link: '/locations/dundee' },
                { name: 'Inverness', link: '/locations/inverness' },
                { name: 'Stirling', link: '/locations/stirling' },
                { name: 'Perth', link: '/locations/perth' },
                { name: 'Dunfermline', link: '/locations/dunfermline' }
              ].map((city) => (
                <Link key={city.name} to={city.link} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-cleaning-text">{city.name}</p>
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

export default LocationScotland;

