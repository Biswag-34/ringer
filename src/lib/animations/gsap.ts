// /lib/animations/gsap.ts

"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Prevent multiple registrations (important in Next.js)
if (typeof window !== "undefined" && gsap) {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };