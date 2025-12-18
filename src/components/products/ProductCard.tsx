import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  badge?: string;
  badgeVariant?: "default" | "secondary" | "destructive";
  deliveryInfo?: string;
  colors?: string[];
}

export function ProductCard({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  badge,
  badgeVariant = "default",
  deliveryInfo,
  colors,
}: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative overflow-hidden rounded-xl bg-card border border-border transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {badge && (
            <Badge
              className={cn(
                "absolute top-3 left-3",
                badgeVariant === "default" && "bg-primary text-primary-foreground",
                badgeVariant === "secondary" && "bg-yellow-500 text-black"
              )}
            >
              {badge}
            </Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur hover:bg-background"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">₹{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {rating && (
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
              <span className="text-sm text-muted-foreground">{rating}</span>
            </div>
          )}

          {deliveryInfo && (
            <div className="flex items-center gap-1.5 text-xs text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {deliveryInfo}
            </div>
          )}

          {colors && colors.length > 0 && (
            <div className="flex gap-1.5">
              {colors.map((color, i) => (
                <span
                  key={i}
                  className="h-4 w-4 rounded-full border border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}