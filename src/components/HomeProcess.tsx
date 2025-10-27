import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeProcess = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Book Your Clean",
      description: "Choose your preferred service and schedule - weekly, fortnightly, monthly, or one-off deep cleans."
    },
    {
      icon: Sparkles,
      title: "We Clean & Transform",
      description: "Our experienced team arrives on time and transforms your home with attention to detail and eco-friendly products."
    },
    {
      icon: CheckCircle,
      title: "Enjoy Your Clean Home",
      description: "Relax in your fresh, welcoming space while we handle the cleaning maintenance for you."
    }
  ];

  return (
    <section className="py-16 bg-cleaning-background">
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
            How It Works
          </h2>
          <p className="text-lg text-cleaning-text/80 mb-6 font-inter">
            Simple, reliable, and hassle-free cleaning service for your home
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-2 mb-12 items-center justify-center">
          {steps.map((step, index) => (
            <div key={`step-${index}`} className="flex flex-col md:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-center"
              >
                <div className="bg-white p-8 rounded-lg shadow-md border border-cleaning-border hover:shadow-lg transition-shadow w-80">
                  <div className="w-20 h-20 bg-cleaning-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-cleaning-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-cleaning-text mb-4 font-thicccboi">
                    {step.title}
                  </h3>
                  <p className="text-cleaning-text/70 font-inter leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </motion.div>
              
              {/* Arrow between steps (hidden on mobile) */}
              {index < steps.length - 1 && (
                <motion.div
                  key={`arrow-${index}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: (index * 0.2) + 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="hidden md:flex justify-center items-center mx-2"
                >
                  <div className="w-12 h-12 bg-cleaning-primary/10 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-cleaning-primary" />
                  </div>
                </motion.div>
              )}
            </div>
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
          <Link to="/contact">
            <Button className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white font-inter font-medium px-8 py-3 rounded-lg shadow-lg">
              Get Started Today
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProcess; 