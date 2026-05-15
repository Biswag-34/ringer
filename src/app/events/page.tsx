"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Mic2,
  Newspaper,
  Users,
  Video,
} from "lucide-react";

const eventCategories = [
  {
    title: "Cultural Events",
    description: "Office culture, team building, and celebration moments",
    icon: Users,
    href: "/events/cultural",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Scientific Webinars",
    description: "Expert sessions on medical advancements and research",
    icon: Video,
    href: "/events/webinars",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Blogs",
    description: "Insights, articles, and thought leadership",
    icon: BookOpen,
    href: "/events/blogs",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "News",
    description: "Latest updates and announcements",
    icon: Newspaper,
    href: "/events/news",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Doctor's Area",
    description: "Expert talks and educational sessions",
    icon: Mic2,
    href: "/events/Doctors-area",
    color: "from-teal-500 to-cyan-500",
  },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pb-16 pt-28">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-semibold tracking-wider text-blue-600"
          >
            STAY CONNECTED
          </motion.span>
          <h1 className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Events & Updates
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Discover upcoming Ringer updates, webinars, culture stories, and
            educational content as they become available.
          </p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {eventCategories.map((category, index) => (
            <Link key={category.title} href={category.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                <div className="relative p-8">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <category.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-2 text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="mb-4 leading-relaxed text-gray-600">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-500">Coming soon</span>
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
