"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    desktop: "/images/desktop1.png",
    mobile: "/images/mobile1.png",
    title: "A Universe Within You",
    subtitle: "Trillions of microbes shaping your health, every second.",
  },
  {
    desktop: "/images/desktop2.png",
    mobile: "/images/mobile2.png",
    title: "Engineering the Future of Healthcare",
    subtitle: "Precision microbiome science meets clinical innovation.",
  },
  {
    desktop: "/images/desktop3.png",
    mobile: "/images/mobile3.png",
    title: "The Science of Connection",
    subtitle: "Where the gut influences the brain, immunity, and beyond.",
  },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIndex((prev) => (prev + 1) % slides.length);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [isAnimating]);

  // 🔥 AUTO PLAY
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  // 🔥 GSAP ANIMATION
  useGSAP(
    () => {
      setIsAnimating(true);

      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      });

      tl.fromTo(
        ".slide",
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      )
        .from(".hero-title span", {
          y: 40,
          opacity: 0,
          stagger: 0.03,
          duration: 0.6,
        })
        .from(
          ".hero-sub",
          { y: 20, opacity: 0, duration: 0.5 },
          "-=0.3"
        )
        .from(
          ".hero-btn",
          { y: 10, opacity: 0, duration: 0.4 },
          "-=0.3"
        );
    },
    { dependencies: [index], scope: containerRef }
  );

  const current = slides[index];

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black text-white"
    >
      {/* 🔥 SLIDE */}
      <div className="slide absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={current.mobile} />
          <Image
            src={current.desktop}
            alt="Hero"
            fill
             sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </picture>

        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div className="max-w-4xl">
          <h1 className="hero-title text-3xl md:text-5xl font-semibold leading-snug">
            {current.title.split("").map((char, i) => (
              <span key={i} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p className="hero-sub mt-4 text-sm md:text-base text-gray-300">
            {current.subtitle}
          </p>

          <div className="hero-btn mt-6">
            <button className="group relative px-8 py-3 rounded-full font-medium text-white backdrop-blur-md border border-white/30 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-white/20 active:scale-95">
              {/* Liquid filling background that expands from center */}
              <span className="absolute inset-0 bg-gradient-to-r from-white to-white/80 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] origin-left" />
              
              {/* Second layer for more liquid effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-75 ease-[cubic-bezier(0.68, -0.55, 0.265, 1.55)] origin-left" />
              
              {/* Ripple effect on hover */}
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="absolute inset-0 rounded-full animate-ping-slow bg-white/30" />
              </span>

              {/* Text with subtle movement */}
              <span className="relative z-10 inline-block transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-black">
                Explore More
              </span>

              {/* Liquid shine effect */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 group-hover:animate-shine" />
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 ARROWS */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight size={20} />
      </button>

      {/* 🔥 DOTS (MOBILE + DESKTOP) */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === index
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70 hover:scale-125"
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.2;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          20% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(100%) skewX(-12deg);
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        
        .animate-shine {
          animation: shine 1.2s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}