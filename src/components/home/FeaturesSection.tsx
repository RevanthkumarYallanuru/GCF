import { Truck, Shield, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "2-4 hour delivery guaranteed within city limits.",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure transactions via UPI & Cards.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Hand-picked every item wrapped with care.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 border-y border-border bg-card/50">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-3 p-6"
            >
              <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}