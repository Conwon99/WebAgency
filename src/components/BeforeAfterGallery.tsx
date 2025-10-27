import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Camera, ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const BeforeAfterGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slideshowImages = [
    {
      id: 1,
      title: "Professional Cleaning Service",
      description: "Expert cleaning services for your home",
      image: "/gallery/s1.jpg",
      category: "General Cleaning"
    },
    {
      id: 2,
      title: "Cleaning Process",
      description: "Thorough and detailed cleaning approach",
      image: "/gallery/s2.jpg",
      category: "Process"
    },
    {
      id: 3,
      title: "Deep Clean Results",
      description: "Transforming spaces with professional cleaning",
      image: "/gallery/imgi_2_490166044_1188432403281809_661653498034237046_n.jpg",
      category: "Deep Clean"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying, slideshowImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-cleaning-background">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cleaning-text mb-4 font-thicccboi">
            See Our Work
          </h2>
          <p className="text-lg text-cleaning-text/80 mb-6">
            Professional cleaning transformations that speak for themselves
          </p>
        </motion.div>

        {/* Slideshow */}
        <div className="max-w-4xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={slideshowImages[currentSlide].image}
                alt={slideshowImages[currentSlide].title}
                className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 ease-in-out"
              />
              
              {/* Overlay with title and description */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 font-thicccboi">
                    {slideshowImages[currentSlide].title}
                  </h3>
                  <p className="text-white/90 mb-3">
                    {slideshowImages[currentSlide].description}
                  </p>
                  <span className="inline-block bg-cleaning-primary text-white px-3 py-1 rounded-full text-sm">
                    {slideshowImages[currentSlide].category}
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slideshowImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-cleaning-primary scale-125' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <Link to="/gallery">
            <Button variant="outline" className="border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white">
              View Full Gallery
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery; 