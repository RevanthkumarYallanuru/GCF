import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Truck, Shield, Star, CheckCircle, Phone } from "lucide-react";
import { Helmet } from "react-helmet";

// Key features of same-day delivery service
// These highlight the competitive advantages for SEO and user understanding

const features = [
  {
    icon: Clock,
    title: "2-4 Hour Delivery",
    description: "Lightning-fast delivery within Tirupati city limits"
  },
  {
    icon: Truck,
    title: "Dedicated Couriers",
    description: "Professional delivery team ensuring safe and timely arrival"
  },
  {
    icon: Shield,
    title: "Secure Packaging",
    description: "Premium packaging to protect your gifts during transit"
  },
  {
    icon: Star,
    title: "Quality Assured",
    description: "Only premium quality gifts with satisfaction guarantee"
  }
];

const steps = [
  {
    step: "1",
    title: "Choose Your Gift",
    description: "Browse our extensive collection and select the perfect gift"
  },
  {
    step: "2",
    title: "Place Order",
    description: "Complete your order with delivery details and payment"
  },
  {
    step: "3",
    title: "Track in Real-Time",
    description: "Monitor your order status with our tracking system"
  },
  {
    step: "4",
    title: "Delivered with Care",
    description: "Your gift arrives fresh and beautifully presented"
  }
];

const SameDayDelivery = () => {
  // SEO structured data for same-day delivery service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Same Day Gift Delivery",
    "description": "Order personalized gifts before 2 PM and receive same-day delivery within 2-4 hours in Tirupati",
    "provider": {
      "@type": "Organization",
      "name": "GCF Gifts",
      "url": "https://gcfgifts.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Tirupati",
      "addressCountry": "IN"
    },
    "serviceType": "Gift Delivery Service"
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Same Day Gift Delivery | 2-4 Hour Delivery in Tirupati | GCF Gifts</title>
        <meta name="description" content="Order personalized gifts before 2 PM for same-day delivery within 2-4 hours in Tirupati. Premium quality gifts with secure packaging and dedicated couriers." />
        <meta name="keywords" content="same day delivery, gift delivery Tirupati, urgent gifts, fast delivery, personalized gifts same day, Tirupati gift delivery" />
        <meta property="og:title" content="Same Day Gift Delivery | Instant Joy Delivered Today" />
        <meta property="og:description" content="Forgot a special occasion? Order before 2 PM and receive premium personalized gifts delivered within 2-4 hours in Tirupati." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcfgifts.com/same-day-delivery" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Same Day Gift Delivery | 2-4 Hour Delivery in Tirupati" />
        <meta name="twitter:description" content="Order personalized gifts for same-day delivery. Premium quality with fast, secure delivery in Tirupati." />
        <link rel="canonical" href="https://gcfgifts.com/same-day-delivery" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-primary/5 py-16">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
                <Truck className="h-4 w-4 mr-2" />
                Same Day Delivery
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Instant Joy, <span className="text-primary">Delivered Today</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Forgot a special occasion? No worries! Order before 2 PM and receive
                premium gifts delivered to any address in Tirupati within 2-4 hours.
              </p>
              <div className="mt-8">
                <Button size="lg" className="mr-4">Shop Same Day Gifts</Button>
                <Button size="lg" variant="outline">Call Now: +91 98765 43210</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Same Day Delivery?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage Area */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Tirupati Coverage Area</h2>
                <p className="text-muted-foreground mb-6">
                  We deliver to all major areas within Tirupati including temple areas,
                  residential zones, hotels, and business districts. Our dedicated
                  delivery network ensures your gifts reach their destination safely.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tirupati Main</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Tiruchanur</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Renigunta</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>All Temple Areas</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-8 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our customer service team is available 24/7 to assist with your same day delivery needs.
                </p>
                <Button>Call Customer Care</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Send Instant Joy?</h2>
            <p className="text-lg mb-8 opacity-90">
              Order now and make someone's day special with our same day delivery service.
            </p>
            <Button size="lg" variant="secondary">
              Start Shopping
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SameDayDelivery;