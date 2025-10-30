import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Locations from "./pages/Locations";
import LocationAyrshire from "./pages/LocationAyrshire";
import LocationScotland from "./pages/LocationScotland";
import LocationTown from "./pages/LocationTown";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/scotland" element={<LocationScotland />} />
            <Route path="/locations/ayrshire" element={<LocationAyrshire />} />
            <Route path="/locations/:town" element={<LocationTown />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
