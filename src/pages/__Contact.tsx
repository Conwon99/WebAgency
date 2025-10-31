import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Footer from "@/components/Footer";
import HomeContact from "@/components/HomeContact";

const Contact = () => {
  return (
    <div className="font-inter min-h-screen bg-cleaning-background">
      <Helmet>
        <title>Contact CodaPixel</title>
        <meta name="description" content="Book a discovery call. Fast replies." />
        <link rel="canonical" href="https://codapixel.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact CodaPixel" />
        <meta property="og:description" content="Book a discovery call. Fast replies." />
        <meta property="og:url" content="https://codapixel.com/contact" />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact CodaPixel" />
        <meta name="twitter:description" content="Book a discovery call. Fast replies." />
        <meta name="twitter:image" content="/C logo.webp" />
      </Helmet>
      <Header />
      <ContactBar />
      <main>
        <HomeContact />
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 
