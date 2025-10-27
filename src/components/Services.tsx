
import { ArrowRight, Home, Wrench, Eye, Droplet, RefreshCw, Settings, Trash2, Sofa, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: <Home className="w-8 h-8 text-gray-600" />,
      title: "AIR B&B's",
      description: "Professional cleaning services for Airbnb properties to ensure guest satisfaction and maintain high standards.",
      link: "Get a free quote"
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-gray-600" />,
      title: "End of Tenancy",
      description: "Thorough end-of-tenancy cleaning to ensure you get your full deposit back.",
      link: "Get a free quote"
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gray-600" />,
      title: "Deep Cleans",
      description: "Intensive deep cleaning services for homes and properties that need extra attention.",
      link: "Get a free quote"
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-600" />,
      title: "One Off Cleans",
      description: "Flexible one-time cleaning services for special occasions or when you need extra help.",
      link: "Get a free quote"
    },
    {
      icon: <Wrench className="w-8 h-8 text-gray-600" />,
      title: "Tailored Cleaning",
      description: "Customized cleaning services designed specifically for your unique needs and preferences.",
      link: "Get a free quote"
    },
    {
      icon: <Trash2 className="w-8 h-8 text-gray-600" />,
      title: "Rubbish Removal & Sanitisation",
      description: "Complete rubbish removal and sanitisation services to keep your space clean and hygienic.",
      link: "Get a free quote"
    },
    {
      icon: <Sofa className="w-8 h-8 text-gray-600" />,
      title: "Carpet & Sofa Cleaning",
      description: "Professional upholstery cleaning to freshen up your carpets and sofas.",
      link: "Get a free quote"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#f0fdf4]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-left mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope text-gray-900 mb-4 font-normal"
          >
            <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">Professional and quality</span><br />
            cleaning services.
          </motion.h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-manrope text-gray-900 mb-3 font-normal">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-manrope mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center text-gray-700 hover:text-gray-900 font-manrope font-normal transition-colors group"
                >
                  {service.link}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
