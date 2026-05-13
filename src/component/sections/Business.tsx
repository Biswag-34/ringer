"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const data = [
  {
    title: "Gastroenterology",
    desc: "Advancing gut health through microbiome-driven science/",
    img: "/images/business1.png",
  },
  {
    title: "Otorhinolaryngology (ENT)",
    desc: "Precision care for ear, nose, and throat health.",
    img: "/images/business3.png",
  },
  {
    title: "Respiratory",
    desc: "Enhancing breathing and respiratory resilience.",
    img: "/images/business6.png",
  },
  {
    title: "Neuroscience",
    desc: "Decoding the brain to transform neurological care.",
    img: "/images/business4.png",
  },
  {
    title: "Orthopaedics – Spine",
    desc: "Restoring movement through advanced spine care.",
    img: "/images/business5.png",
  },
  {
    title: "Nutrition Science",
    desc: "Optimizing health through personalized nutritional strategies.",
    img: "/images/business7.png",
  },
  {
    title: "Cardio-Metabolic",
    desc: "Integrating heart health and metabolism for long-term wellness.",
    img: "/images/business2.png",
  },
];

const loopData = data;

export default function Business() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const offsetWidth = carouselRef.current.offsetWidth;

      setDragWidth(scrollWidth - offsetWidth);
    }
  }, []);

  return (
    <section className="business-section bg-white py-0">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">

        <h2 className="text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-blue-700/90">
          Our Divisions
        </h2>

        <div className="overflow-hidden">
          <motion.div
            ref={carouselRef}
            drag="x"
            dragConstraints={{ left: -dragWidth, right: 0 }}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {loopData.map((item, i) => (
              <div
                key={i}
                className="
                  min-w-[80%]
                  sm:min-w-[48%]
                  lg:min-w-[32%]
                  flex-shrink-0
                  group relative overflow-hidden rounded-xl
                "
              >
                <div className="relative h-[360px] md:h-[420px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/70 transition-all duration-700 ease-out" />
                </div>

                <div className="absolute inset-0 flex items-end p-6 text-white">
                  <div className="w-full transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-12">

                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.title}
                    </h3>

                    <div className="mt-4 opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0">

                      <p className="text-sm leading-relaxed">
                        {item.desc}
                      </p>

                      <button className="mt-4 px-5 py-2.5 bg-white text-black text-sm rounded-full">
                        Learn More
                      </button>

                    </div>

                  </div>
                </div>

              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}