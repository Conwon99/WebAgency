import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone, Clock, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const Locations = () => {
  const locations = {
    scotland: [
      { city: "Ayrshire", link: "/locations/ayrshire", serviceAreas: "Ayr, Prestwick, Troon, Kilmarnock, Irvine, and all of Ayrshire" },
      { city: "Glasgow", link: "/locations/glasgow", serviceAreas: "Glasgow, East Kilbride, Paisley, and more" },
      { city: "Edinburgh", link: "/locations/edinburgh", serviceAreas: "Edinburgh, Leith, Livingston, and more" },
      { city: "Aberdeen", link: "/locations/aberdeen", serviceAreas: "Aberdeen and surrounding areas" },
      { city: "Dundee", link: "/locations/dundee", serviceAreas: "Dundee and surrounding areas" },
      { city: "Inverness", link: "/locations/inverness", serviceAreas: "Inverness and Highland region" },
      { city: "Stirling", link: "/locations/stirling", serviceAreas: "Stirling and surrounding areas" },
      { city: "Perth", link: "/locations/perth", serviceAreas: "Perth and surrounding areas" },
      { city: "Dunfermline", link: "/locations/dunfermline", serviceAreas: "Dunfermline and Fife" }
    ],
    england: [
      { city: "London", serviceAreas: "London and Greater London areas" },
      { city: "Manchester", serviceAreas: "Manchester, Salford, and surrounding areas" },
      { city: "Birmingham", serviceAreas: "Birmingham, Solihull, and more" },
      { city: "Leeds", serviceAreas: "Leeds, Bradford, and surrounding areas" }
    ],
    ireland: [
      { city: "Dublin", serviceAreas: "Dublin, Wicklow, and surrounding areas" },
      { city: "Cork", serviceAreas: "Cork city and county" },
      { city: "Galway", serviceAreas: "Galway and surrounding areas" }
    ],
    wales: [
      { city: "Cardiff", serviceAreas: "Cardiff, Newport, and surrounding areas" },
      { city: "Swansea", serviceAreas: "Swansea, Neath, and more" }
    ],
    usa: [
      { city: "New York", serviceAreas: "New York City, Brooklyn, Queens, and more" },
      { city: "Los Angeles", serviceAreas: "LA, Hollywood, Beverly Hills, and surrounding areas" },
      { city: "Chicago", serviceAreas: "Chicago and Greater Chicago area" }
    ],
    canada: [
      { city: "Toronto", serviceAreas: "Toronto, Mississauga, and Greater Toronto Area" },
      { city: "Vancouver", serviceAreas: "Vancouver, Burnaby, Surrey, and more" },
      { city: "Montreal", serviceAreas: "Montreal and surrounding areas" }
    ]
  } as const;

  const renderLocationCard = (city: string, serviceAreas: string, link?: string, index?: number) => {
    if (link) {
      return (
        <Link key={`${city}-${index}`} to={link} className="block h-full">
          <Card className="hover:shadow-lg transition-shadow border-cleaning-border cursor-pointer h-full">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-cleaning-text mb-2 font-thicccboi">
                    {city}
                  </h3>
                  <p className="text-sm text-cleaning-text/70 mb-3">
                    Service Areas: <span className="font-semibold">{serviceAreas}</span>
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-cleaning-primary flex-shrink-0 ml-4" />
              </div>
            </CardContent>
          </Card>
        </Link>
      );
    }
    
    return (
      <div key={`${city}-${index}`}>
        <Card className="hover:shadow-lg transition-shadow border-cleaning-border cursor-pointer h-full">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cleaning-text mb-2 font-thicccboi">
                  {city}
                </h3>
                <p className="text-sm text-cleaning-text/70 mb-3">
                  Service Areas: <span className="font-semibold">{serviceAreas}</span>
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-cleaning-primary flex-shrink-0 ml-4" />
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Service Locations | CodaPixel</title>
        <meta name="description" content="Web design and local SEO services across Scotland, England, Ireland, Wales, USA, and Canada. Find your location." />
        <link rel="canonical" href="https://codapixel.co.uk/locations" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Service Locations | CodaPixel" />
        <meta property="og:description" content="Web design and SEO services across the UK, Ireland, North America, and beyond." />
        <meta property="og:url" content="https://codapixel.co.uk/locations" />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Locations | CodaPixel" />
        <meta name="twitter:description" content="Web design and SEO services across the UK, Ireland, North America, and beyond." />
        <meta name="twitter:image" content="/C logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codapixel.co.uk/' },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://codapixel.co.uk/locations' }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cleaning-background to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-cleaning-text mb-6 font-thicccboi">
              Service Locations
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              Professional web design and local SEO services across the UK, Ireland, North America, and beyond. 
              Our global team ensures rapid response times and expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Locations by Country */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          
          {/* Scotland */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-cleaning-text mb-8 font-thicccboi">Scotland</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.scotland.map((loc, index) => renderLocationCard(loc.city, loc.serviceAreas, loc.link, index))}
            </div>
          </motion.div>

          {/* England */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-cleaning-text mb-8 font-thicccboi">England</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.england.map((loc, index) => renderLocationCard(loc.city, loc.serviceAreas, undefined, index))}
            </div>
          </motion.div>

          {/* Ireland */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-cleaning-text mb-8 font-thicccboi">Ireland</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.ireland.map((loc, index) => renderLocationCard(loc.city, loc.serviceAreas, undefined, index))}
            </div>
          </motion.div>

          {/* Wales */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-cleaning-text mb-8 font-thicccboi">Wales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.wales.map((loc, index) => renderLocationCard(loc.city, loc.serviceAreas, undefined, index))}
            </div>
          </motion.div>

          {/* USA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-cleaning-text mb-8 font-thicccboi">USA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.usa.map((loc, index) => renderLocationCard(loc.city, loc.serviceAreas, undefined, index))}
            </div>
          </motion.div>

          {/* Canada */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-cleaning-text mb-8 font-thicccboi">Canada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.canada.map((loc, index) => renderLocationCard(loc.city, loc.serviceAreas, undefined, index))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-12 rounded-2xl shadow-lg border border-cleaning-border"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <MapPin className="w-16 h-16 text-cleaning-primary mb-6" />
                <h2 className="text-3xl font-bold text-cleaning-text mb-6 font-thicccboi">
                  Comprehensive Coverage Area
                </h2>
                <p className="text-cleaning-text/80 mb-8 leading-relaxed">
                  We serve businesses across multiple countries with expert web design and local SEO services. 
                  Whether you're a local business in Ayrshire or expanding across borders, we have the expertise 
                  to help you succeed online.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cleaning-primary flex-shrink-0" />
                    <span className="text-cleaning-text">Global expertise, local understanding</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cleaning-primary flex-shrink-0" />
                    <span className="text-cleaning-text">Fast 48-hour setup in all locations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cleaning-primary flex-shrink-0" />
                    <span className="text-cleaning-text">24/7 support across all time zones</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-cleaning-primary flex-shrink-0" />
                    <span className="text-cleaning-text">SEO tailored to local markets</span>
                  </li>
                </ul>
              </div>
              <div className="bg-cleaning-primary/10 rounded-xl p-8 flex items-center justify-center">
                <MapPin className="w-64 h-64 text-cleaning-primary opacity-30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-6 font-thicccboi">
              Ready to Get Started in Your Location?
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8">
              Contact us to discuss your project and find out how we can help your business succeed online in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                  Get a Free Quote
                </Button>
              </Link>
              <a href="tel:+447792145328">
                <Button variant="outline" className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white px-8 py-3">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Locations;
