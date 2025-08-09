"use client";

import { useEffect, useState } from "react";
import StickyPricingCard from "./StickyPricingCard";

type SidebarPricingProps = {
  checklist: any;
  media: any;
  cta: any;
  ctavalue: any;
};

export default function SidebarPricing({
  checklist,
  media,
  cta,
  ctavalue,
}: SidebarPricingProps) {
  const [showSidebarPricing, setShowSidebarPricing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSidebarPricing(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        showSidebarPricing ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="fixed top-20"> 
        <StickyPricingCard
          checklist={checklist}
          cta={cta}
          ctavalue={ctavalue}
        />
      </div>
    </div>
  );
}
