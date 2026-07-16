"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

const BRANDS = [
  { src: "/brands/fila.png", alt: "FILA" },
  { src: "/brands/adidas.png", alt: "Adidas" },
  { src: "/brands/puma.png", alt: "Puma" },
  { src: "/brands/new-balance.png", alt: "New Balance" },
  { src: "/brands/reebok.png", alt: "Reebok" },
  { src: "/brands/asics.png", alt: "Asics" },
] as const;

const PRODUCTS = [
  {
    id: "kiprun-black",
    src: "/shoes/kiprun-black.png",
    name: "Running Canvas Shoes",
    price: "Rs. 2999.00",
  },
  {
    id: "kiprun-grey",
    src: "/shoes/kiprun-grey.png",
    name: "Running Casual Shoes",
    price: "Rs. 2999.00",
  },
  {
    id: "kiprun-pink",
    src: "/shoes/kiprun-pink.png",
    name: "Casual Comfort Shoes",
    price: "Rs. 2999.00",
  },
  {
    id: "kiprun-navy",
    src: "/shoes/kiprun-navy.png",
    name: "Sport Running Shoes",
    price: "Rs. 2999.00",
  },
] as const;

const VISIBLE_CARDS = 3;
const TOTAL_SLIDES = PRODUCTS.length - VISIBLE_CARDS + 1; // = 2

function ProductCard({
  src,
  name,
  price,
}: {
  src: string;
  name: string;
  price: string;
}) {
  return (
    <article
      className="shrink-0 flex flex-col rounded-xl overflow-hidden"
      style={{
        width: "calc((100% - 40px) / 3)",
        backgroundColor: "var(--brand-card-bg)",
        border: "1px solid var(--brand-card-border)",
        boxShadow: "0 2px 12px var(--brand-card-shadow)",
      }}
    >
      {/* Image area */}
      <div
        className="relative w-full"
        style={{ height: 220, backgroundColor: "#f6f6f6" }}
      >
        <Image
          src={src}
          alt={name}
          fill
          className="object-contain p-6"
          sizes="(max-width: 1200px) 33vw, 300px"
        />
      </div>

      {/* Info row */}
      <div
        className="flex items-center justify-between gap-3 px-4 py-4"
        style={{ backgroundColor: "var(--brand-card-bg)" }}
      >
        <div className="flex flex-col gap-1">
          <p
            className="text-sm font-semibold leading-snug"
            style={{ color: "var(--brand-card-name)" }}
          >
            {name}
          </p>
          <p
            className="text-sm font-medium"
            style={{ color: "var(--brand-card-price)" }}
          >
            {price}
          </p>
        </div>
        <button
          aria-label={`View ${name}`}
          className="shrink-0 flex items-center justify-center rounded-full w-9 h-9 transition-opacity duration-200 hover:opacity-75"
          style={{
            backgroundColor: "var(--brand-card-arrow-bg)",
            color: "var(--brand-card-arrow-icon)",
          }}
        >
          <ArrowUpRight size={16} strokeWidth={2.5} />
        </button>
      </div>
    </article>
  );
}

export default function BrandProductSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (idx: number) => {
    const clamped = Math.max(0, Math.min(TOTAL_SLIDES - 1, idx));
    setActiveSlide(clamped);
  };

  return (
    <section
      id="brand-product-section"
      className="w-full"
      style={{ backgroundColor: "var(--brand-section-bg)" }}
    >
      {/* ── Brands strip ────────────────────────────────────────────── */}
      <div className="py-12 border-b border-brand-card-border">
        <div className="max-w-[calc(100vw-300px)] mx-auto px-10">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: "var(--brand-section-heading)" }}
          >
            Brands
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="brand-marquee gap-16 px-10"
            style={{ alignItems: "center" }}
          >
            {[...BRANDS, ...BRANDS].map(({ src, alt }, i) => (
              <div
                key={`${alt}-${i}`}
                className="shrink-0 flex items-center justify-center"
                style={{ width: 140, height: 64 }}
              >
                <Image
                  src={src}
                  alt={alt}
                  width={130}
                  height={52}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="140px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[calc(100vw-300px)] mx-auto px-10 py-16">
        <div className="flex items-stretch gap-14">
          {/* Left copy block */}
          <div
            className="flex flex-col justify-center gap-5 shrink-0"
            style={{ width: 230 }}
          >
            {/* Accent label */}
            <div className="flex items-center gap-3">
              <span
                className="block shrink-0"
                style={{
                  width: 32,
                  height: 3,
                  backgroundColor: "var(--brand-section-accent)",
                  borderRadius: 2,
                }}
              />
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--brand-section-heading)" }}
              >
                Our Trending Shoes
              </span>
            </div>

            <h2
              className="text-4xl font-black leading-tight"
              style={{ color: "var(--brand-section-heading)" }}
            >
              Most Popular Products
            </h2>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--brand-section-subtext)" }}
            >
              Specializes In Providing High&#8209;Quality, Stylish Products For
              Your Wardrobe
            </p>

            <button
              id="brand-explore-btn"
              aria-label="Explore trending shoes"
              className="mt-2 px-8 py-3 text-sm font-bold uppercase tracking-wider transition-opacity duration-200 hover:opacity-85 self-start"
              style={{
                backgroundColor: "var(--brand-section-heading)",
                color: "#ffffff",
              }}
            >
              Explore
            </button>
          </div>

          {/* Right swiper block */}
          <div className="flex-1 flex flex-col gap-5 min-w-0">
            {/* Controls row — top right */}
            <div className="flex items-center justify-end gap-2">
              <button
                id="brand-swiper-prev"
                aria-label="Previous shoes"
                onClick={() => goTo(activeSlide - 1)}
                disabled={activeSlide === 0}
                className="flex items-center justify-center w-10 h-10 rounded transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--brand-ctrl-bg)",
                  color: "var(--brand-ctrl-icon)",
                }}
                onMouseEnter={(e) =>
                  ((
                    e.currentTarget as HTMLButtonElement
                  ).style.backgroundColor = "var(--brand-ctrl-hover)")
                }
                onMouseLeave={(e) =>
                  ((
                    e.currentTarget as HTMLButtonElement
                  ).style.backgroundColor = "var(--brand-ctrl-bg)")
                }
              >
                <ChevronLeft size={18} strokeWidth={2.5} />
              </button>

              <button
                id="brand-swiper-next"
                aria-label="Next shoes"
                onClick={() => goTo(activeSlide + 1)}
                disabled={activeSlide === TOTAL_SLIDES - 1}
                className="flex items-center justify-center w-10 h-10 rounded transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--brand-ctrl-bg)",
                  color: "var(--brand-ctrl-icon)",
                }}
                onMouseEnter={(e) =>
                  ((
                    e.currentTarget as HTMLButtonElement
                  ).style.backgroundColor = "var(--brand-ctrl-hover)")
                }
                onMouseLeave={(e) =>
                  ((
                    e.currentTarget as HTMLButtonElement
                  ).style.backgroundColor = "var(--brand-ctrl-bg)")
                }
              >
                <ChevronRight size={18} strokeWidth={2.5} />
              </button>
            </div>

            {/* Card track */}
            <div className="overflow-hidden">
              <div
                ref={trackRef}
                className="flex gap-5 transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(calc(-${activeSlide} * (100% / ${VISIBLE_CARDS} + (20px / ${VISIBLE_CARDS}))))`,
                }}
              >
                {PRODUCTS.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div
              className="flex items-center justify-center gap-2 mt-2"
              role="tablist"
              aria-label="Shoe slides"
            >
              {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeSlide}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeSlide ? 24 : 10,
                    height: 10,
                    backgroundColor:
                      i === activeSlide
                        ? "var(--brand-dot-active)"
                        : "var(--brand-dot-inactive)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
