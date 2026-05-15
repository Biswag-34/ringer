"use client";

import { motion } from "framer-motion";
import { Newspaper, Calendar, Bell } from "lucide-react";
import EventHero from "@/component/events/EventHero";

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <EventHero 
        title="News"
        description="Coming soon - Latest updates and announcements"
        icon={Newspaper}
        count={0}
        showIcon={false}
        showCount={false}
      />

      {/* Empty State */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-8">
            <Newspaper className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            News & Announcements
          </h2>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            We&apos;re preparing to share our latest news, achievements, and 
            important announcements. Check back soon for updates!
          </p>
          
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Company updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span>Stay tuned</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
