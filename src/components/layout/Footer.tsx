import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { siteMeta, socialLinks, contactInfo } from "@/data/siteData";

// Site footer component with links, contact info, and social media
// Provides comprehensive site navigation and business information

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="text-lg font-bold text-primary-foreground">
                  {siteMeta.brandName.charAt(0)}
                </span>
              </div>
              <span className="text-xl font-bold">{siteMeta.brandName}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {siteMeta.tagline}
            </p>
            <div className="flex gap-4">
              <a href={socialLinks.facebook} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/birthday" className="text-sm text-muted-foreground hover:text-primary transition-colors">Birthday</Link></li>
              <li><Link to="/anniversary" className="text-sm text-muted-foreground hover:text-primary transition-colors">Anniversary</Link></li>
              <li><Link to="/personalized" className="text-sm text-muted-foreground hover:text-primary transition-colors">Personalized</Link></li>
              <li><Link to="/corporate" className="text-sm text-muted-foreground hover:text-primary transition-colors">Corporate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/track-order" className="text-sm text-muted-foreground hover:text-primary transition-colors">Track Order</Link></li>
              <li><Link to="/shipping" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-sm text-muted-foreground hover:text-primary transition-colors">Returns</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                <a href={contactInfo.phoneHref} className="hover:text-primary transition-colors">
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                <a href={contactInfo.emailHref} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="text-sm text-muted-foreground">{contactInfo.city}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 GCF Gifts. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}