// components/divisions/DivisionProduct.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { DivisionData } from "@/types/division";

export default function DivisionProduct({ data }: { data: DivisionData }) {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold text-blue-600 tracking-wider">THERAPEUTIC SOLUTIONS</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-900">Products & Formulations</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-gradient-to-br from-blue-50/50 to-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-400 overflow-hidden"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                {product.highlight && (
                  <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-700">
                    {product.highlight}
                  </span>
                )}
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">{product.composition}</p>
                <p className="mt-2 text-xs text-gray-500">{product.form}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}