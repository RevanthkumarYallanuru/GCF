import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Truck, CreditCard, Shield, Trash2, Plus, Minus } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet";
import { useScrollTop } from "@/hooks/use-scroll-top";

const Checkout = () => {
  useScrollTop();
  const { state, updateQuantity, removeItem, clearCart } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "Tirupati",
    pincode: "",
    deliveryType: "standard"
  });

  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    upiId: "",
  });

  const subtotal = state.total;
  const shipping = deliveryInfo.deliveryType === "express" ? 100 : deliveryInfo.deliveryType === "same-day" ? 200 : 0;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + gst;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleDeliveryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    // Validate form
    if (!deliveryInfo.name || !deliveryInfo.email || !deliveryInfo.phone || !deliveryInfo.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all delivery details.",
        variant: "destructive"
      });
      return;
    }

    if (!paymentMethod) {
      toast({
        title: "Payment Method Required",
        description: "Please select a payment method.",
        variant: "destructive"
      });
      return;
    }

    if (paymentMethod === "card" && (!paymentInfo.cardNumber || !paymentInfo.expiryDate || !paymentInfo.cvv)) {
      toast({
        title: "Payment Information Required",
        description: "Please fill in all card details.",
        variant: "destructive"
      });
      return;
    }

    if (paymentMethod === "upi" && !paymentInfo.upiId) {
      toast({
        title: "UPI ID Required",
        description: "Please enter your UPI ID.",
        variant: "destructive"
      });
      return;
    }

    // Simulate order placement
    const orderId = `GCF-${Date.now()}`;
    toast({
      title: "Order Placed Successfully!",
      description: `Your order ${orderId} has been placed. You'll receive a confirmation email shortly.`,
    });

    // Clear cart and redirect
    clearCart();
    navigate("/dashboard");
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Checkout | Secure Payment & Fast Delivery | GCF Gifts</title>
          <meta name="description" content="Complete your gift purchase with secure payment options. Fast delivery available in Tirupati with multiple payment methods including UPI, cards, and net banking." />
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-4">Add some gifts to your cart to continue shopping.</p>
            <Button onClick={() => navigate("/")}>Continue Shopping</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Checkout | Secure Payment & Fast Delivery | GCF Gifts</title>
        <meta name="description" content="Complete your gift purchase with secure payment options. Fast delivery available in Tirupati with multiple payment methods including UPI, cards, and net banking." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex-1 py-8">
        <div className="container max-w-6xl">
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
                <span className={`text-sm ${step.active ? "text-primary font-medium" : "text-muted-foreground"}`}>
                  {step.label}
                </span>
              </div>
            ))}
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
                    <Input
                      name="email"
                      value={deliveryInfo.email}
                      onChange={handleDeliveryChange}
                      placeholder="john@example.com"
                      className="mt-1 bg-input"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Phone Number</label>
                    <Input
                      name="phone"
                      value={deliveryInfo.phone}
                      onChange={handleDeliveryChange}
                      placeholder="+91 98765-43210"
                      className="mt-1 bg-input"
                    />
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
                    <Input
                      name="name"
                      value={deliveryInfo.name}
                      onChange={handleDeliveryChange}
                      className="mt-1 bg-input"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Last Name</label>
                    <Input className="mt-1 bg-input" />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Address Line 1</label>
                  <Input
                    name="address"
                    value={deliveryInfo.address}
                    onChange={handleDeliveryChange}
                    className="mt-1 bg-input"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Pincode</label>
                    <Input
                      name="pincode"
                      value={deliveryInfo.pincode}
                      onChange={handleDeliveryChange}
                      placeholder="517501"
                      className="mt-1 bg-input"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">City</label>
                    <Input
                      name="city"
                      value={deliveryInfo.city}
                      onChange={handleDeliveryChange}
                      placeholder="Tirupati"
                      className="mt-1 bg-input"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Delivery Type</label>
                    <select
                      name="deliveryType"
                      value={deliveryInfo.deliveryType}
                      onChange={handleDeliveryChange}
                      className="mt-1 w-full px-3 py-2 rounded-lg bg-input border border-border"
                    >
                      <option value="standard">Standard (Free)</option>
                      <option value="express">Express (₹100)</option>
                      <option value="same-day">Same Day (₹200)</option>
                    </select>
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
                      onClick={() => setPaymentMethod(method.id)}
                      className={`relative p-4 rounded-xl border text-center transition-all hover:border-primary/50 ${
                        paymentMethod === method.id ? "border-primary bg-primary/10" : method.recommended ? "border-primary bg-primary/10" : "border-border"
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

                {/* Payment Form */}
                {paymentMethod === "card" && (
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div>
                      <label className="text-sm text-muted-foreground">Card Number</label>
                      <Input
                        placeholder="1234 5678 9012 3456"
                        value={paymentInfo.cardNumber}
                        onChange={(e) => setPaymentInfo(prev => ({ ...prev, cardNumber: e.target.value }))}
                        className="mt-1 bg-input"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm text-muted-foreground">Expiry Date</label>
                        <Input
                          placeholder="MM/YY"
                          value={paymentInfo.expiryDate}
                          onChange={(e) => setPaymentInfo(prev => ({ ...prev, expiryDate: e.target.value }))}
                          className="mt-1 bg-input"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-muted-foreground">CVV</label>
                        <Input
                          placeholder="123"
                          value={paymentInfo.cvv}
                          onChange={(e) => setPaymentInfo(prev => ({ ...prev, cvv: e.target.value }))}
                          className="mt-1 bg-input"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="space-y-4 pt-4 border-t border-border">
                    <div>
                      <label className="text-sm text-muted-foreground">UPI ID</label>
                      <Input
                        placeholder="yourname@upi"
                        value={paymentInfo.upiId}
                        onChange={(e) => setPaymentInfo(prev => ({ ...prev, upiId: e.target.value }))}
                        className="mt-1 bg-input"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      You will be redirected to your UPI app to complete the payment
                    </p>
                  </div>
                )}

                {paymentMethod === "netbanking" && (
                  <div className="space-y-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      You will be redirected to your bank's website to complete the payment
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border space-y-4 sticky top-24">
                <h2 className="text-lg font-semibold">Order Summary</h2>

                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-3 py-3 border-b border-border">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 space-y-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      {item.variant && <p className="text-xs text-muted-foreground">{item.variant}</p>}
                      {item.hasPhoto && (
                        <Badge className="bg-primary/20 text-primary text-[10px]">Photo Approved</Badge>
                      )}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="h-6 w-6 rounded bg-muted flex items-center justify-center hover:bg-muted/80"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="h-6 w-6 rounded bg-muted flex items-center justify-center hover:bg-muted/80"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">₹{(item.price * item.quantity).toLocaleString()}</p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors mt-2"
                      >
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
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shipping === 0 ? "text-primary" : ""}>
                      {shipping === 0 ? "Free" : `₹${shipping}`}
                    </span>
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

                <Button
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground"
                  onClick={handlePlaceOrder}
                >
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