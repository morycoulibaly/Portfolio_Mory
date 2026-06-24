"use client";

import { Icons } from "@/components/common/icons";
import * as React from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = React.useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  if (!visible) return null;

  return (
    <button
      aria-label="Remonter en haut de la page"
      onClick={handleClick}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground p-3 shadow-lg hover:opacity-90"
    >
      <Icons.chevronDown className="h-5 w-5 transform rotate-180" />
    </button>
  );
}
