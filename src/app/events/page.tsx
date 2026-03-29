"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Users, 
  Video, 
  BookOpen, 
  Newspaper, 
  Mic2 
} from "lucide-react";

const eventCategories = [
  {
    title: "Cultural Events",
    description: "Office culture, team building, and celebration moments",
    icon: Users,
    href: "/Events/cultural",
    color: "from-purple-500 to-pink-500",
    count: 4,
  },
  {
    title: "Scientific Webinars",
    description: "Expert sessions on medical advancements and research",
    icon: Video,
    href: "/Events/webinars",
    color: "from-blue-500 to-cyan-500",
    count: 6,
  },
  {
    title: "Blogs",
    description: "Insights, articles, and thought leadership",
    icon: BookOpen,
    href: "/Events/blogs",
    color: "from-green-500 to-emerald-500",
    count: 0,
    comingSoon: true,
  },
  {
    title: "News",
    description: "Latest updates and announcements",
    icon: Newspaper,
    href: "/Events/news",
    color: "from-orange-500 to-red-500",
    count: 0,
    comingSoon: true,
  },
  {
    title: "Doctor's Camp",
    description: "Expert talks and educational sessions",
    icon: Mic2,
    href: "/Events/doctors-camp",
    color: "from-teal-500 to-cyan-500",
    count: 3,
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl px-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-semibold text-blue-600 tracking-wider"
          >
            STAY CONNECTED
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Events & Updates
          </h1>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our latest events, webinars, and educational content designed
            to keep you informed and inspired.
          </p>
        </motion.div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventCategories.map((category, index) => (
            <Link key={category.title} href={category.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-500">
                        {category.count} {category.count === 1 ? 'Event' : 'Events'}
                      </span>
                    </div>
                    
                    {category.comingSoon ? (
                      <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300">
                        Explore →
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold text-blue-600 tracking-wider">
              HIGHLIGHTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
              Featured Events
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Don&apos;t miss out on our most anticipated events and sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Annual Medical Conference 2025",
                date: "March 15-17, 2025",
                type: "Webinar",
                image: "/images/health1.png",
              },
              {
                title: "Team Building Retreat",
                date: "February 28, 2025",
                type: "Cultural",
                image: "/images/health1.png",
              },
              {
                title: "Expert Talk: Gut Microbiome",
                date: "March 5, 2025",
                type: "Doctor's Camp",
                image: "/images/health1.png",
              },
            ].map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-400 overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-blue-600">
                    {event.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}