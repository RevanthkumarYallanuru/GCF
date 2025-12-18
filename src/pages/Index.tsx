import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { OccasionsSection } from "@/components/home/OccasionsSection";
import { PersonalizeSection } from "@/components/home/PersonalizeSection";
import { TrendingSection } from "@/components/home/TrendingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <OccasionsSection />
        <PersonalizeSection />
        <TrendingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
