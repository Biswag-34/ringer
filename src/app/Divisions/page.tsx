// app/Divisions/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getAllDivisions } from "@/lib/utils/getDivision";
import DivisionGrid from "@/component/division/DivisionGrid";

export default function DivisionsPage() {
  const divisions = getAllDivisions();

  const featured = divisions[0];
  const rest = divisions.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-900 overflow-hidden">
      
      {/* ================= HERO ================= */}
      <section className="px-6 pt-28 pb-16 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-tight bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
        >
          Our <span className="text-gray-500">Medical</span> Divisions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 max-w-2xl text-gray-600 text-lg"
        >
          Precision-driven therapeutic segments designed to address modern
          lifestyle diseases through science, innovation, and advanced formulations.
        </motion.p>
      </section>

      <DivisionGrid divisions={divisions} />

      {/* ================= FEATURED ================= */}
      {featured && (
        <section className="px-6 pb-20 max-w-7xl mx-auto">
          <Link href={`/divisions/${featured.slug}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative group rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 via-white to-cyan-500/10 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                style={{ backgroundImage: "url('/images/health1.png')" }}
              />
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-12">
                <div className="max-w-3xl">
                  <span className="text-xs font-semibold text-blue-600 tracking-wider">FEATURED DIVISION</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
                    {featured.title}
                  </h2>

                  <p className="mt-3 text-gray-600">
                    {featured.tagline}
                  </p>

                  {/* Accent line */}
                  <div
                    className="mt-4 h-[2px] w-12 group-hover:w-24 transition-all duration-500 bg-gradient-to-r from-blue-500 to-cyan-500"
                  />

                  <p className="mt-6 text-sm text-gray-500 group-hover:text-blue-600 transition-colors duration-300">
                    Explore Division →
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        </section>
      )}

      {/* ================= GRID ================= */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((d, i) => (
            <Link key={d.slug} href={`/Divisions/${d.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className={`
                  group relative rounded-xl bg-white shadow-md hover:shadow-xl 
                  cursor-pointer overflow-hidden transition-all duration-400
                  ${i % 3 === 0 ? "md:col-span-2" : ""}
                `}
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ backgroundImage: "url('/images/health1.png')" }}
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10 p-6">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-blue-600">Division</span>
                      <span className="text-xs text-gray-500">{d.products?.length || 0} Products</span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {d.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {d.tagline}
                    </p>

                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                      <div className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-16 transition-all duration-400" />
                      <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="text-center pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm tracking-wide"
        >
          Driving innovation across therapeutic domains
        </motion.p>
      </section>
    </div>
  );
}