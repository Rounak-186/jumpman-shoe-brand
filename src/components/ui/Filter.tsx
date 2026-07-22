"use client";

import React, { useState } from "react";
import { SlidersHorizontal, RotateCcw, ChevronDown } from "lucide-react";

export interface FilterState {
  category: string;
  brand: string;
  minPrice: number;
  maxPrice: number;
  color: string;
  size: number | null;
  sortBy: string;
}

interface FilterProps {
  onFilterChange?: (filters: FilterState) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const categories = [
    "Sneakers",
    "Running",
    "Casual",
    "Basketball",
    "Training",
  ];
  const brands = ["Nike", "Adidas", "Puma"];
  const colors = [
    { name: "black", hex: "#000000", bgClass: "bg-black" },
    {
      name: "white",
      hex: "#ffffff",
      bgClass: "bg-white border border-zinc-300",
    },
    { name: "red", hex: "#ef4444", bgClass: "bg-red-600" },
    { name: "gray", hex: "#4b5563", bgClass: "bg-zinc-600" },
    { name: "blue", hex: "#3b82f6", bgClass: "bg-blue-600" },
  ];
  const sizes = [39, 40, 41, 42, 43, 44, 45, 46];
  const sortOptions = [
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
    "Popular",
  ];

  const initialFilters: FilterState = {
    category: "",
    brand: "",
    minPrice: 2000,
    maxPrice: 12000,
    color: "",
    size: null,
    sortBy: "Newest",
  };

  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    if (onFilterChange) {
      onFilterChange(updated);
    }
  };

  const handleClearAll = () => {
    setFilters(initialFilters);
    if (onFilterChange) {
      onFilterChange(initialFilters);
    }
  };

  return (
    <div className="w-full bg-white text-zinc-900 rounded-xl p-5 md:p-6 shadow-md mb-12 border border-zinc-200/80">
      {/* Header Row */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal className="w-5 h-5 text-red-600 stroke-[2.5]" />
          <h2 className="text-sm md:text-base font-black tracking-wider uppercase text-zinc-900">
            FILTER PRODUCTS
          </h2>
        </div>

        <button
          onClick={handleClearAll}
          className="flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase hover:text-red-700 transition cursor-pointer"
        >
          <span>CLEAR ALL</span>
          <RotateCcw className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>

      {/* Filter Options Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 pt-5 items-start divide-y sm:divide-y-0 lg:divide-x divide-zinc-200">
        {/* 1. CATEGORY */}
        <div className="flex flex-col gap-2.5">
          <span className="text-[11px] font-black tracking-wider uppercase text-zinc-900">
            CATEGORY
          </span>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isSelected = filters.category === cat;
              return (
                <button
                  key={cat}
                  onClick={() =>
                    updateFilters({ category: isSelected ? "" : cat })
                  }
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                    isSelected
                      ? "bg-red-600 text-white font-semibold shadow-xs"
                      : "bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. BRAND */}
        <div className="flex flex-col gap-2.5 pt-4 sm:pt-0 lg:pl-6">
          <span className="text-[11px] font-black tracking-wider uppercase text-zinc-900">
            BRAND
          </span>
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => {
              const isSelected = filters.brand === brand;
              return (
                <button
                  key={brand}
                  onClick={() =>
                    updateFilters({ brand: isSelected ? "" : brand })
                  }
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition cursor-pointer ${
                    isSelected
                      ? "bg-red-600 text-white font-semibold shadow-xs"
                      : "bg-white border border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:text-zinc-900"
                  }`}
                >
                  {brand}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. PRICE */}
        <div className="flex flex-col gap-2.5 pt-4 sm:pt-0 lg:pl-6">
          <span className="text-[11px] font-black tracking-wider uppercase text-zinc-900">
            PRICE
          </span>
          <div className="flex flex-col gap-3 pt-1">
            <div className="relative flex items-center w-full">
              {/* Red Price Track Bar */}
              <div className="w-full h-1.5 bg-red-600 rounded-full relative">
                {/* Min Thumb Dot */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-red-600 ring-2 ring-white rounded-full shadow-md cursor-pointer -ml-1" />
                {/* Max Thumb Dot */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-red-600 ring-2 ring-white rounded-full shadow-md cursor-pointer -mr-1" />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-bold text-zinc-700">
              <span>₹{filters.minPrice.toLocaleString()}</span>
              <span>₹{filters.maxPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* 4. COLOR */}
        <div className="flex flex-col gap-2.5 pt-4 sm:pt-0 lg:pl-6">
          <span className="text-[11px] font-black tracking-wider uppercase text-zinc-900">
            COLOR
          </span>
          <div className="flex items-center gap-2.5 pt-1">
            {colors.map((c) => {
              const isSelected = filters.color === c.name;
              return (
                <button
                  key={c.name}
                  onClick={() =>
                    updateFilters({ color: isSelected ? "" : c.name })
                  }
                  className={`w-6 h-6 rounded-full transition cursor-pointer relative flex items-center justify-center ${c.bgClass} ${
                    isSelected
                      ? "ring-2 ring-red-600 ring-offset-2 scale-110"
                      : "hover:scale-110"
                  }`}
                  aria-label={c.name}
                />
              );
            })}
          </div>
        </div>

        {/* 5. SIZE */}
        <div className="flex flex-col gap-2.5 pt-4 sm:pt-0 lg:pl-6">
          <span className="text-[11px] font-black tracking-wider uppercase text-zinc-900">
            SIZE
          </span>
          <div className="grid grid-cols-4 gap-1.5 w-fit">
            {sizes.map((sz) => {
              const isSelected = filters.size === sz;
              return (
                <button
                  key={sz}
                  onClick={() =>
                    updateFilters({ size: isSelected ? null : sz })
                  }
                  className={`w-8 h-7 rounded flex items-center justify-center text-xs font-semibold transition cursor-pointer ${
                    isSelected
                      ? "bg-red-600 text-white shadow-xs"
                      : "bg-white border border-zinc-200 text-zinc-800 hover:border-zinc-400"
                  }`}
                >
                  {sz}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6. SORT BY */}
        <div className="flex flex-col gap-2.5 pt-4 sm:pt-0 lg:pl-6">
          <span className="text-[11px] font-black tracking-wider uppercase text-zinc-900">
            SORT BY
          </span>
          <div className="relative w-full">
            <select
              value={filters.sortBy}
              onChange={(e) => updateFilters({ sortBy: e.target.value })}
              className="w-full appearance-none bg-white border border-zinc-200 rounded-lg px-3 py-2 text-xs font-semibold text-zinc-800 cursor-pointer pr-8 focus:outline-none focus:border-zinc-400"
            >
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
