import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Occasions from "./pages/Occasions";
import SameDayDelivery from "./pages/SameDayDelivery";
import TrackOrder from "./pages/TrackOrder";
import NotFound from "./pages/NotFound";

// Initialize React Query client for data fetching and caching
// This provides global state management for API calls and caching
const queryClient = new QueryClient();

// Application routes configuration
// Centralized routing setup for better maintainability and SEO

const routes = [
  { path: "/", element: <Index /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/admin", element: <AdminDashboard /> },
  { path: "/admin-login", element: <AdminLogin /> },
  { path: "/occasions", element: <Occasions /> },
  { path: "/same-day-delivery", element: <SameDayDelivery /> },
  { path: "/track-order", element: <TrackOrder /> },
  { path: "*", element: <NotFound /> },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <RouterProvider router={router} />
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;