
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
        <title>Web Design & Local SEO in Ayr | CodaPixel</title>
        <meta name="description" content="Websites that convert + local SEO that ranks. Fast builds, GBP optimization, tracking." />
        <link rel="canonical" href="https://codapixel.co.uk/" />
      </Helmet>
      <Header />
      <Hero />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Index;
