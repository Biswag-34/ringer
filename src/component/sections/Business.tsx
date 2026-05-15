"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    title: "Gastroenterology",
    desc: "Advancing gut health through microbiome-driven science.",
    img: "/images/business1.png",
    slug: "gastroenterology",
  },
  {
    title: "Otorhinolaryngology (ENT)",
    desc: "Precision care for ear, nose, and throat health.",
    img: "/images/business3.png",
    slug: "ent",
  },
  {
    title: "Respiratory",
    desc: "Enhancing breathing and respiratory resilience.",
    img: "/images/business6.png",
    slug: "respiratory",
  },
  {
    title: "Neuroscience",
    desc: "Decoding the brain to transform neurological care.",
    img: "/images/business4.png",
    slug: "neuroscience",
  },
  {
    title: "Orthopaedics & Spine",
    desc: "Restoring movement through advanced spine care.",
    img: "/images/business5.png",
    slug: "orthopaedics-spine",
  },
  {
    title: "Nutrition Science",
    desc: "Optimizing health through personalized nutritional strategies.",
    img: "/images/business7.png",
    slug: "nutrition",
  },
  {
    title: "Cardio-Metabolic",
    desc: "Integrating heart health and metabolism for long-term wellness.",
    img: "/images/business2.png",
    slug: "cardio-metabolic",
  },
];

const loopData = data;

export default function Business() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [dragWidth, setDragWidth] = useState(0);
  const [position, setPosition] = useState(0);

  const clampPosition = useCallback(
    (value: number) => Math.min(Math.max(value, 0), dragWidth),
    [dragWidth]
  );

  const updateDragWidth = useCallback(() => {
    if (!carouselRef.current) {
      return;
    }

    const nextDragWidth = Math.max(
      carouselRef.current.scrollWidth - carouselRef.current.offsetWidth,
      0
    );
    const nextPosition = Math.min(Math.max(-x.get(), 0), nextDragWidth);

    setDragWidth(nextDragWidth);
    setPosition(nextPosition);
    x.set(-nextPosition);
  }, [x]);

  useEffect(() => {
    updateDragWidth();
    window.addEventListener("resize", updateDragWidth);

    return () => window.removeEventListener("resize", updateDragWidth);
  }, [updateDragWidth]);

  useEffect(() => {
    return x.on("change", (latest) => {
      setPosition(clampPosition(-latest));
    });
  }, [clampPosition, x]);

  const getNavigationStep = () => {
    const firstCard = carouselRef.current?.querySelector<HTMLElement>(
      "[data-division-card]"
    );

    if (!firstCard) {
      return carouselRef.current?.offsetWidth ?? 320;
    }

    return firstCard.offsetWidth + 24;
  };

  const moveCarousel = (direction: "left" | "right") => {
    const step = getNavigationStep();
    const nextPosition = clampPosition(
      position + (direction === "right" ? step : -step)
    );

    animate(x, -nextPosition, {
      type: "spring",
      stiffness: 260,
      damping: 34,
    });
    setPosition(nextPosition);
  };

  const canGoLeft = position > 8;
  const canGoRight = dragWidth > 8 && position < dragWidth - 8;

  return (
    <section className="business-section bg-white py-0">
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-blue-700/90 md:mb-16 md:text-5xl">
          Our Divisions
        </h2>

        <div className="relative overflow-hidden">
          <motion.div
            ref={carouselRef}
            drag="x"
            style={{ x }}
            dragConstraints={{ left: -dragWidth, right: 0 }}
            dragElastic={0.08}
            onDragEnd={() => setPosition(clampPosition(-x.get()))}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {loopData.map((item) => (
              <div
                key={item.slug}
                data-division-card
                className="group relative min-w-[80%] flex-shrink-0 overflow-hidden rounded-xl sm:min-w-[48%] lg:min-w-[32%]"
              >
                <div className="relative h-[360px] md:h-[420px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 transition-all duration-700 ease-out group-hover:bg-black/70" />
                </div>

                <div className="absolute inset-0 flex items-end p-6 text-white">
                  <div className="w-full transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-12">
                    <h3 className="text-xl font-semibold md:text-2xl">
                      {item.title}
                    </h3>

                    <div className="mt-4 translate-y-6 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm leading-relaxed">{item.desc}</p>

                      <Link
                        href={`/Divisions/${item.slug}`}
                        className="mt-4 inline-flex rounded-full bg-white px-5 py-2.5 text-sm text-black transition-colors duration-300 hover:bg-blue-50 hover:text-blue-700"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <AnimatePresence>
            {canGoLeft && (
              <motion.button
                type="button"
                aria-label="Previous divisions"
                onClick={() => moveCarousel("left")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg ring-1 ring-blue-100 transition-all duration-300 hover:bg-blue-600 hover:text-white md:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {canGoRight && (
              <motion.button
                type="button"
                aria-label="Next divisions"
                onClick={() => moveCarousel("right")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-blue-700 shadow-lg ring-1 ring-blue-100 transition-all duration-300 hover:bg-blue-600 hover:text-white md:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
