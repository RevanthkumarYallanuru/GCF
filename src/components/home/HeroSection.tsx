import { Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      <div className="container py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
              <Truck className="h-4 w-4 mr-2" />
              Tirupati Express Delivery
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Instant Joy,{" "}
              <span className="text-gradient">Delivered in Hours.</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Forgot a special date? We've got you covered. Premium gifts delivered to Tirupati doorsteps in 2-4 hours.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-primary glow-primary text-primary-foreground font-semibold px-8">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Track Order
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/20">
              <img
                src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&h=600&fit=crop"
                alt="Gift box"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Delivering in Tirupati: 2-4 Hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}