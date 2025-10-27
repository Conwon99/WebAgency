import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Professional Kitchen Clean",
      description: "Complete kitchen transformation and sanitization",
      beforeImage: "/gallery/s1.jpg",
      afterImage: "/gallery/s2.jpg",
      category: "Kitchen"
    },
    {
      id: 2,
      title: "Deep Clean Results",
      description: "Professional deep cleaning transformation",
      beforeImage: "/gallery/imgi_2_490166044_1188432403281809_661653498034237046_n.jpg",
      afterImage: "/gallery/s1.jpg",
      category: "Deep Clean"
    },
    {
      id: 3,
      title: "Complete Home Refresh",
      description: "Full home cleaning and restoration service",
      beforeImage: "/gallery/s2.jpg",
      afterImage: "/gallery/imgi_2_490166044_1188432403281809_661653498034237046_n.jpg",
      category: "General"
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
              Before & After Gallery
            </h1>
            <p className="text-xl text-cleaning-text/80 mb-8">
              See the transformation our cleaning services can bring to your home. Real results from real customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border-cleaning-border">
                  <div className="relative">
                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-1 p-4">
                      <div className="relative">
                        <img
                          src={item.beforeImage}
                          alt={`Before ${item.title}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                          Before
                        </div>
                      </div>
                      <div className="relative">
                        <img
                          src={item.afterImage}
                          alt={`After ${item.title}`}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                          After
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <ArrowRight className="w-4 h-4 text-cleaning-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-cleaning-text">{item.title}</h3>
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

      {/* Image Upload Notice */}
      <section className="py-16 bg-cleaning-primary/5">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <div className="bg-white p-8 rounded-lg shadow-md border border-cleaning-border">
              <Camera className="w-12 h-12 text-cleaning-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-cleaning-text mb-4">
                Real Transformations Coming Soon
              </h2>
              <p className="text-cleaning-text/80 mb-6">
                We're currently preparing our gallery with real before and after photos from our cleaning projects. 
                Check back soon to see the amazing transformations we've achieved for our customers.
              </p>
              <p className="text-sm text-cleaning-text/60">
                All images will be from actual cleaning jobs with customer permission.
              </p>
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
              Ready for your own transformation?
            </h2>
            <p className="text-lg text-cleaning-text/80 mb-8">
              Let us help you achieve the same level of cleanliness and freshness in your home.
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

export default Gallery; 