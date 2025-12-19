import { useEffect } from "react";

// Scroll page to top smoothly when a screen is mounted
// Use this at the top of each page component so every navigation feels polished
export const useScrollTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
};


