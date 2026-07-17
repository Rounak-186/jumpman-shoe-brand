import Image from "next/image";
import HeroSection from "@/components/modules/hero/HeroSection";
import BrandProductSection from "@/components/modules/brand-product/BrandProductSection";
import CategoriesSection from "@/components/modules/category/CategoriesSection";
import BestSellingSection from "@/components/modules/best-selling/BestSellingSection";
import LimitedOfferSection from "@/components/modules/limited-offer/LimitedOfferSection";
import TestimonialsSection from "@/components/modules/testimonials/TestimonialsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-primary ">
      <HeroSection />
      <BrandProductSection />
      <CategoriesSection />
      <BestSellingSection />
      <LimitedOfferSection />
      <TestimonialsSection />
    </div>
  );
}
