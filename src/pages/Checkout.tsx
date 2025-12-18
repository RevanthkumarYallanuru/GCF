import { useState } from "react";
import { ShoppingCart, Truck, CreditCard, Shield, Trash2, Plus, Minus } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const cartItems = [
  {
    id: "1",
    name: "Personalized Gold Mosaic Frame",
    variant: "Black Frame - 8x12 inches",
    price: 1299,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=100&h=100&fit=crop",
    hasPhoto: true,
  },
  {
    id: "2",
    name: "Ferrero Rocher Box",
    variant: "24 Pieces",
    price: 999,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=100&h=100&fit=crop",
    hasPhoto: false,
  },
];

const Checkout = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(cartItems.map(item => [item.id, item.quantity]))
  );

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * quantities[item.id], 0);
  const shipping = 0;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + gst;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {[
              { icon: ShoppingCart, label: "Cart", active: true },
              { icon: Truck, label: "Delivery", active: true },
              { icon: CreditCard, label: "Payment", active: false },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step.active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <span className={step.active ? "font-medium" : "text-muted-foreground"}>{step.label}</span>
                {i < 2 && <div className="w-12 h-0.5 bg-border ml-4" />}
              </div>
            ))}
            <Badge className="bg-primary/20 text-primary border-primary/30">
              <Shield className="h-3 w-3 mr-1" />
              100% Secure
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              <h1 className="text-3xl font-bold">Checkout</h1>
              <p className="text-muted-foreground">Complete your details to gift some happiness.</p>

              {/* Contact Information */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">1</span>
                    Contact Information
                  </h2>
                  <Button variant="link" className="text-primary">Log in</Button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Email Address</label>
                    <Input placeholder="john@example.com" className="mt-1 bg-input" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Phone Number</label>
                    <Input placeholder="+91 98765-43210" className="mt-1 bg-input" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="whatsapp" />
                  <label htmlFor="whatsapp" className="text-sm text-muted-foreground cursor-pointer">
                    Keep me updated on my order status via WhatsApp
                  </label>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">2</span>
                  Shipping Address
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">First Name</label>
                    <Input className="mt-1 bg-input" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Last Name</label>
                    <Input className="mt-1 bg-input" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Address Line 1</label>
                  <Input className="mt-1 bg-input" />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Pincode</label>
                    <Input placeholder="517501" className="mt-1 bg-input" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">City</label>
                    <Input placeholder="Tirupati" className="mt-1 bg-input" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">State</label>
                    <Input value="Andhra Pradesh" readOnly className="mt-1 bg-input" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Express Delivery Available in Tirupati
                </div>
              </div>

              {/* Gift Note */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">3</span>
                  Make it Special
                </h2>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-muted-foreground">Add a gift note</label>
                    <span className="text-xs text-primary">Free</span>
                  </div>
                  <textarea
                    placeholder="Write a heartfelt message..."
                    className="mt-1 w-full h-24 px-3 py-2 rounded-lg bg-input border border-border resize-none"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="p-6 rounded-xl bg-card border border-border space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">4</span>
                  Payment Method
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: "upi", label: "UPI / Razorpay", icon: "₹", recommended: true },
                    { id: "card", label: "Credit/Debit Card", icon: "💳", recommended: false },
                    { id: "netbanking", label: "Net Banking", icon: "🏦", recommended: false },
                  ].map((method) => (
                    <button
                      key={method.id}
                      className={`relative p-4 rounded-xl border text-center transition-all hover:border-primary/50 ${
                        method.recommended ? "border-primary bg-primary/10" : "border-border"
                      }`}
                    >
                      {method.recommended && (
                        <Badge className="absolute -top-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px]">
                          Recommended
                        </Badge>
                      )}
                      <div className="text-2xl mb-1">{method.icon}</div>
                      <span className="text-sm">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border space-y-4 sticky top-24">
                <h2 className="text-lg font-semibold">Order Summary</h2>

                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 py-3 border-b border-border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.variant}</p>
                      {item.hasPhoto && (
                        <Badge className="bg-primary/20 text-primary text-[10px]">Photo Approved</Badge>
                      )}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQuantities(q => ({...q, [item.id]: Math.max(1, q[item.id] - 1)}))}
                          className="h-6 w-6 rounded bg-muted flex items-center justify-center hover:bg-muted/80"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{quantities[item.id]}</span>
                        <button
                          onClick={() => setQuantities(q => ({...q, [item.id]: q[item.id] + 1}))}
                          className="h-6 w-6 rounded bg-muted flex items-center justify-center hover:bg-muted/80"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">₹{item.price.toLocaleString()}</p>
                      <button className="text-muted-foreground hover:text-destructive transition-colors mt-2">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}

                <div className="flex gap-2">
                  <Input placeholder="Discount Code" className="bg-input" />
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Apply
                  </Button>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping (Tirupati)</span>
                    <span className="text-primary">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Net GST</span>
                    <span>₹{gst.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg font-bold pt-4 border-t border-border">
                  <span>Total Amount</span>
                  <span className="text-primary">₹{total.toLocaleString()}</span>
                </div>

                <Button size="lg" className="w-full gradient-primary text-primary-foreground">
                  Pay ₹{total.toLocaleString()} →
                </Button>

                <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Shield className="h-3 w-3" /> SSL Secure</span>
                  <span>• Fast Delivery</span>
                  <span>• Contactable</span>
                </div>

                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                  <div className="flex items-center gap-2 text-primary font-medium mb-1">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    Made & Delivered Locally
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your gift is prepared with care at our Tirupati studio and delivered directly to your doorstep from our own fleet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;