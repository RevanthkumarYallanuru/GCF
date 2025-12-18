import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { OccasionsSection } from "@/components/home/OccasionsSection";
import { PersonalizeSection } from "@/components/home/PersonalizeSection";
import { TrendingSection } from "@/components/home/TrendingSection";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>GCF Gifts - Personalized Gifts & Custom Photo Frames | Same Day Delivery</title>
        <meta name="description" content="Shop premium personalized gifts, custom photo frames, mugs, and more. Fast 2-4 hour delivery in Tirupati. Premium quality gifts for every occasion including birthdays, anniversaries, and weddings." />
        <meta name="keywords" content="personalized gifts, custom photo frames, same day delivery, gifts Tirupati, custom mugs, personalized items, gift delivery, birthday gifts, anniversary gifts" />
        <meta property="og:title" content="GCF Gifts - Personalized Gifts & Custom Photo Frames" />
        <meta property="og:description" content="Shop premium personalized gifts with same-day delivery. Custom photo frames, mugs, and personalized items for every occasion." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcfgifts.com/" />
        <link rel="canonical" href="https://gcfgifts.com/" />
      </Helmet>
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
