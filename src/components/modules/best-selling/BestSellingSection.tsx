"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Categories filter list
const CATEGORIES = ["Man", "Woman", "Boy", "Girl"] as const;
type Category = (typeof CATEGORIES)[number];

interface Product {
  name: string;
  src: string;
  price: string;
  originalPrice: string;
  categories: Category[];
  isNew: boolean;
}

const PRODUCTS: Product[] = [
  {
    name: "Formal canvas shoe for man",
    src: "/best-selling/best-selling-3.png", // Black platform derby
    price: "₹2999.00",
    originalPrice: "₹4999.00",
    categories: ["Man"],
    isNew: true,
  },
  {
    name: "Sneakers shoe for man",
    src: "/best-selling/best-selling-5.png", // White/tan sneakers
    price: "₹2999.00",
    originalPrice: "₹4999.00",
    categories: ["Man", "Woman"],
    isNew: true,
  },
  {
    name: "Slick Sneakers shoe",
    src: "/best-selling/best-selling-2.png", // White/teal court shoes
    price: "₹2999.00",
    originalPrice: "₹4999.00",
    categories: ["Man", "Woman", "Boy"],
    isNew: true,
  },
  {
    name: "Slick running shoes",
    src: "/best-selling/best-selling-1.png", // White mesh running shoes
    price: "₹2999.00",
    originalPrice: "₹4999.00",
    categories: ["Man", "Woman", "Boy", "Girl"],
    isNew: true,
  },
  {
    name: "Casual leather derby shoe",
    src: "/best-selling/best-selling-4.png", // Brown platform derby
    price: "₹2999.00",
    originalPrice: "₹4999.00",
    categories: ["Man", "Boy"],
    isNew: true,
  },
  {
    name: "Formal leather loafers",
    src: "/best-selling/best-selling-6.png", // Tassel loafers
    price: "₹2999.00",
    originalPrice: "₹4999.00",
    categories: ["Man"],
    isNew: true,
  },
];

export default function BestSellingSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Man");

  // Filter products by selected category
  const filteredProducts = PRODUCTS.filter((product) =>
    product.categories.includes(activeCategory)
  );

  return (
    <section
      id="best-selling-section"
      className="w-full bg-white border-t border-gray-100"
    >
      <div className="max-w-[calc(100vw-300px)] mx-auto px-10 py-16">
        
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-8 h-[2px] bg-[#c8102e]" />
          <h2 className="text-3xl font-black text-[#111111] tracking-wide">
            Best Selling
          </h2>
          <span className="block w-8 h-[2px] bg-[#c8102e]" />
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-black border-black text-white shadow-md"
                    : "bg-white border-gray-300 text-gray-700 hover:border-black hover:text-black"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div
              key={`${product.name}-${idx}`}
              className="group relative flex flex-col rounded-2xl border border-gray-200/60 p-4 bg-white transition-all duration-300 hover:shadow-lg"
            >
              {/* NEW Badge */}
              {product.isNew && (
                <span className="absolute top-6 left-6 z-10 bg-black text-white text-[9px] font-extrabold px-3 py-1 rounded uppercase tracking-wider">
                  New
                </span>
              )}

              {/* Image Container */}
              <div className="relative w-full h-[240px] overflow-hidden rounded-xl bg-gray-50 mb-4">
                <Image
                  src={product.src}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Shoe Info & Link */}
              <div className="flex items-end justify-between gap-3 mt-auto">
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-sm font-extrabold text-[#111111] leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#111111]">
                      {product.price}
                    </span>
                    <span className="text-xs text-gray-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>

                <button
                  aria-label={`View ${product.name}`}
                  className="flex-shrink-0 flex items-center justify-center rounded-full w-9 h-9 transition-all duration-300 bg-black text-white group-hover:opacity-85"
                >
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
