import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Search, BarChart3, Rocket, Gauge, CheckCircle, Settings } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";

const Services = () => {
  const { tagline } = useBusiness();

  const services = [
    {
      title: "Web Design",
      description: "Modern, fast websites built to convert visitors into leads.",
      icon: Code2,
      features: [
        "Custom design and copy",
        "Mobile-first, SEO-friendly",
        "Lead capture and CTAs"
      ]
    },
    {
      title: "Local SEO",
      description: "Rank higher in local search and Google Maps to win nearby customers.",
      icon: Search,
      features: [
        "Google Business Profile optimization",
        "On-page SEO & internal linking",
        "Citation and review strategy"
      ]
    },
    {
      title: "Conversion Tracking",
      description: "Measure what matters with clean analytics and event tracking.",
      icon: BarChart3,
      features: [
        "GA4 & Google Tag Manager setup",
        "Form, call & WhatsApp tracking",
        "Monthly performance reports"
      ]
    },
    {
      title: "Speed Optimization",
      description: "Improve Core Web Vitals for better rankings and user experience.",
      icon: Gauge,
      features: [
        "Image & asset optimization",
        "Code splitting & caching",
        "CLS/LCP/INP improvements"
      ]
    },
    {
      title: "Landing Pages & CRO",
      description: "High-converting pages tested and refined to maximize leads.",
      icon: Rocket,
      features: [
        "Offer-focused page design",
        "A/B testing & heatmaps",
        "Clear messaging hierarchy"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Reliable updates, backups, and small changes handled for you.",
      icon: Settings,
      features: [
        "Unlimited small edits",
        "Security & uptime monitoring",
        "Priority support"
      ]
    }
  ];

  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Services | Web Design, Local SEO, CRO, Speed | CodaPixel</title>
        <meta name="description" content="Modern sites, Maps rankings, tracking & CRO. See how we drive leads." />
        <link rel="canonical" href="https://codapixel.co.uk/services" />
      </Helmet>
      <Header />
      <ContactBar />
      
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
              Our Professional Services
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              We build high-performing websites and local SEO systems that drive inbound leads and make results measurable.
            </p>
            <p className="text-lg text-cleaning-primary font-medium">
              "{tagline}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-cleaning-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-cleaning-primary/10 rounded-lg">
                        <service.icon className="w-6 h-6 text-cleaning-primary" />
                      </div>
                      <CardTitle className="text-cleaning-text">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-cleaning-text/70 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-cleaning-text mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-cleaning-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-cleaning-text/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link to="/contact">
                        <Button className="w-full bg-cleaning-primary hover:bg-cleaning-primary/90">
                          Get a Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-6">
              Ready to get started?
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8">
              Tell us about your business and goals. We'll provide a personalized proposal and show how we can drive results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white px-8 py-3">
                  View Pricing
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