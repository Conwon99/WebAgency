import { Phone, Facebook, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { trackWhatsApp, trackPhoneCall } from "@/lib/analytics";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/C logo.png" 
                  alt="CodaPixel Logo"
                  className="h-10 w-auto"
                />
                <h3 className="text-xl font-bold font-thicccboi">CodaPixel</h3>
              </div>
            </div>
            <p className="text-gray-300 font-figtree mb-4">
              Professional website design and development services. We build beautiful, fast websites that generate clients for your business.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+447483879647"
                onClick={() => trackPhoneCall('footer')}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+44 7483 879647</span>
              </a>
              <a 
                href="https://wa.me/447483879647"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('footer')}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <img src="/whatsapp.svg" alt="WhatsApp" className="w-4 h-4" style={{ filter: 'brightness(0) invert(1)' }} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-thicccboi font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 font-figtree">
              <li>Web Design</li>
              <li>Local SEO</li>
              <li>Google Business Profile</li>
              <li>Conversion Tracking</li>
              <li>Speed Optimization</li>
              <li>Landing Pages & CRO</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-thicccboi font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 font-figtree">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-thicccboi font-semibold mb-4">Locations</h4>
            <ul className="space-y-2 text-gray-300 font-figtree">
              <li>
                <Link to="/locations/ayrshire" className="hover:text-white transition-colors">
                  Scotland
                </Link>
              </li>
              <li>England</li>
              <li>Ireland</li>
              <li>Wales</li>
              <li>USA</li>
              <li>Canada</li>
              <li>
                <Link to="/locations" className="hover:text-white transition-colors font-semibold">
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 font-figtree text-sm">
              <p>© {currentYear} CodaPixel. All rights reserved.</p>
              <p className="mt-1">Professional Website Design & Development</p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a 
                href="https://wa.me/447483879647"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsApp('footer_bottom')}
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
