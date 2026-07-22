"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { Heart, Plus, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Filter, { FilterState } from "./Filter";

type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
  oldPrice: string;
  tag: string;
};

type Brand = {
  title: string;
  watermark: string;
  products: Product[];
};

const brands: Brand[] = [
  {
    title: "NIKE COLLECTION",
    watermark: "NIKE",
    products: [
      {
        id: 9,
        name: "Puma Cali Dream",
        image:
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
        price: "₹7,995",
        oldPrice: "₹9,495",
        tag: "NEW",
      },
      {
        id: 10,
        name: "Puma Mayze",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
        price: "₹8,495",
        oldPrice: "₹10,495",
        tag: "TRENDING",
      },
      {
        id: 11,
        name: "Puma Softride",
        image:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
        price: "₹6,995",
        oldPrice: "₹8,495",
        tag: "BESTSELLER",
      },
      {
        id: 12,
        name: "Puma Carina",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        price: "₹5,995",
        oldPrice: "₹7,495",
        tag: "NEW",
      },
    ],
  },
  {
    title: "ADIDAS COLLECTION",
    watermark: "ADIDAS",
    products: [
      {
        id: 5,
        name: "Ultraboost Light",
        image:
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
        price: "₹10,995",
        oldPrice: "₹13,495",
        tag: "NEW",
      },
      {
        id: 6,
        name: "Stan Smith Women",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
        price: "₹8,995",
        oldPrice: "₹10,995",
        tag: "TRENDING",
      },
      {
        id: 7,
        name: "NMD_R1 Women",
        image:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
        price: "₹9,495",
        oldPrice: "₹12,495",
        tag: "BESTSELLER",
      },
      {
        id: 8,
        name: "Gazelle Women",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        price: "₹7,995",
        oldPrice: "₹10,495",
        tag: "NEW",
      },
    ],
  },
  {
    title: "PUMA COLLECTION",
    watermark: "PUMA",
    products: [
      {
        id: 9,
        name: "Puma Cali Dream",
        image:
          "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600",
        price: "₹7,995",
        oldPrice: "₹9,495",
        tag: "NEW",
      },
      {
        id: 10,
        name: "Puma Mayze",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600",
        price: "₹8,495",
        oldPrice: "₹10,495",
        tag: "TRENDING",
      },
      {
        id: 11,
        name: "Puma Softride",
        image:
          "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
        price: "₹6,995",
        oldPrice: "₹8,495",
        tag: "BESTSELLER",
      },
      {
        id: 12,
        name: "Puma Carina",
        image:
          "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
        price: "₹5,995",
        oldPrice: "₹7,495",
        tag: "NEW",
      },
    ],
  },
];

function BrandCarousel({ brand }: { brand: Brand }) {
  const plugin = useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
    },
    [plugin.current],
  );

  return (
    <section className="relative mb-16">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold tracking-wider text-white">
          {brand.title}
        </h2>

        <button className="flex items-center gap-2 text-sm text-white hover:text-red-500">
          VIEW ALL
          <ArrowRight size={15} />
        </button>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[90px] font-black uppercase tracking-widest text-white/5">
          {brand.watermark}
        </span>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {[...brand.products, ...brand.products].map((shoe, index) => (
            <div
              key={`${shoe.id}-${index}`}
              className="min-w-[260px] rounded-xl border border-zinc-800 bg-[#101010] p-4"
            >
              <div className="mb-4 flex items-start justify-between">
                <span className="rounded bg-red-600 px-2 py-1 text-[10px] font-bold">
                  {shoe.tag}
                </span>

                <Heart size={18} className="text-zinc-500" />
              </div>

              <div className="flex h-40 items-center justify-center">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="h-36 object-contain transition duration-300 hover:scale-105"
                />
              </div>

              <h3 className="mt-3 text-sm font-medium text-white">
                {shoe.name}
              </h3>

              <div className="mt-2 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-white">{shoe.price}</p>
                  <p className="text-xs text-zinc-500 line-through">
                    {shoe.oldPrice}
                  </p>
                </div>

                <button className="rounded-full border border-zinc-700 p-2 transition hover:bg-white hover:text-black">
                  <Plus size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BrandsSection() {
  const [activeFilters, setActiveFilters] = useState<FilterState | null>(null);

  const handleFilterChange = (filters: FilterState) => {
    setActiveFilters(filters);
  };

  const filteredBrands = brands.filter((brand) => {
    if (!activeFilters || !activeFilters.brand) return true;
    return (
      brand.watermark.toLowerCase() === activeFilters.brand.toLowerCase() ||
      brand.title.toLowerCase().includes(activeFilters.brand.toLowerCase())
    );
  });

  return (
    <section id="brands-section" className="bg-black px-6 py-20 lg:px-20">
      <Filter onFilterChange={handleFilterChange} />
      {filteredBrands.length > 0 ? (
        filteredBrands.map((brand) => (
          <BrandCarousel key={brand.title} brand={brand} />
        ))
      ) : (
        <div className="py-16 text-center text-zinc-400">
          <p className="text-lg font-semibold">
            No brands match the selected filter.
          </p>
        </div>
      )}
    </section>
  );
}
