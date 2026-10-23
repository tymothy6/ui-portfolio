"use client";

import * as React from "react";
import { useToast } from "@/components/ui/use-toast";

// On small screens, warn once that Figma embeds are hard to use, the first
// time the visitor scrolls a work page
export function FigmaMobileNotice() {
  const { toast } = useToast();

  React.useEffect(() => {
    const hasToastBeenShown = window.localStorage.getItem("toastShown");
    if (hasToastBeenShown || !window.matchMedia("(max-width: 768px)").matches) {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        toast({
          title: "📱 Heads up!",
          description:
            "Figma embeds can be hard to navigate on mobile. Consider viewing my project pages on a desktop browser for the best experience.",
        });

        window.localStorage.setItem("toastShown", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toast]);

  return null;
}
