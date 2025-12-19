import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Small helper page used for footer links like /birthday, /anniversary etc.
// It simply redirects into the products listing with the right filters applied.
const CategoryRedirect = () => {
  const navigate = useNavigate();
  const params = useParams<{ "*": string; category?: string }>();

  useEffect(() => {
    const fromPath = window.location.pathname.replace(/^\//, "");
    const raw = (params.category || fromPath).toLowerCase();

    if (["birthday", "anniversary", "wedding", "graduation", "corporate", "housewarming"].includes(raw)) {
      navigate(`/products?occasion=${raw}`, { replace: true });
      return;
    }

    if (raw === "personalized" || raw === "personalised") {
      navigate(`/products?search=personalized`, { replace: true });
      return;
    }

    // Fallback – go back to products
    navigate("/products", { replace: true });
  }, [navigate, params.category]);

  return null;
};

export default CategoryRedirect;


