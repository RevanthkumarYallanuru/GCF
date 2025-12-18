import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Filter, X, Grid, List } from "lucide-react";
import { Helmet } from "react-helmet";

// Comprehensive product catalog focused on photo frames
// Each product includes detailed specifications for different occasions and art styles
const allProducts = [
  // Birthday Frames
  {
    id: "birthday-pencil-4x6",
    name: "Birthday Pencil Art Frame - 4x6",
    price: 599,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    rating: 4.8,
    occasion: "birthday",
    size: "4x6",
    artStyle: "pencil",
    frameType: "wooden",
    description: "Beautiful pencil sketch art frame perfect for birthday celebrations",
    inStock: true,
    tags: ["birthday", "pencil art", "4x6", "wooden frame"]
  },
  {
    id: "birthday-acrylic-5x7",
    name: "Birthday Acrylic Frame - 5x7",
    price: 899,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop",
    rating: 4.9,
    occasion: "birthday",
    size: "5x7",
    artStyle: "acrylic",
    frameType: "acrylic",
    description: "Premium acrylic frame with vibrant birthday-themed artwork",
    inStock: true,
    tags: ["birthday", "acrylic", "5x7", "premium"]
  },
  {
    id: "birthday-gibli-a4",
    name: "Birthday Studio Ghibli Frame - A4",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop",
    rating: 4.7,
    occasion: "birthday",
    size: "A4",
    artStyle: "ghibli",
    frameType: "premium",
    description: "Magical Studio Ghibli inspired birthday frame with custom artwork",
    inStock: true,
    tags: ["birthday", "ghibli", "A4", "studio ghibli", "anime"]
  },

  // Wedding Frames
  {
    id: "wedding-pencil-8x10",
    name: "Wedding Pencil Art Frame - 8x10",
    price: 1499,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop",
    rating: 4.9,
    occasion: "wedding",
    size: "8x10",
    artStyle: "pencil",
    frameType: "premium",
    description: "Elegant pencil art frame perfect for wedding memories",
    inStock: true,
    tags: ["wedding", "pencil art", "8x10", "elegant"]
  },
  {
    id: "wedding-acrylic-12x12",
    name: "Wedding Acrylic Frame - 12x12",
    price: 1999,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
    rating: 5.0,
    occasion: "wedding",
    size: "12x12",
    artStyle: "acrylic",
    frameType: "luxury",
    description: "Luxury acrylic frame with romantic wedding artwork",
    inStock: true,
    tags: ["wedding", "acrylic", "12x12", "luxury", "romantic"]
  },

  // Anniversary Frames
  {
    id: "anniversary-gibli-6x8",
    name: "Anniversary Ghibli Frame - 6x8",
    price: 1099,
    originalPrice: 1399,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    rating: 4.8,
    occasion: "anniversary",
    size: "6x8",
    artStyle: "ghibli",
    frameType: "wooden",
    description: "Whimsical Studio Ghibli frame for anniversary celebrations",
    inStock: true,
    tags: ["anniversary", "ghibli", "6x8", "whimsical"]
  },

  // Graduation Frames
  {
    id: "graduation-pencil-a3",
    name: "Graduation Pencil Art Frame - A3",
    price: 1699,
    originalPrice: 2099,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop",
    rating: 4.7,
    occasion: "graduation",
    size: "A3",
    artStyle: "pencil",
    frameType: "premium",
    description: "Professional pencil art frame celebrating academic achievements",
    inStock: true,
    tags: ["graduation", "pencil art", "A3", "achievement"]
  },

  // Corporate Frames
  {
    id: "corporate-acrylic-10x12",
    name: "Corporate Acrylic Frame - 10x12",
    price: 1899,
    originalPrice: 2399,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=400&fit=crop",
    rating: 4.6,
    occasion: "corporate",
    size: "10x12",
    artStyle: "acrylic",
    frameType: "luxury",
    description: "Professional acrylic frame perfect for corporate gifting",
    inStock: true,
    tags: ["corporate", "acrylic", "10x12", "professional"]
  },

  // Housewarming Frames
  {
    id: "housewarming-gibli-8x8",
    name: "Housewarming Ghibli Frame - 8x8",
    price: 1199,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    rating: 4.8,
    occasion: "housewarming",
    size: "8x8",
    artStyle: "ghibli",
    frameType: "wooden",
    description: "Cozy Studio Ghibli frame welcoming new beginnings",
    inStock: true,
    tags: ["housewarming", "ghibli", "8x8", "cozy"]
  }
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Filter states
  const [selectedOccasion, setSelectedOccasion] = useState(searchParams.get("occasion") || "all");
  const [selectedSize, setSelectedSize] = useState(searchParams.get("size") || "all");
  const [selectedArtStyle, setSelectedArtStyle] = useState(searchParams.get("art") || "all");
  const [selectedFrameType, setSelectedFrameType] = useState(searchParams.get("frame") || "all");
  const [priceRange, setPriceRange] = useState([0, 2500]);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const searchQuery = searchParams.get("search") || "";

  // Update URL params when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedOccasion !== "all") params.set("occasion", selectedOccasion);
    if (selectedSize !== "all") params.set("size", selectedSize);
    if (selectedArtStyle !== "all") params.set("art", selectedArtStyle);
    if (selectedFrameType !== "all") params.set("frame", selectedFrameType);
    setSearchParams(params);
  }, [selectedOccasion, selectedSize, selectedArtStyle, selectedFrameType, setSearchParams]);

  // Filter products based on current selections
  const filteredProducts = allProducts.filter(product => {
    // Search filter
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesOccasion = selectedOccasion === "all" || product.occasion === selectedOccasion;
    const matchesSize = selectedSize === "all" || product.size === selectedSize;
    const matchesArtStyle = selectedArtStyle === "all" || product.artStyle === selectedArtStyle;
    const matchesFrameType = selectedFrameType === "all" || product.frameType === selectedFrameType;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesOccasion && matchesSize && matchesArtStyle && matchesFrameType && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return b.id.localeCompare(a.id);
      default:
        return 0;
    }
  });

  // Get unique filter options
  const occasions = [...new Set(allProducts.map(p => p.occasion))];
  const sizes = [...new Set(allProducts.map(p => p.size))];
  const artStyles = [...new Set(allProducts.map(p => p.artStyle))];
  const frameTypes = [...new Set(allProducts.map(p => p.frameType))];

  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Photo Frames Collection - Personalized Gifts",
    "description": "Browse our extensive collection of personalized photo frames for all occasions. Pencil art, acrylic, Studio Ghibli, and more.",
    "url": "https://gcfgifts.com/products",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": sortedProducts.length,
      "itemListElement": sortedProducts.slice(0, 10).map((product, index) => ({
        "@type": "Product",
        "position": index + 1,
        "name": product.name,
        "image": product.image,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "INR",
          "availability": product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        }
      }))
    }
  };

  const clearFilters = () => {
    setSelectedOccasion("all");
    setSelectedSize("all");
    setSelectedArtStyle("all");
    setSelectedFrameType("all");
    setPriceRange([0, 2500]);
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Photo Frames Collection | Personalized Gifts for Every Occasion | GCF Gifts</title>
        <meta name="description" content="Discover our premium collection of personalized photo frames. Pencil art, acrylic, Studio Ghibli frames for birthdays, weddings, anniversaries, and more. Fast delivery in Tirupati." />
        <meta name="keywords" content="photo frames, personalized frames, pencil art frames, acrylic frames, studio ghibli frames, custom frames, birthday frames, wedding frames, anniversary frames" />
        <meta property="og:title" content="Photo Frames Collection - Personalized Gifts for Every Occasion" />
        <meta property="og:description" content="Premium personalized photo frames for all celebrations. Pencil art, acrylic, and Studio Ghibli designs with fast delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcfgifts.com/products" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://gcfgifts.com/products" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Header />

      <main className="flex-1 py-8">
        <div className="container">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Photo Frames Collection"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {searchQuery 
                ? `Found ${sortedProducts.length} product${sortedProducts.length !== 1 ? 's' : ''} matching your search`
                : "Discover our premium collection of personalized photo frames for every occasion"}
            </p>
            {searchQuery && (
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4"
                onClick={() => {
                  const params = new URLSearchParams(searchParams);
                  params.delete("search");
                  setSearchParams(params);
                }}
              >
                Clear Search
              </Button>
            )}
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <div className={`w-80 space-y-6 ${showFilters ? 'block' : 'hidden'} lg:block`}>
              <div className="p-6 rounded-xl bg-card border border-border space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Filters</h3>
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear All
                  </Button>
                </div>

                {/* Occasion Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Occasion</label>
                  <Select value={selectedOccasion} onValueChange={setSelectedOccasion}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Occasions" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Occasions</SelectItem>
                      {occasions.map(occasion => (
                        <SelectItem key={occasion} value={occasion}>
                          {occasion.charAt(0).toUpperCase() + occasion.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Size Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Sizes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sizes</SelectItem>
                      {sizes.map(size => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Art Style Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Art Style</label>
                  <Select value={selectedArtStyle} onValueChange={setSelectedArtStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Styles" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Styles</SelectItem>
                      {artStyles.map(style => (
                        <SelectItem key={style} value={style}>
                          {style.charAt(0).toUpperCase() + style.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Frame Type Filter */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Frame Type</label>
                  <Select value={selectedFrameType} onValueChange={setSelectedFrameType}>
                    <SelectTrigger>
                      <SelectValue placeholder="All Types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      {frameTypes.map(type => (
                        <SelectItem key={type} value={type}>
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-3">
                  <label className="text-sm font-medium">Price Range</label>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={2500}
                      min={0}
                      step={100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground mt-2">
                      <span>₹{priceRange[0]}</span>
                      <span>₹{priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {/* Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    {sortedProducts.length} products found
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                      className="rounded-r-none"
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                      className="rounded-l-none"
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedOccasion !== "all" || selectedSize !== "all" || selectedArtStyle !== "all" || selectedFrameType !== "all") && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedOccasion !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Occasion: {selectedOccasion}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedOccasion("all")}
                      />
                    </Badge>
                  )}
                  {selectedSize !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Size: {selectedSize}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedSize("all")}
                      />
                    </Badge>
                  )}
                  {selectedArtStyle !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Art: {selectedArtStyle}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedArtStyle("all")}
                      />
                    </Badge>
                  )}
                  {selectedFrameType !== "all" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Frame: {selectedFrameType}
                      <X
                        className="h-3 w-3 cursor-pointer"
                        onClick={() => setSelectedFrameType("all")}
                      />
                    </Badge>
                  )}
                </div>
              )}

              {/* Products */}
              {sortedProducts.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    : "grid-cols-1"
                }`}>
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">No products found matching your filters.</p>
                  <Button onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;