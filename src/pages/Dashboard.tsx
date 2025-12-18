import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Package,
  User,
  MapPin,
  CreditCard,
  Image,
  LogOut,
  ChevronRight,
  Eye,
  RefreshCw,
  Truck,
  Check,
  X,
  MessageCircle,
  Upload,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  { icon: Package, label: "My Orders", active: true },
  { icon: User, label: "Personal Details", active: false },
  { icon: MapPin, label: "Address Book", active: false },
  { icon: CreditCard, label: "Payment Methods", active: false },
  { icon: Image, label: "Saved Photos", active: false },
];

const activeOrder = {
  id: "GCF-8821",
  status: "On Way",
  statusColor: "text-yellow-400",
  date: "Today, 10:15 AM",
  items: [
    {
      name: "Premium Walnut Photo Frame (12x12)",
      variant: "Qty: 1 - Customized",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=100&h=100&fit=crop",
      photoApproved: true,
    },
    {
      name: "Assorted Dark Truffles",
      variant: "Qty: 3",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=100&h=100&fit=crop",
      photoApproved: false,
    },
  ],
  tracking: {
    confirmed: true,
    packed: true,
    onWay: true,
    delivered: false,
  },
  deliveryAddress: "Tirupati, AP Road",
  map: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=400&h=200&fit=crop",
};

const pastOrders = [
  {
    id: "GCF-7748",
    status: "Delivered",
    date: "Oct 04, 2023",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=100&h=100&fit=crop",
    colors: ["#8B4513", "#FFD700", "#C0C0C0"],
  },
  {
    id: "GCF-6672",
    status: "Action Needed",
    statusColor: "text-yellow-400",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=100&h=100&fit=crop",
    productName: "Magic Photo Mug",
    variant: "Photo not uploaded yet",
  },
  {
    id: "GCF-5501",
    status: "Delivered",
    date: "Sep 15, 2023",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">A</span>
                  </div>
                  <div>
                    <p className="font-semibold">Arjun K.</p>
                    <p className="text-sm text-muted-foreground">Premium Member</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-card border border-border overflow-hidden">
                {menuItems.map((item, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                      item.active
                        ? "bg-primary/10 text-primary border-l-2 border-primary"
                        : "hover:bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-muted-foreground hover:text-destructive transition-colors">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>

              <p className="text-xs text-muted-foreground px-4">v2024.0.52</p>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Hello, Arjun 👋</h1>
                  <p className="text-muted-foreground">Here is what's happening with your gifts today.</p>
                </div>
                <Button variant="outline" className="border-primary/50 text-primary">
                  Edit Profile
                </Button>
              </div>

              {/* Active Order */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Active Orders</h2>
                  <Button variant="link" className="text-primary">View Map</Button>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary/20 text-primary border-primary/30">Live Status</Badge>
                      <span className="text-sm text-muted-foreground">{activeOrder.date}</span>
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                      Out for Delivery
                    </Badge>
                  </div>

                  <h3 className="text-lg font-semibold mb-4">Order #{activeOrder.id}</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {activeOrder.items.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.variant}</p>
                            {item.photoApproved && (
                              <Badge className="bg-primary/20 text-primary text-xs mt-1">
                                Photo Approved
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}

                      {/* Progress */}
                      <div className="flex items-center justify-between pt-4">
                        {[
                          { label: "Confirmed", done: activeOrder.tracking.confirmed },
                          { label: "Packed", done: activeOrder.tracking.packed },
                          { label: "On Way", done: activeOrder.tracking.onWay },
                          { label: "Delivered", done: activeOrder.tracking.delivered },
                        ].map((step, i) => (
                          <div key={i} className="flex flex-col items-center gap-2">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                              step.done ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                            }`}>
                              {step.done ? <Check className="h-4 w-4" /> : <span className="text-xs">{i + 1}</span>}
                            </div>
                            <span className="text-xs text-muted-foreground">{step.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-xl overflow-hidden border border-border">
                        <img src={activeOrder.map} alt="Map" className="w-full h-32 object-cover" />
                      </div>
                      <p className="text-sm text-muted-foreground">{activeOrder.deliveryAddress}</p>
                      <Button className="w-full gradient-primary text-primary-foreground">
                        <Truck className="h-4 w-4 mr-2" />
                        Track Live →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Past Orders */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Past Orders</h2>

                <div className="flex gap-2">
                  {["All Orders", "Delivered", "Cancelled"].map((tab) => (
                    <Button
                      key={tab}
                      variant={activeTab === tab ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveTab(tab)}
                      className={activeTab === tab ? "gradient-primary text-primary-foreground" : ""}
                    >
                      {tab}
                    </Button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {pastOrders.map((order) => (
                    <div key={order.id} className="p-4 rounded-xl bg-card border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-xs text-muted-foreground">Delivered on {order.date}</p>
                        <Badge className={order.statusColor ? "bg-yellow-500/20 text-yellow-400" : "bg-primary/20 text-primary"}>
                          {order.status}
                        </Badge>
                      </div>
                      <h4 className="font-semibold mb-3">Order #{order.id}</h4>
                      
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={order.image}
                          alt="Order"
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        {order.colors && (
                          <div className="flex gap-1">
                            {order.colors.map((color, i) => (
                              <span
                                key={i}
                                className="h-6 w-6 rounded-full border border-border"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        )}
                        {order.productName && (
                          <div>
                            <p className="text-sm font-medium">{order.productName}</p>
                            <p className="text-xs text-muted-foreground">{order.variant}</p>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-2">
                        {order.status === "Action Needed" ? (
                          <>
                            <Button variant="outline" size="sm" className="flex-1 text-destructive border-destructive/50">
                              <X className="h-4 w-4 mr-1" /> Cancel Order
                            </Button>
                            <Button size="sm" className="flex-1 gradient-primary text-primary-foreground">
                              <Upload className="h-4 w-4 mr-1" /> Upload Photos
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="h-4 w-4 mr-1" /> View Invoice
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1 border-primary/50 text-primary">
                              <RefreshCw className="h-4 w-4 mr-1" /> Reorder
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="p-4 rounded-xl bg-card border border-border flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Need help with an order?</h3>
                  <p className="text-sm text-muted-foreground">Our support team in Tirupati is available 24/7.</p>
                </div>
                <Button className="gradient-primary text-primary-foreground">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;