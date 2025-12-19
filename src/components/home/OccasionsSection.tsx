import { Gift, Heart, Calendar, PartyPopper, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const occasions = [
  { icon: Gift, label: "Birthday", key: "birthday", color: "bg-pink-500/20 text-pink-400" },
  { icon: Heart, label: "Wedding", key: "wedding", color: "bg-red-500/20 text-red-400" },
  { icon: Calendar, label: "Anniversary", key: "anniversary", color: "bg-purple-500/20 text-purple-400" },
  { icon: PartyPopper, label: "Festivals", key: "festivals", color: "bg-orange-500/20 text-orange-400" },
];

export function OccasionsSection() {
  const navigate = useNavigate();

  const handleOccasionClick = (key: string) => {
    // Map festivals to a generic occasion filter
    const occasionFilter = key === "festivals" ? "housewarming" : key;
    navigate(`/products?occasion=${occasionFilter}`);
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Shop by Occasion</h2>
          <Button asChild variant="link" className="text-primary">
            <Link to="/occasions">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {occasions.map((occasion) => (
            <button
              key={occasion.key}
              onClick={() => handleOccasionClick(occasion.key)}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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