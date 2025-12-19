import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Helmet } from "react-helmet";
import { useScrollTop } from "@/hooks/use-scroll-top";

type StaticInfoPageProps = {
  title: string;
  description: string;
  slug: "shipping" | "returns" | "contact" | "privacy" | "terms";
};

const copy: Record<
  StaticInfoPageProps["slug"],
  { heading: string; points: string[]; seoTitle: string; seoDescription: string }
> = {
  shipping: {
    heading: "Shipping & Delivery Information",
    seoTitle: "Shipping Information | GCF Gifts Tirupati",
    seoDescription:
      "Learn how delivery works for personalized gifts from GCF Gifts – coverage, timelines and charges for Tirupati orders.",
    points: [
      "Same-day delivery is available for most Tirupati pin codes on orders placed before 2 PM.",
      "Standard delivery within Tirupati city limits is usually completed within 24 hours.",
      "Express and same-day delivery charges are calculated at checkout based on distance and urgency.",
      "You will receive live tracking updates via SMS and WhatsApp once your order is dispatched.",
    ],
  },
  returns: {
    heading: "Returns & Replacement Policy",
    seoTitle: "Returns & Replacements | GCF Gifts Tirupati",
    seoDescription:
      "Understand our return and replacement policy for damaged or incorrect personalized gifts.",
    points: [
      "Since all products are personalized, we do not accept returns for change-of-mind.",
      "Free replacement is offered if the product arrives damaged or with an incorrect design.",
      "Damage or printing issues must be reported within 24 hours of delivery with clear photos.",
      "Refunds, where applicable, are processed to the original payment method within 5–7 business days.",
    ],
  },
  contact: {
    heading: "Contact GCF Gifts",
    seoTitle: "Contact Us | GCF Gifts Tirupati",
    seoDescription:
      "Reach out to GCF Gifts in Tirupati for personalised gift orders, bulk requirements and support.",
    points: [
      "Phone: +91 98765-43210 (10 AM – 10 PM IST).",
      "Email: hello@gcfgifts.com – we usually respond within a few hours.",
      "WhatsApp support is available for order updates and design approvals.",
      "Studio location: Tirupati, Andhra Pradesh – full address shared after confirmation.",
    ],
  },
  privacy: {
    heading: "Privacy Policy",
    seoTitle: "Privacy Policy | GCF Gifts",
    seoDescription:
      "Read how GCF Gifts handles your personal data and photos for personalised orders.",
    points: [
      "We use your personal data only for processing and delivering your orders.",
      "Uploaded photos are stored securely and are never sold or used for advertising.",
      "You can request deletion of your photos from our systems after order completion.",
      "Payment details are processed securely by our payment partners; we never store card data.",
    ],
  },
  terms: {
    heading: "Terms & Conditions",
    seoTitle: "Terms & Conditions | GCF Gifts",
    seoDescription:
      "Terms of using the GCF Gifts website and placing personalized gift orders.",
    points: [
      "By placing an order, you confirm that you own the rights to any photos or artwork provided.",
      "Delivery timelines are estimates; weather and local conditions can cause minor delays.",
      "Pricing and offers may change without prior notice; final amount is confirmed at checkout.",
      "Any disputes will be handled under the jurisdiction of Tirupati, Andhra Pradesh.",
    ],
  },
};

const StaticInfoPage = ({ title, description, slug }: StaticInfoPageProps) => {
  useScrollTop();
  const data = copy[slug];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{data.seoTitle}</title>
        <meta name="description" content={data.seoDescription} />
      </Helmet>
      <Header />
      <main className="flex-1 py-12">
        <div className="container max-w-3xl space-y-6">
          <header className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            <p className="text-sm md:text-base text-muted-foreground">{description}</p>
          </header>
          <section className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4">
            <h2 className="text-lg md:text-xl font-semibold">{data.heading}</h2>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
              {data.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StaticInfoPage;


