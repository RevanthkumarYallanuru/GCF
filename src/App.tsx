import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Occasions from "./pages/Occasions";
import SameDayDelivery from "./pages/SameDayDelivery";
import TrackOrder from "./pages/TrackOrder";
import NotFound from "./pages/NotFound";
import UploadPhoto from "./pages/UploadPhoto";
import ViewExamples from "./pages/ViewExamples";
import CategoryRedirect from "./pages/CategoryRedirect";
import StaticInfoPage from "./pages/StaticInfoPage";
import ContactPage from "./pages/ContactPage";

// Initialize React Query client for data fetching and caching
// This provides global state management for API calls and caching
const queryClient = new QueryClient();

// Application routes configuration
// Centralized routing setup for better maintainability and SEO

const routes = [
  { path: "/", element: <Index /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/admin", element: <AdminDashboard /> },
  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/occasions", element: <Occasions /> },
  { path: "/same-day-delivery", element: <SameDayDelivery /> },
  { path: "/track-order", element: <TrackOrder /> },
  { path: "/upload-photo", element: <UploadPhoto /> },
  { path: "/view-examples", element: <ViewExamples /> },
  // Footer "Shop" shortcuts - use dedicated routes for maximum clarity
  { path: "/birthday", element: <CategoryRedirect /> },
  { path: "/anniversary", element: <CategoryRedirect /> },
  { path: "/personalized", element: <CategoryRedirect /> },
  { path: "/corporate", element: <CategoryRedirect /> },
  { path: "/wedding", element: <CategoryRedirect /> },
  { path: "/graduation", element: <CategoryRedirect /> },
  { path: "/housewarming", element: <CategoryRedirect /> },
  { path: "/shipping", element: <StaticInfoPage title="Shipping Info" description="Everything you need to know about how we deliver gifts across Tirupati." slug="shipping" /> },
  { path: "/returns", element: <StaticInfoPage title="Returns & Replacements" description="If something is wrong with your order, we’ll fix it quickly." slug="returns" /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/privacy", element: <StaticInfoPage title="Privacy Policy" description="How we handle your personal data and photos with care." slug="privacy" /> },
  { path: "/terms", element: <StaticInfoPage title="Terms & Conditions" description="The guidelines and rules for using GCF Gifts." slug="terms" /> },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes, {
  future: {
    // Opt-in to upcoming relative splat behavior now (safe for v6.30.2)
    v7_relativeSplatPath: true,
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider
          router={router}
          future={{
            // This matches the docs: wrap internal router updates in React.startTransition
            v7_startTransition: true,
          }}
        />
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;