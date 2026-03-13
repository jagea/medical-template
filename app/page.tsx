import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Providers from "@/components/Providers";
import Reviews from "@/components/Reviews";
import NewPatients from "@/components/NewPatients";
import MapWrapper from "@/components/MapWrapper";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Providers />
      <Reviews />
      <NewPatients />
      <MapWrapper />
      <FinalCTA />
      <Footer />
    </>
  );
}
