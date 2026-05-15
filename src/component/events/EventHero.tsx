"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

interface EventHeroProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count: number;
  bgImage?: string;
  showIcon?: boolean;
  showCount?: boolean;
}

export default function EventHero({ 
  title, 
  description, 
  icon: Icon, 
  count,
  bgImage = "/images/health1.png",
  showIcon = true,
  showCount = true,
}: EventHeroProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
          sizes="100vw"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/10 blur-[100px] -top-20 -right-20 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-cyan-400/10 blur-[100px] -bottom-20 -left-20 animate-pulse delay-1000" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl px-6"
      >
        {showIcon && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
        
        {showCount && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100"
          >
            <span className="text-sm text-gray-600">Total Events:</span>
            <span className="text-sm font-semibold text-blue-600">{count}</span>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
