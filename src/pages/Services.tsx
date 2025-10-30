import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Search, BarChart3, Clock, CheckCircle } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Services = () => {
  const { tagline } = useBusiness();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
    script.type = 'module';
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const services = [
    {
      title: "Custom Website",
      description: "Get online fast with my streamlined service. I'll customise a proven template with your logo, brand colours, and content, plus integrate contact forms and essential features for immediate customer connection.",
      icon: Code2,
      price: "£249",
      priceNote: "starting from",
      features: [
        "Unique design and branding",
        "Full content creation",
        "Advanced functionality",
        "Ongoing support & maintenance"
      ],
      popular: false
    },
    {
      title: "Website in a Day",
      description: "Bring your unique vision to life with a bespoke website. I start with a detailed consultation to understand your requirements, then deliver a custom online presence that perfectly reflects your brand in about two weeks.",
      icon: Clock,
      price: "£79",
      priceNote: "per month",
      features: [
        "Website launch within 24 hours",
        "Ongoing support and maintenance",
        "Analytics reports",
        "Unlimited updates (within reason)"
      ],
      popular: true
    },
    {
      title: "SEO & Paid Ads",
      description: "Drive traffic and leads through organic search and targeted advertising.",
      icon: Search,
      price: "£299",
      priceNote: "per month",
      features: [
        "On-page SEO optimization",
        "Local SEO & Google Maps",
        "Google Ads",
        "Meta (Facebook & Instagram) Ads",
        "Campaign setup & optimization",
        "Monthly reporting & insights"
      ],
      popular: false
    }
  ];

  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Services | Website in a Day, Custom Websites, SEO, Paid Ads | CodaPixel</title>
        <meta name="description" content="Professional websites in 24 hours, custom sites, SEO optimization, and paid advertising that drive results." />
        <link rel="canonical" href="https://codapixel.co.uk/services" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services | Website in a Day, Custom Websites, SEO, Paid Ads | CodaPixel" />
        <meta property="og:description" content="Professional websites in 24 hours, custom sites, SEO optimization, and paid advertising that drive results." />
        <meta property="og:url" content="https://codapixel.co.uk/services" />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Website in a Day, Custom Websites, SEO, Paid Ads | CodaPixel" />
        <meta name="twitter:description" content="Professional websites in 24 hours, custom sites, SEO optimization, and paid advertising that drive results." />
        <meta name="twitter:image" content="/C logo.webp" />
      </Helmet>
      <Header />
      <ContactBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-thicccboi">
              Our Professional Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Websites in 24 hours, custom builds, SEO optimization, and paid advertising that drive real results for your business.
            </p>
            <p className="text-lg text-blue-400 font-medium">
              "{tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`h-full ${service.popular ? 'bg-blue-600' : 'bg-gray-800'} rounded-2xl p-6 hover:shadow-2xl transition-shadow flex flex-col relative`}>
                  {service.popular && (
                    <>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-50">
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold font-figtree">
                          Most Popular
                        </span>
                      </div>
                      <div className="absolute -top-12 -right-12 w-64 h-64 z-0 opacity-80 pointer-events-none overflow-hidden">
                        <div className="w-full h-full">
                          <dotlottie-wc 
                            src="https://lottie.host/cc114657-4a04-4659-bc22-5d6419171617/F0K7XG9usz.lottie" 
                            style={{ width: '100%', height: '100%' }} 
                            autoplay 
                            loop
                          ></dotlottie-wc>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="mb-6 relative z-10">
                    <CardTitle className="text-white text-xl font-bold font-figtree mb-4">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-white font-figtree">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-300 font-figtree">{service.priceNote}</p>
                  </div>
                  <CardContent className="flex-1 flex flex-col p-0 relative z-10">
                    <div className="space-y-4 mb-6 flex-1">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-white font-figtree">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link to="/contact" className="mt-auto">
                      <Button className={`w-full ${service.popular ? 'bg-black hover:bg-gray-900' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg py-3 font-figtree`}>
                          Get a Quote
                        </Button>
                      </Link>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-figtree">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-300 mb-8 font-figtree">
              Tell us about your business and goals. We'll provide a personalized proposal and show how we can drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-figtree">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services; 