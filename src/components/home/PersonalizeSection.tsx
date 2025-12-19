import { Upload, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export function PersonalizeSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Made-to-Order
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold">
              Personalize Your Gifts with Photos
            </h2>
            <p className="text-muted-foreground">
              Upload your favorite memories and we'll print them on mugs, frames, and cushions. Delivered in 4 Hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="gradient-primary text-primary-foreground">
                <Link to="/upload-photo">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Photo
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/50">
                <Link to="/view-examples">
                  <Eye className="h-4 w-4 mr-2" />
                  View Examples
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=300&h=300&fit=crop"
                alt="Custom mug"
                className="rounded-xl border border-border w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300&h=200&fit=crop"
                alt="Photo frame"
                className="rounded-xl border border-border w-full"
              />
            </div>
            <div className="pt-8">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=400&fit=crop"
                alt="Custom pillow"
                className="rounded-xl border border-border w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}