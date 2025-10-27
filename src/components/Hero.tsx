
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { trackCTA } from "@/lib/analytics";
import { useState, useEffect } from "react";
import HomeServices from "./HomeServices";

const Hero = () => {
  const { phone, facebookUrl } = useBusiness();
  const [currentReview, setCurrentReview] = useState(0);

  // Load Lottie script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@lottiefiles/dotlottie-wc@0.8.5/dist/dotlottie-wc.js';
    script.type = 'module';
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Tegha Kum",
      date: "3 months ago",
      rating: 5,
      text: "We started working with Step Social when we needed consistency for our social media presence. Step Social team delivered exceptionally.",
      avatar: "T"
    },
    {
      id: 2,
      name: "David Robinson",
      date: "5 months ago",
      rating: 5,
      text: "Absolutely incredible service, really can't recommend enough...well done.",
      avatar: "D"
    },
    {
      id: 3,
      name: "Charlotte Jones",
      date: "5 months ago",
      rating: 5,
      text: "It has been a great experience working with the Step Social team. The entire process from the onboarding to content delivery was very smooth and easy. The team really understood our brand, messaging and positioning which...",
      avatar: "C"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handlePhoneClick = () => {
    trackCTA('phone', 'hero');
    window.open(`tel:${phone}`, '_self');
  };

  const handleFacebookClick = () => {
    trackCTA('messenger', 'hero');
    window.open(facebookUrl, '_blank');
  };

  return (
    <>
      <section 
        className="relative min-h-screen flex items-center justify-start overflow-x-hidden"
        style={{ backgroundColor: '#eae6e8' }}
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 mt-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thicccboi font-bold !text-black mb-6 leading-tight"
            >
              Get a Professional Website — No Upfront Cost, just <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">£79/month</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              We design & build you a website upfront for free — if you like it, it's just <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">£79/month</span>. No setup fees, no contracts, no stress. 14 day money back guarantee
            </motion.p>
            

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-col gap-3 text-sm text-gray-600 mb-12"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No contracts. Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Trusted by hundreds of businesses</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8"
            >
              <Button 
                onClick={handlePhoneClick}
                className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-inter font-medium text-lg px-8 py-4 rounded-full shadow-lg"
              >
                Book a free call
              </Button>
            </motion.div>

            {/* Google Review */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2">
                {/* Google Logo */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gray-900">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">(70)</span>
                  </div>
                {/* Verified Badge */}
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </motion.div>
            </div>
            
            {/* Hero Animation */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.7 }}
                className="relative w-full max-w-md lg:max-w-lg flex items-center justify-center"
              >
                <dotlottie-wc 
                  src="https://lottie.host/8fc39289-f2b3-499d-8c21-9a0e0298e20c/zyltaQ3EPT.lottie" 
                  style={{width: '500px', height: '500px'}} 
                  autoplay 
                  loop
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-thicccboi font-semibold text-gray-900 leading-relaxed">
              Start getting <span className="text-blue-600">clients</span>. Stop wasting time <span className="text-blue-600">advertising</span>.
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Layered Wave Section */}
      <section className="relative overflow-x-hidden hide-scrollbar" style={{ backgroundColor: '#eae6e8' }}>
        {/* Top Wave */}
        <svg className="block w-full rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#3b82f6" opacity="0.5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"/>
        </svg>

        {/* Text above rectangle */}
        <div className="w-full py-2 hide-scrollbar" style={{ backgroundColor: '#3b82f6', marginTop: '-1px' }}>
          <div className="text-center">
            <p className="text-white font-figtree font-medium text-xs sm:text-sm">
              Proven results with 10+ satisfied clients across diverse industries
            </p>
          </div>
        </div>

        {/* Center Rectangle */}
        <div className="w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center overflow-x-hidden overflow-y-hidden hide-scrollbar" style={{ backgroundColor: '#3b82f6' }}>
          <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-16 hide-scrollbar" style={{ overflow: 'hidden' }}>
            {/* Company Logo Placeholders */}
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-center min-w-[80px] sm:min-w-[100px]">
                  <span className="text-white font-figtree font-medium text-xs sm:text-sm">
                    Company {i + 1}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {Array.from({ length: 8 }, (_, i) => (
              <div key={`duplicate-${i}`} className="flex-shrink-0 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-center min-w-[80px] sm:min-w-[100px]">
                  <span className="text-white font-figtree font-medium text-xs sm:text-sm">
                    Company {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <svg className="block w-full -mb-px" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#3b82f6" opacity="0.5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"/>
        </svg>
      </section>

      {/* Google Reviews Slider */}
      <section className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
                <button
              onClick={nextReview}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

            {/* Reviews Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {reviews.map((review, index) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto shadow-lg">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          {/* Avatar */}
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {review.avatar}
                          </div>
                          <div>
                            <h3 className="text-gray-900 font-semibold text-lg">{review.name}</h3>
                            <p className="text-gray-600 text-sm">{review.date}</p>
                          </div>
                        </div>
                        {/* Google Logo */}
                        <div className="w-8 h-8 flex items-center justify-center">
                          <svg viewBox="0 0 24 24" className="w-8 h-8">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Stars */}
                      <div className="flex mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                </div>

                      {/* Review Text */}
                      <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                        {review.text}
                        {review.text.length > 200 && (
                          <span className="text-gray-500 ml-2 cursor-pointer hover:text-gray-400">
                            Read more
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-2">
              {reviews.map((_, index) => (
                    <button
                      key={index}
                  onClick={() => setCurrentReview(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentReview 
                      ? 'bg-blue-500 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
      </section>

      {/* Affordable, Fast and Risk-Free Section */}
      <section className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-thicccboi">
                It's affordable, fast and it's risk-free
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                CD web design replaces unreliable freelancers and expensive agencies for one flat monthly fee, with websites and support delivered so fast you won't want to go anywhere else.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img 
                    src="/cards/Calendar..png" 
                    alt="Calendar Card" 
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img 
                    src="/cards/call.png" 
                    alt="Call Card" 
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img 
                    src="/cards/tick.png" 
                    alt="Tick Card" 
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Steps */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="space-y-8">
                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-2">
                      Book a call with us and send us your business details.
                    </p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-2">
                      Show you a live demo of your website. You can find the details.
                    </p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-2">
                      We get the website launched within 48 hours. 14-day money-back guarantee
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Monthly Report Section */}
      <section className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-left order-1 lg:order-2"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 font-thicccboi leading-tight">
                Know What's Working, <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">Instantly</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-figtree leading-relaxed">
                Get real-time analytics on traffic, leads, and messages so you can see what's driving results — and make smarter business decisions fast.
              </p>
            </motion.div>

            {/* Left - Mobile Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/phone.png"
                alt="Mobile analytics preview"
                className="mx-auto lg:mx-0 max-w-full w-[800px] sm:w-[1000px] md:w-[1200px] lg:w-[1400px] xl:w-[1600px]"
                loading="lazy"
                style={{ backgroundColor: 'transparent' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Affordable, Fast and Risk-Free Section */}
      <section className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-thicccboi">
                It's affordable, fast and it's risk-free
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                CD web design replaces unreliable freelancers and expensive agencies for one flat monthly fee, with websites and support delivered so fast you won't want to go anywhere else.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img 
                    src="/cards/Calendar..png" 
                    alt="Calendar Card" 
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img 
                    src="/cards/call.png" 
                    alt="Call Card" 
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img 
                    src="/cards/tick.png" 
                    alt="Tick Card" 
                    className="w-full h-auto rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Steps */}
              <div className="mt-12 max-w-4xl mx-auto">
                <div className="space-y-8">
                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      1
                    </div>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-2">
                      Book a call with us and send us your business details.
                    </p>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      2
                    </div>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-2">
                      Show you a live demo of your website. You can find the details.
                    </p>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      3
                    </div>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-2">
                      We get the website launched within 48 hours. 14-day money-back guarantee
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16 font-thicccboi">
                Our <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">Portfolio</span>
              </h2>
              
              <div className="overflow-x-auto hide-scrollbar">
                <div className="flex gap-8 pb-4" style={{ width: 'max-content' }}>
                  {/* Portfolio Item 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80"
                  >
                    <img 
                      src="/Portfolio/able_compressed.webp" 
                      alt="Able Health Website" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">Able Health</h3>
                      <p className="text-gray-600">Professional healthcare website design</p>
                    </div>
                  </motion.div>

                  {/* Portfolio Item 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80"
                  >
                    <img 
                      src="/Portfolio/holistics71.com_(Portfolio)_compressed.webp" 
                      alt="Holistics71 Website" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">Holistics71</h3>
                      <p className="text-gray-600">Modern holistic wellness platform</p>
                    </div>
                  </motion.div>

                  {/* Portfolio Item 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-80"
                  >
                    <img 
                      src="/Portfolio/ProRoof.png" 
                      alt="ProRoof Website" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">ProRoof</h3>
                      <p className="text-gray-600">Roofing services website</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="mx-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              </div>
            </div>

      {/* How it Works Section */}
      <section className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
              >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16 font-thicccboi">
                  How it <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">works</span>
                </h2>
                
              <div className="max-w-4xl text-left">
                <div className="space-y-16">
                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center gap-12"
                  >
                    <div className="w-40 h-40 flex items-center justify-center flex-shrink-0 relative">
                      <img src="/blobs/blob.svg" alt="Step 1" className="w-full h-full object-contain" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-3xl">1</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-thicccboi">Send Business Details</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Send us your business details and requirements for your website.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center gap-12"
                  >
                    <div className="w-40 h-40 flex items-center justify-center flex-shrink-0 relative">
                      <img src="/blobs/blob (1).svg" alt="Step 2" className="w-full h-full object-contain" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-3xl">2</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-thicccboi">Book a Call & Demo</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Book a call and receive a free website demo tailored to your business.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center gap-12"
                  >
                    <div className="w-40 h-40 flex items-center justify-center flex-shrink-0 relative">
                      <img src="/blobs/blob (2).svg" alt="Step 3" className="w-full h-full object-contain" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-3xl">3</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-thicccboi">Set Up Payment</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        If you like the website, set up the payment for 2 weeks' time.
                      </p>
                    </div>
                  </motion.div>

                  {/* Step 4 */}
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-center gap-12"
                  >
                    <div className="w-40 h-40 flex items-center justify-center flex-shrink-0 relative">
                      <img src="/blobs/blob (3).svg" alt="Step 4" className="w-full h-full object-contain" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white font-bold text-3xl">4</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 font-thicccboi">Receive Your Website</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Receive your website within 48 hours of payment setup.
                      </p>
                    </div>
                  </motion.div>
                  </div>
                </div>

                {/* CTA Button */}
              <div className="mt-12">
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white px-8 py-4 text-lg rounded-full"
                  >
                    Get Started Today
                  </Button>
                </div>
              </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <HomeServices />
    </>
  );
};

export default Hero;










