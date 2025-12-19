import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { useScrollTop } from "@/hooks/use-scroll-top";

const exampleCollections = [
  {
    title: "Photo Frames",
    subtitle: "Walnut, Acrylic & Studio Ghibli inspired artwork",
    images: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=400&fit=crop",
    ],
  },
  {
    title: "Mugs & Drinkware",
    subtitle: "Magic mugs, couple mugs and more",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=400&fit=crop",
    ],
  },
  {
    title: "Home Decor",
    subtitle: "Wall collages, cushions and tabletop pieces",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=400&fit=crop",
    ],
  },
];

const ViewExamples = () => {
  useScrollTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gift Examples Gallery | Inspiration for Your Order | GCF Gifts</title>
        <meta
          name="description"
          content="Browse real design examples for photo frames, mugs and cushions. Get inspired before you upload your photos and place an order."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex-1 py-12">
        <div className="container space-y-10">
          <section className="space-y-3 max-w-2xl">
            <Badge className="bg-primary/15 text-primary border-primary/30">Design Inspiration</Badge>
            <h1 className="text-3xl md:text-4xl font-bold">See How Your Gifts Can Look</h1>
            <p className="text-muted-foreground">
              A curated set of layouts and finishes from our studio in Tirupati. Use these as a
              reference when you share your photos and instructions.
            </p>
          </section>

          <div className="space-y-10">
            {exampleCollections.map((collection) => (
              <section
                key={collection.title}
                className="rounded-2xl border border-border bg-card/60 p-5 md:p-6"
              >
                <div className="mb-4 flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold">{collection.title}</h2>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {collection.subtitle}
                    </p>
                  </div>
                  <span className="mt-1 text-xs text-muted-foreground md:mt-0">
                    Tap any layout while chatting with us to mention it as a reference.
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                  {collection.images.map((src) => (
                    <div
                      key={src}
                      className="group relative overflow-hidden rounded-xl border border-border bg-muted"
                    >
                      <img
                        src={src}
                        alt={collection.title}
                        className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-44 lg:h-52"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ViewExamples;


