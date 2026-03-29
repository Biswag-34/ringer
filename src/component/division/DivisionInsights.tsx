// components/divisions/DivisionInsight.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DivisionData } from "@/types/division";

export default function DivisionInsight({ data }: { data: DivisionData }) {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold text-blue-600 tracking-wider">KEY INSIGHTS</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">Scientific Breakthroughs</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.keyInsights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-400 overflow-hidden"
            >
              <div className="relative h-32 w-full overflow-hidden">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}