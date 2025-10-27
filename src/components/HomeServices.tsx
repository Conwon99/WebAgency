import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Bath, Microwave, Home, ArrowRight, Trash2, Sofa, Wrench } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const { tagline } = useBusiness();

  const services = [
    {
      title: "AIR B&B's",
      description: "Professional cleaning services for Airbnb properties to ensure guest satisfaction.",
      icon: Home,
      features: [
        "Turnaround cleaning between guests",
        "High standards for guest reviews",
        "Flexible scheduling for bookings"
      ]
    },
    {
      title: "End of Tenancy",
      description: "Thorough cleaning to ensure you get your full deposit back.",
      icon: Sparkles,
      features: [
        "Full property deep clean",
        "Professional cleaning standards",
        "Deposit return guarantee"
      ]
    },
    {
      title: "Deep Cleans",
      description: "Intensive cleaning services for homes that need extra attention.",
      icon: Bath,
      features: [
        "Comprehensive room-by-room cleaning",
        "Hard-to-reach areas and detailed attention",
        "Perfect for spring cleaning or moving"
      ]
    },
    {
      title: "One Off Cleans",
      description: "Flexible one-time cleaning services for special occasions.",
      icon: Calendar,
      features: [
        "Special event preparation",
        "Post-renovation cleaning",
        "Emergency cleaning services"
      ]
    },
    {
      title: "Rubbish Removal",
      description: "Complete rubbish removal and sanitisation services.",
      icon: Trash2,
      features: [
        "House clearance services",
        "Waste disposal and recycling",
        "Sanitisation after removal"
      ]
    },
    {
      title: "Carpet & Sofa Cleaning",
      description: "Professional upholstery cleaning to freshen up your furniture.",
      icon: Sofa,
      features: [
        "Deep carpet cleaning",
        "Sofa and chair cleaning",
        "Stain removal and deodorizing"
      ]
    }
  ];

  return (
    <section className="py-16 bg-[#f0fdf4]">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-left max-w-3xl mb-12"
        >
          <div className="flex items-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text font-thicccboi">
              Take a look at our <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">professional services</span>
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#3b82f6] to-transparent ml-6"></div>
          </div>
          <p className="text-lg text-cleaning-text/80 mb-6">
            We provide comprehensive cleaning services tailored to your needs with flexible scheduling and attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow border-cleaning-border">
                <CardHeader className="pb-3">
                  <div className="mb-3">
                    <service.icon className="w-8 h-8 text-cleaning-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-cleaning-text font-thicccboi">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-cleaning-text/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-cleaning-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-xs text-cleaning-text/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>


        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <Link to="/services">
            <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white rounded-full">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* House Illustration & Service Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 bg-white rounded-2xl shadow-lg p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - House Illustration */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem]">
                <img
                  src="/houseedit.png"
                  alt="House illustration showing different rooms and areas"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-cleaning-text mb-6 font-thicccboi">
                We cover all areas of your home
              </h3>
              
              <p className="text-cleaning-text/70 mb-8 leading-relaxed">
                From the smallest corners to the most challenging spaces, our professional cleaning service ensures every area of your property receives the attention it deserves.
              </p>
              
                             {/* Service Areas Checklist */}
               <div className="grid grid-cols-2 gap-4 mb-8">
                 <div className="space-y-3">
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-cleaning-text font-medium">Bathrooms</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-cleaning-text font-medium">Kitchens</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-cleaning-text font-medium">Living Rooms</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-cleaning-text font-medium">Carpets</span>
                   </div>
                 </div>
                 
                 <div className="space-y-3">
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-cleaning-text font-medium">Bedrooms</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-cleaning-text font-medium">Businesses</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                     <span className="text-cleaning-text font-medium">Windows</span>
                   </div>
                 </div>
               </div>
              
              {/* CTA Button */}
              <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3 text-lg rounded-full">
                Get a free quote
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices; 