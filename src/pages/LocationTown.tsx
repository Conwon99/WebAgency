import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeServices from "@/components/HomeServices";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import { trackPageView } from "@/lib/analytics";

const LocationTown = () => {
  const { town } = useParams<{ town: string }>();
  
  // Capitalize the first letter of the town name
  const townName = town ? town.charAt(0).toUpperCase() + town.slice(1) : '';
  
  const townDescriptions: { [key: string]: string } = {
    'Ayr': 'Ayr',
    'Prestwick': 'Prestwick',
    'Troon': 'Troon',
    'Kilmarnock': 'Kilmarnock',
    'Irvine': 'Irvine',
    'Mauchline': 'Mauchline',
    'Maybole': 'Maybole',
    'Girvan': 'Girvan'
  };

  useEffect(() => {
    trackPageView(`Location ${townName} Page`);
  }, [townName]);

  return (
    <div className="font-inter">
      <Helmet>
        <title>Web Design & Local SEO in {townName} | CodaPixel</title>
        <meta name="description" content={`Professional web design and local SEO services in ${townName}, Ayrshire. Fast builds, GBP optimization, conversion tracking. Serving local businesses.`} />
        <link rel="canonical" href={`https://codapixel.co.uk/locations/${town?.toLowerCase()}`} />
      </Helmet>
      <Header />
      
      <Hero location={townName} />
      
      <HomeContact />
      <Footer />
    </div>
  );
};

export default LocationTown;
