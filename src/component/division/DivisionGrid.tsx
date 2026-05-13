// components/divisions/DivisionGrid.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Heart, Wind, Activity, Ear, Leaf, LucideIcon } from "lucide-react";
import { DivisionData } from "@/types/division";
import Image from "next/image";

interface EnrichedDivision extends DivisionData {
  productCount: number;
  insightCount: number;
  topHighlight: string;
}

const iconMap: Record<string, LucideIcon> = {
  neuroscience: Brain,
  "cardio-metabolic": Heart,
  gastroenterology: Activity,
  respiratory: Wind,
  nutrition: Leaf,
  "orthopaedics-spine": Activity,
  ent: Ear,
};

export default function DivisionGrid({ divisions }: { divisions: DivisionData[] }) {
  const enriched: EnrichedDivision[] = divisions.map((d) => ({
    ...d,
    productCount: d.products?.length || 0,
    insightCount: d.keyInsights?.length || 0,
    topHighlight: d.products?.find((p) => p.highlight)?.highlight || d.keyInsights?.[0]?.title || "—",
  }));

  return (
    <section className="px-6 pb-20 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {enriched.map((d, index) => {
          const Icon = iconMap[d.slug] || Activity;

          return (
            <Link key={d.slug} href={`/Divisions/${d.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="group relative bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer overflow-hidden transition-all duration-400"
              >
                {/* Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 overflow-hidden">
                  <Image 
                    src="/images/health.png" 
                    alt={d.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                <div className="relative z-10 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Icon size={18} className="text-blue-500" />
                      <span className="text-xs font-medium text-blue-600">Division</span>
                    </div>
                    <span className="text-xs text-gray-500">{d.productCount} Products</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {d.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{d.tagline}</p>

                  {/* Focus Area */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-1">Key Focus</p>
                    <p className="text-sm text-gray-800 font-medium line-clamp-1">{d.topHighlight}</p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="h-[2px] w-8 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-16 transition-all duration-400" />
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{d.insightCount} Insights</span>
                      <span className="group-hover:text-blue-600 transition-colors">→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
