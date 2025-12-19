import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Search, Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";
import { useScrollTop } from "@/hooks/use-scroll-top";

// Order tracking component with real-time status updates
// Includes comprehensive tracking information for customer experience

const TrackOrder = () => {
  useScrollTop();
  const [orderId, setOrderId] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<{
    orderId: string;
    status: string;
    estimatedDelivery: string;
    currentLocation: string;
    timeline: Array<{
      status: string;
      time: string;
      date: string;
      completed: boolean;
    }>;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTrack = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      setTrackingInfo({
        orderId: orderId,
        status: "In Transit",
        estimatedDelivery: "Today, 6:00 PM",
        currentLocation: "Tirupati Main Branch",
        timeline: [
          {
            status: "Order Placed",
            time: "10:30 AM",
            date: "Dec 18, 2025",
            completed: true
          },
          {
            status: "Order Confirmed",
            time: "10:45 AM",
            date: "Dec 18, 2025",
            completed: true
          },
          {
            status: "Being Prepared",
            time: "11:15 AM",
            date: "Dec 18, 2025",
            completed: true
          },
          {
            status: "Out for Delivery",
            time: "2:30 PM",
            date: "Dec 18, 2025",
            completed: true
          },
          {
            status: "In Transit",
            time: "4:00 PM",
            date: "Dec 18, 2025",
            completed: true
          },
          {
            status: "Delivered",
            time: "6:00 PM",
            date: "Dec 18, 2025",
            completed: false
          }
        ]
      });
      setIsLoading(false);
    }, 1500);
  };

  // SEO structured data for order tracking page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Track Your Order - Real-time Gift Delivery Updates",
    "description": "Track your personalized gift orders in real-time. Get live updates on delivery status, estimated arrival times, and courier location.",
    "url": "https://gcfgifts.com/track-order",
    "publisher": {
      "@type": "Organization",
      "name": "GCF Gifts",
      "url": "https://gcfgifts.com"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Track Your Order | Real-time Gift Delivery Updates | GCF Gifts</title>
        <meta name="description" content="Track your personalized gift orders with real-time updates. Monitor delivery status, estimated arrival times, and courier location in Tirupati." />
        <meta name="keywords" content="track order, order tracking, gift delivery status, package tracking, delivery updates, Tirupati delivery" />
        <meta property="og:title" content="Track Your Order - Real-time Gift Delivery Updates" />
        <meta property="og:description" content="Monitor your personalized gift delivery in real-time. Get live updates on order status and estimated delivery times." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcfgifts.com/track-order" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Track Your Order | Real-time Delivery Updates" />
        <meta name="twitter:description" content="Track your gift orders with live delivery updates and status information." />
        <link rel="canonical" href="https://gcfgifts.com/track-order" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <Header />
      <main className="container py-12 flex-1">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
            <p className="text-lg text-muted-foreground">
              Enter your order ID to get real-time updates on your gift delivery.
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Track Order
              </CardTitle>
              <CardDescription>
                Enter the order ID you received via email or SMS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleTrack} className="space-y-4">
                <div>
                  <Label htmlFor="orderId">Order ID</Label>
                  <Input
                    id="orderId"
                    placeholder="e.g., GCF-2025-001234"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Tracking..." : "Track Order"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {trackingInfo && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Order #{trackingInfo.orderId}</CardTitle>
                    <Badge variant={trackingInfo.status === "Delivered" ? "default" : "secondary"}>
                      {trackingInfo.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    Estimated Delivery: {trackingInfo.estimatedDelivery}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Current Location: {trackingInfo.currentLocation}
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Delivery Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingInfo.timeline.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <Clock className="h-4 w-4" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${
                            step.completed ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {step.status}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {step.time} • {step.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="h-5 w-5 mr-2" />
                    Delivery Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Partner</span>
                    <span>GCF Express</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Contact Number</span>
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tracking ID</span>
                    <span>TRK-{trackingInfo.orderId}</span>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  Need help with your order? Contact our support team.
                </p>
                <Button variant="outline">Contact Support</Button>
              </div>
            </div>
          )}

          {!trackingInfo && !isLoading && (
            <Card>
              <CardContent className="text-center py-12">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Enter Order ID</h3>
                <p className="text-muted-foreground">
                  Your tracking information will appear here once you enter a valid order ID.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;