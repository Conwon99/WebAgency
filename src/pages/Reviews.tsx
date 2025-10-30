import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";

const Reviews = () => {
  const { facebookUrl } = useBusiness();

  const testimonials = [
    {
      name: "Claire H.",
      location: "Ayr",
      rating: 5,
      text: "Our new website looks premium and loads fast. We started receiving enquiries within the first two weeks.",
      service: "Web design"
    },
    {
      name: "Gordon P.",
      location: "Prestwick",
      rating: 5,
      text: "Local SEO campaign boosted our Google Maps rankings. Calls and form submissions are up significantly.",
      service: "Local SEO"
    },
    {
      name: "Emily R.",
      location: "Troon",
      rating: 5,
      text: "Smooth process from brief to launch. Great communication and a site that actually converts.",
      service: "Website redesign"
    },
    {
      name: "Martin S.",
      location: "Ayr",
      rating: 5,
      text: "They rebuilt our landing pages and implemented tracking. Lead quality and volume improved straight away.",
      service: "CRO & tracking"
    },
    {
      name: "Laura K.",
      location: "Monkton",
      rating: 5,
      text: "Clear strategy, transparent reporting and real results. Exactly what we needed.",
      service: "SEO retainers"
    },
    {
      name: "James W.",
      location: "Prestwick",
      rating: 5,
      text: "Professional team. Delivered a modern site on time and helped us capture more leads.",
      service: "New build website"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-cleaning-accent fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Client Reviews | CodaPixel</title>
        <meta name="description" content="Results-focused web design & local SEO. Read client feedback." />
        <link rel="canonical" href="https://codapixel.co.uk/reviews" />
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
            <h1 className="text-4xl md:text-5xl font-bold text-cleaning-text mb-6">
              What Our Customers Say
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              Don't just take our word for it. Here's what our clients say about our web design and SEO services.
            </p>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {renderStars(5)}
              <span className="text-cleaning-text font-medium ml-2">5.0 average rating</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-cleaning-border">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <Quote className="w-8 h-8 text-cleaning-primary/20 mb-4" />
                    <p className="text-cleaning-text/80 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t border-cleaning-border pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-cleaning-text">{testimonial.name}</p>
                          <p className="text-sm text-cleaning-text/60">{testimonial.location}</p>
                        </div>
                        <span className="text-xs bg-cleaning-primary/10 text-cleaning-primary px-2 py-1 rounded-full">
                          {testimonial.service}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Reviews CTA */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-6">
              More Reviews on Facebook
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8">
              See more customer reviews and stay updated with our latest work on our Facebook page.
            </p>
            <Button
              onClick={() => window.open(facebookUrl, '_blank')}
              className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Our Facebook Page
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-6">
              Ready to experience our service?
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8">
              Join our satisfied customers and let us help keep your home fresh and welcoming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white px-8 py-3">
                  View Services
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

export default Reviews; 