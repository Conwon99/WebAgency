
import Header from "@/components/Header";
import ContactBar from "@/components/ContactBar";
import Hero from "@/components/Hero";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import HomeServices from "@/components/HomeServices";
import HomeContact from "@/components/HomeContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="font-inter">
      <Header />
      <ContactBar />
      <Hero />
      <BeforeAfterGallery />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Index;
