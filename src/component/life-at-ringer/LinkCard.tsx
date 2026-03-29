"use client";

import { motion } from "framer-motion";
import { ExternalLink, LucideIcon } from "lucide-react";

interface Link {
  name: string;
  url: string;
  description: string;
  icon: LucideIcon;
}

interface LinkCardProps {
  link: Link;
  index: number;
}

export default function LinkCard({ link, index }: LinkCardProps) {
  const Icon = link.icon;
  
  return (
    <motion.a
      href={link.url}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ x: 5 }}
      className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 group cursor-pointer"
    >
      <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {link.name}
          </h3>
          <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-500" />
        </div>
        <p className="text-sm text-gray-600 mt-1">{link.description}</p>
      </div>
    </motion.a>
  );
}