import { motion } from "framer-motion";

const Process = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We start with a free consultation to understand your exterior cleaning needs and assess the areas requiring attention, from roofs to driveways."
    },
    {
      number: "02",
      title: "Site Survey & Assessment",
      description: "Our experienced team conducts a thorough site survey to assess the condition of surfaces and recommend the most effective cleaning methods."
    },
    {
      number: "03",
      title: "Quote & Scheduling",
      description: "We provide a detailed, transparent quote with no hidden costs and schedule the cleaning service at your convenience."
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="mb-12 text-left max-w-2xl">
            <p className="text-gray-600 font-manrope font-normal mb-4">Process</p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-3xl md:text-4xl font-manrope text-gray-900 mb-6"
            >
              Our Cleaning Process: Built for Quality and Peace of Mind
            </motion.h2>
            <p className="text-gray-600 font-manrope text-lg mb-8 leading-relaxed">
              Experience a seamless journey from consultation to completion with our 
              expert team dedicated to delivering outstanding exterior cleaning results.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-[#526bb0] text-[#526bb0] hover:bg-[#526bb0] hover:text-white font-manrope font-normal px-8 py-3 transition-colors rounded-none"
            >
              Let's talk
            </button>
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-start gap-6">
                  <div className="text-4xl font-manrope font-normal text-[#526bb0]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-manrope text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 font-manrope leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
