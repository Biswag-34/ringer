"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock } from "lucide-react";
import EventHero from "@/component/events/EventHero";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <EventHero 
        title="Blogs"
        description="Coming soon - Insights, articles, and thought leadership"
        icon={BookOpen}
        count={0}
      />

      {/* Empty State */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-8">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            We&apos;re crafting insightful articles and thought leadership content 
            to share our expertise and perspectives on healthcare innovation.
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Launching March 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Stay Tuned</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}