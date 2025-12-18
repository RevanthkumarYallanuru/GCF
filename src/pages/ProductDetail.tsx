import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Truck, Shield, Clock, Upload, ChevronRight, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sizes = [
  { id: "4x6", label: "A4 (4x6\")" },
  { id: "5x7", label: "A5 (12x8\")" },
  { id: "custom", label: "Custom" },
];

const finishes = [
  { id: "dark-wood", label: "Dark Wood", color: "#3D2314" },
  { id: "classic-black", label: "Classic Black", color: "#1A1A1A" },
  { id: "matte-white", label: "Matte White", color: "#F5F5F5" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("5x7");
  const [selectedFinish, setSelectedFinish] = useState("dark-wood");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/personalized" className="hover:text-primary">Personalized Gifts</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Eternal Memory Frame</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=600&fit=crop"
                  alt="Product"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary-foreground mr-2 animate-pulse" />
                    Live Preview
                  </Badge>
                  <Badge variant="outline" className="bg-background/80 backdrop-blur">
                    AI Size Detection
                  </Badge>
                </div>
              </div>

              <div className="flex gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    className="w-20 h-20 rounded-lg border border-border overflow-hidden hover:border-primary transition-colors"
                  >
                    <img
                      src={`https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=100&h=100&fit=crop&q=${i * 20}`}
                      alt={`Thumbnail ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                  <Truck className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Fast Delivery</p>
                    <p className="text-sm font-medium">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                  <Shield className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Premium Quality</p>
                    <p className="text-sm font-medium">Museum-grade print</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">24/7 Support</p>
                    <p className="text-sm font-medium">Always available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">The Eternal Memory Frame</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9 (128 reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-primary">₹899</span>
                <span className="text-xl text-muted-foreground line-through">₹1,299</span>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Save 30%</Badge>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Select Size</span>
                  <button className="text-sm text-primary hover:underline">Size Guide</button>
                </div>
                <div className="flex gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={`px-6 py-3 rounded-lg border transition-all ${
                        selectedSize === size.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      {size.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Finish Selection */}
              <div className="space-y-3">
                <span className="font-medium">Frame Finish</span>
                <div className="flex gap-4">
                  {finishes.map((finish) => (
                    <button
                      key={finish.id}
                      onClick={() => setSelectedFinish(finish.id)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
                        selectedFinish === finish.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-full border-2 border-border relative"
                        style={{ backgroundColor: finish.color }}
                      >
                        {selectedFinish === finish.id && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Check className="h-5 w-5 text-primary" />
                          </div>
                        )}
                      </div>
                      <span className="text-xs">{finish.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo Upload */}
              <div className="p-6 rounded-xl border border-dashed border-border bg-card/50 text-center space-y-3">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
                <div>
                  <p className="font-medium">Drag & Drop your photo here</p>
                  <p className="text-sm text-muted-foreground">Supports JPG, PNG (Max 10MB)</p>
                </div>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Browse Files
                </Button>
              </div>

              {/* Urgency */}
              <div className="flex items-center gap-2 text-sm text-primary">
                <Clock className="h-4 w-4" />
                <span>Order in next 2h 15m for same-day dispatch</span>
              </div>

              {/* Add to Cart */}
              <Button size="lg" className="w-full gradient-primary text-primary-foreground text-lg py-6">
                Add to Cart - ₹899
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Skip upload & send photo later via WhatsApp
              </p>
            </div>
          </div>

          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">About this product</h2>
              <p className="text-muted-foreground">
                Capture your most cherished memories with our "Eternal Memory Frame". Crafted from sustainably sourced premium oak wood, this frame adds a touch of rustic elegance to any room.
              </p>
              <p className="text-muted-foreground">
                We use museum-grade archival paper and high-fidelity inks to ensure your photos stay vibrant for generations. Perfect for wedding photos, family portraits, or artistic prints.
              </p>
              
              <div className="space-y-3">
                <h3 className="font-semibold">Specifications</h3>
                <ul className="space-y-2">
                  {[
                    "Material: Authentic Oak Wood with Matte Finish",
                    "Glass: 3mm Anti-reflective acrylic glass",
                    "Backing: MDF board with wall hooks & desk stand",
                    "Print: 300 DPI Canon Professional Print",
                  ].map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-5xl font-bold">4.9</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Based on 128 verified reviews</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-semibold text-primary">P</span>
                  </div>
                  <div>
                    <p className="font-medium">Priya R.</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                      ))}
                      <span className="text-xs text-muted-foreground ml-2">3 days ago</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  "Absolutely loved the frame! Got it delivered to my home in Tirupati within 4 hours. The packaging was very secure."
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;