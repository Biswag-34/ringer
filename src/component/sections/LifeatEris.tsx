"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap";

const slides = [
  "/images/life1.jpeg",
  "/images/life2.jpeg",
  "/images/life3.jpeg",
  "/images/life4.jpeg",
  "/images/life5.jpeg",
];

export default function LifeAtEris() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);

  // 🔥 RESPONSIVE SLIDES
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 640) {
        setVisibleSlides(2); // mobile
      } else {
        setVisibleSlides(3); // tablet + desktop
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const slideWidth = 100 / visibleSlides;

  // 🔁 CYCLIC NAVIGATION
  const goToSlide = (dir: "next" | "prev") => {
    let newIndex = index;

    if (dir === "next") {
      if (index >= slides.length - visibleSlides) {
        newIndex = 0;
      } else {
        newIndex = index + 1;
      }
    } else {
      if (index <= 0) {
        newIndex = slides.length - visibleSlides;
      } else {
        newIndex = index - 1;
      }
    }

    setIndex(newIndex);

    gsap.to(trackRef.current, {
      x: `-${newIndex * slideWidth}%`,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  // ✨ CENTER SCALE EFFECT
  useEffect(() => {
    const updateScale = () => {
      const container = trackRef.current;
      if (!container) return;

      const center =
        container.getBoundingClientRect().left +
        container.offsetWidth / 2;

      const items = container.children;

      Array.from(items).forEach((item: Element) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;

        const distance = Math.abs(center - itemCenter);

        const scale = gsap.utils.clamp(0.92, 1.05, 1 - distance / 800);
        const opacity = gsap.utils.clamp(0.7, 1, 1 - distance / 600);

        gsap.to(item, {
          scale,
          opacity,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    };

    gsap.ticker.add(updateScale);
    return () => gsap.ticker.remove(updateScale);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[65vh] overflow-hidden">
      
      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('/images/life-bg.png')",
          }}
        />
        <div className="absolute inset-0 bg-blue-900/60" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row w-full h-full">

        {/* LEFT */}
        <div className="md:w-1/3 w-full flex flex-col justify-center px-6 md:px-10 text-white">
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            LIFE AT RINGER
          </h2>

          <div className="w-16 h-[3px] bg-gradient-to-r from-white to-gray-300 my-5 rounded-full" />

          {/* MODERN BUTTONS */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => goToSlide("prev")}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
            >
              ←
            </button>

            <button
              onClick={() => goToSlide("next")}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition"
            >
              →
            </button>
          </div>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="md:w-2/3 w-full relative overflow-hidden flex items-center mt-8 md:mt-0">

          {/* 🌫️ LEFT FADE */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-blue-900/80 to-transparent z-10" />

          {/* 🌫️ RIGHT FADE */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-blue-900/80 to-transparent z-10" />

          <div
            ref={trackRef}
            className="flex"
            style={{
              width: `${(slides.length * 100) / visibleSlides}%`,
            }}
          >
            {slides.map((img, i) => (
              <div
                key={i}
                className="relative flex-shrink-0 px-2"
                style={{ width: `${100 / visibleSlides}%` }}
              >
                <div className="relative h-[220px] md:h-[300px] w-full overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={img}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}