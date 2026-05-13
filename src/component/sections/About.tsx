"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import Image from "next/image";

const headings = ["Who We Are", "Get to Know Us"];

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Typewriter state
  const [text, setText] = useState(headings[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = headings[index];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);

        if (next === current) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);

        if (next === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % headings.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  // GSAP Animations
  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const triggerEl = containerRef.current;
        if (!triggerEl) return;

        // Text slide
        gsap.from(".about-text", {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 75%",
          },
        });

        // Paragraphs stagger
        gsap.from(".about-para", {
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 75%",
          },
        });

        // Image reveal
        gsap.from(".about-img", {
          opacity: 0,
          scale: 0.96,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 75%",
          },
        });

        // Parallax effect
        gsap.to(".about-img", {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bg-white py-16 md:py-20"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 md:gap-20 items-center">

          {/* TEXT */}
          <div className="about-text max-w-[520px]">

            {/* HEADING */}
            <h2 className="text-[34px] md:text-[54px] font-semibold leading-[1.1] tracking-tight text-black">
              {text}
              <span className="ml-1 animate-pulse">|</span>
            </h2>

            {/* UNDERLINE */}
            <div className="mt-3 w-14 h-[3px] bg-black"></div>

            {/* PARAGRAPHS */}
            <p className="about-para mt-6 text-[16.5px] leading-[1.7] text-gray-700">
              Ringer Lifesciences (India) Pvt Ltd is committed to advancing healthcare through precision-driven
              research across hepatology, gastroenterology, neurology, pulmonology, and ENT.
            </p>

            <p className="about-para mt-4 text-[16.5px] leading-[1.7] text-gray-700">
              Our work focuses on interconnected biological systems such as the Gut–Brain Axis, Gut-Liver Axis and Gut–Airway Axis,
              enabling the development of therapies that improve overall health outcomes rather than isolated symptoms.
            </p>

            {/* BUTTON */}
            <button className="about-para mt-8 px-7 py-3 bg-black text-white rounded-full transition hover:bg-gray-900">
              Learn More
            </button>
          </div>

          {/* IMAGE */}
          <div className="relative h-[360px] sm:h-[420px] md:h-[460px] about-img">
            <Image
              src="/images/about.png"
              alt="About"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}