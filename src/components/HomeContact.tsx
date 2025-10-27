import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const HomeContact = () => {
  const { phone, facebookUrl, location } = useBusiness();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Thank you!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phone}`, '_self');
  };

  const handleFacebookClick = () => {
    window.open(facebookUrl, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-4 font-thicccboi">
            Get Your Free Quote
          </h2>
          <p className="text-lg text-cleaning-text/80 mb-6 font-inter">
            Ready for a cleaner, fresher home? Contact us today for a personalized quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="border-cleaning-border">
              <CardHeader>
                <CardTitle className="text-2xl font-inter text-cleaning-text">
                  Request a Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="border-cleaning-border"
                    />
                    <Input
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="border-cleaning-border"
                    />
                  </div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="border-cleaning-border"
                  />
                  <Input
                    name="postcode"
                    placeholder="Postcode"
                    required
                    className="border-cleaning-border"
                  />
                  <select
                    name="service"
                    required
                    className="w-full px-3 py-2 border border-cleaning-border rounded-md focus:outline-none focus:ring-2 focus:ring-cleaning-primary"
                  >
                    <option value="">Select Service</option>
                    <option value="recurring">Recurring Clean</option>
                    <option value="deep">Deep Clean</option>
                    <option value="bathroom">Bathroom Only</option>
                    <option value="oven">Oven Clean</option>
                    <option value="end-tenancy">End of Tenancy</option>
                  </select>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your cleaning needs..."
                    rows={3}
                    className="border-cleaning-border"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cleaning-primary hover:bg-cleaning-primary/90 text-white font-inter"
                  >
                    {isSubmitting ? "Sending..." : "Send Quote Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold text-cleaning-text mb-4 font-inter">
                Contact Information
              </h3>
              <div className="space-y-4">
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 w-full text-left hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="w-12 h-12 bg-cleaning-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cleaning-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-cleaning-text">Call Us</p>
                    <p className="text-cleaning-text/70">{phone}</p>
                  </div>
                </button>

                <button
                  onClick={handleFacebookClick}
                  className="flex items-center space-x-3 w-full text-left hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="w-12 h-12 bg-cleaning-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-cleaning-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-cleaning-text">Message on Facebook</p>
                    <p className="text-cleaning-text/70">Get a quick response</p>
                  </div>
                </button>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cleaning-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cleaning-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-cleaning-text">Service Area</p>
                    <p className="text-cleaning-text/70">{location} and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cleaning-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cleaning-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-cleaning-text">Response Time</p>
                    <p className="text-cleaning-text/70">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link to="/contact">
                <Button variant="outline" className="w-full border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white font-inter">
                  View Full Contact Page
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact; 