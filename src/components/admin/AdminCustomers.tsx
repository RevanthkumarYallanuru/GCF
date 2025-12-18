import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Search, Mail, Phone, MapPin, Calendar, ShoppingBag, Star, MessageSquare, UserPlus } from "lucide-react";

const customers = [
  {
    id: "CUST-001",
    name: "Ravi Narayan",
    email: "ravi@example.com",
    phone: "+91 98765 43210",
    address: "123 Temple Road, Tirupati - 517501",
    joinDate: "2024-03-15",
    totalOrders: 12,
    totalSpent: 45600,
    lastOrder: "2025-12-18",
    status: "Active",
    segment: "VIP",
    rating: 4.8,
    notes: "Prefers same-day delivery, loves personalized gifts"
  },
  {
    id: "CUST-002",
    name: "Sneha Reddy",
    email: "sneha@example.com",
    phone: "+91 98765 43211",
    address: "456 MG Road, Tirupati - 517502",
    joinDate: "2024-06-22",
    totalOrders: 8,
    totalSpent: 28900,
    lastOrder: "2025-12-17",
    status: "Active",
    segment: "Regular",
    rating: 4.6,
    notes: "Birthday specialist, often orders cakes"
  },
  {
    id: "CUST-003",
    name: "Arun Kumar",
    email: "arun@example.com",
    phone: "+91 98765 43212",
    address: "789 Annamayya Circle, Tirupati - 517503",
    joinDate: "2024-01-10",
    totalOrders: 15,
    totalSpent: 52300,
    lastOrder: "2025-12-16",
    status: "Active",
    segment: "VIP",
    rating: 4.9,
    notes: "Corporate client, bulk orders for events"
  },
  {
    id: "CUST-004",
    name: "Priya Sharma",
    email: "priya@example.com",
    phone: "+91 98765 43213",
    address: "321 Balaji Colony, Tirupati - 517504",
    joinDate: "2024-08-05",
    totalOrders: 5,
    totalSpent: 15800,
    lastOrder: "2025-12-15",
    status: "Active",
    segment: "New",
    rating: 4.5,
    notes: "Recently moved to Tirupati, exploring gift options"
  },
  {
    id: "CUST-005",
    name: "Vijay Singh",
    email: "vijay@example.com",
    phone: "+91 98765 43214",
    address: "654 RTC Bus Stand Road, Tirupati - 517505",
    joinDate: "2023-11-20",
    totalOrders: 22,
    totalSpent: 67800,
    lastOrder: "2025-12-10",
    status: "Inactive",
    segment: "VIP",
    rating: 4.7,
    notes: "Long-time customer, hasn't ordered recently"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active": return "bg-green-100 text-green-800";
    case "Inactive": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getSegmentColor = (segment: string) => {
  switch (segment) {
    case "VIP": return "bg-purple-100 text-purple-800";
    case "Regular": return "bg-blue-100 text-blue-800";
    case "New": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export const AdminCustomers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [segmentFilter, setSegmentFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSegment = segmentFilter === "all" || customer.segment === segmentFilter;
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
    return matchesSearch && matchesSegment && matchesStatus;
  });

  const segments = [...new Set(customers.map(c => c.segment))];
  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === "Active").length;
  const vipCustomers = customers.filter(c => c.segment === "VIP").length;
  const avgOrderValue = Math.round(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.reduce((sum, c) => sum + c.totalOrders, 0));

  const handleSendMessage = (customerId: string) => {
    console.log(`Sending message to customer ${customerId}`);
    setIsMessageDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Customers</p>
                <p className="text-2xl font-bold">{totalCustomers}</p>
              </div>
              <UserPlus className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Customers</p>
                <p className="text-2xl font-bold text-green-600">{activeCustomers}</p>
              </div>
              <UserPlus className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">VIP Customers</p>
                <p className="text-2xl font-bold text-purple-600">{vipCustomers}</p>
              </div>
              <Star className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg Order Value</p>
                <p className="text-2xl font-bold">₹{avgOrderValue.toLocaleString()}</p>
              </div>
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search customers by name, email, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={segmentFilter} onValueChange={setSegmentFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Segment" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Segments</SelectItem>
            {segments.map(segment => (
              <SelectItem key={segment} value={segment}>{segment}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="Active">Active</SelectItem>
            <SelectItem value="Inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Customers Table */}
      <Card>
        <CardHeader>
          <CardTitle>Customer Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Segment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Order</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCustomers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">{customer.id}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm">
                        <Mail className="h-3 w-3 mr-1" />
                        {customer.email}
                      </div>
                      <div className="flex items-center text-sm">
                        <Phone className="h-3 w-3 mr-1" />
                        {customer.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-center">
                      <div className="font-medium">{customer.totalOrders}</div>
                      <div className="flex items-center justify-center mt-1">
                        {Array(Math.min(5, Math.floor(customer.rating))).fill(0).map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-xs ml-1">{customer.rating}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>₹{customer.totalSpent.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getSegmentColor(customer.segment)}>
                      {customer.segment}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(customer.status)}>
                      {customer.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(customer.lastOrder).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedCustomer(customer)}
                      >
                        View
                      </Button>
                      <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Send Message to {customer.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="subject">Subject</Label>
                              <Input id="subject" placeholder="Message subject" />
                            </div>
                            <div>
                              <Label htmlFor="message">Message</Label>
                              <Textarea
                                id="message"
                                placeholder="Type your message here..."
                                rows={4}
                              />
                            </div>
                          </div>
                          <div className="flex justify-end gap-2 mt-4">
                            <Button variant="outline" onClick={() => setIsMessageDialogOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={() => handleSendMessage(customer.id)}>
                              Send Message
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Customer Details */}
      {selectedCustomer && (
        <Card>
          <CardHeader>
            <CardTitle>Customer Details - {selectedCustomer.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Basic Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>ID:</strong> {selectedCustomer.id}</p>
                    <p><strong>Name:</strong> {selectedCustomer.name}</p>
                    <p><strong>Email:</strong> {selectedCustomer.email}</p>
                    <p><strong>Phone:</strong> {selectedCustomer.phone}</p>
                    <p><strong>Joined:</strong> {new Date(selectedCustomer.joinDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Address
                  </h4>
                  <p className="text-sm">{selectedCustomer.address}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Purchase History</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Total Orders:</strong> {selectedCustomer.totalOrders}</p>
                    <p><strong>Total Spent:</strong> ₹{selectedCustomer.totalSpent.toLocaleString()}</p>
                    <p><strong>Last Order:</strong> {new Date(selectedCustomer.lastOrder).toLocaleDateString()}</p>
                    <p><strong>Rating:</strong> {selectedCustomer.rating} ⭐</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Segmentation</h4>
                  <div className="flex gap-2">
                    <Badge className={getSegmentColor(selectedCustomer.segment)}>
                      {selectedCustomer.segment}
                    </Badge>
                    <Badge className={getStatusColor(selectedCustomer.status)}>
                      {selectedCustomer.status}
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notes</h4>
                  <p className="text-sm text-muted-foreground">{selectedCustomer.notes}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};