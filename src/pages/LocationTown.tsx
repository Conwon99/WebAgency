import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";
import { trackPageView } from "@/lib/analytics";

const LocationTown = () => {
  const { town } = useParams<{ town: string }>();
  
  // Capitalize the first letter of the town name
  const townName = town ? town.charAt(0).toUpperCase() + town.slice(1) : '';

  // Towns considered part of Ayrshire for breadcrumb/description context
  const ayrshireTowns = new Set([
    'Ayr','Prestwick','Troon','Kilmarnock','Irvine','Mauchline','Maybole','Girvan'
  ]);
  const regionText = townName && ayrshireTowns.has(townName) ? ', Ayrshire' : '';

  useEffect(() => {
    trackPageView(`Location ${townName} Page`);
  }, [townName]);

  return (
    <div className="font-inter">
      <Helmet>
        <title>Web Design & SEO in {townName} | CodaPixel</title>
        <meta name="description" content={`Professional web design and SEO services in ${townName}${regionText}. Fast builds, GBP optimization, conversion tracking. Serving local businesses.`} />
        <link rel="canonical" href={`https://codapixel.co.uk/locations/${town?.toLowerCase()}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Web Design & SEO in ${townName} | CodaPixel`} />
        <meta property="og:description" content={`Professional web design and SEO services in ${townName}${regionText}.`} />
        <meta property="og:url" content={`https://codapixel.co.uk/locations/${town?.toLowerCase()}`} />
        <meta property="og:image" content="/C logo.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Web Design & SEO in ${townName} | CodaPixel`} />
        <meta name="twitter:description" content={`Professional web design and SEO services in ${townName}${regionText}.`} />
        <meta name="twitter:image" content="/C logo.webp" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: (
              ayrshireTowns.has(townName || '')
                ? [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codapixel.co.uk/' },
                    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://codapixel.co.uk/locations' },
                    { '@type': 'ListItem', position: 3, name: 'Ayrshire', item: 'https://codapixel.co.uk/locations/ayrshire' },
                    { '@type': 'ListItem', position: 4, name: townName || 'Town', item: `https://codapixel.co.uk/locations/${town?.toLowerCase()}` }
                  ]
                : [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://codapixel.co.uk/' },
                    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://codapixel.co.uk/locations' },
                    { '@type': 'ListItem', position: 3, name: townName || 'Town', item: `https://codapixel.co.uk/locations/${town?.toLowerCase()}` }
                  ]
            )
          })}
        </script>
      </Helmet>
      <Header />
      
      <main>
      <Hero location={townName} />
      </main>
      
      <HomeContact />
      <Footer />
    </div>
  );
};

export default LocationTown;
