import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Truck,
  BarChart3,
  Users,
  Settings,
  LogOut,
  Search,
  Bell,
  Check,
  X,
  Phone,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ShoppingBag, label: "Orders", active: false },
  { icon: Package, label: "Inventory", active: false },
  { icon: Truck, label: "Delivery", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Users, label: "Customers", active: false },
];

const stats = [
  { label: "Total Revenue (Today)", value: "₹45,200", change: "+12%", positive: true },
  { label: "Active Deliveries", value: "12", subtext: "2 near SLA limit" },
  { label: "Pending Photos", value: "5", subtext: "Needs Action" },
  { label: "Low Stock Alerts", value: "3", subtext: "Products running low" },
];

const pendingApprovals = [
  {
    id: "8821",
    product: "Custom A4 Frame - Matte Finish",
    customer: "Ravi Narayan",
    uploadedAgo: "14m ago",
    resolution: "High (300 DPI)",
    quality: 90,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=150&h=150&fit=crop",
  },
  {
    id: "8824",
    product: "Acrylic Block 6x6",
    customer: "Sneha Reddy",
    uploadedAgo: "42m ago",
    resolution: "Low (72 DPI)",
    quality: 35,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    warning: "Low Resolution Warning",
  },
];

const deliveryOrders = [
  { id: "8619", rider: "Rahul M.", time: "8 mins to delivery", status: "On Time" },
  { id: "8622", rider: "Printing in progress", time: "", status: "4 Active" },
];

const riskOrders = [
  { id: "8619", issue: "Traffic delay" },
  { id: "8822", issue: "Printing in progress" },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">G</span>
          </div>
          <span className="text-xl font-bold">GCF Gifts</span>
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                item.active
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted/50 text-muted-foreground"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="border-t border-border pt-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-muted-foreground hover:bg-muted/50 rounded-lg">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-muted-foreground hover:text-destructive rounded-lg">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-muted/50">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-bold text-primary">A</span>
            </div>
            <div>
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-muted-foreground">admin@gcf.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Overview</h1>
            <p className="text-muted-foreground">Here's what's happening in Tirupati today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Order ID, Customer Name, or Product..."
                className="w-96 pl-10 bg-card border-border"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 rounded-xl bg-card border border-border">
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold">{stat.value}</span>
                {stat.change && (
                  <span className={`text-sm ${stat.positive ? "text-primary" : "text-destructive"}`}>
                    {stat.change}
                  </span>
                )}
              </div>
              {stat.subtext && (
                <p className="text-xs text-muted-foreground mt-1">{stat.subtext}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pending Photo Approvals */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Pending Photo Approvals</h2>
              <Button variant="link" className="text-primary">View All (5)</Button>
            </div>

            {pendingApprovals.map((approval) => (
              <div key={approval.id} className="p-4 rounded-xl bg-card border border-border">
                <div className="flex gap-4">
                  <div className="relative">
                    <img
                      src={approval.image}
                      alt="Customer photo"
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    {approval.warning && (
                      <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-black text-[10px]">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Low Res
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Order #{approval.id}</h3>
                      {approval.warning && (
                        <Badge className="bg-yellow-500/20 text-yellow-400 text-xs">
                          {approval.warning}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{approval.product}</p>
                    <p className="text-sm">
                      Customer: <span className="text-primary">{approval.customer}</span> • Uploaded {approval.uploadedAgo}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-muted-foreground">Resolution Quality:</span>
                      <div className="flex items-center gap-2 flex-1">
                        <Progress value={approval.quality} className="h-2" />
                        <span className={`text-xs ${approval.quality > 50 ? "text-primary" : "text-yellow-400"}`}>
                          {approval.quality > 50 ? "High" : "Low"} ({approval.quality}%)
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="gradient-primary text-primary-foreground">
                        <Check className="h-4 w-4 mr-1" />
                        Approve for Print
                      </Button>
                      <Button variant="outline" size="sm">
                        <X className="h-4 w-4 mr-1" />
                        Request New Photo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Low Resolution Order */}
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="Customer photo"
                  className="w-24 h-24 rounded-lg object-cover opacity-50"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Order #8824</h3>
                  <p className="text-sm text-muted-foreground">Acrylic Block 6x6</p>
                  <p className="text-sm">
                    Customer: <span className="text-primary">Sneha Reddy</span> • Uploaded 42m ago
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button variant="outline" size="sm" className="text-muted-foreground">
                      <X className="h-4 w-4 mr-1" />
                      Ignore & Print
                    </Button>
                    <Button variant="outline" size="sm">
                      <Phone className="h-4 w-4 mr-1" />
                      Contact Customer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Live SLA Monitor */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Live SLA Monitor</h2>
              <div className="flex items-center gap-2 text-sm text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Live Updates
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=250&fit=crop"
                alt="Map"
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                  <Truck className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium">Rider Mahesh P.</p>
                  <p className="text-xs text-primary">8 mins to delivery</p>
                </div>
              </div>
              <Badge className="bg-primary/20 text-primary">On Time</Badge>
            </div>

            <div className="p-3 rounded-lg bg-card border border-border">
              <p className="text-sm font-medium mb-2">Active Riders</p>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-primary">{i}</span>
                  </div>
                ))}
                <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">+2</span>
                </div>
              </div>
            </div>

            {/* SLA Risk Watchlist */}
            <div className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="h-4 w-4 text-yellow-400" />
                <h3 className="font-semibold">SLA Risk Watchlist</h3>
              </div>
              {riskOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">Order #{order.id}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{order.issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Critical Inventory & Customer Feedback */}
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Critical Inventory Levels</h3>
              <Button variant="link" className="text-primary">Manage Stock</Button>
            </div>
            <div className="space-y-3">
              {[
                { name: "Oak Wood Frame 8x10", stock: 3, threshold: 10 },
                { name: "Premium Gift Box Large", stock: 5, threshold: 15 },
                { name: "Matte Photo Paper A4", stock: 12, threshold: 50 },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm">{item.name}</span>
                  <div className="flex items-center gap-2">
                    <Progress value={(item.stock / item.threshold) * 100} className="w-24 h-2" />
                    <span className="text-xs text-destructive">{item.stock} left</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Customer Feedback</h3>
              <Badge className="bg-primary/20 text-primary">4.9 ★</Badge>
            </div>
            <div className="space-y-3">
              {[
                { name: "Priya S.", rating: 5, comment: "Amazing quality and super fast delivery!" },
                { name: "Rahul M.", rating: 4, comment: "Good product, packaging could be better." },
              ].map((feedback, i) => (
                <div key={i} className="p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-sm">{feedback.name}</span>
                    <div className="flex">
                      {Array(feedback.rating).fill(0).map((_, j) => (
                        <span key={j} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{feedback.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;