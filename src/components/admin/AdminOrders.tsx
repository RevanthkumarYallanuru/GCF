import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Eye, Edit, Truck, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const orders = [
  {
    id: "GCF-2025-001",
    customer: "Ravi Narayan",
    email: "ravi@example.com",
    phone: "+91 98765 43210",
    items: [
      { name: "Custom Photo Frame", qty: 1, price: 1299 },
      { name: "Personalized Mug", qty: 2, price: 599 }
    ],
    total: 2497,
    status: "Processing",
    payment: "Paid",
    date: "2025-12-18",
    deliveryType: "Same Day",
    address: "123 Temple Road, Tirupati"
  },
  {
    id: "GCF-2025-002",
    customer: "Sneha Reddy",
    email: "sneha@example.com",
    phone: "+91 98765 43211",
    items: [
      { name: "Birthday Cake", qty: 1, price: 899 },
      { name: "Assorted Chocolates", qty: 1, price: 499 }
    ],
    total: 1398,
    status: "Out for Delivery",
    payment: "Paid",
    date: "2025-12-18",
    deliveryType: "Express",
    address: "456 MG Road, Tirupati"
  },
  {
    id: "GCF-2025-003",
    customer: "Arun Kumar",
    email: "arun@example.com",
    phone: "+91 98765 43212",
    items: [
      { name: "Wedding Gift Set", qty: 1, price: 2999 }
    ],
    total: 2999,
    status: "Delivered",
    payment: "Paid",
    date: "2025-12-17",
    deliveryType: "Standard",
    address: "789 Annamayya Circle, Tirupati"
  },
  {
    id: "GCF-2025-004",
    customer: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 98765 43213",
    items: [
      { name: "Customized T-Shirt", qty: 3, price: 799 }
    ],
    total: 2397,
    status: "Pending Payment",
    payment: "Pending",
    date: "2025-12-18",
    deliveryType: "Standard",
    address: "321 Balaji Colony, Tirupati"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered": return "bg-green-100 text-green-800";
    case "Out for Delivery": return "bg-blue-100 text-blue-800";
    case "Processing": return "bg-yellow-100 text-yellow-800";
    case "Pending Payment": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getPaymentColor = (payment: string) => {
  return payment === "Paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
};

export const AdminOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewOrder = (order: any) => {
    setSelectedOrder(order);
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    // In a real app, this would update the backend
    console.log(`Updating order ${orderId} to status: ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders by ID or customer name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Pending Payment">Pending Payment</SelectItem>
            <SelectItem value="Processing">Processing</SelectItem>
            <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Orders Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Delivery</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{order.customer}</div>
                      <div className="text-sm text-muted-foreground">{order.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>₹{order.total.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPaymentColor(order.payment)}>
                      {order.payment}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{order.deliveryType}</Badge>
                  </TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleViewOrder(order)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      {order.status !== "Delivered" && (
                        <Button size="sm" variant="outline">
                          <Truck className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Order Details Modal would go here */}
      {selectedOrder && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Order Details - {selectedOrder.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Customer Information</h4>
                <p><strong>Name:</strong> {selectedOrder.customer}</p>
                <p><strong>Email:</strong> {selectedOrder.email}</p>
                <p><strong>Phone:</strong> {selectedOrder.phone}</p>
                <p><strong>Address:</strong> {selectedOrder.address}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Order Information</h4>
                <p><strong>Status:</strong> <Badge className={getStatusColor(selectedOrder.status)}>{selectedOrder.status}</Badge></p>
                <p><strong>Payment:</strong> <Badge className={getPaymentColor(selectedOrder.payment)}>{selectedOrder.payment}</Badge></p>
                <p><strong>Delivery:</strong> <Badge variant="outline">{selectedOrder.deliveryType}</Badge></p>
                <p><strong>Date:</strong> {new Date(selectedOrder.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Items</h4>
              <div className="space-y-2">
                {selectedOrder.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-muted rounded">
                    <span>{item.name} (Qty: {item.qty})</span>
                    <span>₹{item.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between font-semibold">
                  <span>Total:</span>
                  <span>₹{selectedOrder.total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};