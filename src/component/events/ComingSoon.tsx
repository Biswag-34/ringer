"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Bell, CalendarDays } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ComingSoon({
  title,
  description,
  icon: Icon,
}: ComingSoonProps) {
  return (
    <section className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-100/50"
      >
        <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-600 p-10 text-white">
            <div className="absolute inset-x-8 top-8 h-px bg-white/25" />
            <div className="absolute inset-x-8 bottom-8 h-px bg-white/25" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white/15 shadow-2xl backdrop-blur"
            >
              <Icon className="h-14 w-14" />
            </motion.div>
          </div>

          <div className="p-8 md:p-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              <CalendarDays className="h-4 w-4" />
              Coming Soon
            </span>

            <h2 className="mt-6 text-3xl font-bold text-gray-950 md:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              {description}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-gray-50 px-5 py-4 text-sm font-medium text-gray-600">
              <Bell className="h-5 w-5 text-blue-600" />
              Updates will be published here soon.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
