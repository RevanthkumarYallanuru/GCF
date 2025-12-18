import { ProductCard } from "@/components/products/ProductCard";

const trendingProducts = [
  {
    id: "1",
    name: "Premium Chocolate Cake",
    price: 999,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop",
    rating: 4.8,
    badge: "Best Seller",
    deliveryInfo: "Ships in 2 hours",
  },
  {
    id: "2",
    name: "Royal Pink Bouquet",
    price: 1499,
    originalPrice: 1899,
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=400&fit=crop",
    rating: 4.9,
    badge: "Trending",
    deliveryInfo: "Ships today",
  },
  {
    id: "3",
    name: "Classic Minimalist Watch",
    price: 2499,
    originalPrice: 3199,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    rating: 4.7,
    deliveryInfo: "Ships in 24h",
  },
  {
    id: "4",
    name: "Personalized Photo Frame",
    price: 899,
    originalPrice: 1199,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=400&fit=crop",
    rating: 4.6,
    badge: "New",
    deliveryInfo: "Custom - 2 days",
    colors: ["#8B4513", "#2F2F2F", "#F5DEB3"],
  },
];

export function TrendingSection() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Trending in Tirupati</h2>
          <p className="text-muted-foreground">Most loved gifts this season</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}