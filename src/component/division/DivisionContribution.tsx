// components/divisions/DivisionContributions.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DivisionData } from "@/types/division";

export default function DivisionContributions({ data }: { data: DivisionData }) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold text-blue-600 tracking-wider">OUR CONTRIBUTION</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900 mb-6">Making a Difference</h2>
          <div className="space-y-3">
            {data.contributions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mt-2" />
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-xl relative h-80"
        >
          <Image 
            src= {data.contributionImage} 
            alt="Healthcare Innovation" 
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}