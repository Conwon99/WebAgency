import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Able Health",
      description: "Professional healthcare website design with booking system",
      image: "/Portfolio/able_compressed.webp",
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Tasse Coffee Co",
      description: "Artisan coffee company website with e-commerce integration",
      image: "/Portfolio/tassecoffeeco.webp",
      category: "Retail"
    },
    {
      id: 3,
      title: "Holistics71",
      description: "Modern holistic wellness platform with booking functionality",
      image: "/Portfolio/holistics71.webp",
      category: "Wellness"
    },
    {
      id: 4,
      title: "RB Joinery",
      description: "Professional joinery and carpentry services website",
      image: "/Portfolio/rbjoinery.webp",
      category: "Construction"
    },
    {
      id: 5,
      title: "ProRoof",
      description: "Professional roofing services with lead capture",
      image: "/Portfolio/proroof.webp",
      category: "Construction"
    },
    {
      id: 6,
      title: "Sparkle's Cleaning Service",
      description: "Professional cleaning services website with local SEO optimization",
      image: "/Portfolio/sparklessite.webp",
      category: "Services"
    }
  ];

  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Portfolio | Web Design Projects | CodaPixel</title>
        <meta name="description" content="View our portfolio of web design and SEO projects. Real results for Ayrshire businesses." />
        <link rel="canonical" href="https://codapixel.co.uk/gallery" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio | Web Design Projects | CodaPixel" />
        <meta property="og:description" content="View our portfolio of web design and SEO projects. Real results for Ayrshire businesses." />
        <meta property="og:url" content="https://codapixel.co.uk/gallery" />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio | Web Design Projects | CodaPixel" />
        <meta name="twitter:description" content="View our portfolio of web design and SEO projects. Real results for Ayrshire businesses." />
        <meta name="twitter:image" content="/C logo.webp" />
      </Helmet>
      <Header />
      <ContactBar />
      
      <main>
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
              Our Portfolio
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              Real websites we've built for businesses across Ayrshire and beyond. See what we can do for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-cleaning-border">
                  <div className="relative bg-white">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-cleaning-text font-thicccboi">{item.title}</h3>
                      <span className="text-xs bg-cleaning-primary/10 text-cleaning-primary px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-cleaning-text/70">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md border border-cleaning-border text-center">
              <Monitor className="w-12 h-12 text-cleaning-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-cleaning-text mb-4 font-thicccboi">
                Ready to See Your Website Here?
              </h2>
              <p className="text-cleaning-text/80 mb-6">
                Let's discuss your project and show you how we can build a website that generates leads and grows your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                    Get Started
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white px-8 py-3">
                    View Services
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;