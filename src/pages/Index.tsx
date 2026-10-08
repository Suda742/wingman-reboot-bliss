import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TransitionSection } from "@/components/TransitionSection";
import { NFTSection } from "@/components/NFTSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { GallerySection } from "@/components/GallerySection";
import { AttendeeSection } from "@/components/AttendeeSection";
import { MediaSection } from "@/components/MediaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TransitionSection />
      <NFTSection />
      <RoadmapSection />
      <GallerySection />
      <AttendeeSection />
      <MediaSection />
      <Footer />
    </main>
  );
};

export default Index;
