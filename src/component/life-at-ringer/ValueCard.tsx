"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  color?: string;
  variant?: "default" | "minimal" | "detailed";
  stats?: string;
  tags?: string[];
}

export default function ValueCard({ 
  icon: Icon, 
  title, 
  description, 
  index,
  color = "from-blue-500 to-cyan-500",
  variant = "default",
  stats,
  tags = []
}: ValueCardProps) {
  if (variant === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        whileHover={{ x: 5 }}
        className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-all duration-300 cursor-pointer"
      >
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    );
  }

  if (variant === "detailed") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
      >
        <div className={`bg-gradient-to-r ${color} p-6 relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
            <div className="absolute inset-0 bg-white" />
          </div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
              <Icon className="w-7 h-7 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              {title}
            </h3>
            
            {stats && (
              <div className="text-3xl font-bold text-white/90 mt-2">
                {stats}
              </div>
            )}
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // Default variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-400 relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        
        {stats && (
          <div className="text-sm font-semibold text-blue-600">
            {stats}
          </div>
        )}
        
        {/* Decorative element */}
        <div className={`w-10 h-1 bg-gradient-to-r ${color} rounded-full mt-4 group-hover:w-16 transition-all duration-300`} />
      </div>
    </motion.div>
  );
}