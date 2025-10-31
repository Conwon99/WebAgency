// Placeholder for LocationTown page content
// TODO: Extract main content from src/pages/LocationTown.tsx
import Hero from "@/components/Hero";
import HomeContact from "@/components/HomeContact";
import { trackPageView } from "@/lib/analytics";
import { useEffect } from "react";

interface LocationTownPageProps {
  town: string;
}

const LocationTownPage = ({ town }: LocationTownPageProps) => {
  const townName = town ? town.charAt(0).toUpperCase() + town.slice(1) : '';

  useEffect(() => {
    trackPageView(`Location ${townName} Page`);
  }, [townName]);

  return (
    <>
      <Hero location={townName} />
      {/* Near Me FAQ */}
      <section className="py-8 overflow-x-hidden" style={{ backgroundColor: '#eae6e8' }}>
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-thicccboi">Do you offer web design near me in {townName}?</h3>
            <p className="text-gray-700 font-figtree">Yes. We offer fast, modern websites, local SEO, and conversion tracking for businesses in {townName} and nearby areas.</p>
          </div>
        </div>
      </section>
      {/* TODO: Add town-specific content sections from LocationTown.tsx */}
      <HomeContact />
    </>
  );
};

export default LocationTownPage;

