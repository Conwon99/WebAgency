import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Bath, Home, CheckCircle, Info } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";

const Pricing = () => {
  const { pricing } = useBusiness();

  const pricingPlans = [
    {
      title: "Fortnightly General Clean",
      price: pricing[0].from,
      currency: pricing[0].currency,
      note: pricing[0].note,
      icon: Calendar,
      description: "Regular cleaning to keep your home fresh and welcoming",
      features: [
        "All rooms cleaned and tidied",
        "Bathroom sanitization",
        "Kitchen deep clean",
        "Vacuum and mop floors",
        "Dust all surfaces",
        "Empty bins and replace liners"
      ],
      popular: true
    },
    {
      title: "Monthly Bathroom-Only Clean",
      price: pricing[1].from,
      currency: pricing[1].currency,
      note: pricing[1].note,
      icon: Bath,
      description: "Focused cleaning for bathrooms and wet rooms",
      features: [
        "Deep cleaning of all bathroom surfaces",
        "Sanitization of high-touch areas",
        "Grout and tile cleaning",
        "Shower and bath deep clean",
        "Mirror and fixture polishing",
        "Toilet sanitization"
      ],
      popular: false
    },
    {
      title: "One-Off Deep Clean",
      price: "From £120",
      currency: "GBP",
      note: "Indicative",
      icon: Home,
      description: "Comprehensive cleaning for special occasions",
      features: [
        "Full property deep clean",
        "Hard-to-reach areas",
        "Inside windows and frames",
        "Oven and appliance cleaning",
        "Carpet and upholstery",
        "Detailed attention to all areas"
      ],
      popular: false
    }
  ];

  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
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
              Transparent Pricing
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              Copy explains house size and condition affect quotes. We provide personalized quotes based on your specific needs and home requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cleaning-accent text-cleaning-text px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full hover:shadow-lg transition-shadow border-cleaning-border ${plan.popular ? 'ring-2 ring-cleaning-primary' : ''}`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-cleaning-primary/10 rounded-lg">
                        <plan.icon className="w-6 h-6 text-cleaning-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-cleaning-text">{plan.title}</CardTitle>
                    <CardDescription className="text-cleaning-text/70">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-cleaning-text">
                          {typeof plan.price === 'number' ? `£${plan.price}` : plan.price}
                        </span>
                        {typeof plan.price === 'number' && (
                          <span className="text-cleaning-text/60 ml-1">per clean</span>
                        )}
                      </div>
                      <p className="text-sm text-cleaning-text/60 mt-1">{plan.note} pricing</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-cleaning-text mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-cleaning-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-cleaning-text/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <Link to="/contact">
                        <Button className={`w-full ${plan.popular ? 'bg-cleaning-primary hover:bg-cleaning-primary/90' : 'bg-cleaning-primary/90 hover:bg-cleaning-primary'}`}>
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

      {/* Disclaimer Section */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-md border border-cleaning-border"
          >
            <div className="flex items-start space-x-3">
              <Info className="w-6 h-6 text-cleaning-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-cleaning-text mb-3">
                  Important Information
                </h3>
                <p className="text-cleaning-text/80 mb-4">
                  Prices shown are indicative and may vary by home size and condition. We'll confirm after a quick chat and walkthrough to understand your specific needs.
                </p>
                <ul className="space-y-2 text-sm text-cleaning-text/70">
                  <li>• Final pricing depends on home size, number of rooms, and current condition</li>
                  <li>• We provide free, no-obligation quotes after a brief consultation</li>
                  <li>• All prices include our eco-friendly cleaning products and equipment</li>
                  <li>• Regular customers receive priority booking and special rates</li>
                </ul>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-6">
              Ready for a personalized quote?
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8">
              Contact us to discuss your cleaning needs and get a tailored quote for your home.
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

export default Pricing; 