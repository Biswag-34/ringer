"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Draggable } from "gsap/dist/Draggable";

gsap.registerPlugin(Draggable);

const data = [
  { title: "Orthopedic", img: "/images/health1.png" },
  { title: "Nutrition", img: "/images/health2.png" },
  { title: "Gynaecology", img: "/images/health3.png" },
  { title: "Pediatric", img: "/images/health4.png" },
];

export default function HealthCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = gsap.utils.toArray<HTMLElement>(".carousel-item");

    // 🔁 duplicate items
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    const totalWidth = track.scrollWidth / 2;

    // 🔁 wrap function (true infinite)
    const wrapX = gsap.utils.wrap(-totalWidth, 0);

    // 🚀 auto scroll
    const autoTween = gsap.to(track, {
      x: "-=" + totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => wrapX(parseFloat(x)) + "px",
      },
    });

    let velocity = 0;
    let lastX = 0;

    // 🎯 snap function
    const itemWidth = items[0].offsetWidth + 48; // gap-12
    const snap = (value: number) =>
      Math.round(value / itemWidth) * itemWidth;

    // 🖐️ draggable (no inertia plugin)
    Draggable.create(track, {
      type: "x",

      onPress() {
        autoTween.pause();
        velocity = 0;
        lastX = this.x;
      },

      onDrag() {
        velocity = this.x - lastX;
        lastX = this.x;

        gsap.set(track, {
          x: wrapX(this.x),
        });
      },

      onRelease() {
        // 🔥 FAKE MOMENTUM
        gsap.to(track, {
          x: `+=${velocity * 8}`, // momentum strength
          duration: 1.2,
          ease: "power3.out",
          modifiers: {
            x: (x) => wrapX(parseFloat(x)) + "px",
          },
          onComplete: () => {
            // 🎯 SNAP AFTER MOMENTUM
            const currentX = gsap.getProperty(track, "x") as number;

            gsap.to(track, {
              x: snap(currentX),
              duration: 0.6,
              ease: "power2.out",
              modifiers: {
                x: (x) => wrapX(parseFloat(x)) + "px",
              },
              onComplete: () => {
                autoTween.resume();
              },
            });
          },
        });
      },
    });

    // ✨ CENTER SCALE EFFECT
    const updateScale = () => {
      const center = window.innerWidth / 2;

      document.querySelectorAll(".carousel-item").forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const distance = Math.abs(center - itemCenter);

        const scale = gsap.utils.clamp(0.92, 1.08, 1 - distance / 1200);
        const opacity = gsap.utils.clamp(0.6, 1, 1 - distance / 900);

        gsap.to(item, {
          scale,
          opacity,
          duration: 0.5,
          ease: "power3.out",
        });
      });
    };

    gsap.ticker.add(updateScale);

    return () => {
      gsap.killTweensOf(track);
      gsap.ticker.remove(updateScale);
      Draggable.get(track)?.kill();
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-700">
          HEALTH & LIVING
        </h2>
        <div className="w-12 h-1 bg-gray-400 mx-auto my-4" />
        <p className="text-gray-600 mb-12">
          Informative articles surrounding healthcare issues and solutions
        </p>
      </div>

      {/* FULL BLEED */}
      <div className="w-screen relative left-1/2 -translate-x-1/2">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-12 will-change-transform cursor-grab active:cursor-grabbing"
          >
            {data.map((item, i) => (
              <div
                key={i}
                className="carousel-item flex-shrink-0 flex flex-col items-center"
              >
                {/* CARD */}
                <div className="relative w-56 h-56 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400/30 to-blue-500/30 blur-xl opacity-60" />

                  <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-tr from-orange-500 to-blue-600">
                    <div className="w-full h-full rounded-full bg-white/80 backdrop-blur-xl flex items-center justify-center shadow-xl">
                      <div className="relative w-44 h-44 rounded-full overflow-hidden">
                        <Image
                          src={item.img}
                          alt={item.title}
                          fill
                          sizes= "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}