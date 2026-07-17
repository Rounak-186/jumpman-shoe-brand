"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Meythli Odex",
    avatar: "/users/image copy 2.png",
    rating: 5,
    text: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.",
  },
  {
    name: "Sarah Jenkins",
    avatar: "/users/image.png",
    rating: 5,
    text: "I was blown away by the comfort and style of the Kiprun shoes. They fit perfectly, look amazing, and the customer service was exceptional!",
  },
  {
    name: "David Miller",
    avatar: "/users/image copy.png",
    rating: 5,
    text: "Extremely fast shipping and the shoes are premium quality. Highly recommend to anyone looking for stylish and durable sneakers.",
  },
  {
    name: "Emma Watson",
    avatar: "/users/image copy 2.png",
    rating: 5,
    text: "Best online buying experience I have ever had. The sizing chart is highly accurate, and the quality beats expectations.",
  },
];

export default function TestimonialsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCards = isMobile ? 1 : 2;
  const totalSlides = TESTIMONIALS.length - visibleCards + 1;

  // Clamp activeSlide when size changes
  useEffect(() => {
    if (activeSlide >= totalSlides) {
      setActiveSlide(Math.max(0, totalSlides - 1));
    }
  }, [totalSlides, activeSlide]);

  const goTo = (idx: number) => {
    setActiveSlide(Math.max(0, Math.min(totalSlides - 1, idx)));
  };

  return (
    <section id="testimonials-section" className="w-full bg-white py-16 border-t border-gray-100">
      <div className="max-w-[calc(100vw-300px)] mx-auto px-10">
        
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="block w-8 h-[2px] bg-[#c8102e]" />
          <h2 className="text-3xl font-black text-[#111111] tracking-wide">
            Client Testimonial
          </h2>
          <span className="block w-8 h-[2px] bg-[#c8102e]" />
        </div>

        {/* Carousel Window */}
        <div className="overflow-hidden mb-8">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${activeSlide} * (100% / ${visibleCards} + (24px / ${visibleCards}) - (24px / ${visibleCards} / ${visibleCards}))))`,
            }}
          >
            {TESTIMONIALS.map((testimonial, idx) => (
              <article
                key={`${testimonial.name}-${idx}`}
                className="w-full md:w-[calc(50%-12px)] shrink-0 flex gap-6 p-10 py-12 rounded-2xl bg-testimonial-card-bg border border-testimonial-card-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* User Avatar */}
                <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 rounded-2xl overflow-hidden bg-[#e5e5e7] border border-gray-200 shadow-inner">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, 112px"
                  />
                </div>

                {/* Info & Content */}
                <div className="flex flex-col gap-2 justify-center min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight truncate">
                    {testimonial.name}
                  </h3>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="var(--testimonial-star-color)"
                        color="var(--testimonial-star-color)"
                      />
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed italic mt-1 line-clamp-3">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2.5" role="tablist" aria-label="Testimonial slides">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === activeSlide}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === activeSlide ? 24 : 10,
                height: 10,
                backgroundColor:
                  i === activeSlide ? "var(--brand-dot-active)" : "var(--brand-dot-inactive)",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
