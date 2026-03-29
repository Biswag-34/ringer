// components/divisions/DivisionCTA.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DivisionData } from "@/types/division";

export default function DivisionCTA({ data }: { data: DivisionData }) {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/divisions/division-bg.png" 
          alt="Background" 
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Explore More in {data.title}
        </h2>
        <p className="mt-3 text-blue-100 max-w-md mx-auto">
          Discover how our innovative solutions can transform patient outcomes
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 px-8 py-3 rounded-full bg-white text-blue-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Contact Our Experts
        </motion.button>
      </motion.div>
    </section>
  );
}