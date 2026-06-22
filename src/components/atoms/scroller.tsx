"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const attemptScroll = (attempts = 0, maxAttempts = 5) => {
      if (attempts >= maxAttempts) return;
      const id = window.location.hash.substring(1);
      if (!id) return;
      const element = document.querySelector("[data-scroll-id='" + id + "']");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      } else {
        setTimeout(() => attemptScroll(attempts + 1), 200);
      }
    };
    const handleHashChange = () => attemptScroll();
    if (window.location.hash) {
      attemptScroll();
    }
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);
  return null;
}
