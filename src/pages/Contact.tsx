import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Clock, MapPin } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { trackCTA } from "@/lib/analytics";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { name, phone, facebookUrl, location } = useBusiness();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneClick = () => {
    trackCTA('phone', 'contact');
    window.open(`tel:${phone}`, '_self');
  };

  const handleFacebookClick = () => {
    trackCTA('messenger', 'contact');
    window.open(facebookUrl, '_blank');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      postcode: formData.get('postcode') as string,
      businessType: formData.get('businessType') as string,
      serviceNeeded: formData.get('serviceNeeded') as string,
      message: formData.get('message') as string,
    };

    try {
      // In a real implementation, this would send to your backend
      console.log('Form data:', data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours with availability and a quote.",
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Contact CodaPixel</title>
        <meta name="description" content="Book a discovery call. Fast replies." />
        <link rel="canonical" href="https://codapixel.co.uk/contact" />
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
              Get in Touch
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              Get in touch to discuss your web design and local SEO needs. We'll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="border-cleaning-border">
                <CardHeader>
                  <CardTitle className="text-cleaning-text">Request a Quote</CardTitle>
                  <CardDescription className="text-cleaning-text/70">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-cleaning-text">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          className="border-cleaning-border focus:border-cleaning-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postcode" className="text-cleaning-text">Postcode *</Label>
                        <Input
                          id="postcode"
                          name="postcode"
                          required
                          className="border-cleaning-border focus:border-cleaning-primary"
                          placeholder="e.g., KA7 1XX"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="businessType" className="text-cleaning-text">Business Type *</Label>
                        <Select name="businessType" required>
                          <SelectTrigger className="border-cleaning-border focus:border-cleaning-primary">
                            <SelectValue placeholder="Select business type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="restaurant">Restaurant / Cafe</SelectItem>
                            <SelectItem value="retail">Retail / Shop</SelectItem>
                            <SelectItem value="professional">Professional Services</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="construction">Construction / Trades</SelectItem>
                            <SelectItem value="beauty">Beauty / Wellness</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="serviceNeeded" className="text-cleaning-text">Service Needed *</Label>
                        <Select name="serviceNeeded" required>
                          <SelectTrigger className="border-cleaning-border focus:border-cleaning-primary">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new-website">New Website</SelectItem>
                            <SelectItem value="redesign">Website Redesign</SelectItem>
                            <SelectItem value="seo">Local SEO</SelectItem>
                            <SelectItem value="gbp">Google Business Profile</SelectItem>
                            <SelectItem value="tracking">Analytics Setup</SelectItem>
                            <SelectItem value="speed">Speed Optimization</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-cleaning-text">Additional Details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="border-cleaning-border focus:border-cleaning-primary"
                        placeholder="Tell us about your business, goals, timeline, or any specific requirements..."
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cleaning-primary hover:bg-cleaning-primary/90"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
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
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-cleaning-text mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cleaning-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-cleaning-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cleaning-text mb-1">Phone</h3>
                      <p className="text-cleaning-text/80 mb-2">{phone}</p>
                      <Button
                        onClick={handlePhoneClick}
                        variant="outline"
                        size="sm"
                        className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white"
                      >
                        Call Now
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cleaning-primary/10 rounded-lg">
                      <MessageCircle className="w-6 h-6 text-cleaning-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cleaning-text mb-1">Facebook Messenger</h3>
                      <p className="text-cleaning-text/80 mb-2">Quick response via Facebook</p>
                      <Button
                        onClick={handleFacebookClick}
                        variant="outline"
                        size="sm"
                        className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white"
                      >
                        Message on Facebook
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cleaning-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-cleaning-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cleaning-text mb-1">Service Area</h3>
                      <p className="text-cleaning-text/80">{location} and surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-cleaning-primary/10 rounded-lg">
                      <Clock className="w-6 h-6 text-cleaning-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-cleaning-text mb-1">Response Time</h3>
                      <p className="text-cleaning-text/80">We aim to respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <Card className="border-cleaning-border">
                <CardHeader>
                  <CardTitle className="text-cleaning-text">Why Choose {name}?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cleaning-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-cleaning-text/80">Fast 48-hour delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cleaning-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-cleaning-text/80">14-day money-back guarantee</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cleaning-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-cleaning-text/80">No contracts, cancel anytime</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-cleaning-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-cleaning-text/80">Results-focused approach</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact; 