import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign, Package, Calendar, BarChart3 } from "lucide-react";

// Sample sales data for analytics dashboard
// In production, this would be fetched from a real API/database
// Data represents monthly performance metrics for the e-commerce platform

const salesData = [
  { month: "Jan", revenue: 45000, orders: 120, customers: 95 },
  { month: "Feb", revenue: 52000, orders: 145, customers: 110 },
  { month: "Mar", revenue: 48000, orders: 135, customers: 105 },
  { month: "Apr", revenue: 61000, orders: 165, customers: 125 },
  { month: "May", revenue: 55000, orders: 150, customers: 115 },
  { month: "Jun", revenue: 67000, orders: 180, customers: 140 },
  { month: "Jul", revenue: 72000, orders: 195, customers: 150 },
  { month: "Aug", revenue: 69000, orders: 185, customers: 145 },
  { month: "Sep", revenue: 78000, orders: 210, customers: 165 },
  { month: "Oct", revenue: 82000, orders: 225, customers: 175 },
  { month: "Nov", revenue: 89000, orders: 240, customers: 185 },
  { month: "Dec", revenue: 95000, orders: 260, customers: 200 }
];

const topProducts = [
  { name: "Custom Photo Frame", sales: 145, revenue: 187850, growth: 12.5 },
  { name: "Personalized Mug", sales: 98, revenue: 58820, growth: 8.3 },
  { name: "Birthday Cake", sales: 76, revenue: 68420, growth: -2.1 },
  { name: "Assorted Chocolates", sales: 89, revenue: 44511, growth: 15.7 },
  { name: "Customized T-Shirt", sales: 67, revenue: 53633, growth: 22.4 }
];

const customerSegments = [
  { segment: "New Customers", count: 450, percentage: 35, color: "bg-blue-500" },
  { segment: "Returning", count: 520, percentage: 40, color: "bg-green-500" },
  { segment: "VIP", count: 180, percentage: 14, color: "bg-purple-500" },
  { segment: "Corporate", count: 170, percentage: 11, color: "bg-orange-500" }
];

export const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState("12months");

  const totalRevenue = salesData.reduce((sum, month) => sum + month.revenue, 0);
  const totalOrders = salesData.reduce((sum, month) => sum + month.orders, 0);
  const totalCustomers = salesData.reduce((sum, month) => sum + month.customers, 0);
  const avgOrderValue = Math.round(totalRevenue / totalOrders);

  const revenueGrowth = ((salesData[11].revenue - salesData[10].revenue) / salesData[10].revenue * 100).toFixed(1);
  const orderGrowth = ((salesData[11].orders - salesData[10].orders) / salesData[10].orders * 100).toFixed(1);

  return (
    <div className="space-y-6">
      {/* Time Range Selector */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 Days</SelectItem>
            <SelectItem value="30days">Last 30 Days</SelectItem>
            <SelectItem value="3months">Last 3 Months</SelectItem>
            <SelectItem value="12months">Last 12 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Revenue</p>
                <p className="text-2xl font-bold">₹{(totalRevenue / 100000).toFixed(1)}L</p>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+{revenueGrowth}%</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Orders</p>
                <p className="text-2xl font-bold">{totalOrders.toLocaleString()}</p>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+{orderGrowth}%</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              <ShoppingCart className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Customers</p>
                <p className="text-2xl font-bold">{totalCustomers.toLocaleString()}</p>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+8.2%</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              <Users className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Order Value</p>
                <p className="text-2xl font-bold">₹{avgOrderValue.toLocaleString()}</p>
                <div className="flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-500">+5.3%</span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </div>
              </div>
              <BarChart3 className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Detailed Analytics */}
      <Tabs defaultValue="sales" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sales">Sales Trends</TabsTrigger>
          <TabsTrigger value="products">Top Products</TabsTrigger>
          <TabsTrigger value="customers">Customer Segments</TabsTrigger>
        </TabsList>

        <TabsContent value="sales" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue & Orders Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-end justify-between space-x-2">
                {salesData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-muted rounded-t mb-2 relative">
                      <div
                        className="bg-primary rounded-t absolute bottom-0 w-full"
                        style={{ height: `${(data.revenue / 100000) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground">{data.month}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Revenue: </span>
                  <span className="font-medium">₹{(totalRevenue / 100000).toFixed(1)}L</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Orders: </span>
                  <span className="font-medium">{totalOrders.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{product.name}</h4>
                      <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                        <span>{product.sales} sales</span>
                        <span>₹{product.revenue.toLocaleString()} revenue</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={product.growth > 0 ? "default" : "destructive"}>
                        {product.growth > 0 ? "+" : ""}{product.growth}%
                      </Badge>
                      {product.growth > 0 ? (
                        <TrendingUp className="h-4 w-4 text-green-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Segmentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {customerSegments.map((segment, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{segment.segment}</span>
                      <span className="text-sm text-muted-foreground">
                        {segment.count} customers ({segment.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${segment.color}`}
                        style={{ width: `${segment.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.8</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                  <div className="flex justify-center mt-1">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">92%</div>
                  <div className="text-sm text-muted-foreground">Repeat Customers</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">156</div>
                  <div className="text-sm text-muted-foreground">New This Month</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};