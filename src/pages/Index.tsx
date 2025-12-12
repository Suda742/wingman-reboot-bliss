import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { NFTSection } from "@/components/NFTSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { GallerySection } from "@/components/GallerySection";
import { AttendeeSection } from "@/components/AttendeeSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NFTSection />
      <RoadmapSection />
      <GallerySection />
      <AttendeeSection />
      <Footer />
    </main>
  );
};

export default Index;
