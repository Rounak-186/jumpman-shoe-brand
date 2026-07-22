import BrandsSection from "@/components/ui/BrandSection";
import React from "react";

export default function KidPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-black pt-20">
      <div className="px-6 pt-6 lg:px-20">
        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider text-white">
          Kid's Collection
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Discover top performance shoes and brand collections for kids
        </p>
      </div>
      <BrandsSection />
    </main>
  );
}