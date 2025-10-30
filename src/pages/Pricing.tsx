import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Search, Rocket, CheckCircle, Info } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";

const Pricing = () => {
  const { pricing } = useBusiness();

  const pricingPlans = [
    {
      title: "Starter Website",
      price: pricing[0].from,
      currency: pricing[0].currency,
      note: pricing[0].note,
      icon: Code2,
      description: "Perfect for small businesses getting started online",
      features: [
        "Modern, responsive website design",
        "Up to 5 pages",
        "Basic SEO setup",
        "Contact form integration",
        "Mobile-optimized",
        "Initial content creation"
      ],
      popular: true
    },
    {
      title: "Business Website",
      price: pricing[1].from,
      currency: pricing[1].currency,
      note: pricing[1].note,
      icon: Search,
      description: "Complete web presence with local SEO",
      features: [
        "Custom website design",
        "Up to 10 pages",
        "Local SEO optimization",
        "Google Business Profile setup",
        "Analytics & tracking",
        "Lead capture forms",
        "Ongoing support"
      ],
      popular: false
    },
    {
      title: "Growth Package",
      price: "From £249",
      currency: "GBP",
      note: "Monthly",
      icon: Rocket,
      description: "Advanced features for scaling businesses",
      features: [
        "Everything in Business Website",
        "Landing page creation",
        "Conversion optimization",
        "Advanced SEO strategy",
        "Monthly performance reports",
        "Priority support"
      ],
      popular: false
    }
  ];

  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Pricing | CodaPixel</title>
        <meta name="description" content="Simple plans with site, SEO, and support included." />
        <link rel="canonical" href="https://codapixel.co.uk/pricing" />
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
              Transparent Pricing
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              Choose the plan that fits your business needs. No hidden fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative"
              >
                <Card className={`h-full hover:shadow-lg transition-shadow border-cleaning-border ${plan.popular ? 'border-2 border-cleaning-primary' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cleaning-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`p-3 rounded-lg ${plan.popular ? 'bg-cleaning-primary' : 'bg-cleaning-primary/10'}`}>
                        <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-cleaning-primary'}`} />
                      </div>
                    </div>
                    <CardTitle className="text-cleaning-text text-2xl mb-2 font-thicccboi">{plan.title}</CardTitle>
                    <CardDescription className="text-cleaning-text/70 text-base mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-cleaning-text font-thicccboi">
                        £{plan.price}
                      </span>
                      {typeof plan.price === 'number' && (
                        <span className="text-cleaning-text/70 text-sm ml-2">per month</span>
                      )}
                    </div>
                    {plan.note && (
                      <p className="text-xs text-cleaning-text/60">{plan.note}</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-cleaning-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-cleaning-text/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button className={`w-full ${plan.popular ? 'bg-cleaning-primary hover:bg-cleaning-primary/90' : 'border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white'}`}>
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white p-8 rounded-lg shadow-md border border-cleaning-border"
          >
            <div className="flex items-start space-x-4">
              <Info className="w-6 h-6 text-cleaning-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-cleaning-text mb-3 font-thicccboi">Important Information</h3>
                <ul className="space-y-2 text-cleaning-text/80">
                  <li>• All plans include domain and hosting</li>
                  <li>• 14-day money-back guarantee</li>
                  <li>• No long-term contracts</li>
                  <li>• Custom solutions available on request</li>
                  <li>• Setup and launch typically within 48 hours</li>
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-6 font-thicccboi">
              Not Sure Which Plan Is Right?
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8">
              Book a free call to discuss your needs and find the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3">
                  Book a Free Call
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