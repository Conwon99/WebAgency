import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Search, BarChart3, Clock, ArrowRight } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const { tagline } = useBusiness();

  const services = [
    {
      title: "Website in a Day",
      description: "Get a professional website launched in just 24 hours. Fast, modern, and conversion-focused.",
      icon: Clock,
      features: [
        "Custom design and copy",
        "Mobile-first, SEO-friendly",
        "Quick setup and launch"
      ]
    },
    {
      title: "Custom Website",
      description: "Fully bespoke websites tailored to your brand and business goals.",
      icon: Code2,
      features: [
        "Unique design and branding",
        "Full content creation",
        "Advanced functionality"
      ]
    },
    {
      title: "SEO",
      description: "Rank higher in search results and drive organic traffic to your website.",
      icon: Search,
      features: [
        "On-page SEO optimization",
        "Local SEO & Google Maps",
        "Monthly reporting & insights"
      ]
    },
    {
      title: "Paid Ads",
      description: "Quickly generate leads with targeted advertising campaigns.",
      icon: BarChart3,
      features: [
        "Google Ads",
        "Meta (Facebook & Instagram)",
        "Campaign optimization"
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
            We build high-performing websites and local SEO systems that drive inbound leads and make results measurable.
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
            {/* Left Side - Illustration */}
            <div className="flex justify-center">
              <div className="relative w-96 h-96 lg:w-[28rem] lg:h-[28rem]">
                <img
                  src="/phone.webp"
                  alt="Website & analytics illustration"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-bold text-cleaning-text mb-6 font-thicccboi">
                What you get with every project
              </h3>
              
              <p className="text-cleaning-text/70 mb-8 leading-relaxed">
                Clear communication, measurable outcomes, and a website engineered for speed, SEO, and conversions.
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
                    <span className="text-cleaning-text font-medium">Mobile-first design</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                    <span className="text-cleaning-text font-medium">On-page SEO</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                    <span className="text-cleaning-text font-medium">Lead capture & forms</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                    <span className="text-cleaning-text font-medium">Speed & Core Web Vitals</span>
                   </div>
                 </div>
                 
                 <div className="space-y-3">
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                    <span className="text-cleaning-text font-medium">Google Business Profile</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                    <span className="text-cleaning-text font-medium">Conversion tracking</span>
                   </div>
                   <div className="flex items-center space-x-3">
                     <div className="w-5 h-5 bg-cleaning-primary rounded-full flex items-center justify-center">
                       <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                       </svg>
                     </div>
                    <span className="text-cleaning-text font-medium">Ongoing support</span>
                   </div>
                 </div>
               </div>
              
              {/* CTA Button */}
              <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white px-8 py-3 text-lg rounded-full">
                Get a free proposal
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices; 