import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Image as ImageIcon, Info } from "lucide-react";
import { Helmet } from "react-helmet";
import { useScrollTop } from "@/hooks/use-scroll-top";

const UploadPhoto = () => {
  useScrollTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Upload Photo | Personalize Your Gifts | GCF Gifts</title>
        <meta
          name="description"
          content="Upload your photos securely to personalize frames, mugs, and cushions. Crafted in Tirupati with same-day delivery options."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main className="flex-1 py-12">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <section className="space-y-6">
            <div className="space-y-3">
              <Badge className="bg-primary/15 text-primary border-primary/30">Secure Photo Upload</Badge>
              <h1 className="text-3xl md:text-4xl font-bold">Upload Your Photo</h1>
              <p className="text-muted-foreground">
                Share your favourite memory and we&apos;ll turn it into a premium frame, mug or cushion.
                Your photos are used only for your order, never for marketing.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload Photo</label>
                <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-background/60 px-6 py-10 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Drag &amp; drop, or click to browse</p>
                    <p className="text-xs text-muted-foreground">
                      JPG / PNG up to 25MB. Minimum 1500px on the shortest side for best results.
                    </p>
                  </div>
                  <Input type="file" accept="image/*" className="max-w-xs cursor-pointer bg-input" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Product</label>
                  <Input placeholder="e.g., A4 Frame, Magic Mug, Cushion" className="bg-input" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Occasion (Optional)</label>
                  <Input placeholder="Birthday, Anniversary, Wedding..." className="bg-input" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Special Instructions</label>
                <Textarea
                  placeholder="Tell our artists how you’d like this to look – colours, text, orientation, etc."
                  className="min-h-[120px] bg-input resize-none"
                />
              </div>

              <Button className="w-full md:w-auto gradient-primary text-primary-foreground">
                <Upload className="mr-2 h-4 w-4" />
                Submit Photos for Review
              </Button>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <ImageIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-base font-semibold">Photo Guidelines</h2>
                  <p className="text-xs text-muted-foreground">
                    Follow these simple tips for the sharpest possible print.
                  </p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Upload original photos instead of screenshots or WhatsApp forwards.</li>
                <li>• Ensure faces are not cropped too tightly at the edges.</li>
                <li>• Avoid heavy filters; natural colours print best.</li>
                <li>• For couple photos, share 2–3 options so our artists can pick the best.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Info className="h-4 w-4 text-primary" />
                How we handle your photos
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Your images are stored securely, used only for preparing your order and automatically
                cleared from our systems on request. For urgent help, WhatsApp us with your order ID
                after uploading.
              </p>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadPhoto;


