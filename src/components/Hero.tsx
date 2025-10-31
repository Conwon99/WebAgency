
import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight, Code2, Search, Clock } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { trackBookCall, trackWhatsApp, trackPhoneCall, trackCalendlyEvent, trackSectionView } from "@/lib/analytics";
import { useState, useEffect } from "react";
// import LottieLoader from "@/components/LottieLoader"; // Commented out for performance testing

interface HeroProps {
  location?: string;
}

const Hero = ({ location }: HeroProps = {}) => {
  const { phone, facebookUrl, tagline } = useBusiness();
  const [currentReview, setCurrentReview] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const services = [
    {
      title: "Custom Website",
      description: "Get online fast with my streamlined service. I'll customise a proven template with your logo, brand colours, and content, plus integrate contact forms and essential features for immediate customer connection.",
      icon: Code2,
      price: "£249",
      priceNote: "starting from",
      features: [
        "Unique design and branding",
        "Full content creation",
        "Advanced functionality",
        "Ongoing support & maintenance"
      ],
      popular: false
    },
    {
      title: "Website in a Day",
      description: "Bring your unique vision to life with a bespoke website. I start with a detailed consultation to understand your requirements, then deliver a custom online presence that perfectly reflects your brand in about two weeks.",
      icon: Clock,
      price: "£79",
      priceNote: "per month",
      features: [
        "Website launch within 24 hours",
        "Ongoing support and maintenance",
        "Analytics reports",
        "Unlimited updates (within reason)"
      ],
      popular: true
    },
    {
      title: "SEO & Paid Ads",
      description: "Drive traffic and leads through organic search and targeted advertising.",
      icon: Search,
      price: "£299",
      priceNote: "per month",
      features: [
        "On-page SEO optimization",
        "Local SEO & Google Maps",
        "Google Ads",
        "Meta (Facebook & Instagram) Ads",
        "Campaign setup & optimization",
        "Monthly reporting & insights"
      ],
      popular: false
    }
  ];
  
  const headline = location 
    ? <>Web Design & SEO<br />for <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">{location === 'Scotland' ? 'Scottish Businesses' : `${location} Businesses`}</span></>
    : <>Websites that<br />generate clients - from just <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">£79/month</span></>;
  
  const trustNote = location 
    ? `Trusted by ${location === 'Scotland' ? 'Scottish' : location} businesses`
    : "Trusted by hundreds of businesses";

  // Track section views when they come into viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section');
            if (sectionName) {
              trackSectionView(sectionName);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections with data-section attribute
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const faqData = [
    {
      question: "How long does it take to get my website?",
      answer: "We typically deliver your website within 48 hours of payment setup. Our team works efficiently to get your professional website live quickly."
    },
    {
      question: "What's included in the £79/month?",
      answer: "Everything! Design, development, hosting, maintenance, updates, SEO optimization, analytics tracking, and ongoing support. No hidden fees or extra costs."
    },
    {
      question: "How are payments done?",
      answer: "Payments are done through Stripe, which takes a monthly fee. However, we can work with your preferences and discuss alternative payment methods if needed."
    },
    {
      question: "What if I don't like my website?",
      answer: "We offer a 14-day money-back guarantee. If you're not 100% satisfied, we'll refund your payment - no questions asked."
    },
    {
      question: "Can you help with SEO and getting found on Google?",
      answer: "Absolutely! We optimize your website for local searches, ensure mobile-first design, optimize page speed, and help manage your Google reviews to improve your rankings."
    },
    {
      question: "What if I need changes after launch?",
      answer: "No problem! We include unlimited revisions and updates in your monthly fee. Need content changes, new pages, or design tweaks? We've got you covered."
    }
  ];

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const openCalendly = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const reviews = [
    {
      id: 1,
      name: "Claire H.",
      date: "2 weeks ago",
      rating: 5,
      text: "Brilliant new website. The team were punctual, professional and handled copy, design and SEO — enquiries started right away.",
      avatar: "C"
    },
    {
      id: 2,
      name: "Gordon P.",
      date: "1 month ago",
      rating: 5,
      text: "Local SEO exceeded expectations. Our Google rankings improved quickly and we saw a clear uptick in calls and form submissions.",
      avatar: "G"
    },
    {
      id: 3,
      name: "Emily R.",
      date: "3 months ago",
      rating: 5,
      text: "We hired the team for a new website and local SEO. Leads started coming in within weeks and the site looks fantastic.",
      avatar: "E"
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
        id="home"
        data-section="Hero"
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
              {headline}
            </motion.h1>
            
            {/* Google Review */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex items-center gap-3 mb-6"
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
                  <span className="text-gray-500 text-sm">(10+)</span>
                  </div>
                {/* Verified Badge */}
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.7 }}
              className="flex flex-col gap-3 text-sm text-gray-600 mb-8"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>No contracts. Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{trustNote}</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.7 }}
              className="mb-8"
            >
              <Button 
                onClick={() => {
                  trackBookCall('hero');
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white font-inter font-medium text-lg px-8 py-4 rounded-full shadow-lg"
              >
                Book a free call
              </Button>
            </motion.div>
            </div>
            
            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true, amount: 0.7 }}
                className="relative w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto flex items-center justify-center"
              >
                <img
                  src="/Computer Hero background removed.png"
                  alt="Web design and development showcase"
                  width="1125"
                  height="1125"
                  className="w-full h-auto max-w-full object-contain"
                  loading="eager"
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1125px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section data-section="Testimonial" className="py-16 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
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
          <div >
            <p className="text-white font-figtree font-medium text-xs sm:text-sm text-center">
              Proven results with 10+ satisfied clients across diverse industries
            </p>
          </div>
        </div>

        {/* Center Rectangle */}
        <div className="w-full h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#3b82f6' }}>
          <div className="flex animate-scroll-infinite whitespace-nowrap">
            {/* First set of logos */}
            {[
              '/Logos/coffee-cup.svg',
              '/Logos/dirtworks.webp',
              '/Logos/logo-with-ange.webp',
              '/Logos/nk-logo.webp',
              '/Logos/rblogo.webp',
              '/Logos/remilogo.webp',
              '/Logos/rp-logo.webp',
              '/Logos/sclogo.webp'
            ].map((logo, i) => (
              <div key={`first-${i}`} className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-8 lg:mx-12">
                <img 
                  src={logo} 
                  alt={logo.includes('tasse') ? 'Tasse Coffee Co logo' : logo.includes('able') ? 'Able Health logo' : `Company logo ${i + 1}`}
                  loading="lazy"
                  width="56"
                  height="56"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  decoding="async"
                />
              </div>
            ))}
            {/* Second set for seamless loop */}
            {[
              '/Logos/coffee-cup.svg',
              '/Logos/dirtworks.webp',
              '/Logos/logo-with-ange.webp',
              '/Logos/nk-logo.webp',
              '/Logos/rblogo.webp',
              '/Logos/remilogo.webp',
              '/Logos/rp-logo.webp',
              '/Logos/sclogo.webp'
            ].map((logo, i) => (
              <div key={`second-${i}`} className="flex-shrink-0 flex items-center justify-center mx-6 sm:mx-8 lg:mx-12">
                <img 
                  src={logo} 
                  alt={logo.includes('tasse') ? 'Tasse Coffee Co logo' : logo.includes('able') ? 'Able Health logo' : `Company logo ${i + 1}`}
                  loading="lazy"
                  width="56"
                  height="56"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                  decoding="async"
                  />
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
      <section data-section="Google Reviews" className="py-24 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              aria-label="Previous review"
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
                <button
              onClick={nextReview}
              aria-label="Next review"
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
                    <div className="rounded-2xl p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto shadow-lg" style={{ backgroundColor: '#eae6e8' }}>
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
                      <div className="flex ">
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
                      aria-label={`Go to review ${index + 1}`}
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

      {/* Free Website Demo Section */}
      <section data-section="Free Demo Video" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-thicccboi font-bold text-gray-900 mb-6 leading-tight"
            >
              Get a <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">free</span> website demo.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg sm:text-xl text-gray-700 font-figtree max-w-3xl mx-auto leading-relaxed"
            >
              Book a free demo with no strings attached. If you like it, you get to keep it with a 14-day money-back guarantee.
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <video 
                className="w-full h-auto"
                preload="none"
                loading="lazy"
                autoPlay
                muted
                loop
                playsInline
                style={{ 
                  objectFit: 'cover',
                  objectPosition: 'center',
                  clipPath: 'inset(5% 0 5% 0)'
                }}
              >
                <source src="/webvideo.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
          
          {/* CTA Button After Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <Button 
              onClick={() => {
                trackBookCall('video_section');
                openCalendly();
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-figtree font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Book a free call
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Websites that Generate Clients Section */}
      <section id="services" data-section="Services" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
              >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
                <div className="space-y-8">
                    <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-thicccboi font-bold text-gray-900 mb-6 leading-tight">
                    Websites that<br />
                    <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent">generate clients</span>
                  </h2>
                  <p className="text-xl text-gray-700 font-figtree leading-relaxed">
                    We handle design, copy, SEO, analytics and ongoing support so you can focus on your business. See how many leads come in every month.
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <p className="text-gray-700 font-figtree text-lg">Book a discovery call</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <p className="text-gray-700 font-figtree text-lg">We design your free preview</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <p className="text-gray-700 font-figtree text-lg">Launch with tracking and support</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-start">
                  <Button 
                    onClick={() => {
                      trackBookCall('websites_generate_clients');
                      openCalendly();
                    }}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-figtree font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Book a free demo
                  </Button>
                </div>
              </div>

              {/* Right - Image */}
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden flex items-center justify-center"
                >
                  <img
                    src="/rokman.png"
                    alt="Websites that generate clients"
                    width="480"
                    height="480"
                    className="w-full h-auto max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Monthly Report Section */}
      <section id="analytics" data-section="Analytics" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
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
                src="/phone.webp"
                alt="Mobile analytics preview"
                width="665"
                height="1216"
                className="mx-auto lg:mx-0 max-w-full w-[665px] sm:w-[800px] md:w-[1000px] lg:w-[1200px]"
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                decoding="async"
                style={{ backgroundColor: 'transparent' }}
              />
            </motion.div>
          </div>
                    </div>
      </section>

      {/* Duplicate Layered Wave Section */}
      <section className="relative overflow-x-hidden hide-scrollbar" style={{ backgroundColor: '#eae6e8' }}>
        {/* Top Wave */}
        <svg className="block w-full rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#3b82f6" opacity="0.5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"/>
        </svg>

        {/* Center Rectangle with Text */}
        <div className="w-full py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center" style={{ backgroundColor: '#3b82f6' }}>
          <div className="text-center px-4">
            <h3 className="text-white font-figtree font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              14-Day Money-Back Guarantee
            </h3>
            <p className="text-white font-figtree font-medium text-sm sm:text-base md:text-lg leading-relaxed">
              If you're not 100% impressed, get a refund up to 14 days after signing up with our 14-day money-back guarantee.
                      </p>
                    </div>
                  </div>

        {/* Bottom Wave */}
        <svg className="block w-full -mb-px" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#3b82f6" opacity="0.25"/>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#3b82f6" opacity="0.5"/>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#3b82f6"/>
        </svg>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" data-section="Portfolio" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-16 font-thicccboi">
                Our <span className="bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] bg-clip-text text-transparent font-bold">Portfolio</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Portfolio Item 1 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-80 bg-[#eae6e8] flex items-center justify-center">
                    <img 
                      src="/Portfolio/able_compressed.webp" 
                      alt="Able Health Website" 
                      width="665"
                      height="481"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">Able Health</h3>
                    <p className="text-gray-600">Professional healthcare website design</p>
                  </div>
                </div>

                {/* Portfolio Item 2 - Tasse Coffee Co */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-80 bg-[#eae6e8] flex items-center justify-center">
                    <img 
                      src="/Portfolio/tassecoffeeco.webp" 
                      alt="Tasse Coffee Co Website" 
                      width="665"
                      height="388"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">Tasse Coffee Co</h3>
                    <p className="text-gray-600">Artisan coffee company website</p>
                    </div>
                </div>

                {/* Portfolio Item 3 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-80 bg-[#eae6e8] flex items-center justify-center">
                    <img 
                      src="/Portfolio/holistics71.webp" 
                      alt="Holistics71 Website" 
                      width="665"
                      height="388"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">Holistics71</h3>
                    <p className="text-gray-600">Modern holistic wellness platform</p>
                  </div>
                </div>

                {/* Portfolio Item 4 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-80 bg-[#eae6e8] flex items-center justify-center">
                    <img 
                      src="/Portfolio/rbjoinery.webp" 
                      alt="RB Joinery Website" 
                      width="665"
                      height="388"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">RB Joinery</h3>
                    <p className="text-gray-600">Professional joinery and carpentry services</p>
                    </div>
                </div>

                {/* Portfolio Item 5 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-80 bg-[#eae6e8] flex items-center justify-center">
                    <img 
                      src="/Portfolio/proroof.webp" 
                      alt="ProRoof Website" 
                      width="665"
                      height="405"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">ProRoof</h3>
                    <p className="text-gray-600">Professional roofing services</p>
                  </div>
                </div>

                {/* Portfolio Item 6 */}
                <div className="bg-[#eae6e8] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-80 bg-[#eae6e8] flex items-center justify-center">
                    <img 
                      src="/Portfolio/sparklessite.webp" 
                      alt="Sparkle's Cleaning Service Website" 
                      width="665"
                      height="389"
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      decoding="async"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-thicccboi">Sparkle's Cleaning Service</h3>
                    <p className="text-gray-600">Professional cleaning services website & local SEO</p>
                  </div>
                </div>
            </div>
            </div>
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-figtree">
              Pricing
            </h2>
            <p className="text-xl text-gray-300 font-figtree mb-4">
              Websites in 24 hours, custom builds, SEO optimization, and paid advertising that drive real results for your business.
            </p>
            <p className="text-lg text-blue-400 font-medium font-figtree">
              "{tagline}"
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={`h-full ${service.popular ? 'bg-blue-600' : 'bg-gray-800'} rounded-2xl p-6 hover:shadow-2xl transition-shadow flex flex-col relative`}>
                  {service.popular && (
                    <>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-50">
                        <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold font-figtree">
                          Most Popular
                        </span>
                      </div>
                      <div className="absolute -top-12 -right-12 w-64 h-64 z-0 opacity-80 pointer-events-none overflow-hidden">
                        <div className="w-full h-full">
                          {/* <LottieLoader 
                            src="https://lottie.host/cc114657-4a04-4659-bc22-5d6419171617/F0K7XG9usz.lottie" 
                            style={{ width: '100%', height: '100%' }} 
                            autoplay 
                            loop
                          /> */}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="mb-6 relative z-10">
                    <CardTitle className="text-white text-xl font-bold font-figtree mb-4">
                      {service.title}
                    </CardTitle>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-white font-figtree">{service.price}</span>
                    </div>
                    <p className="text-sm text-gray-300 font-figtree">{service.priceNote}</p>
                  </div>
                  <CardContent className="flex-1 flex flex-col p-0 relative z-10">
                    <div className="space-y-4 mb-6 flex-1">
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-white font-figtree">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <a href="/contact" className="mt-auto">
                      <Button className={`w-full ${service.popular ? 'bg-black hover:bg-gray-900' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg py-3 font-figtree`}>
                          Get a Quote
                        </Button>
                      </a>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" data-section="FAQ" className="py-20 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - FAQ */}
            <div className="text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-thicccboi font-bold text-gray-900 mb-12 leading-tight">
                Frequently asked<br />
                <span className="ml-0 italic">questions</span>
              </h2>
              
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-b border-gray-300/30">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                      aria-expanded={openFAQ === index}
                      aria-label={`${faq.question} - ${openFAQ === index ? 'Collapse' : 'Expand'}`}
                      className="flex items-center justify-between w-full py-4 text-left hover:bg-gray-50/50 rounded-lg px-2 -mx-2 transition-colors duration-200"
                    >
                      <p className="text-gray-700 text-lg font-figtree font-medium pr-4">{faq.question}</p>
                      <ChevronRight 
                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          openFAQ === index ? 'rotate-90' : 'rotate-0'
                        }`} 
                      />
                    </button>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pb-4 px-2">
                          <p className="text-gray-600 font-figtree leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right - CTA Card */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
                <div className="bg-gradient-to-b from-yellow-400 via-orange-500 to-purple-600 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                  {/* Grainy texture overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] bg-repeat"></div>
                  
                  {/* Profile Picture */}
                  <div className="flex justify-center mb-6 relative z-10">
                    <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center">
                      {/* <LottieLoader 
                        src="https://lottie.host/d5d62b25-5fff-4af3-bfbd-f07d8d6b9e87/zZUgNVmBVU.lottie" 
                        style={{ width: '64px', height: '64px' }} 
                        autoplay 
                        loop
                      /> */}
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="text-center mb-8 relative z-10">
                    <h3 className="text-white text-2xl font-thicccboi font-semibold mb-4 leading-tight">
                      Ready to Get Started?<br />
                      Book a free call
                    </h3>
                    
                    {/* Buttons Container */}
                    <div className="flex flex-col gap-4">
                      {/* Button */}
                      <button 
                        onClick={() => {
                          trackBookCall('faq');
                          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        aria-label="Book a free call from FAQ section"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                      >
                        Book a call
                      </button>
                      
                      {/* WhatsApp Button */}
                      <a 
                        href="https://wa.me/447792145328"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsApp('faq')}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                      >
                        <img src="/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" style={{ filter: 'brightness(0) invert(1)' }} />
                        WhatsApp Us
                      </a>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Hero;










