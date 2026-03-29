// components/divisions/DivisionHero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DivisionData } from "@/types/division";

export default function DivisionHero({ data }: { data: DivisionData }) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src={data.heroImage} 
          alt="Background" 
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
      
      {/* Animated Blobs */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/20 blur-[80px] -top-20 -right-20 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400/20 blur-[80px] -bottom-20 -left-20 animate-pulse delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs font-semibold text-blue-600 tracking-wider"
        >
          MEDICAL DIVISION
        </motion.span>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {data.title}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{data.tagline}</p>
      </motion.div>
    </section>
  );
}