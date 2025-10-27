
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
        className="relative min-h-screen flex items-center justify-start bg-white overflow-x-hidden"
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 mt-20">
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
              We build you a Website in a Day — No Upfront Cost, Just <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">£79/month</span>
            </motion.h1>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-start mb-8"
            >
              <Button 
                onClick={handleFacebookClick}
                className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-inter font-medium text-lg px-8 py-4 rounded-full shadow-lg"
              >
                Get Started
              </Button>
              <Button 
                onClick={handlePhoneClick}
                className="bg-white hover:bg-gray-50 text-[#3b82f6] border-2 border-[#3b82f6] font-inter font-medium text-lg px-8 py-4 rounded-full shadow-lg"
              >
                Schedule Demo
              </Button>
            </motion.div>

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
                  style={{width: '300px', height: '300px'}} 
                  autoplay 
                  loop
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="py-16 bg-white overflow-x-hidden">
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
      <section className="relative bg-white overflow-x-hidden hide-scrollbar">
        {/* Top Wave */}
        <img src="/layered-wave.svg" alt="wave top" className="block w-full rotate-180 -mt-px" aria-hidden="true" />

        {/* Text above rectangle */}
        <div className="w-full bg-gray-900 py-2 hide-scrollbar">
          <div className="text-center">
            <p className="text-gray-300 font-figtree font-medium text-xs sm:text-sm">
              Proven results with 10+ satisfied clients across diverse industries
            </p>
          </div>
        </div>

        {/* Center Rectangle */}
        <div className="w-full bg-gray-900 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center overflow-x-hidden overflow-y-hidden hide-scrollbar">
          <div className="flex animate-scroll space-x-8 sm:space-x-12 lg:space-x-16 hide-scrollbar" style={{ overflow: 'hidden' }}>
            {/* Company Logo Placeholders */}
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center">
                <div className="bg-gray-700 rounded-lg px-4 py-2 flex items-center justify-center min-w-[80px] sm:min-w-[100px]">
                  <span className="text-gray-300 font-figtree font-medium text-xs sm:text-sm">
                    Company {i + 1}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {Array.from({ length: 8 }, (_, i) => (
              <div key={`duplicate-${i}`} className="flex-shrink-0 flex items-center justify-center">
                <div className="bg-gray-700 rounded-lg px-4 py-2 flex items-center justify-center min-w-[80px] sm:min-w-[100px]">
                  <span className="text-gray-300 font-figtree font-medium text-xs sm:text-sm">
                    Company {i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <img src="/layered-wave.svg" alt="wave bottom" className="block w-full -mb-px" aria-hidden="true" />
      </section>

      {/* Google Reviews Slider */}
      <section className="py-16 bg-gray-900 overflow-x-hidden">
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
                    <div className="bg-gray-800 rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          {/* Avatar */}
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                            {review.avatar}
                          </div>
                          <div>
                            <h3 className="text-blue-400 font-semibold text-lg">{review.name}</h3>
                            <p className="text-gray-400 text-sm">{review.date}</p>
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
                      <p className="text-white text-base sm:text-lg leading-relaxed">
                        {review.text}
                        {review.text.length > 200 && (
                          <span className="text-gray-400 ml-2 cursor-pointer hover:text-gray-300">
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

      {/* Monthly Report Section */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                className="mx-auto lg:mx-0 rounded-2xl shadow-2xl max-w-full w-[720px] sm:w-[960px] md:w-[1120px] lg:w-[1280px] xl:w-[1440px]"
                loading="lazy"
              />
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-left order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-thicccboi leading-tight">
                Know What’s Working, Instantly
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-figtree leading-relaxed">
                Get real-time analytics on traffic, leads, and messages so you can see what’s driving results — and make smarter business decisions fast.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative py-16 bg-white overflow-x-hidden">
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

      {/* Free Preview & Demo Section */}
      <section className="py-20 bg-gray-50 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Large Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-left"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 font-thicccboi leading-tight">
                Get a free preview & Demo of your website — <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">no strings attached</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                See exactly what your website will look like before you commit. Watch our founder demonstrate the process with a real client.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-700">Book a call.</p>
            </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-700">Send your business social media profiles.</p>
            </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#3b82f6] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-700">We build you a free website to review.</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleFacebookClick}
                  className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-inter font-medium text-lg px-8 py-4 rounded-full shadow-lg"
                >
                  Watch Free Demo
                </Button>
                <Button 
                  onClick={handlePhoneClick}
                  className="bg-white hover:bg-gray-50 text-[#3b82f6] border-2 border-[#3b82f6] font-inter font-medium text-lg px-8 py-4 rounded-full shadow-lg"
                >
                  Get Your Preview
                </Button>
              </div>
            </motion.div>

            {/* Right Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-blue-600 transition-colors cursor-pointer">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
                      </svg>
                    </div>
                    <p className="text-white text-base sm:text-lg font-semibold">Watch Demo Video</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Click to play</p>
              </div>
            </div>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics & Support Section */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-thicccboi leading-tight"
            >
              Know exactly how many clients you are getting with <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">ongoing support & analytics</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              Track your website's performance and see real results with detailed analytics and continuous support.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 sm:mt-8 flex justify-center"
          >
            <img
              src="/phone.png"
              alt="Phone mockup with analytics preview"
              className="w-full max-w-xl sm:max-w-2xl rounded-2xl shadow-lg ring-1 ring-white/10"
              loading="lazy"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Analytics Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-thicccboi">Detailed Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Track visitor behavior, conversion rates, and see exactly which pages are driving the most clients to your business.
              </p>
            </motion.div>

            {/* Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-thicccboi">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Get continuous support and updates to keep your website performing at its best and generating more clients.
              </p>
            </motion.div>

            {/* Results Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1"
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-thicccboi">Real Results</h3>
              <p className="text-gray-600 leading-relaxed">
                See measurable improvements in your client acquisition with clear metrics and performance tracking.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mt-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleFacebookClick}
                className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-inter font-medium text-lg px-8 py-4 rounded-full shadow-lg"
              >
                Get Started Today
              </Button>
              <Button 
                onClick={handlePhoneClick}
                className="bg-white hover:bg-gray-50 text-[#3b82f6] border-2 border-[#3b82f6] font-inter font-medium text-lg px-8 py-4 rounded-full shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white overflow-x-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
              >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-thicccboi">
                  How it <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">works</span>
                </h2>
                
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {/* Step 1 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      1
                    </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-thicccboi">Get Your Free Quote</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Contact us via phone, WhatsApp, or Facebook Messenger for a free, no-obligation quote tailored to your needs.
                      </p>
                  </div>

                  {/* Step 2 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      2
                    </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-thicccboi">Schedule Your Service</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Choose a convenient time that works for you. We offer flexible scheduling including same-day service.
                      </p>
                  </div>

                  {/* Step 3 */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      3
                    </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-thicccboi">Enjoy Your Clean Space</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our professional team arrives on time with all equipment and supplies to deliver exceptional results.
                      </p>
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










