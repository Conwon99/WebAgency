
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useBusiness } from "@/hooks/useBusiness";
import { trackCTA } from "@/lib/analytics";
import { Link } from "react-router-dom";

const Header = () => {
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
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/your-username/your-event-type' // Replace with your actual Calendly URL
      });
    }
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#eae6e8' }}>
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/C logo.png" 
              alt={`${name} Logo`}
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Right-aligned Navigation and CTA */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="flex items-center space-x-8">
              <Link 
                to="/"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/services"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/pricing"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link 
                to="/reviews"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
              >
                Reviews
              </Link>
              <Link 
                to="/gallery"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
              >
                Gallery
              </Link>
              <Link 
                to="/contact"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop CTA */}
            <Button 
              onClick={handlePhoneClick}
              className="bg-[#3b82f6] hover:bg-[#1d4ed8] text-white rounded-full px-6 py-2 font-medium"
            >
              Book Free Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2"
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
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/pricing"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/reviews"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link 
                to="/gallery"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                to="/contact"
                className="text-gray-800 hover:text-cleaning-primary font-inter font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex flex-col space-y-2 mt-4">
              <Button 
                variant="outline"
                onClick={handlePhoneClick}
                className="flex items-center justify-center space-x-2 border-cleaning-primary text-cleaning-primary hover:bg-cleaning-primary hover:text-white rounded-full"
              >
                <Phone className="w-4 h-4 text-cleaning-primary" />
                <span>Call {phone}</span>
              </Button>
              <Button 
                onClick={handleFacebookClick}
                className="bg-cleaning-primary hover:bg-cleaning-primary/90 text-white rounded-full"
              >
                Message on Facebook
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
