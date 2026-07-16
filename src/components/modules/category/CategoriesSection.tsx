"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  {
    name: "Men",
    src: "/category/male-category.png",
    href: "#",
  },
  {
    name: "Women",
    src: "/category/women.png",
    href: "#",
  },
  {
    name: "Kids",
    src: "/category/kids.png",
    href: "#",
  },
] as const;

export default function CategoriesSection() {
  return (
    <section
      id="categories-section"
      className="w-full bg-white"
    >
      <div className="max-w-[calc(100vw-300px)] mx-auto px-10 py-16">
        <h2 className="text-3xl font-black mb-8 text-[#111111] tracking-wide">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative block overflow-hidden rounded-2xl aspect-[4/3] w-full"
            >
              {/* Image with zoom effect */}
              <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={category.src}
                  alt={`${category.name} Category`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>

              {/* Floating Pill Button */}
              <div className="absolute bottom-6 left-6 right-16">
                <div className="flex items-center justify-between bg-white py-3 px-5 rounded-lg shadow-sm group-hover:shadow-md transition-all duration-300">
                  <span className="font-bold text-sm text-[#111111]">
                    {category.name}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-gray-400 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#111111]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
