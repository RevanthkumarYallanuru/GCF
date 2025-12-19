import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

// Main navigation header component
// Provides site branding, navigation links, search, and cart functionality
// Sticky positioning for better user experience
// Hidden on admin pages for cleaner admin interface

export function Header() {
  const { state } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false); // Close mobile menu after search
    }
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu when link is clicked
  };

  // Hide header on admin pages for better admin experience
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2" onClick={handleMobileLinkClick}>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
            <span className="text-lg font-bold text-primary-foreground">G</span>
          </div>
          <span className="text-xl font-bold">GCF Gifts</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${
              isActive("/") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-sm font-medium transition-colors ${
              isActive("/products") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Products
          </Link>
          <Link
            to="/occasions"
            className={`text-sm font-medium transition-colors ${
              isActive("/occasions") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Occasions
          </Link>
          <Link
            to="/same-day-delivery"
            className={`text-sm font-medium transition-colors ${
              isActive("/same-day-delivery") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Same Day Delivery
          </Link>
          <Link
            to="/track-order"
            className={`text-sm font-medium transition-colors ${
              isActive("/track-order") ? "text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            Track Order
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for gifts..."
              className="w-64 pl-10 bg-secondary border-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          {/* Cart and User buttons */}
          <Link to="/checkout" onClick={handleMobileLinkClick}>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-xs font-bold text-primary-foreground flex items-center justify-center">
                  {state.itemCount > 99 ? '99+' : state.itemCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/dashboard" onClick={handleMobileLinkClick}>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container py-4 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for gifts..."
                className="w-full pl-10 bg-secondary border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={handleMobileLinkClick}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                Home
              </Link>
              <Link
                to="/products"
                onClick={handleMobileLinkClick}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/products") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                Products
              </Link>
              <Link
                to="/occasions"
                onClick={handleMobileLinkClick}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/occasions") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                Occasions
              </Link>
              <Link
                to="/same-day-delivery"
                onClick={handleMobileLinkClick}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/same-day-delivery") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                Same Day Delivery
              </Link>
              <Link
                to="/track-order"
                onClick={handleMobileLinkClick}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/track-order") ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                Track Order
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}