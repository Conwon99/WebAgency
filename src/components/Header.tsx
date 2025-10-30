
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useBusiness } from "@/hooks/useBusiness";
import { trackBookCall, trackCTA } from "@/lib/analytics";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { name, phone, facebookUrl } = useBusiness();

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
    trackBookCall('header');
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePhoneClick = () => {
    trackCTA('phone', 'header');
    window.open(`tel:${phone}`, '_self');
  };

  const handleFacebookClick = () => {
    trackCTA('messenger', 'header');
    window.open(facebookUrl, '_blank');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If element doesn't exist, navigate to home and then scroll
      window.location.href = `/#${elementId}`;
    }
  };

  const handleScrollToOnMobile = (elementId: string) => {
    setIsMobileMenuOpen(false);
    handleScrollTo(elementId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#eae6e8' }}>
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/C logo.webp" 
              alt="CodaPixel Logo"
              className="h-12 w-auto"
              width="120"
              height="48"
              loading="eager"
            />
          </Link>
          
          {/* Right-aligned Navigation and CTA */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <Link 
                to="/"
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/services"
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Services
              </Link>
              <button 
                onClick={() => handleScrollTo('portfolio')}
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Portfolio
              </button>
              <Link 
                to="/contact"
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <Button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white rounded-full px-6 py-2 font-medium"
            >
              Book Free Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 z-50 relative"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cleaning-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link 
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Services
              </Link>
              <button 
                onClick={() => handleScrollToOnMobile('portfolio')}
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Portfolio
              </button>
              <Link 
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 hover:text-cleaning-primary font-figtree font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  trackBookCall('mobile_menu');
                  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white rounded-full px-6 py-3 font-figtree font-medium"
              >
                Book a free call
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
