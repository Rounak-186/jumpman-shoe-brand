"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const banners = [
  {
    id: 1,
    brand: "NIKE",
    title: "JUST DO IT",
    subtitle: "Discover the latest running & lifestyle collection.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1600&q=80",
    gradient: "from-black/80 via-black/50 to-transparent",
  },
  {
    id: 2,
    brand: "PUMA",
    title: "FOREVER FASTER",
    subtitle: "Bold designs made for everyday performance.",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=1600&q=80",
    gradient: "from-red-950/80 via-red-900/40 to-transparent",
  },
  {
    id: 3,
    brand: "ADIDAS",
    title: "IMPOSSIBLE IS NOTHING",
    subtitle: "Step into comfort with the newest Adidas Originals.",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=1600&q=80",
    gradient: "from-slate-900/80 via-slate-900/40 to-transparent",
  },
  
];

export default function BrandBannerSlider() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
      }),
    ],
  );

  return (
    <section className="w-full bg-white mt-16">
      <div className="overflow-hidden rounded" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="relative min-w-0 flex-[0_0_100%] h-[520px]"
            >
              <img
                src={banner.image}
                alt={banner.brand}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div
                className={`absolute inset-0 bg-linear-to-r ${banner.gradient}`}
              />

              <div className="relative z-10 flex h-full items-center px-8 md:px-16">
                <div className="max-w-xl text-white">
                  <p className="mb-3 text-sm tracking-[0.4em] uppercase text-gray-300">
                    {banner.brand}
                  </p>

                  <h2 className="text-5xl md:text-7xl font-black leading-none">
                    {banner.title}
                  </h2>

                  <p className="mt-6 text-lg text-gray-200">
                    {banner.subtitle}
                  </p>

                  <button className="mt-8 rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:scale-105">
                    Shop Now
                  </button>
                </div>
              </div>

              <div className="absolute right-8 bottom-8 text-7xl md:text-9xl font-black text-white/10">
                {banner.brand}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
