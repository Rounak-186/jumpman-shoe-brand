"use client";

import Image from "next/image";

const COLOR_VARIANTS = [
  { src: "/hero-image.png", alt: "Colorway 1" },
  { src: "/hero-image.png", alt: "Colorway 2" },
  { src: "/hero-image.png", alt: "Colorway 3" },
] as const;

const DOTS = [0, 1, 2];

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[calc(100vh-64px)] overflow-hidden"
    >
      <Image
        src="/hero-image.png"
        alt="Jordan Jumpman 2021 PF hero"
        fill
        className="object-cover object-center"
        priority
        sizes="95vw"
      />

      <div className="absolute bottom-40 left-10 right-10 z-10 flex flex-col justify-end px-14 ">
        <div className="flex items-end justify-between gap-6">

          <div className="flex flex-col gap-3">
            <p
              className="text-[11px] font-black uppercase tracking-widest"
              style={{ color: "var(--hero-label)" }}
            >
              Choose Color :
            </p>
            <div className="flex items-center gap-4">
              {COLOR_VARIANTS.map(({ src, alt }, idx) => (
                <button
                  key={idx}
                  id={`hero-color-${idx}`}
                  aria-label={`Select ${alt}`}
                  className="relative shrink-0 transition-transform duration-200 hover:scale-110"
                  style={{
                    width: 100,
                    height: 80,
                    outline: idx === 0 ? "2px solid var(--primary)" : "none",
                    outlineOffset: 3,
                  }}
                >
                  <Image src={src} alt={alt} fill className="object-contain" sizes="72px" />
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pb-1">
            <button
              id="hero-cta-cart"
              aria-label="Add to cart"
              className="px-10 py-3 text-xs font-black uppercase tracking-[0.18em] transition-opacity duration-200 hover:opacity-85"
              style={{
                backgroundColor: "var(--hero-btn-solid-bg)",
                color: "var(--hero-btn-solid-text)",
              }}
            >
              Add to Cart
            </button>
            <button
              id="hero-cta-buy"
              aria-label="Buy now"
              className="px-10 py-3 text-xs font-black uppercase tracking-[0.18em] transition-all duration-200 hover:opacity-80"
              style={{
                border: "1.5px solid var(--hero-btn-ghost-border)",
                color: "var(--hero-btn-ghost-text)",
                backgroundColor: "transparent",
              }}
            >
              Buy Now
            </button>
          </div>

          <div className="flex flex-col gap-2 max-w-120 relative -top-20 -left-20">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-7">
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color: "var(--hero-price)" }}
                >
                  134$
                </span>
                <span
                  className="text-lg font-black uppercase leading-tight"
                  style={{ color: "var(--hero-product-name)" }}
                >
                  Jordan
                  <br />
                  Jumpman 2021 PF
                </span>
              </div>
              <span
                className="px-3 py-1 rounded-full text-[10px] font-bold uppercase text-white shrink-0 mt-1"
                style={{ backgroundColor: "var(--hero-exclusive-bg)" }}
              >
                Exclusive
              </span>
            </div>
            <div>
              <p
                className="text-sm font-black uppercase tracking-widest mb-1"
                style={{ color: "var(--hero-label)" }}
              >
                Inspiration
              </p>
              <p
                className="text-md leading-relaxed"
                style={{ color: "var(--hero-body)" }}
              >
                Inspired by the design of the latest Air Jordan game shoe,
                the Jordan Jumpman 2021 helps up-and-coming players level up their game.
              </p>
            </div>
          </div>

        </div>
      </div>

      <div
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2"
        aria-hidden="true"
      >
        {DOTS.map((i) => (
          <span
            key={i}
            className="block rounded-full"
            style={{
              width: 10,
              height: 10,
              backgroundColor: i === 2 ? "var(--hero-dot-active)" : "var(--hero-dot-inactive)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
