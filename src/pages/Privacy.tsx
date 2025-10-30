import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Privacy Policy | CodaPixel</title>
        <meta name="description" content="CodaPixel privacy policy and data protection information." />
        <link rel="canonical" href="https://codapixel.co.uk/privacy" />
        <meta name="robots" content="noindex,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | CodaPixel" />
        <meta property="og:description" content="CodaPixel privacy policy and data protection information." />
        <meta property="og:url" content="https://codapixel.co.uk/privacy" />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | CodaPixel" />
        <meta name="twitter:description" content="CodaPixel privacy policy and data protection information." />
        <meta name="twitter:image" content="/C logo.webp" />
      </Helmet>
      <Header />
      <ContactBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cleaning-background to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-cleaning-text mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-cleaning-text/80">
              How we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white p-8 rounded-lg shadow-md border border-cleaning-border">
              <h2 className="text-2xl font-bold text-cleaning-text mb-6">Privacy Policy</h2>
              
              <p className="text-cleaning-text/80 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="space-y-6 text-cleaning-text/80">
                <div>
                  <h3 className="text-xl font-semibold text-cleaning-text mb-3">Information We Collect</h3>
                  <p className="mb-3">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Fill out our contact form</li>
                    <li>Call us or send us messages</li>
                    <li>Request quotes or book services</li>
                    <li>Provide feedback or reviews</li>
                  </ul>
                  <p className="mt-3">
                    This information may include your name, phone number, email address, postcode, and details about your cleaning requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cleaning-text mb-3">How We Use Your Information</h3>
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide cleaning services and quotes</li>
                    <li>Communicate with you about appointments</li>
                    <li>Send you updates about our services</li>
                    <li>Improve our services and customer experience</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cleaning-text mb-3">Information Sharing</h3>
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mt-3">
                    <li>Service providers who assist us in operating our business</li>
                    <li>Legal authorities when required by law</li>
                    <li>Third parties with your explicit consent</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cleaning-text mb-3">Data Security</h3>
                  <p>
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cleaning-text mb-3">Data Retention</h3>
                  <p>
                    We retain your personal information for as long as necessary to provide our services and comply with legal obligations. Contact form data is typically retained for up to 2 years unless you request deletion.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cleaning-text mb-3">Your Rights</h3>
                  <p className="mb-3">You have the right to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to our processing of your information</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cleaning-text mb-3">Contact Us</h3>
                  <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <ul className="list-none pl-0 space-y-1 mt-3">
                    <li>Phone: 07354 194260</li>
                    <li>Email: <a href="mailto:dorward.connor@gmail.com" className="text-cleaning-primary hover:underline">dorward.connor@gmail.com</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-cleaning-text mb-3">Changes to This Policy</h3>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy; 