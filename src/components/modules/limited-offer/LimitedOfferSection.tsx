"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LimitedOfferSection() {
  return (
    <section className="w-full bg-white py-16 overflow-visible">
      <div className="max-w-[calc(100vw-300px)] mx-auto px-10">
        <div className="relative flex flex-col md:flex-row w-full bg-[#1c181d] rounded-3xl overflow-visible shadow-xl">
          {/* Left Column - Person image with purple background */}
          <div className="relative w-full md:w-5/12 h-[300px] md:h-auto min-h-[350px] overflow-hidden rounded-t-3xl md:rounded-tr-none md:rounded-l-3xl bg-[#7b2cbf]">
            <Image
              src="/shoe-sprite-image.png"
              alt="Exclusive limited offer"
              fill
              priority
              className="object-cover mix-blend-luminosity opacity-90 transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            {/* Soft purple overlay gradient */}
            <div className="absolute inset-0 bg-purple-900/20 mix-blend-color" />
          </div>

          {/* Right Column - Deal Info & Floating Shoe */}
          <div className="relative w-full md:w-7/12 p-8 md:p-12 md:pr-48 flex flex-col justify-center min-h-[350px] overflow-visible">
            {/* Background Accent Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <span className="text-xs md:text-sm font-extrabold tracking-widest text-[#c8102e] uppercase mb-3">
              Limited Offer
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              35% off only this friday
              <br />
              and get special gift
            </h2>

            <button
              aria-label="Grab the limited offer now"
              className="group flex items-center gap-2.5 bg-white text-black font-extrabold text-sm px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/10 active:scale-95 self-start cursor-pointer"
            >
              Grab it now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Floating Shoe Asset */}
            <div className="absolute -bottom-10 right-4 md:bottom-auto md:top-20  md:-translate-y-1/2 md:-right-12 w-56 h-56 md:w-80 md:h-80 z-10 transition-all duration-500 -rotate-10 cursor-pointer select-none filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] float-shoe">
              <Image
                src="/shoes/shoe-transparent.png"
                alt="Limited edition Kiprun sneaker"
                width={660}
                height={660}
                className="object-cover transform scale-x-[-1] w-130 h-130 overflow-visible"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
