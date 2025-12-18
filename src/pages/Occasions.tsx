import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift, Heart, Cake, GraduationCap, Briefcase, Home } from "lucide-react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

// Gift occasions data - centralized for better maintainability
// Each occasion includes SEO-friendly descriptions and high-quality images

const occasions = [
  {
    id: "birthday",
    title: "Birthday",
    description: "Celebrate life's milestones with personalized birthday gifts",
    icon: Cake,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop",
    color: "bg-pink-100 text-pink-800"
  },
  {
    id: "anniversary",
    title: "Anniversary",
    description: "Rekindle romance with thoughtful anniversary surprises",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
    color: "bg-red-100 text-red-800"
  },
  {
    id: "wedding",
    title: "Wedding",
    description: "Congratulate the happy couple with elegant wedding gifts",
    icon: Gift,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop",
    color: "bg-purple-100 text-purple-800"
  },
  {
    id: "graduation",
    title: "Graduation",
    description: "Honor academic achievements with meaningful graduation gifts",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    color: "bg-blue-100 text-blue-800"
  },
  {
    id: "corporate",
    title: "Corporate",
    description: "Professional gifts for business occasions and events",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
    color: "bg-gray-100 text-gray-800"
  },
  {
    id: "housewarming",
    title: "Housewarming",
    description: "Welcome new beginnings with housewarming gifts",
    icon: Home,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    color: "bg-green-100 text-green-800"
  }
];

const Occasions = () => {
  const navigate = useNavigate();

  // Handle occasion selection - navigate to products page with filter
  const handleOccasionClick = (occasionId: string) => {
    navigate(`/products?occasion=${occasionId}`);
  };

  // Structured data for SEO - helps search engines understand page content
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Gift Occasions - Personalized Gifts for Every Celebration",
    "description": "Find the perfect personalized gift for birthdays, anniversaries, weddings, and more. Custom photo gifts delivered in Tirupati.",
    "url": "https://gcfgifts.com/occasions",
    "publisher": {
      "@type": "Organization",
      "name": "GCF Gifts",
      "url": "https://gcfgifts.com"
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Helmet>
        <title>Gift Occasions | Personalized Gifts for Every Celebration | GCF Gifts</title>
        <meta name="description" content="Discover perfect personalized gifts for birthdays, anniversaries, weddings, graduations, and corporate events. Custom photo gifts with fast delivery in Tirupati." />
        <meta name="keywords" content="personalized gifts, birthday gifts, anniversary gifts, wedding gifts, graduation gifts, corporate gifts, custom photo gifts, Tirupati gifts" />
        <meta property="og:title" content="Gift Occasions - Personalized Gifts for Every Celebration" />
        <meta property="og:description" content="Find the perfect personalized gift for any occasion. Custom photo gifts with same-day delivery in Tirupati." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcfgifts.com/occasions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gift Occasions | Personalized Gifts for Every Celebration" />
        <meta name="twitter:description" content="Custom photo gifts for birthdays, anniversaries, weddings, and more. Fast delivery in Tirupati." />
        <link rel="canonical" href="https://gcfgifts.com/occasions" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gift Occasions</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect gift for every special moment. From birthdays to weddings,
            we have curated collections for all life's celebrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion) => {
            const IconComponent = occasion.icon;
            return (
              <Card key={occasion.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={occasion.image}
                      alt={occasion.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className={`absolute top-4 left-4 ${occasion.color}`}>
                      <IconComponent className="h-4 w-4 mr-2" />
                      {occasion.title}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{occasion.title} Gifts</CardTitle>
                  <CardDescription className="mb-4">{occasion.description}</CardDescription>
                  <Button className="w-full" onClick={() => handleOccasionClick(occasion.id)}>
                    Explore {occasion.title} Gifts
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Can't Find the Right Occasion?</h2>
            <p className="text-muted-foreground mb-6">
              Our gift experts are here to help you find the perfect gift for any occasion.
            </p>
            <Button size="lg" variant="outline">
              Contact Our Gift Experts
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Occasions;