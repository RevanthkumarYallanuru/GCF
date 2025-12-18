import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { AdminOrders } from "@/components/admin/AdminOrders";
import { AdminInventory } from "@/components/admin/AdminInventory";
import { AdminDelivery } from "@/components/admin/AdminDelivery";
import { AdminAnalytics } from "@/components/admin/AdminAnalytics";
import { AdminCustomers } from "@/components/admin/AdminCustomers";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: ShoppingBag, label: "Orders", id: "orders" },
  { icon: Package, label: "Inventory", id: "inventory" },
  { icon: Truck, label: "Delivery", id: "delivery" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Users, label: "Customers", id: "customers" },
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
  const [activeView, setActiveView] = useState("dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  };

  const renderContent = () => {
    switch (activeView) {
      case "orders":
        return <AdminOrders />;
      case "inventory":
        return <AdminInventory />;
      case "delivery":
        return <AdminDelivery />;
      case "analytics":
        return <AdminAnalytics />;
      case "customers":
        return <AdminCustomers />;
      default:
        return (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                    {stat.positive !== undefined && (
                      <Badge variant={stat.positive ? "default" : "destructive"} className="text-xs">
                        {stat.change}
                      </Badge>
                    )}
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  {stat.subtext && (
                    <div className="text-xs text-muted-foreground">{stat.subtext}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Pending Approvals */}
              <div className="lg:col-span-2 bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Pending Photo Approvals</h3>
                  <Badge className="bg-yellow-100 text-yellow-800">5 Pending</Badge>
                </div>
                <div className="space-y-4">
                  {pendingApprovals.map((approval) => (
                    <div key={approval.id} className="flex items-center gap-4 p-4 rounded-lg border border-border">
                      <img
                        src={approval.image}
                        alt={approval.product}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{approval.product}</h4>
                        <p className="text-sm text-muted-foreground">{approval.customer}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground">{approval.uploadedAgo}</span>
                          <Badge variant="outline" className="text-xs">
                            {approval.resolution}
                          </Badge>
                          {approval.warning && (
                            <Badge variant="destructive" className="text-xs">
                              {approval.warning}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="text-right">
                          <div className="text-sm font-medium">Quality Score</div>
                          <div className="text-xs text-muted-foreground">{approval.quality}/100</div>
                        </div>
                        <Progress value={approval.quality} className="w-20 h-2" />
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <X className="h-4 w-4" />
                          </Button>
                          <Button size="sm">
                            <Check className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Status */}
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4">Active Deliveries</h3>
                  <div className="space-y-3">
                    {deliveryOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div>
                          <div className="font-medium text-sm">Order #{order.id}</div>
                          <div className="text-xs text-muted-foreground">{order.rider}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">{order.time || order.status}</div>
                          <Badge variant="outline" className="text-xs">
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4">Risk Alerts</h3>
                  <div className="space-y-3">
                    {riskOrders.map((risk) => (
                      <div key={risk.id} className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
                        <AlertTriangle className="h-4 w-4 text-red-500" />
                        <div className="flex-1">
                          <div className="font-medium text-sm">Order #{risk.id}</div>
                          <div className="text-xs text-red-600">{risk.issue}</div>
                        </div>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-300">
                          Resolve
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-card p-6 rounded-xl border border-border">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Rider
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Bell className="h-4 w-4 mr-2" />
                      Send Notification
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Clock className="h-4 w-4 mr-2" />
                      Update ETA
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {[
                    { action: "New order received", time: "2 mins ago", type: "order" },
                    { action: "Photo approved for order #8821", time: "14 mins ago", type: "approval" },
                    { action: "Delivery completed for order #8619", time: "1 hour ago", type: "delivery" },
                    { action: "Low stock alert: Custom Frames", time: "2 hours ago", type: "alert" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{activity.action}</div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border border-border">
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
          </>
        );
    }
  };

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
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                activeView === item.id
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
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors hover:bg-muted/50 text-muted-foreground">
            <Settings className="h-5 w-5" />
            <span className="font-medium">Settings</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors hover:bg-red-50 text-red-600"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold capitalize">{activeView}</h1>
            <p className="text-muted-foreground">
              {activeView === "dashboard" ? "Welcome back! Here's what's happening today." : `Manage ${activeView}`}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 w-64" />
            </div>
            <Button variant="outline" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {renderContent()}
      </main>
    </div>
  );
};

export default AdminDashboard;