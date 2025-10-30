
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;
    
    // Create email content
    const subject = `New Quote Request from ${firstName} ${lastName}`;
    const emailBody = `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Service Needed: ${service}
Message: ${message}
    `;
    
    // Open default email client with pre-filled content
    const mailtoLink = `mailto:dorward.connor@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);
    
    console.log('Form submitted - email opened');
  };

  const handlePhoneClick = () => {
    const phoneNumber = "7368464637"; // UK mobile number without country code
    
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // For mobile devices, use tel: protocol to open phone app
      window.location.href = `tel:+44${phoneNumber}`; // +44 7368 464637
    } else {
      // For desktop, open WhatsApp Web with the number
      const whatsappUrl = `https://api.whatsapp.com/send?phone=44${phoneNumber}`; // 447368464637
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "7368464637";
    const message = "Hi! I'm interested in getting a quote for cleaning services.";
    const whatsappUrl = `https://api.whatsapp.com/send?phone=44${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMessengerClick = () => {
    // Using the Facebook page ID from https://www.facebook.com/profile.php?id=100076596473868
    const facebookPageId = "100076596473868";
    const messengerUrl = `https://m.me/${facebookPageId}`;
    window.open(messengerUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#f0fdf4]">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
            className="text-4xl md:text-5xl font-manrope font-normal text-gray-900 mb-4"
          >
            Get Your Free Quote Today
          </motion.h2>
          <p className="text-xl text-gray-600 font-manrope max-w-2xl mx-auto">
            Ready to get your space professionally cleaned? Contact us for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-4 w-full text-left hover:opacity-80 transition-opacity cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-manrope font-normal text-gray-900">Phone</h4>
                    <p className="text-gray-600 font-manrope">+44 7483 879647</p>
                  </div>
                </button>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-manrope font-normal text-gray-900">Address</h4>
                    <p className="text-gray-600 font-manrope">2 west bowhouse way, Irvine, United Kingdom</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#526bb0] rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-manrope font-normal text-gray-900">Hours</h4>
                    <p className="text-gray-600 font-manrope">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 font-manrope">Sat: 9:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-white">
              <CardHeader>
                <CardTitle className="text-2xl font-manrope font-normal text-gray-900">
                  Request a Quote
                </CardTitle>
                <p className="text-gray-600 font-manrope text-sm mt-2">
                  Send us a WhatsApp, a Facebook message, or send us an Email
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex gap-3 mb-6">
                  <Button 
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white font-manrope font-normal py-3 flex items-center justify-center gap-2 rounded-full"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    WhatsApp
                  </Button>
                                      <Button 
                      type="button"
                      onClick={handleMessengerClick}
                      className="flex-1 bg-[#0084ff] hover:bg-[#0073e6] text-white font-manrope font-normal py-3 flex items-center justify-center gap-2 rounded-full"
                      style={{ backgroundColor: '#0084ff' }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10 0 5.514-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0 3c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 2c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/>
                      </svg>
                      Message
                    </Button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input 
                        type="text" 
                        name="firstName"
                        required 
                        className="font-manrope"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input 
                        type="text" 
                        name="lastName"
                        required 
                        className="font-manrope"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      required 
                      className="font-manrope"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Phone
                    </label>
                    <Input 
                      type="tel" 
                      name="phone"
                      required 
                      className="font-manrope"
                      placeholder="+44 1563 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select name="service" className="w-full px-3 py-2 border border-gray-300 rounded-md font-manrope">
                      <option value="">Select a service</option>
                      <option value="airbnb">AIR B&B's</option>
                      <option value="tenancy">End of Tenancy</option>
                      <option value="deep">Deep Cleans</option>
                      <option value="oneoff">One Off Cleans</option>
                      <option value="tailored">Tailored Cleaning</option>
                      <option value="rubbish">Rubbish Removal & Sanitisation</option>
                      <option value="upholstery">Carpet & Sofa Cleaning</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-manrope font-normal text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      name="message"
                      rows={4} 
                      className="font-manrope"
                      placeholder="Tell us about your cleaning needs..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#526bb0] hover:bg-blue-700 text-white font-manrope font-normal py-3 rounded-full"
                  >
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
