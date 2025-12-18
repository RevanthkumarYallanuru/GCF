import { Gift, Heart, Calendar, PartyPopper, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const occasions = [
  { icon: Gift, label: "Birthday", color: "bg-pink-500/20 text-pink-400" },
  { icon: Heart, label: "Wedding", color: "bg-red-500/20 text-red-400" },
  { icon: Calendar, label: "Anniversary", color: "bg-purple-500/20 text-purple-400" },
  { icon: PartyPopper, label: "Festivals", color: "bg-orange-500/20 text-orange-400" },
];

export function OccasionsSection() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Shop by Occasion</h2>
          <Button variant="link" className="text-primary">
            View All <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {occasions.map((occasion, index) => (
            <button
              key={index}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className={`h-16 w-16 rounded-2xl ${occasion.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                <occasion.icon className="h-8 w-8" />
              </div>
              <span className="font-medium">{occasion.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}