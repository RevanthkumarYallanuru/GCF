import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Truck, CheckCircle, AlertTriangle, Navigation, MessageSquare } from "lucide-react";

const deliveries = [
  {
    id: "DEL-001",
    orderId: "GCF-2025-001",
    customer: "Ravi Narayan",
    phone: "+91 98765 43210",
    address: "123 Temple Road, Tirupati - 517501",
    rider: "Rahul Kumar",
    riderPhone: "+91 98765 43215",
    status: "Out for Delivery",
    estimatedTime: "2:30 PM",
    actualTime: null,
    items: ["Custom Photo Frame", "Personalized Mug"],
    total: 2497,
    deliveryType: "Same Day",
    notes: "Customer requested careful handling"
  },
  {
    id: "DEL-002",
    orderId: "GCF-2025-002",
    customer: "Sneha Reddy",
    phone: "+91 98765 43211",
    address: "456 MG Road, Tirupati - 517502",
    rider: "Priya Sharma",
    riderPhone: "+91 98765 43216",
    status: "In Transit",
    estimatedTime: "3:15 PM",
    actualTime: null,
    items: ["Birthday Cake", "Assorted Chocolates"],
    total: 1398,
    deliveryType: "Express",
    notes: "Perishable items - keep refrigerated"
  },
  {
    id: "DEL-003",
    orderId: "GCF-2025-003",
    customer: "Arun Kumar",
    phone: "+91 98765 43212",
    address: "789 Annamayya Circle, Tirupati - 517503",
    rider: "Vijay Singh",
    riderPhone: "+91 98765 43217",
    status: "Delivered",
    estimatedTime: "1:45 PM",
    actualTime: "1:32 PM",
    items: ["Wedding Gift Set"],
    total: 2999,
    deliveryType: "Standard",
    notes: "Delivered successfully"
  },
  {
    id: "DEL-004",
    orderId: "GCF-2025-004",
    customer: "Priya Sharma",
    phone: "+91 98765 43213",
    address: "321 Balaji Colony, Tirupati - 517504",
    rider: "Amit Patel",
    riderPhone: "+91 98765 43218",
    status: "Delayed",
    estimatedTime: "4:00 PM",
    actualTime: null,
    items: ["Customized T-Shirt"],
    total: 2397,
    deliveryType: "Standard",
    notes: "Traffic delay due to temple festival"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered": return "bg-green-100 text-green-800";
    case "Out for Delivery": return "bg-blue-100 text-blue-800";
    case "In Transit": return "bg-yellow-100 text-yellow-800";
    case "Delayed": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export const AdminDelivery = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedDelivery, setSelectedDelivery] = useState(null);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

  const filteredDeliveries = deliveries.filter(delivery =>
    statusFilter === "all" || delivery.status === statusFilter
  );

  const activeDeliveries = deliveries.filter(d => d.status !== "Delivered").length;
  const delayedDeliveries = deliveries.filter(d => d.status === "Delayed").length;
  const completedToday = deliveries.filter(d => d.status === "Delivered" && d.actualTime).length;

  const handleUpdateStatus = (deliveryId: string, newStatus: string) => {
    console.log(`Updating delivery ${deliveryId} to status: ${newStatus}`);
    setIsUpdateDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Deliveries</p>
                <p className="text-2xl font-bold">{activeDeliveries}</p>
              </div>
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed Today</p>
                <p className="text-2xl font-bold text-green-600">{completedToday}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Delayed</p>
                <p className="text-2xl font-bold text-red-600">{delayedDeliveries}</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">On-Time Rate</p>
                <p className="text-2xl font-bold">94%</p>
              </div>
              <Clock className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Deliveries</SelectItem>
            <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
            <SelectItem value="In Transit">In Transit</SelectItem>
            <SelectItem value="Delivered">Delivered</SelectItem>
            <SelectItem value="Delayed">Delayed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Deliveries Table */}
      <Card>
        <CardHeader>
          <CardTitle>Delivery Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Delivery ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Rider</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Estimated Time</TableHead>
                <TableHead>Delivery Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDeliveries.map((delivery) => (
                <TableRow key={delivery.id}>
                  <TableCell className="font-medium">{delivery.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{delivery.customer}</div>
                      <div className="text-sm text-muted-foreground">{delivery.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">{delivery.rider}</div>
                      <div className="text-sm text-muted-foreground">{delivery.riderPhone}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(delivery.status)}>
                      {delivery.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{delivery.estimatedTime}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{delivery.deliveryType}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setSelectedDelivery(delivery)}
                      >
                        View Details
                      </Button>
                      <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
                        <DialogTrigger asChild>
                          <Button size="sm" variant="outline">
                            Update Status
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Update Delivery Status</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label>Current Status</Label>
                              <p className="text-sm text-muted-foreground">{delivery.status}</p>
                            </div>
                            <div>
                              <Label htmlFor="newStatus">New Status</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select new status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Out for Delivery">Out for Delivery</SelectItem>
                                  <SelectItem value="In Transit">In Transit</SelectItem>
                                  <SelectItem value="Delivered">Delivered</SelectItem>
                                  <SelectItem value="Delayed">Delayed</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="notes">Update Notes</Label>
                              <Textarea id="notes" placeholder="Add notes about the status update" />
                            </div>
                          </div>
                          <div className="flex justify-end gap-2 mt-4">
                            <Button variant="outline" onClick={() => setIsUpdateDialogOpen(false)}>
                              Cancel
                            </Button>
                            <Button onClick={() => handleUpdateStatus(delivery.id, "Delivered")}>
                              Update Status
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

      {/* Delivery Details */}
      {selectedDelivery && (
        <Card>
          <CardHeader>
            <CardTitle>Delivery Details - {selectedDelivery.id}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Delivery Address
                  </h4>
                  <p className="text-sm">{selectedDelivery.address}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Contact Information
                  </h4>
                  <p className="text-sm"><strong>Customer:</strong> {selectedDelivery.phone}</p>
                  <p className="text-sm"><strong>Rider:</strong> {selectedDelivery.riderPhone}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Timing
                  </h4>
                  <p className="text-sm"><strong>Estimated:</strong> {selectedDelivery.estimatedTime}</p>
                  {selectedDelivery.actualTime && (
                    <p className="text-sm"><strong>Actual:</strong> {selectedDelivery.actualTime}</p>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Order Items</h4>
                  <div className="space-y-1">
                    {selectedDelivery.items.map((item, index) => (
                      <div key={index} className="text-sm p-2 bg-muted rounded">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery Notes</h4>
                  <p className="text-sm text-muted-foreground">{selectedDelivery.notes}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Navigation className="h-4 w-4 mr-2" />
                    Track Location
                  </Button>
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Contact Rider
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};