// components/divisions/DivisionIntro.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DivisionData } from "@/types/division";

export default function DivisionIntro({ data }: { data: DivisionData }) {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-2xl overflow-hidden shadow-xl relative h-64"
        >
          <Image 
            src={data.introImage} 
            alt="Healthcare" 
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <span className="text-xs font-semibold text-blue-600 tracking-wider">INTRODUCTION</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">Scientific Excellence</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{data.intro}</p>
        </motion.div>
      </div>
    </section>
  );
}