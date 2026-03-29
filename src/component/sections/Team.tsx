"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations/gsap";

const team = [
  {
    name: "Mukund KS",
    role: "AVP & Head IT",
    quote:
      "As an organization, we are into the art of redefining patient care outcomes through design thinking, digital dexterity and technology.",
    img: "/images/team1.png",
  },
  {
    name: "Prince Raheja",
    role: "Business Executive",
    quote:
      "The expression of love from our patients makes me feel happy.",
    img: "/images/team1.png",
  },
  {
    name: "Shailesh Brahmbhatt",
    role: "Manager",
    quote:
      "As part of Distribution at Eris, I contribute towards our Patient-First ideology.",
    img: "/images/team1.png",
  },
  {
    name: "Extra Member",
    role: "Team Lead",
    quote:
      "We continuously innovate to improve patient experience.",
    img: "/images/team1.png",
  },
];

export default function OurTeam() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 360;
  const GAP = 40;
  const VISIBLE = 3;
  const maxIndex = team.length - VISIBLE;

  const slideTo = (i: number) => {
    const clamped = Math.max(0, Math.min(i, maxIndex));
    setIndex(clamped);

    gsap.to(trackRef.current, {
      x: -(clamped * (CARD_WIDTH + GAP)),
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <section className="py-24 md:py-32 px-4 bg-gray-100">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 tracking-wide">
          EMPLOYEE CORNER
        </h2>
        <div className="w-10 h-[2px] bg-gray-400 mx-auto mt-4" />
      </div>

      {/* CAROUSEL */}
      <div className="max-w-[1150px] mx-auto overflow-visible">

        {/* Only this clips horizontal scroll */}
        <div className="overflow-visible">
          
          <div
            ref={trackRef}
            className="flex"
            style={{ gap: `${GAP}px` }}
          >
            {team.map((member, i) => (
              <div
                key={i}
                className="flex-shrink-0"
                style={{ width: CARD_WIDTH }}
              >
                <div className="relative">

                  {/* ✅ AVATAR (FIXED — NO CROPPING) */}
                  <div className="absolute left-1/2 -top-10 -translate-x-1/2 z-20">
                    <div className="w-20 h-20 rounded-full bg-[#f5efe6] shadow-md flex items-center justify-center">
                      
                      <Image
                        src={member.img}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />

                    </div>
                  </div>

                  {/* CARD */}
                  <div className="bg-gray-100 rounded-2xl shadow-md px-8 pt-20 pb-6 text-center">

                    {/* QUOTE */}
                    <p className="text-gray-600 text-[15px] leading-7 max-w-[260px] mx-auto">
                      “{member.quote}”
                    </p>

                    {/* DIVIDER */}
                    <div className="w-full h-[1px] bg-gray-300 my-6" />

                    {/* NAME */}
                    <h3 className="text-sm font-semibold tracking-[0.15em] text-gray-900">
                      {member.name.toUpperCase()}
                    </h3>

                    {/* ROLE */}
                    <p className="text-[11px] text-gray-500 tracking-[0.25em] mt-2">
                      {member.role.toUpperCase()}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => slideTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-8 h-2 bg-blue-600"
                : "w-3 h-2 bg-gray-400 opacity-50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}