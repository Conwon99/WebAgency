import { Phone, Facebook, ExternalLink } from "lucide-react";
import { useBusiness } from "@/hooks/useBusiness";
import { Link } from "react-router-dom";

const Footer = () => {
  const { name, phone, facebookUrl, location } = useBusiness();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cleaning-text text-white py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/Sparkleslogo.png" 
                  alt={`${name} Logo`}
                  className="h-10 w-auto"
                />
                <h3 className="text-xl font-bold font-inter">{name}</h3>
              </div>
            </div>
            <p className="text-gray-300 font-inter mb-4">
              Professional cleaning services tailored to your needs. Serving {location} and surrounding areas.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={`tel:${phone}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{phone}</span>
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300 font-inter">
              <li>AIR B&B's</li>
              <li>End of Tenancy</li>
              <li>Deep Cleans</li>
              <li>One Off Cleans</li>
              <li>Rubbish Removal</li>
              <li>Carpet & Sofa Cleaning</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-inter font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 font-inter">
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
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 font-inter text-sm">
              <p>© {currentYear} {name}. All rights reserved.</p>
              <p className="mt-1">{location}</p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors flex items-center space-x-1"
              >
                <span>Facebook</span>
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
