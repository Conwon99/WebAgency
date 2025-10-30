
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import { trackPageView } from "@/lib/analytics";

const Index = () => {
  useEffect(() => {
    // Track page view when component mounts
    trackPageView('Home Page');
  }, []);

  return (
    <div className="font-inter">
      <Helmet>
        <title>Web Design & SEO in Ayr | CodaPixel</title>
        <meta name="description" content="Websites that convert + SEO that ranks. Fast builds, GBP optimization, tracking." />
        <link rel="canonical" href="https://codapixel.co.uk/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Web Design & SEO in Ayr | CodaPixel" />
        <meta property="og:description" content="Websites that convert + SEO that ranks. Fast builds, GBP optimization, tracking." />
        <meta property="og:url" content="https://codapixel.co.uk/" />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Design & SEO in Ayr | CodaPixel" />
        <meta name="twitter:description" content="Websites that convert + SEO that ranks. Fast builds, GBP optimization, tracking." />
        <meta name="twitter:image" content="/C logo.webp" />
      </Helmet>
      <Header />
      <Hero />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Index;
