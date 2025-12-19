import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo, socialLinks, whatsappConfig, siteMeta } from "@/data/siteData";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet";
import { useScrollTop } from "@/hooks/use-scroll-top";

const ContactPage = () => {
  useScrollTop();

  const whatsappUrl = `https://wa.me/${whatsappConfig.number}?text=${encodeURIComponent(
    whatsappConfig.defaultMessage
  )}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact Us | {siteMeta.brandName}</title>
        <meta
          name="description"
          content="Get in touch with GCF Gifts in Tirupati for personalised gift orders, bulk enquiries, and delivery questions."
        />
      </Helmet>
      <Header />
      <main className="flex-1 py-12">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          {/* Left: Contact form */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground">
                Have a question or custom requirement? Share a few details and our team will get
                back to you quickly.
              </p>
            </div>

            <form className="space-y-4 rounded-2xl border border-border bg-card p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <label className="text-sm text-muted-foreground">Full Name</label>
                  <Input placeholder="Your name" className="bg-input" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm text-muted-foreground">Phone Number</label>
                  <Input placeholder={contactInfo.phoneDisplay} className="bg-input" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm text-muted-foreground">Email Address</label>
                <Input type="email" placeholder={contactInfo.email} className="bg-input" />
              </div>

              <div className="space-y-1">
                <label className="text-sm text-muted-foreground">How can we help?</label>
                <Textarea
                  className="min-h-[140px] bg-input resize-none"
                  placeholder="Share a bit about the occasion, product type and timeline..."
                />
              </div>

              <Button className="w-full md:w-auto gradient-primary text-primary-foreground">
                Send Message
              </Button>
            </form>
          </section>

          {/* Right: Info + map */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-lg font-semibold">Reach Us</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 mt-1 text-primary" />
                  <div>
                    <p>Phone</p>
                    <a href={contactInfo.phoneHref} className="text-foreground hover:text-primary">
                      {contactInfo.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 mt-1 text-primary" />
                  <div>
                    <p>Email</p>
                    <a href={contactInfo.emailHref} className="text-foreground hover:text-primary">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-primary" />
                  <div>
                    <p>Studio Location</p>
                    <p>{contactInfo.city}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Button
                    type="button"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </Button>
                </a>
                <a href={contactInfo.phoneHref}>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <iframe
                title="GCF Gifts Location"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.710820082564!2d79.409!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d5a5b5b5b5b5b%3AGCFGiftsStudio!2sTirupati%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              />
            </div>

            <div className="rounded-2xl border border-border bg-card p-4 text-sm text-muted-foreground">
              You can also reach us on{" "}
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-primary">
                Instagram
              </a>{" "}
              for quick design approvals and previews.
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;


